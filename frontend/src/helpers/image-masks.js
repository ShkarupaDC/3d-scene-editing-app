const getStem = (name) => name.slice(0, name.lastIndexOf('.'));

const getFilesStems = (files) => files.map((file) => getStem(file.name));

const isImageFile = (file) => file.type.startsWith('image/');

export const compareFileName = (first, second) =>
  first.name < second.name ? first : second;

export const groupFiles = (files) =>
  files.reduce(
    (groups, file) => {
      groups[+isImageFile(file)].push(file);
      return groups;
    },
    [[], []],
  );

const symmetricDifference = (first, second) => {
  const difference = new Set(first);
  for (const element of second) {
    if (difference.has(element)) {
      difference.delete(element);
    } else {
      difference.add(element);
    }
  }
  return difference;
};

export const matchImageToCamera = (imageFiles, cameraFiles) =>
  Array.from(
    symmetricDifference(getFilesStems(imageFiles), getFilesStems(cameraFiles)),
  );

export const readImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => resolve(image);
      image.onerror = reject;
    };
    reader.readAsDataURL(file);
  });
};

export const readJSON = async (file) => JSON.parse(await file.text());

export class MaskTool {
  #context;
  #maskContext;
  #maskIdx;
  #maskImages = [];
  #drawing;
  #position;
  #mouseEvent;
  #lineWidth;
  #color;
  #defaults;
  #cursor;

  constructor(canvas, cursor, lineWidth) {
    this.#context = canvas.getContext('2d', { willReadFrequently: true });
    const maskCanvas = document.createElement('canvas');
    this.#maskContext = maskCanvas.getContext('2d', {
      willReadFrequently: true,
    });
    this.#cursor = cursor;
    this.#color = '#fff';
    this.#lineWidth = lineWidth;
    this.#defaults = { color: this.#color, lineWidth: this.#lineWidth };
    this.#addEventListeners();
  }

  #addEventListeners() {
    window.addEventListener('mousemove', this.#catchMouseEvent.bind(this));
    window.addEventListener('keydown', this.#onKeydown.bind(this));
    this.#canvas.addEventListener('mousedown', this.#startDrawing.bind(this));
    this.#canvas.addEventListener('mousemove', this.#draw.bind(this));
    this.#canvas.addEventListener('mouseout', this.#stopDrawing.bind(this));
    this.#canvas.addEventListener('mouseup', this.#stopDrawing.bind(this));

    // cursor
    this.#canvas.addEventListener('mousemove', this.#moveCursor.bind(this));
    this.#canvas.addEventListener('mouseenter', this.#showCursor.bind(this));
    this.#canvas.addEventListener('mouseout', this.#hideCursor.bind(this));
  }

  #catchMouseEvent(event) {
    this.#mouseEvent = event;
  }

  #onKeydown(event) {
    if (!this.#mouseEvent || this.#mouseEvent.target !== this.#canvas) {
      return;
    }
    switch (event.code) {
      case 'KeyI':
        this.#invertColor();
        break;
      case 'KeyU':
        this.#lineWidth += 1;
        this.#changeCursorSize();
        break;
      case 'KeyD':
        this.#lineWidth = Math.max(this.#lineWidth - 1, 0);
        this.#changeCursorSize();
        break;
    }
  }

  #startDrawing(event) {
    if (this.#drawing) {
      return;
    }
    this.#drawing = true;
    this.#position = this.#getMousePosition(event);
  }

  #draw(event) {
    if (!this.#drawing) {
      return;
    }
    this.#context.beginPath();
    this.#context.strokeStyle = this.#color;
    this.#context.lineCap = 'round';
    this.#context.lineWidth = this.#lineWidth;
    this.#context.moveTo(this.#position.x, this.#position.y);
    const nextPosition = this.#getMousePosition(event);
    this.#context.lineTo(nextPosition.x, nextPosition.y);
    this.#context.stroke();
    this.#position = nextPosition;
  }

  #stopDrawing(event) {
    if (!this.#drawing) {
      return;
    }
    this.#drawing = false;
    this.#position = null;
  }

  #invertColor() {
    this.#color = this.#color === '#000' ? '#fff' : '#000';
  }

  #getMousePosition(event) {
    const rect = this.#canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  #setCanvasImage(context, maskImage = undefined) {
    if (typeof maskImage === 'undefined') {
      maskImage = this.#maskImages[this.#maskIdx];
    }
    context.canvas.height = maskImage.height;
    context.canvas.width = maskImage.width;
    context.putImageData(maskImage, 0, 0);
  }

  #getCanvasImage(context, store = false) {
    const maskImage = context.getImageData(
      0,
      0,
      context.canvas.width,
      context.canvas.height,
    );
    if (store) {
      this.#maskImages[this.#maskIdx] = maskImage;
    }
    return maskImage;
  }

  #maskImageToBlob(maskImage) {
    this.#setCanvasImage(this.#maskContext, maskImage);
    return new Promise((resolve) =>
      this.#maskCanvas.toBlob((blob) => {
        this.#clearCanvas(this.#maskContext);
        resolve(blob);
      }),
    );
  }

  #getEmptyMask(width, height) {
    this.#maskCanvas.height = height;
    this.#maskCanvas.width = width;
    this.#maskContext.fillRect(0, 0, width, height);
    const maskImage = this.#maskContext.getImageData(0, 0, width, height);
    this.#clearCanvas(this.#maskContext);
    return maskImage;
  }

  #clearCanvas(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  #changeCursorSize() {
    this.#cursor.style.width = this.#cursor.style.height = `${
      this.#lineWidth
    }px`;
  }

  #moveCursor(event) {
    const cursorRadius = this.#lineWidth / 2;
    this.#cursor.style.left = `${event.clientX - cursorRadius}px`;
    this.#cursor.style.top = `${event.clientY - cursorRadius}px`;
  }

  #showCursor(event) {
    this.#changeCursorSize();
    this.#cursor.classList.add('block');
  }

  #hideCursor(event) {
    this.#cursor.classList.remove('block');
  }

  get #canvas() {
    return this.#context.canvas;
  }

  get #maskCanvas() {
    return this.#maskContext.canvas;
  }

  addMask(width, height) {
    const maskImage = this.#getEmptyMask(width, height);
    return this.#maskImages.push(maskImage) - 1;
  }

  setMask(maskIdx) {
    if (this.#maskIdx === maskIdx) {
      return;
    }
    if (this.#maskIdx != null) {
      this.#getCanvasImage(this.#context, true);
    }
    this.#setCanvasImage(this.#context, this.#maskImages[maskIdx]);
    this.#maskIdx = maskIdx;
  }

  reset() {
    this.#color = this.#defaults.color;
    this.#lineWidth = this.#defaults.lineWidth;
    this.#clearCanvas(this.#context);
    this.#maskImages.splice(0, this.#maskImages.length);
    this.#maskIdx = null;
  }

  async getMasks() {
    this.#getCanvasImage(this.#context, true);
    const masks = [];
    for (const maskImage of this.#maskImages) {
      masks.push(await this.#maskImageToBlob(maskImage));
    }
    return masks;
    // return Promise.all(this.#maskImages.map(this.#maskImageToBlob.bind(this)));
  }
}

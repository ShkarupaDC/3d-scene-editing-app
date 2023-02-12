export const getFilesUrls = (files) => {
  if (files) {
    return Object.keys(files).map((index) => URL.createObjectURL(files[index]));
  }
};

export const getFilesUrls = (files) => {
  if (files) {
    return Object.values(files).map((file) => URL.createObjectURL(file));
  }
  return [];
};

export const validateEmail = (value) =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const readFileAsArrayBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

class indexedDBFiles {
  constructor(name) {
    this.open = indexedDB.open("Database", 1);
    this.db = this.open.result;
    this.tx = this.db.transaction(name, "readwrite");
    this.store = this.tx.objectStore(name);
  }

  getFiles(name) {
    const res = this.store.get(name);
    res.onsuccess = () => res.result;
  }

  setFiles(files) {
    open.onupgradeneeded = () => {
      this.db.createObjectStore("FileStore", { keyPath: "id" });
    };

    open.onsuccess = () => {
      this.store.put(files);
      this.tx.oncomplete = function () {
        this.db.close();
      };
    };
  }
}

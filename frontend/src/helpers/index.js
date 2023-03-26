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

export const updateValueLS = (name, defaultValue) => {
  const value = localStorage.getItem(name);
  if (value) {
    return value;
  }
  return defaultValue;
};

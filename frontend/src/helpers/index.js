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

export const validateGoogleDiskLink = (value) =>
  value.match("https://drive.google.com/drive/folders/*");

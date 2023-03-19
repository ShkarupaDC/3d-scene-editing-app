export const getFilesUrls = (files) => {
  if (files) {
    return Object.values(files).map((file) => URL.createObjectURL(file));
  }
  return [];
};

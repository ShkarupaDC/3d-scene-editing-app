export const postTrain = async (email, files, useMock) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve("3123ac123bd12cc"), 1000);
    });
  }
  const formData = new FormData();
  for (const file of files) {
    formData.append(`files`, file, file.name);
  }
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/scene-representation`,
    {
      method: "POST",
      body: { files: formData, email },
    }
  );
  return res.json();
};

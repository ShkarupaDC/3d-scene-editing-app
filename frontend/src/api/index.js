export const postTrain = async (email, googleDiskLink, useMock) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve("3123ac123bd12cc"), 1000);
    });
  }
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/scene-representation`,
    {
      method: "POST",
      body: { googleDiskLink, email },
    }
  );
  return res.json();
};

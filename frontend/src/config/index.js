import Dexie from "dexie";

export const config = {
  minFiles: 10,
  useMock: true,
};

// indexedDB config
export const db = new Dexie("filesDataBase");
db.version(2).stores({
  images: "++id, image",
});

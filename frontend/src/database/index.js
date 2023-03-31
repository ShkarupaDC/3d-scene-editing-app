import Dexie from "dexie";

export const database = { trainImages: new Dexie("train_images") };

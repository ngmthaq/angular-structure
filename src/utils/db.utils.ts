import * as localforage from "localforage";

export async function setDBItem<T extends unknown>(key: string, value: T): Promise<boolean> {
  try {
    await localforage.setItem<T>(key, value);
    console.log(
      `%c >>> IndexedDB: set item "${key}" with value:`,
      "color: black; background: whitesmoke",
      value,
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function removeDBItem(key: string): Promise<boolean> {
  try {
    await localforage.removeItem(key);
    console.log(`%c >>> IndexedDB: remove item "${key}"`, "color: black; background: whitesmoke");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getDBItem<T>(key: string): Promise<T | null> {
  try {
    const value = await localforage.getItem<T>(key);
    if (!value) {
      console.log(
        `%c >>> IndexedDB: get item "${key}" value:`,
        "color: black; background: whitesmoke",
        null,
      );
      return null;
    }
    console.log(
      `%c >>> IndexedDB: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      value,
    );
    return value;
  } catch (error) {
    console.error(error);
    console.log(
      `%c >>> IndexedDB: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      null,
    );
    return null;
  }
}

export async function clearDBItems(): Promise<boolean> {
  try {
    await localforage.clear();
    console.log(`%c >>> IndexedDB: clear all items`, "color: black; background: whitesmoke");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

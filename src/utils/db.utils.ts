import * as localforage from "localforage";

export async function setDBItem<T extends unknown>(key: string, value: T): Promise<boolean> {
  try {
    await localforage.setItem<T>(key, value);
    console.log(`IndexedDB: set item "${key}" with value:`, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function removeDBItem(key: string): Promise<boolean> {
  try {
    await localforage.removeItem(key);
    console.log(`IndexedDB: remove item "${key}"`);
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
      console.log(`IndexedDB: get item "${key}" value:`, null);
      return null;
    }
    console.log(`IndexedDB: get item "${key}" value:`, value);
    return value;
  } catch (error) {
    console.error(error);
    console.log(`IndexedDB: get item "${key}" value:`, null);
    return null;
  }
}

export async function clearDBItems(): Promise<boolean> {
  try {
    await localforage.clear();
    console.log(`IndexedDB: clear all items`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

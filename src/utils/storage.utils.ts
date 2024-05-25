export function setStorageItem(key: string, value: any): boolean {
  try {
    const data = { value };
    window.localStorage.setItem(key, JSON.stringify(data));
    console.log(
      `%c >>> LocalStorage: set item "${key}" with value:`,
      "color: black; background: whitesmoke",
      value,
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function setStorageItemTemporary(key: string, value: any): boolean {
  try {
    const data = { value };
    window.sessionStorage.setItem(key, JSON.stringify(data));
    console.log(
      `%c >>> SessionStorage: set temporary item "${key}" with value:`,
      "color: black; background: whitesmoke",
      value,
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function removeStorageItem(key: string): boolean {
  try {
    window.sessionStorage.removeItem(key);
    window.localStorage.removeItem(key);
    console.log(
      `%c >>> LocalStorage: remove item "${key}"`,
      "color: black; background: whitesmoke",
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function getStorageItem<T>(key: string): T | null {
  try {
    let json = window.sessionStorage.getItem(key);
    if (!json) json = window.localStorage.getItem(key);
    if (!json) {
      console.log(
        `%c >>> LocalStorage: get item "${key}" value:`,
        "color: black; background: whitesmoke",
        null,
      );
      return null;
    }
    const data = JSON.parse(json) as any;
    console.log(
      `%c >>> LocalStorage: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      data.value,
    );
    return data.value as T;
  } catch (error) {
    console.error(error);
    console.log(
      `%c >>> LocalStorage: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      null,
    );
    return null;
  }
}

export function clearStorageItems(): boolean {
  try {
    window.sessionStorage.clear();
    window.localStorage.clear();
    console.log(`%c >>> LocalStorage: clear all items`, "color: black; background: whitesmoke");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

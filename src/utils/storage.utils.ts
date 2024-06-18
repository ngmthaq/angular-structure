export function setStorageItem(key: string, value: any): boolean {
  try {
    const data = { value };
    window.localStorage.setItem(key, JSON.stringify(data));
    console.log(`LocalStorage: set item "${key}" with value:`, value);
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
    console.log(`SessionStorage: set temporary item "${key}" with value:`, value);
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
    console.log(`LocalStorage: remove item "${key}"`);
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
      console.log(`LocalStorage: get item "${key}" value:`, null);
      return null;
    }
    const data = JSON.parse(json) as any;
    console.log(`LocalStorage: get item "${key}" value:`, data.value);
    return data.value as T;
  } catch (error) {
    console.error(error);
    console.log(`LocalStorage: get item "${key}" value:`, null);
    return null;
  }
}

export function clearStorageItems(): boolean {
  try {
    window.sessionStorage.clear();
    window.localStorage.clear();
    console.log(`LocalStorage: clear all items`);
    console.log(`SessionStorage: clear all items`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

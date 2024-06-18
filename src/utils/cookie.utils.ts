import CookieJs, { CookieAttributes } from "js-cookie";

export function setCookieItem(key: string, value: any, options?: CookieAttributes): boolean {
  try {
    const data = { value };
    CookieJs.set(key, JSON.stringify(data), options);
    console.log(`>>> CookieJs: set item "${key}" with value:`, value);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function removeCookieItem(key: string, options?: CookieAttributes): boolean {
  try {
    CookieJs.remove(key, options);
    console.log(`>>> CookieJs: remove item "${key}"`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function getCookieItem<T>(key: string): T | null {
  try {
    const json = CookieJs.get(key);
    if (!json) {
      console.log(`>>> CookieJs: get item "${key}" value:`, null);
      return null;
    }
    const data = JSON.parse(json) as any;
    console.log(`>>> CookieJs: get item "${key}" value:`, data.value);
    return data.value as T;
  } catch (error) {
    console.error(error);
    console.log(`>>> CookieJs: get item "${key}" value:`, null);
    return null;
  }
}

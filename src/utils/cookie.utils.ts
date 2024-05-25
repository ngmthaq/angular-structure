import CookieJs, { CookieAttributes } from "js-cookie";

export function setCookieItem(key: string, value: any, options?: CookieAttributes): boolean {
  try {
    const data = { value };
    CookieJs.set(key, JSON.stringify(data), options);
    console.log(
      `%c >>> CookieJs: set item "${key}" with value:`,
      "color: black; background: whitesmoke",
      value,
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function removeCookieItem(key: string, options?: CookieAttributes): boolean {
  try {
    CookieJs.remove(key, options);
    console.log(`%c >>> CookieJs: remove item "${key}"`, "color: black; background: whitesmoke");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function getCookieItem<T>(key: string): T | null {
  try {
    let json = CookieJs.get(key);
    if (!json) {
      console.log(
        `%c >>> CookieJs: get item "${key}" value:`,
        "color: black; background: whitesmoke",
        null,
      );
      return null;
    }
    const data = JSON.parse(json) as any;
    console.log(
      `%c >>> CookieJs: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      data.value,
    );
    return data.value as T;
  } catch (error) {
    console.error(error);
    console.log(
      `%c >>> CookieJs: get item "${key}" value:`,
      "color: black; background: whitesmoke",
      null,
    );
    return null;
  }
}

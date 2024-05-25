export function isObj(data: any): data is object {
  return data && typeof data === "object" && !Array.isArray(data);
}

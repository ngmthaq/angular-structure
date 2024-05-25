export function generateArray(length: number): number[] {
  const array = [];
  for (let index = 0; index < length; index++) array.push(index);
  return array;
}

export function isArr<T extends unknown>(data: any): data is T[] {
  return data && typeof data === "object" && Array.isArray(data);
}

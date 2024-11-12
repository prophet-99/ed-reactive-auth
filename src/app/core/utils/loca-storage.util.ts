export const storeInLocalStorage = <T>(obj: T, storageName: string): void => {
  localStorage.setItem(storageName, JSON.stringify(obj));
};

export const existInLocalStorage = (storageName: string): boolean => {
  try {
    const rawObj = localStorage.getItem(storageName);
    if (rawObj) return true;
    return false;
  } catch (_) {
    return false;
  }
};

export const getFromLocalStorage = <T>(storageName: string): T => {
  const rawObj = localStorage.getItem(storageName) as string;
  const parsedObj = JSON.parse(rawObj) as T;
  return parsedObj;
};

export const removeFromLocalStorage = (storageName: string) => {
  localStorage.removeItem(storageName);
};

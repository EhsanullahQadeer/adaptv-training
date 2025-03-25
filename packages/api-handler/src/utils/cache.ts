const cache = new Map<string, { data: any; expiry: number }>();

export const getCachedResponse = (key: string): any | null => {
  const cached = cache.get(key);
  if (cached && cached.expiry > Date.now()) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

export const setCachedResponse = (key: string, data: any, ttl: number): void => {
  cache.set(key, { data, expiry: Date.now() + ttl });
};

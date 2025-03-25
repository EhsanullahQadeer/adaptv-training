const rateLimitMap = new Map<string, number>();

export const isRateLimited = (key: string): boolean => {
  const retryAfter = rateLimitMap.get(key);
  return retryAfter && retryAfter > Date.now();
};

export const setRateLimit = (key: string, retryAfter: number): void => {
  rateLimitMap.set(key, Date.now() + retryAfter * 1000);
};

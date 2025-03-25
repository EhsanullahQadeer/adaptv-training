export const isOnline = (): boolean => {
  if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
    // Client-side: Use navigator.onLine
    return navigator.onLine;
  }
  // Server-side: Assume always online (or implement server-specific checks if needed)
  return true;
};

const offlineQueue: (() => Promise<void>)[] = [];

export const addToOfflineQueue = (retry: () => Promise<void>): void => {
  offlineQueue.push(retry);
};

export const processOfflineQueue = async (): Promise<void> => {
  while (offlineQueue.length > 0) {
    const retry = offlineQueue.shift();
    if (retry) await retry();
  }
};

export const setupOfflineListener = (): void => {
  if (typeof window !== 'undefined') { // Ensure this runs only in client-side environments
    window.addEventListener('online', processOfflineQueue);
  }
};

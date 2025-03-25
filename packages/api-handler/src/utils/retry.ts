import { AxiosInstance, AxiosResponse } from 'axios';

export const retryRequest = async (
  instance: AxiosInstance,
  error: any,
  retryCount: number,
  retryDelay: number
): Promise<AxiosResponse> => {
  if (retryCount <= 0) throw error;
  await new Promise((resolve) => setTimeout(resolve, retryDelay));
  return instance.request(error.config).catch((err) =>
    retryRequest(instance, err, retryCount - 1, retryDelay * 2) // Exponential backoff
  );
};

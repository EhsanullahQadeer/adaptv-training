import { AxiosRequestConfig, AxiosResponse } from 'axios';

const pendingRequests = new Map<string, Promise<AxiosResponse>>();

export const getRequestKey = (request: AxiosRequestConfig): string =>
  `${request.method}-${request.url}-${JSON.stringify(request.params)}-${JSON.stringify(request.data)}`;

export const handleRequestDeduplication = (
  requestKey: string,
  promise: Promise<AxiosResponse>
): void => {
  pendingRequests.set(requestKey, promise);
  promise.finally(() => pendingRequests.delete(requestKey)); // Clean up after request completes
};

export const getPendingRequest = (requestKey: string): Promise<AxiosResponse> | undefined => {
  return pendingRequests.get(requestKey);
};

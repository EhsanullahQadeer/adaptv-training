import { AxiosInstance, AxiosRequestConfig, AxiosDefaults, HeadersDefaults, AxiosHeaderValue } from 'axios';

// Extend AxiosRequestConfig with our custom properties
export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  extractData?: boolean;
  _retry?: number;
}

// Extend AxiosDefaults with our custom property
export interface ExtendedAxiosDefaults extends Omit<AxiosDefaults<any>, 'headers'> {
  extractData?: boolean;
  headers: HeadersDefaults & {
    [key: string]: AxiosHeaderValue;
  };
}

// Extend AxiosInstance with our custom defaults
export interface ExtendedAxiosInstance extends Omit<AxiosInstance, 'defaults'> {
  defaults: ExtendedAxiosDefaults;
  (config: ExtendedAxiosRequestConfig): Promise<any>;
  (url: string, config?: ExtendedAxiosRequestConfig): Promise<any>;
}

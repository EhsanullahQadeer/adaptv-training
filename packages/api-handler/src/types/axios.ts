import {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosDefaults,
	HeadersDefaults,
	AxiosHeaderValue,
	AxiosResponse,
} from 'axios';

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

export interface ExtendedAxiosInstance extends Omit<AxiosInstance, 'defaults' | 'get' | 'post' | 'put' | 'delete'> {
	defaults: ExtendedAxiosDefaults;

	// Allow calling Axios instance directly
	(config: ExtendedAxiosRequestConfig): Promise<any>;
	(url: string, config?: ExtendedAxiosRequestConfig): Promise<any>;

	// Conditional return type based on `extractData`
	get<T = any, E extends boolean = true>(
		url: string,
		config?: ExtendedAxiosRequestConfig & { extractData?: E },
	): Promise<E extends true ? T : AxiosResponse<T>>;

	post<T = any, E extends boolean = true>(
		url: string,
		data?: any,
		config?: ExtendedAxiosRequestConfig & { extractData?: E },
	): Promise<E extends true ? T : AxiosResponse<T>>;

	put<T = any, E extends boolean = true>(
		url: string,
		data?: any,
		config?: ExtendedAxiosRequestConfig & { extractData?: E },
	): Promise<E extends true ? T : AxiosResponse<T>>;

	delete<T = any, E extends boolean = true>(
		url: string,
		config?: ExtendedAxiosRequestConfig & { extractData?: E },
	): Promise<E extends true ? T : AxiosResponse<T>>;
}

import { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { ExtendedAxiosRequestConfig } from './axios';

export interface ApiConfig {
	baseURL?: string;
	timeout?: number;
	getAuthToken?: () => Promise<string | null>;
	authHeaderFormat?: (token: string) => string;
	onRequest?: (request: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
	onResponse?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
	onError?: (error: any) => any;
	retryCount?: number;
	retryDelay?: number;
	extractData?: boolean;
}

export interface ApiResponse<T> {
	data: T;
	status: number;
	headers: Record<string, string>;
}

export interface ApiMethods {
	get: <T>(url: string, config?: ExtendedAxiosRequestConfig) => Promise<T | ApiResponse<T>>;
	post: <T>(url: string, data?: any, config?: ExtendedAxiosRequestConfig) => Promise<T | ApiResponse<T>>;
	put: <T>(url: string, data?: any, config?: ExtendedAxiosRequestConfig) => Promise<T | ApiResponse<T>>;
	delete: <T>(url: string, config?: ExtendedAxiosRequestConfig) => Promise<T | ApiResponse<T>>;
}

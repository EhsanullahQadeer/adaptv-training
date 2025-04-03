import { v4 as uuidv4 } from 'uuid';

export const generateRequestId = (): string => uuidv4();

export const logRequest = (requestId: string, message: string, metadata: Record<string, any> = {}): void => {
	console.log(JSON.stringify({ requestId, message, ...metadata }));
};

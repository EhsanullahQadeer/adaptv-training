import { NextResponse } from 'next/server';
import { SubscribeClientBlog } from '@/lib/services/cmsService';
import { ISubscribeClientBlog } from '@/types/client';

export async function POST(req: Request) {
	try {
		if (!req.body) {
			return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
		}
		let formData: ISubscribeClientBlog;
		try {
			formData = (await req.json()) as ISubscribeClientBlog;
		} catch {
			return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
		}

		const response = await SubscribeClientBlog(formData);

		return NextResponse.json(response.data);
	} catch (error: any) {
		return NextResponse.json(
			{
				error: error.data?.error || error.data?.message || error.message,
				details: error.data,
			},
			{ status: error.status || 500 },
		);
	}
}

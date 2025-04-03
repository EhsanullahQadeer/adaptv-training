import { NextResponse } from 'next/server';
import { postCoachApplication } from '@/lib/services/cmsService';
import type { CoachFormValues } from '@/lib/services/cmsService';

export async function POST(req: Request) {
	try {
		if (!req.body) {
			return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
		}

		let formData: CoachFormValues;
		try {
			formData = (await req.json()) as CoachFormValues;
		} catch (e) {
			return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
		}

		const response = await postCoachApplication(formData);

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

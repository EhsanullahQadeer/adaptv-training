import { NextRequest, NextResponse } from 'next/server';
import { getSiteConfiguration } from './lib/services/cmsService';
import { pagesRoutes } from './lib/routes/pages-routes';

export async function middleware(req: NextRequest) {
	if (req.nextUrl.pathname === pagesRoutes.coachRegistration) {
		const siteConfig = await getSiteConfiguration();
		if (!siteConfig.acceptCoachApplications) {
			return NextResponse.redirect(new URL(pagesRoutes.coach, req.url));
		}
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};

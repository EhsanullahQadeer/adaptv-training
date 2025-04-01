'use client';

import React, { ReactNode } from 'react';
import { Button, Dialog, Input } from '@workspace/ui/components';
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	dismiss,
} from '@workspace/ui/components/dialog';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@workspace/ui/components/form';
import Image from 'next/image';
import { iconsPaths } from '@/lib/public-assets-paths';

const formSchema = z.object({
	name: z.string().nonempty({ message: ' Name is required.' }),
	email: z.string().nonempty({ message: 'Email is required.' }).email({ message: 'Invalid email' }),
});

const WaitingListDialog = ({ triggerButton }: { triggerButton: ReactNode }) => {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		form.reset();
		dismiss();
	};

	return (
		<div>
			<Dialog>
				{triggerButton}
				<DialogContent showCloseButton={true} className="sm:max-w-[344px]">
					<Image className='mx-auto' src={iconsPaths.waitingListIcon} width={138} height={110} alt="Waiting..." />
					<DialogHeader>
						<DialogTitle>Adaptv is Coming Soon!</DialogTitle>
					</DialogHeader>
					<DialogDescription className='text-center'>Experience powerful coaching tools and seamless client management.</DialogDescription>
					<Form {...form}>
						<form
							onSubmit={(e) => {
								e.stopPropagation(); // Prevent parent form submission
								form.handleSubmit(onSubmit)(e);
							}}
							className="grid gap-4 py-4"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input id="name" placeholder="Name" className="col-span-3" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input id="email" placeholder="Email" className="col-span-3" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<DialogFooter className="!justify-center !flex-row flex-wrap gap-3">
								<Button className="w-[149px] md:w-[162px] flex-1 sm:flex-none" size="lg" type="submit">
									Joint waiting list
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default WaitingListDialog;

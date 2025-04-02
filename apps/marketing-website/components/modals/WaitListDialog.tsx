'use client';

import React, { ReactNode, useState, useCallback, useMemo } from 'react';
import { Button, Dialog, Input, Typography } from '@workspace/ui/components';
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
import { PointerUtils } from '@workspace/ui/lib/utils/pointer';
import { submitClientWaitlist } from '@/lib/services/apiService';
import { toast } from '@workspace/ui/components/sonner';

// Form validation schema
const formSchema = z.object({
	clientName: z.string().nonempty({ message: 'Name is required.' }),
	clientEmail: z.string().nonempty({ message: 'Email is required.' }).email({ message: 'Invalid email' }),
});

type FormValues = z.infer<typeof formSchema>;

const WaitingListForm = ({ onSubmit }: { onSubmit: (values: FormValues) => void }) => {
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: useMemo(() => ({ clientName: '', clientEmail: '' }), []),
	});

	return (
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
					name="clientName"
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
					name="clientEmail"
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
					<Button className="w-full" size="lg" type="submit">
						Join Waiting List
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

const SuccessMessage = () => (
	<>
		<DialogHeader>
			<DialogTitle>You’re in!</DialogTitle>
		</DialogHeader>
		<DialogDescription className="text-center">
			<Typography className="block" color="text-charcoal-gray" as="span_secondary">
				Thanks for joining the Adaptv waitlist!
			</Typography>
			<Typography as="span_secondary" color="text-charcoal-gray">
				🚀 Stay tuned for updates!
			</Typography>
		</DialogDescription>
		<DialogFooter className="!justify-center !flex-row flex-wrap gap-3">
			<Button
				onClick={() => {
					dismiss();
				}}
				className="w-full"
				size="lg"
			>
				OK
			</Button>
		</DialogFooter>
	</>
);

const WaitingListDialog = ({ triggerButton }: { triggerButton: ReactNode }) => {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleSubmit = useCallback(async (values: FormValues) => {
		try {
			PointerUtils.disable({ loading: true });
			await submitClientWaitlist({ clientName: values.clientName, clientEmail: values.clientEmail });
			setIsFormSubmitted(true);
		} catch {
			toast.error('An error occurred. Please try again later.');
		} finally {
			PointerUtils.disable({ loading: false });
		}
	}, []);

	return (
		<Dialog>
			{triggerButton}
			<DialogContent showCloseButton={true} className="sm:max-w-[344px]">
				<Image className="mx-auto" src={iconsPaths.waitingListIcon} width={138} height={110} alt="Waiting..." />
				{isFormSubmitted ? <SuccessMessage /> : <WaitingListForm onSubmit={handleSubmit} />}
			</DialogContent>
		</Dialog>
	);
};

export default WaitingListDialog;

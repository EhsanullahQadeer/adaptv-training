'use client';

import { SubmitClientSubscribeBlog } from '@/lib/services/apiService';
import { Button, CircularLoader, Input } from '@workspace/ui/components';
import { toast } from '@workspace/ui/components/sonner';
import React, { useState } from 'react';
import { z } from 'zod';

// Define schema with Zod
const subscriptionSchema = z.object({
	name: z.string().min(1, { message: 'Name is required.' }),
	email: z.string().min(1, { message: 'Email is required.' }).email({ message: 'Invalid email address.' }),
});

const Subscribe = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	// Handle form submission
	const onSubmit = async () => {
		const formData = { name, email };

		// Validate form data using Zod
		const validationResult = subscriptionSchema.safeParse(formData);
		if (!validationResult.success) {
			const errorMessage = validationResult.error.errors[0]?.message;
			toast.error(errorMessage);
			return;
		}

		setLoading(true);
		try {
			await SubmitClientSubscribeBlog(formData);
			toast.success('Your subscription has been submitted');
			setName('');
			setEmail('');
		} catch {
			toast.error('An error occurred while submitting the form');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="mt-6 mx-auto max-w-[728px] border border-pale-silver flex flex-col sm:flex-row items-center w-full rounded-xl bg-white shadow-light">
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Your name"
					required
					aria-label="Your name"
					className="flex-1 border-none bg-transparent focus:ring-0 text-base px-4 max-sm:pt-6 max-sm:pb-4 h-[60px] sm:h-[70px] rounded-none rounded-l-xl shadow-none"
				/>
				<span className="h-px sm:h-6 w-[94%] sm:w-px bg-light-gray"></span>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your email address"
					required
					aria-label="Your email address"
					className="flex-1 border-none bg-transparent focus:ring-0 text-base px-4 max-sm:pt-4 max-sm:pb-6 h-[60px] sm:h-[70px] rounded-none shadow-none"
				/>
				<Button onClick={onSubmit} size="xl" disabled={loading} className="m-2.5 max-sm:hidden">
					Subscribe
					{loading && (
						<span className="ml-2">
							<CircularLoader size={16} />
						</span>
					)}
				</Button>
			</div>

			<div className="sm:hidden mt-4">
				<Button onClick={onSubmit} size="xl" disabled={loading} className="w-full">
					Subscribe
					{loading && (
						<span className="ml-2">
							<CircularLoader size={16} />
						</span>
					)}
				</Button>
			</div>
		</>
	);
};

export default Subscribe;

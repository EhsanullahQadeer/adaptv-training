import { Button, Dialog, Input, Label } from '@workspace/ui/components';
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@workspace/ui/components/dialog';
import { PlusIcon } from '@workspace/ui/icons';
import React from 'react';

const CertificateDialog = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button type="button" size="sm">
						<PlusIcon />
						Add certification
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[540px]">
					<DialogHeader>
						<DialogTitle>Certification</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="name">Certification Name</Label>
							<Input id="name" placeholder="Example: Personal Trainer" className="col-span-3" />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="username">Username</Label>
						</div>
					</div>
					<DialogFooter className="!justify-between !flex-row flex-wrap gap-3">
						<Button className="w-[149px] md:w-[162px] flex-1 sm:flex-none" size="lg" variant="outline" type="button">
							Cancel
						</Button>
						<Button className="w-[149px] md:w-[162px] flex-1 sm:flex-none" size="lg" type="submit">
							Add Certification
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CertificateDialog;

import { Skeleton } from '@workspace/ui/components/skeleton';

export default function LearningPostLoading() {
	return (
		<div className="mt-4 md:mt-9 mb-6 md:mb-20 bg-white">
			<div className="mx-4">
				<div className="max-w-[1100px] mx-auto">
					<Skeleton className="h-[648px] rounded-xl" />
					<div className="flex lg:flex-row gap-[20px] mt-7 flex-col">
						<div className="lg:w-2/3 w-full">
							<Skeleton className="h-[400px] rounded-lg" />
						</div>
						<div className="lg:w-1/3">
							<Skeleton className="h-[300px] rounded-lg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

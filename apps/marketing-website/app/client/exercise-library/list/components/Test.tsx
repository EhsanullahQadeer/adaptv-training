// src/app/page.tsx

'use client';

import React, { useState } from 'react';
import { MultiSelect } from '@workspace/ui/components/multi-select';

const frameworksList = [
	{ value: 'react', label: 'React' },
	{ value: 'angular', label: 'Angularaaaaaaaaaaaaaaa' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'svelte', label: 'Svelte' },
	{ value: 'ember', label: 'Ember' },
];

function Test() {
	const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(['react', 'angular']);

	return (
		<div className="w-full">
			<MultiSelect
				options={frameworksList}
				onValueChange={setSelectedFrameworks}
				defaultValue={selectedFrameworks}
				placeholder="Select frameworks"
				variant="default"
				maxCount={1}
                
			/>
		</div>
	);
}

export default Test;

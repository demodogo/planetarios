'use client';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Transition,
} from '@headlessui/react';

interface HighlightStripInfoProps {
	titleSide: 'left' | 'right';
	content: React.ReactNode;
	barWidth: number;
}

function pxToRem(value: number) {
	return `${value / 16}rem`;
}

export function HighlightStripInfo({
	titleSide,
	content,
	barWidth,
}: HighlightStripInfoProps) {
	return (
		<div className="w-full" style={{ maxWidth: pxToRem(barWidth) }}>
			<Disclosure>
				{({ open }) => (
					<>
						<DisclosureButton
							className={`${open ? 'hidden' : ''} flex w-full items-center justify-end gap-2 rounded-lg px-1 py-2 text-left font-bold text-black ${titleSide === 'left' ? 'justify-start' : 'justify-end'}`}
						>
							<span
								className={`font-mono text-[0.875rem] sm:text-base translate-y-[1px] transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
							>
								&gt;
							</span>
							<span className="font-mono text-[0.875rem] text-black sm:text-base">
								más información
							</span>
						</DisclosureButton>
						<Transition
							enter="transition duration-500 ease-out"
							enterFrom="transform -translate-y-2 opacity-0"
							enterTo="transform translate-y-0 opacity-100"
							leave="transition duration-500 ease-out"
							leaveFrom="transform translate-y-0 opacity-100"
							leaveTo="transform -translate-y-2 opacity-0"
						>
							<DisclosurePanel
								className={`px-4 pb-2 pt-4 text-gray-600 flex flex-col ${titleSide === 'right' ? 'items-end' : 'items-start'} w-full`}
							>
								<div className="max-w-[80%]">{content}</div>
							</DisclosurePanel>
						</Transition>

						<DisclosureButton
							className={`${open ? '' : 'hidden'} flex w-full items-center justify-end gap-2 rounded-lg px-1 py-2 text-left font-bold text-black ${titleSide === 'left' ? 'justify-start' : 'justify-end'}`}
						>
							<span
								className={`font-mono text-[0.875rem] sm:text-base translate-y-[1px] transition-transform duration-200`}
							>
								&gt;
							</span>
							<span className="font-mono text-[0.875rem] text-black sm:text-base">
								menos información
							</span>
						</DisclosureButton>
					</>
				)}
			</Disclosure>
		</div>
	);
}

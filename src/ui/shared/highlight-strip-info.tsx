'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

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
							className={`${open ? 'hidden' : ''} flex w-full items-center gap-2 rounded-lg px-1 py-2 transform-gpu hover:scale-120 transition-transform duration-200 cursor-pointer text-left font-bold text-black ${titleSide === 'left' ? 'justify-start origin-left' : 'justify-end origin-right'}`}
						>
							<span
								className={`font-mono text-[0.875rem] translate-y-[1px] transition-transform duration-200 sm:text-base ${open ? 'rotate-90' : ''}`}
							>
								&gt;
							</span>
							<span className="font-mono text-[0.875rem] text-black sm:text-base">
								más información
							</span>
						</DisclosureButton>
						<DisclosurePanel static className="w-full overflow-hidden">
							<div
								className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
									open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
								}`}
							>
								<div className="overflow-hidden">
									<div
										className={`flex w-full flex-col px-4 text-gray-600 transition-[padding,transform] duration-500 ease-in-out ${
											titleSide === 'right' ? 'items-end' : 'items-start'
										} ${open ? 'translate-y-0 pb-2 pt-4' : '-translate-y-2 pb-0 pt-0'}`}
									>
										<div className="max-w-[80%]">{content}</div>
									</div>
								</div>
							</div>
						</DisclosurePanel>

						<DisclosureButton
							className={`${open ? '' : 'hidden'} flex w-full items-center justify-end gap-2 rounded-lg px-1 py-2 text-left font-bold text-black ${titleSide === 'left' ? 'justify-start' : 'justify-end'}`}
						>
							<span className="font-mono text-[0.875rem] translate-y-[1px] transition-transform duration-200 sm:text-base">
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

import Link from 'next/link';

type HighlightStripAlignment = 'left' | 'right';

interface HighlightStripCardProps {
	title: string;
	alignment: HighlightStripAlignment;
	backgroundColor: string;
	barWidth: number;
	barHeight: number;
	titleWidth: number;
	titleOffsetX: number;
	titleOffsetY: number;
	ctaOffsetX: number;
	ctaOffsetY: number;
	href?: string;
	className?: string;
}

function pxToRem(value: number) {
	return `${value / 16}rem`;
}

export function HighlightStripCard({
	title,
	alignment,
	backgroundColor,
	barWidth,
	barHeight,
	titleWidth,
	titleOffsetX,
	titleOffsetY,
	ctaOffsetX,
	ctaOffsetY,
	href = '#',
	className,
}: HighlightStripCardProps) {
	const containerAlignment =
		alignment === 'left' ? 'mr-auto items-start' : 'ml-auto items-start';
	const mobileTextAlignment = alignment === 'left' ? 'text-right' : 'text-left';
	const mobileItemsAlignment =
		alignment === 'left' ? 'items-end' : 'items-start';

	return (
		<div className={`flex flex-col ${containerAlignment} ${className ?? ''}`}>
			<div className={`flex flex-col ${mobileItemsAlignment} xl:hidden`}>
				<div
					className={`flex max-w-full flex-col justify-center px-6 py-5 sm:px-8 md:px-9 md:py-6 ${mobileTextAlignment}`}
					style={{
						width: `min(100%, ${pxToRem(barWidth)})`,
						backgroundColor,
					}}
				>
					<h3 className="font-heading text-[2.125rem] leading-[0.95] font-bold uppercase text-black sm:text-[2.625rem] lg:text-[2.875rem]">
						{title.split('\n').map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</h3>
				</div>
				<Link
					href={href}
					className="font-mono mt-3 h-7 w-[10.875rem] text-[0.875rem] leading-none text-black sm:text-base"
				>
					&gt; más información
				</Link>
			</div>

			<div className="hidden xl:block">
				<div
					className="relative"
					style={{
						width: pxToRem(barWidth),
						height: pxToRem(barHeight),
						backgroundColor,
					}}
				>
					<h3
						className="font-heading absolute text-[3.125rem] leading-[1] font-bold uppercase text-black"
						style={{
							top: pxToRem(titleOffsetY),
							left: pxToRem(titleOffsetX),
							width: pxToRem(titleWidth),
							textAlign: alignment === 'left' ? 'right' : 'left',
						}}
					>
						{title.split('\n').map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</h3>
				</div>
				<Link
					href={href}
					className="font-mono block h-7 w-[10.875rem] text-base leading-none text-black"
					style={{
						marginLeft: pxToRem(ctaOffsetX),
						marginTop: pxToRem(ctaOffsetY),
					}}
				>
					&gt; más información
				</Link>
			</div>
		</div>
	);
}

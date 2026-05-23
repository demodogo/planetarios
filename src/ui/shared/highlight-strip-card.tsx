import { HighlightStripInfo } from '../home/highlight-strip-info';

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
	infoTitleSide: 'left' | 'right';
	infoCardContent: React.ReactNode;
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
	infoTitleSide,
	infoCardContent,
}: HighlightStripCardProps) {
	const containerAlignment =
		alignment === 'left' ? 'mr-auto items-start' : 'ml-auto items-start';
	const mobileTextAlignment = alignment === 'left' ? 'text-right' : 'text-left';
	const mobileItemsAlignment =
		alignment === 'left' ? 'items-end' : 'items-start';

	return (
		<div className={`flex flex-col ${containerAlignment} ${className ?? ''}`}>
			<div className={`flex flex-col ${mobileItemsAlignment} xl:hidden`}>
				<div className="flex flex-col max-w-full w-fit">
					<div
						className={`flex flex-col justify-center px-6 py-5 sm:px-8 md:px-9 md:py-6 ${mobileTextAlignment}`}
						style={{ backgroundColor }}
					>
						<h3 className="font-heading text-[2.125rem] leading-[0.95] font-bold uppercase text-black sm:text-[2.625rem] lg:text-[2.875rem]">
							{title.split('\n').map((line) => (
								<span key={line} className="block">
									{line}
								</span>
							))}
						</h3>
					</div>
					<div className="w-0 min-w-full">
						<HighlightStripInfo
							titleSide={infoTitleSide}
							content={infoCardContent}
							barWidth={barWidth}
						/>
					</div>
				</div>
			</div>

			<div className="hidden xl:block">
				<div className="flex flex-col" style={{ width: pxToRem(barWidth) }}>
					<div
						className="relative"
						style={{
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
					<HighlightStripInfo
						titleSide={infoTitleSide}
						content={infoCardContent}
						barWidth={barWidth}
					/>
				</div>
			</div>
		</div>
	);
}

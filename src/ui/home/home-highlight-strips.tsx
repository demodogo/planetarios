import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

export function HomeHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-12 pb-24 pt-20 md:gap-14 md:pb-28 xl:gap-0 xl:px-0 xl:pb-[10.4375rem]">
			<HighlightStripCard
				title={'NUESTRA\nCONTRIBUCIÓN'}
				alignment="left"
				backgroundColor="#c1e61e"
				barWidth={732}
				barHeight={146}
				titleWidth={409}
				titleOffsetX={288}
				titleOffsetY={20}
				ctaOffsetX={562}
				ctaOffsetY={11}
				className="xl:mb-[4.1875rem]"
			/>

			<HighlightStripCard
				title={'INEVITABLE\nOBSOLESCENCIA'}
				alignment="right"
				backgroundColor="#00b0f9"
				barWidth={732}
				barHeight={128}
				titleWidth={529}
				titleOffsetX={13}
				titleOffsetY={18}
				ctaOffsetX={0}
				ctaOffsetY={11}
				className="xl:mb-[3.1875rem]"
			/>

			<HighlightStripCard
				title={'SOMOS\nJUVENÓLOGOS'}
				alignment="left"
				backgroundColor="#ffe940"
				barWidth={732}
				barHeight={126}
				titleWidth={410}
				titleOffsetX={292}
				titleOffsetY={17}
				ctaOffsetX={562}
				ctaOffsetY={14}
			/>
		</section>
	);
}

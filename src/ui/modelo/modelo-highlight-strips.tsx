import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

export function ModeloHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-10 overflow-x-hidden pb-24 pt-4 md:gap-12 md:pb-28 xl:gap-[3rem] xl:pb-[6rem] xl:pt-0">
			<HighlightStripCard
				title={'EL MODELO SURGE\nDESDE UN PROPÓSITO'}
				alignment="left"
				backgroundColor="#c1e61e"
				barWidth={831}
				barHeight={128}
				titleWidth={603}
				titleOffsetX={59}
				titleOffsetY={18}
				ctaOffsetX={497}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'MODELO FIEL A\nLA DEMANDA'}
				alignment="right"
				backgroundColor="#fa6907"
				barWidth={814}
				barHeight={129}
				titleWidth={463}
				titleOffsetX={13}
				titleOffsetY={18}
				ctaOffsetX={0}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'MODELO 2.0'}
				alignment="left"
				backgroundColor="#ffe940"
				barWidth={825}
				barHeight={97}
				titleWidth={346}
				titleOffsetX={455}
				titleOffsetY={18}
				ctaOffsetX={641}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'LA EVOLUCIÓN\nYA COMENZÓ'}
				alignment="right"
				backgroundColor="#fa6907"
				barWidth={979}
				barHeight={129}
				titleWidth={463}
				titleOffsetX={13}
				titleOffsetY={18}
				ctaOffsetX={0}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'PERSONAS EN\nEL CENTRO'}
				alignment="left"
				backgroundColor="#257125"
				barWidth={831}
				barHeight={128}
				titleWidth={429}
				titleOffsetX={283}
				titleOffsetY={18}
				ctaOffsetX={549}
				ctaOffsetY={14}
			/>

			<HighlightStripCard
				title={'CONSCIENTES Y\nRENTABLES'}
				alignment="right"
				backgroundColor="#fa6907"
				barWidth={876}
				barHeight={137}
				titleWidth={518}
				titleOffsetX={13}
				titleOffsetY={18}
				ctaOffsetX={0}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'CÓDIGO ABIERTO'}
				alignment="left"
				backgroundColor="#ffe940"
				barWidth={825}
				barHeight={97}
				titleWidth={461}
				titleOffsetX={337}
				titleOffsetY={18}
				ctaOffsetX={641}
				ctaOffsetY={11}
			/>
		</section>
	);
}

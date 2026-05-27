import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

export function ContenidoHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-12 overflow-x-hidden pb-24 pt-4 md:gap-14 md:pb-28 xl:gap-[3.5rem] xl:px-0 xl:pb-[10.4375rem] xl:pt-0">
			<HighlightStripCard
				title={'¿QUÉ ES UNA\nGENERACIÓN DE TURNO?'}
				alignment="left"
				backgroundColor="#c1e61e"
				barWidth={924}
				barHeight={128}
				titleWidth={679}
				titleOffsetX={245}
				titleOffsetY={18}
				ctaOffsetX={840}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'QUIEREN CAMBIAR\nEL MUNDO'}
				alignment="right"
				backgroundColor="#fa6907"
				barWidth={814}
				barHeight={129}
				titleWidth={502}
				titleOffsetX={13}
				titleOffsetY={18}
				ctaOffsetX={0}
				ctaOffsetY={11}
			/>

			<HighlightStripCard
				title={'GENERACIONES\nPOR DÉCADAS'}
				alignment="left"
				backgroundColor="#ffe940"
				barWidth={825}
				barHeight={137}
				titleWidth={439}
				titleOffsetX={290}
				titleOffsetY={18}
				ctaOffsetX={730}
				ctaOffsetY={14}
			/>
		</section>
	);
}

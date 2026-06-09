import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { DemasiadadataInfo } from './info/demasiada-data-info';
import { ResumenPonderadoInfo } from './info/resumen-ponderado-info';
import { SinRigorInfo } from './info/sin-rigor-info';

export function FuentesHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-12 overflow-x-hidden pb-24 pt-4 md:gap-14 md:pb-28 xl:gap-[3.5rem] xl:px-0 xl:pb-[10.4375rem] xl:pt-0">
			<HighlightStripCard
				title={'DEMASIADA\nDATA DISPONIBLE'}
				alignment="left"
				backgroundColor="#c1e61e"
				barWidth={1000}
				barHeight={129}
				titleWidth={679}
				titleOffsetX={250}
				titleOffsetY={18}
				infoCardContent={<DemasiadadataInfo />}
				infoTitleSide="right"
			/>

			<HighlightStripCard
				title={'RESUMEN\nPONDERADO'}
				alignment="right"
				backgroundColor="#fa6907"
				barWidth={1000}
				barHeight={129}
				titleWidth={679}
				titleOffsetX={60}
				titleOffsetY={18}
				infoCardContent={<ResumenPonderadoInfo />}
				infoTitleSide="left"
			/>

			<HighlightStripCard
				title={'SIN RIGOR\nCIENTIFICO'}
				alignment="left"
				backgroundColor="#ffe940"
				barWidth={1000}
				barHeight={129}
				titleWidth={679}
				titleOffsetX={250}
				titleOffsetY={18}
				infoCardContent={<SinRigorInfo />}
				infoTitleSide="right"
			/>
		</section>
	);
}

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';
import {ModeloConcientesInfo} from "@/ui/modelo/info/concientes-info";

export function ContenidoHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-12 overflow-x-hidden pb-24 pt-4 md:gap-14 md:pb-28 xl:gap-[3.5rem] xl:px-0 xl:pb-[10.4375rem] xl:pt-0">
			<HighlightStripCard
				title={'¿QUÉ ES UNA\nGENERACIÓN DE TURNO?'}
				alignment="left"
				backgroundColor="#c1e61e"
                barWidth={1000}
                barHeight={129}
                titleWidth={679}
                titleOffsetX={250}
                titleOffsetY={18}
                infoCardContent={<ModeloConcientesInfo />}
                infoTitleSide={'right'}

			/>

			<HighlightStripCard
				title={'QUIEREN CAMBIAR\nEL MUNDO'}
				alignment="right"
				backgroundColor="#fa6907"
                barWidth={1000}
				barHeight={129}
				titleWidth={679}
				titleOffsetX={60}
				titleOffsetY={18}
                infoCardContent={<ModeloConcientesInfo />}
                infoTitleSide={'left'}

			/>

			<HighlightStripCard
				title={'GENERACIONES\nPOR DÉCADAS'}
				alignment="left"
				backgroundColor="#ffe940"
                barWidth={1000}
                barHeight={129}
                titleWidth={679}
                titleOffsetX={250}
                titleOffsetY={18}
                infoCardContent={<ModeloConcientesInfo />}
                infoTitleSide={'right'}

			/>
		</section>
	);
}

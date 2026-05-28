import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';
import {ModeloPropositoInfo} from "@/ui/modelo/info/modelo-proposito-info";
import {ModeloFielInfo} from "@/ui/modelo/info/modelo-fiel-info";
import {Modelo2Info} from "@/ui/modelo/info/modelo-2.0-info";
import {ModeloEvolucionInfo} from "@/ui/modelo/info/evolucion-info";
import {ModeloCodigoInfo} from "@/ui/modelo/info/codigo-info";
import {ModeloConcientesInfo} from "@/ui/modelo/info/concientes-info";
import {ModeloPersonasInfo} from "@/ui/modelo/info/personas-info";

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
                infoCardContent={<ModeloPropositoInfo />}
                infoTitleSide={'right'}
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
                infoCardContent={<ModeloFielInfo />}
                infoTitleSide={'left'}
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
                infoCardContent={<Modelo2Info />}
                infoTitleSide={'right'}
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
                infoCardContent={<ModeloEvolucionInfo />}
                infoTitleSide={'left'}
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
                infoCardContent={<ModeloPersonasInfo />}
                infoTitleSide={'right'}
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
                infoCardContent={<ModeloConcientesInfo />}
                infoTitleSide={'left'}
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
                infoCardContent={<ModeloCodigoInfo />}
                infoTitleSide={'right'}

			/>
		</section>
	);
}

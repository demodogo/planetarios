import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { AntropologiaInfo } from './info/antropologia-info';
import { EntenderDemandaInfo } from './info/entender-demanda-info';
import { EntenderJovenesInfo } from './info/entender-jovenes-info';
import { IntuirFuturoInfo } from './info/intuir-futuro-info';
import { IrRitmoInfo } from './info/ir-ritmo-info';
import { MensajerosInfo } from './info/mensajeros-info';
import { PuntosCiegosInfo } from './info/puntos-ciegos-info';

export function NaturalezaHighlightStrips() {
	return (
		<div className="flex w-full flex-col">
			{/* Primera mitad de strips */}
			<section className="flex w-full flex-col gap-12 overflow-x-hidden pt-4 md:gap-14 xl:gap-[3.5rem] xl:pt-0">
				<HighlightStripCard
					title={'ENTENDER MEJOR\nLA DEMANDA'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<EntenderDemandaInfo />}
					infoTitleSide="right"
				/>

				<HighlightStripCard
					title={'IR AL RITMO DE\nLOS TIEMPOS'}
					alignment="right"
					backgroundColor="#fa6907"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<IrRitmoInfo />}
					infoTitleSide="left"
				/>

				<HighlightStripCard
					title={'ANTROPOLOGÍA DE\nLOS NEGOCIOS'}
					alignment="left"
					backgroundColor="#ffe940"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<AntropologiaInfo />}
					infoTitleSide="right"
				/>

				<HighlightStripCard
					title={'ENTENDER A\nLOS JÓVENES'}
					alignment="right"
					backgroundColor="#FFD3B6"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<EntenderJovenesInfo />}
					infoTitleSide="left"
				/>
			</section>

			{/* Sección Estudio Etnográfico */}
			<section className="mt-12 w-full bg-[#257125] px-5 py-12 sm:px-8 sm:py-16 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:py-[4.5rem]">
				<div className="mx-auto max-w-[80rem] text-center xl:text-left">
					<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-white sm:text-[3rem] xl:text-[4rem]">
						ESTUDIO ETNOGRÁFICO
					</h2>
					<p className="font-body-prototype mx-auto mt-6 text-[1.0625rem] leading-[1.07] text-white/80 xl:mx-0 xl:mt-8 xl:max-w-[40rem] xl:text-[1.5625rem]">
						Generaciones de Turno es una investigación de naturaleza
						antropológica que busca documentar y explicar la realidad humana de
						cada época, y lo hace por medio de la técnica de inmersión
						obteniendo como resultado etnografías que describen las creencias y
						cultura de las sucesivas capas generacionales.
					</p>
				</div>
			</section>

			{/* Sección Diferencia con Estudios Tradicionales */}
			<section className="mx-auto mt-12 flex w-full max-w-[80rem] flex-col gap-8 px-5 pb-10 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:flex-row xl:items-start xl:gap-0 xl:px-[3.1875rem] xl:pb-0 xl:pt-[4.8125rem]">
				<h2 className="font-heading shrink-0 text-right text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:w-[33.5625rem] xl:text-[3.75rem]">
					DIFERENCIA
					<br />
					CON ESTUDIOS
					<br />
					TRADICIONALES
				</h2>
				<p className="font-body-prototype min-w-0 text-[1.0625rem] leading-[1.07] text-black/80 xl:ml-[2.5625rem] xl:mt-[1.1875rem] xl:text-[1.5625rem]">
					Esta metodología es distinta de los estudios tradicionales que por
					métodos de encuestas o focus group establecen parámetros
					socioeconómicos, hábitos y preferencias cuyo resultado habitualmente
					tiende a ser más cercano al &ldquo;deber ser&rdquo;.
				</p>
			</section>

			{/* Segunda mitad de strips */}
			<section className="mt-12 flex w-full flex-col gap-12 overflow-x-hidden pt-4 md:mt-14 md:gap-14 xl:mt-[8rem] xl:gap-[3.5rem] xl:pt-0">
				<HighlightStripCard
					title={'PUNTOS CIEGOS'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={45}
					infoCardContent={<PuntosCiegosInfo />}
					infoTitleSide="right"
				/>

				<HighlightStripCard
					title={'INTUIR EL FUTURO'}
					alignment="right"
					backgroundColor="#fa6907"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={60}
					titleOffsetY={45}
					infoCardContent={<IntuirFuturoInfo />}
					infoTitleSide="left"
				/>

				<HighlightStripCard
					title={'MENSAJEROS\nDEL MAÑANA'}
					alignment="left"
					backgroundColor="#ffe940"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<MensajerosInfo />}
					infoTitleSide="right"
				/>
			</section>

			{/* Sección Utilidad del Estudio */}
			<section className="mx-auto mt-12 flex w-full max-w-[80rem] flex-col gap-8 px-5 pb-24 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:flex-row xl:items-start xl:gap-0 xl:px-[3.1875rem] xl:pb-[10.4375rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading shrink-0 text-right text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:w-[33.5625rem] xl:text-[4.6875rem]">
					UTILIDAD
					<br />
					DEL
					<br />
					ESTUDIO
				</h2>
				<div className="font-body-prototype min-w-0 flex flex-col gap-4 text-[1.0625rem] leading-[1.07] text-black/80 xl:ml-[2.5625rem] xl:mt-[1.1875rem] xl:text-[1.5625rem]">
					<p>
						La información del estudio está pensada para el uso en empresas,
						para facilitar el entendimiento de la cultura de cada época y así
						adaptar mejor los modelos de negocio.
					</p>
					<p>
						<span className="bg-[#ffe940] font-bold">
							Jóvenes, mensajeros del futuro
						</span>
					</p>
					<p>
						El estudio generaciones de turno ayuda a entender de un modo simple,
						claro y entretenido el espíritu de cada tiempo; este entendimiento
						se materializa a través de la observación de las capas juveniles
						(veinteañeros) de cada década, quienes, como mensajeros del futuro,
						nos insinúan cómo serán los años venideros.
					</p>
				</div>
			</section>
		</div>
	);
}

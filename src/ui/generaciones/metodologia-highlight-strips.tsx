import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { InmersionInfo } from './info/inmersion-info';
import { SimetriaRelacionalInfo } from './info/simetria-relacional-info';

export function MetodologiaHighlightStrips() {
	return (
		<div className="flex w-full flex-col">
			{/* Hero centrado */}
			<section className="mx-auto w-full max-w-[80rem] px-5 pb-10 pt-14 text-center sm:px-8 xl:px-[3.1875rem] xl:pb-16 xl:pt-[4.8125rem]">
				<h1 className="font-heading text-[3.125rem] font-bold uppercase leading-[1] text-black xl:text-[4.6875rem]">
					METODOLOGÍA
				</h1>
				<p className="font-body-prototype mx-auto mt-6 max-w-[39.5rem] text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					Cada generación de turno se estudia durante 5 años, con esta evidencia
					se proponen los valores generacionales de cada grupo etario. Durante los
					5 años siguientes esta definición se va corrigiendo con la realidad, es
					decir se trata de un estudio evolutivo y dinámico.
				</p>
			</section>

			{/* Strips */}
			<section className="flex w-full flex-col gap-12 overflow-x-hidden pt-4 md:gap-14 xl:gap-[3.5rem] xl:pt-0">
				<HighlightStripCard
					title={'INMERSIÓN'}
					alignment="left"
					backgroundColor="#00b0f9"
                    barWidth={1000}
                    barHeight={129}
                    titleWidth={679}
                    titleOffsetX={250}
                    titleOffsetY={45}
					infoCardContent={<InmersionInfo />}
					infoTitleSide="right"
				/>

				<HighlightStripCard
					title={'SIMETRÍA RELACIONAL'}
					alignment="right"
					backgroundColor="#ffd3b6"
                    barWidth={1000}
                    barHeight={129}
                    titleWidth={900}
                    titleOffsetX={60}
                    titleOffsetY={39}
					infoCardContent={<SimetriaRelacionalInfo />}
					infoTitleSide="left"
				/>
			</section>

			{/* Sección Trabajo de Campo */}
			<section className="mt-12 w-full bg-[#ffe940] px-5 py-12 text-center sm:px-8 sm:py-16 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:py-[4.5rem]">
				<div className="mx-auto max-w-[80rem]">
					<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
						TRABAJO
						<br />
						DE CAMPO
					</h2>
					<p className="font-body-prototype mx-auto mt-6 max-w-[44.6875rem] text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
						El trabajo de campo ha sido realizado personalmente por el fundador de
						la consultora, quien durante décadas ha venido estudiando día a día a
						los jóvenes nativos de cada una de las generaciones de turno. El
						estudio se hace desde 1970 y continúa hasta el presente. La
						investigación se ha realizado en varios países de América Latina
						atravesando distintas clases socioeconómicas.
					</p>
				</div>
			</section>
		</div>
	);
}

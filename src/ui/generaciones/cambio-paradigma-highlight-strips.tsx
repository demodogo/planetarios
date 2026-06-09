import Image from 'next/image';

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { AislarRasgosJuvenilesInfo } from './info/aislar-rasgos-juveniles-info';
import { CreenciasValoricasInfo } from './info/creencias-valoricas-info';
import { NoConfundirVirtudesInfo } from './info/no-confundir-virtudes-info';
import { ValoresCentennialsInfo } from './info/valores-centennials-info';
import { ValoresMillennialsInfo } from './info/valores-millennials-info';

export function CambioParadigmaHighlightStrips() {
	return (
		<div className="flex w-full flex-col">
			{/* Hero centrado: CAMBIO DE PARADIGMA + cuadro */}
			<section className="mx-auto w-full max-w-[80rem] px-5 pb-10 pt-14 text-center sm:px-8 xl:px-[3.1875rem] xl:pb-16 xl:pt-[4.8125rem]">
				<h1 className="font-heading text-[3.125rem] font-bold uppercase leading-[1] text-black xl:text-[4.6875rem]">
					CAMBIO
					<br />
					DE PARADIGMA
				</h1>
				<div className="mx-auto mt-10 w-full max-w-[55.375rem] overflow-hidden rounded-md border-8 border-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)]">
					<Image
						src="/cuadro-paradigma.png"
						alt="Cuadro comparativo de paradigmas generacionales"
						width={886}
						height={498}
						className="h-auto w-full"
						priority
					/>
				</div>
				<div className="font-body-prototype mx-auto mt-10 flex max-w-[56rem] flex-col gap-4 text-[1.0625rem] leading-[1.07] text-black/80 xl:text-[1.5625rem]">
					<p>
						En el cuadro se observa que un primer bloque, constituido por los
						BabyBoomers y los Gen X (Tempranos y Tardíos), agrupan un conjunto de
						creencias pertenecientes a la cultura del antiguo paradigma, &ldquo;La
						Sociedad Disciplinaria&rdquo;.
					</p>
					<p>
						En cambio, el segundo bloque, compuesto por Millennials (Tempranos y
						Tardíos) y Centennials, representan el nuevo paradigma, &ldquo;La
						Sociedad Colaborativa&rdquo;.
					</p>
					<p>
						Cada uno de los rasgos generacionales marca la profunda diferencia
						cultural entre estos dos bloques.
					</p>
				</div>
			</section>

			{/* Bloque verde: PREVENIR LA OBSOLESCENCIA (centrada) */}
			<section className="mt-10 w-full bg-[#c1e61e] px-5 py-12 text-center sm:px-8 sm:py-16 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:py-[4.5rem]">
				<div className="mx-auto max-w-[80rem]">
					<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[3.125rem]">
						PREVENIR LA OBSOLESCENCIA
					</h2>
					<p className="font-body-prototype mx-auto mt-6 max-w-[44.25rem] text-[1.0625rem] leading-[1.07] text-black xl:mt-8 xl:text-[1.5625rem]">
						Las empresas tienen la oportunidad de tomar en cuenta este cambio de
						paradigma para actualizar su modelo de negocio y así prevenir la
						obsolescencia.
					</p>
				</div>
			</section>

			{/* Sección VALORES GENERACIONALES (centrada) */}
			<section className="mx-auto mt-12 flex w-full max-w-[80rem] flex-col items-center px-5 pt-14 text-center sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
					VALORES
					<br />
					GENERACIONALES
				</h2>
				<p className="font-body-prototype mx-auto mt-6 max-w-[44.0625rem] text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					Le llamamos Valores Generacionales al conjunto de ideas que cada
					generación de turno expresa como manifiesto de su época, como consigna
					de su tiempo, los valores generacionales son creencias sobre cómo es el
					mundo, cómo debemos vivir en sociedad, qué debemos aceptar y rechazar.
				</p>
			</section>

			{/* Strip salmón: CREENCIAS CON SENTIDO VALÓRICO (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'CREENCIAS CON\nSENTIDO VALÓRICO'}
					alignment="left"
					backgroundColor="#ffd3b6"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<CreenciasValoricasInfo />}
					infoTitleSide="right"
				/>
			</section>

			{/* Strip naranja: NO CONFUNDIR CON VIRTUDES (derecha) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'NO CONFUNDIR\nCON VIRTUDES'}
					alignment="right"
					backgroundColor="#fa6907"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<NoConfundirVirtudesInfo />}
					infoTitleSide="left"
				/>
			</section>

			{/* Strip azul: AISLAR LOS RASGOS JUVENILES (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'AISLAR LOS\nRASGOS JUVENILES'}
					alignment="left"
					backgroundColor="#00b0f9"
					barWidth={1000}
					barHeight={137}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={22}
					infoCardContent={<AislarRasgosJuvenilesInfo />}
					infoTitleSide="right"
				/>
			</section>

			{/* Sección VALORES MILLENNIALS (centrada con figuras) */}
			<section className="mx-auto mt-12 w-full max-w-[80rem] px-5 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pt-[4.8125rem]">
				<div className="flex flex-col items-center xl:flex-row xl:items-center xl:justify-center xl:gap-8">
					<div className="hidden shrink-0 xl:block">
						<Image
							src="/millennial-figura-izq.png"
							alt=""
							width={195}
							height={320}
							className="h-auto w-[12rem]"
						/>
					</div>
					<h2 className="font-heading text-center text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
						VALORES
						<br />
						MILLENNIALS
					</h2>
					<div className="hidden shrink-0 xl:block">
						<Image
							src="/millennial-figura-der.png"
							alt=""
							width={195}
							height={320}
							className="h-auto w-[12rem]"
						/>
					</div>
				</div>
				<p className="font-body-prototype mx-auto mt-8 max-w-[37.4375rem] text-center text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-10 xl:text-[1.5625rem]">
					Los valores Millennials (cuadro 3) presentan un evidente contraste con
					los valores de las generaciones anteriores al cambio de paradigma,
					definitivamente la mentalidad cambió radicalmente.
				</p>
				<div className="mx-auto mt-10 max-w-[44.0625rem]">
					<ValoresMillennialsInfo />
				</div>
			</section>

			{/* Sección VALORES CENTENNIALS */}
			<section className="mx-auto mt-12 w-full max-w-[80rem] px-5 pb-24 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pb-[6.5rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading text-center text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
					VALORES
					<br />
					CENTENNIALS
				</h2>
				<p className="font-body-prototype mx-auto mt-8 max-w-[37.4375rem] text-center text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-10 xl:text-[1.5625rem]">
					Esta nueva generación nació en el nuevo milenio, son la primera cohorte
					realmente de nativos digitales, heredaron una buena parte de los valores
					Millennials pero con una adaptación a su estilo.
				</p>
				<div className="mx-auto mt-10 max-w-[44.0625rem]">
					<ValoresCentennialsInfo />
				</div>
			</section>
		</div>
	);
}

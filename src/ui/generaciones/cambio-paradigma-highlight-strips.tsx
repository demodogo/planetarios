import Image from 'next/image';

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { AislarRasgosJuvenilesInfo } from './info/aislar-rasgos-juveniles-info';
import { CreenciasValoricasInfo } from './info/creencias-valoricas-info';
import { GraciasTecnologiaInfo } from './info/gracias-tecnologia-info';
import { InstalarValoresInfo } from './info/instalar-valores-info';
import { NoConfundirVirtudesInfo } from './info/no-confundir-virtudes-info';
import { PocaFeInfo } from './info/poca-fe-info';
import { SinFanatsismoInfo } from './info/sin-fanatismo-info';
import { DesinteresSistemaInfo } from './info/desinteres-sistema-info';

const millenialsLeftValues = [
	{ label: 'SUSTENTABILIDAD', color: '#6e8f00' },
	{ label: 'TECNOLOGÍA', color: '#00b3eb' },
	{ label: 'EMPRENDEDOR', color: '#ff9a00' },
	{ label: 'FELICIDAD', color: '#b377fc' },
];

const millenialsRightValues = [
	{ label: 'COLABORACIÓN', color: '#fc5c5a' },
	{ label: 'GLOBALIDAD', color: '#e4c700' },
	{ label: 'DISEÑO', color: '#d88586' },
	{ label: 'EQUIDAD', color: '#0079ff' },
];

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

			{/* Sección VALORES MILLENNIALS (centrada con figuras y grilla de valores) */}
			<section className="mx-auto mt-12 w-full max-w-[80rem] px-5 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading text-center text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
					VALORES
					<br />
					MILLENNIALS
				</h2>
				<p className="font-body-prototype mx-auto mt-6 max-w-[37.4375rem] text-center text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					Los valores Millennials (cuadro 3) presentan un evidente contraste con
					los valores de las generaciones anteriores al cambio de paradigma,
					definitivamente la mentalidad cambió radicalmente.
				</p>

				{/* Entre el 2.000 y el 2.029 */}
				<p className="font-body-prototype mt-8 text-center text-[1.0625rem] font-bold leading-[1.07] text-black xl:text-[1.5625rem]">
					Entre el 2.000 y el 2.029
				</p>
				<p className="font-body-prototype mx-auto mt-3 max-w-[37.4375rem] text-center text-[1.0625rem] leading-[1.07] text-black/80 xl:text-[1.5625rem]">
					Revisemos en el siguiente cuadro los valores Millennials, que aún son
					representativos de los años veinte, aunque a partir del 2025
					empezarán a ser más gravitantes los valores Centennials.
				</p>

				{/* Grilla de valores con figura central - Millennials */}
				<div className="mx-auto mt-10 flex max-w-[62rem] flex-row items-center justify-center gap-2 xl:gap-4">
					{/* Columna izquierda */}
					<div className="flex flex-1 flex-col gap-2 text-right xl:gap-4">
						{millenialsLeftValues.map((v) => (
							<p
								key={v.label}
								className="font-heading text-[3rem] font-bold uppercase leading-tight"
								style={{ color: v.color }}
							>
								{v.label}
							</p>
						))}
					</div>

					{/* Figura central */}
					<div className="shrink-0">
						<div className="overflow-hidden rounded-[1.25rem] bg-[#00b0cd] p-2 xl:p-3">
							<Image
								src="/millennial-figura-der.png"
								alt=""
								width={390}
								height={322}
								className="h-auto w-[8rem] sm:w-[11rem] xl:w-[16rem]"
							/>
						</div>
					</div>

					{/* Columna derecha */}
					<div className="flex flex-1 flex-col gap-2 text-left xl:gap-4">
						{millenialsRightValues.map((v) => (
							<p
								key={v.label}
								className="font-heading text-[3rem] font-bold uppercase leading-tight"
								style={{ color: v.color }}
							>
								{v.label}
							</p>
						))}
					</div>
				</div>
			</section>

			{/* Strip verde: INSTALAN VALORES MIENTRAS SON JÓVENES (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'INSTALAN VALORES\nMIENTRAS SON JÓVENES'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={924}
					barHeight={128}
					titleWidth={679}
					titleOffsetX={190}
					titleOffsetY={18}
					infoCardContent={<InstalarValoresInfo />}
					infoTitleSide="right"
				/>
			</section>

			{/* Strip naranja: GRACIAS A LA TECNOLOGÍA (derecha) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'GRACIAS A LA\nTECNOLOGÍA'}
					alignment="right"
					backgroundColor="#fa6907"
					barWidth={814}
					barHeight={129}
					titleWidth={502}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<GraciasTecnologiaInfo />}
					infoTitleSide="left"
				/>
			</section>

			{/* Sección VALORES CENTENNIALS */}
			<section className="mx-auto mt-12 w-full max-w-[80rem] px-5 pt-14 sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading text-center text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
					VALORES
					<br />
					CENTENNIALS
				</h2>
				<p className="font-body-prototype mx-auto mt-6 max-w-[37.4375rem] text-center text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					Esta nueva generación nació en el nuevo milenio, son la primera cohorte
					realmente de nativos digitales, heredaron una buena parte de los valores
					Millennials pero con una adaptación a su estilo.
				</p>

				{/* Grilla de valores con figura central - Centennials */}
				<div className="mx-auto mt-10 flex max-w-[62rem] flex-row items-center justify-center gap-2 xl:gap-4">
					{/* Columna izquierda */}
					<div className="flex flex-1 flex-col gap-2 text-right xl:gap-6">
						{millenialsLeftValues.map((v) => (
							<p
								key={v.label}
								className="font-heading text-[3rem] font-bold uppercase leading-tight"
								style={{ color: v.color }}
							>
								{v.label}
							</p>
						))}
					</div>

					{/* Figura central - Centennials */}
					<div className="shrink-0">
						<div className="overflow-hidden rounded-[1.25rem] bg-[#00b0cd] p-2 xl:p-3">
							<Image
								src="/generaciones/centenials.png"
								alt=""
								width={390}
								height={294}
								className="h-auto w-[8rem] sm:w-[11rem] xl:w-[30rem]"
							/>
						</div>
					</div>

					{/* Columna derecha */}
					<div className="flex flex-1 flex-col gap-2 text-left xl:gap-4">
						{millenialsRightValues.map((v) => (
							<p
								key={v.label}
								className="font-heading text-[3rem] font-bold uppercase leading-tight"
								style={{ color: v.color }}
							>
								{v.label}
							</p>
						))}
					</div>
				</div>
			</section>

			{/* Strip verde: POCA FE EN EL FUTURO (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'POCA FE EN\nEL FUTURO'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={924}
					barHeight={128}
					titleWidth={679}
					titleOffsetX={190}
					titleOffsetY={18}
					infoCardContent={<PocaFeInfo />}
					infoTitleSide="right"
				/>
			</section>

			{/* Strip naranja: SIN FANATISMO, SON HACKERS (derecha) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'SIN FANATISMO,\nSON HACKERS'}
					alignment="right"
					backgroundColor="#fa6907"
					barWidth={814}
					barHeight={129}
					titleWidth={502}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<SinFanatsismoInfo />}
					infoTitleSide="left"
				/>
			</section>

			{/* Strip azul: DESINTERÉS POR EL SISTEMA (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden pb-24 md:mt-14 xl:mt-[3.5rem] xl:pb-[6.5rem]">
				<HighlightStripCard
					title={'DESINTERÉS POR\nEL SISTEMA'}
					alignment="left"
					backgroundColor="#00b0f9"
					barWidth={825}
					barHeight={137}
					titleWidth={679}
					titleOffsetX={190}
					titleOffsetY={22}
					infoCardContent={<DesinteresSistemaInfo />}
					infoTitleSide="right"
				/>
			</section>
		</div>
	);
}

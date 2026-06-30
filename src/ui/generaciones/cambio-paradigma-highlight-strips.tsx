'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { CambioParadigmaValueDetail } from './cambio-paradigma-value-details';
import { AislarRasgosJuvenilesInfo } from './info/aislar-rasgos-juveniles-info';
import { CreenciasValoricasInfo } from './info/creencias-valoricas-info';
import { DesinteresSistemaInfo } from './info/desinteres-sistema-info';
import { GraciasTecnologiaInfo } from './info/gracias-tecnologia-info';
import { InstalarValoresInfo } from './info/instalar-valores-info';
import { NoConfundirVirtudesInfo } from './info/no-confundir-virtudes-info';
import { PocaFeInfo } from './info/poca-fe-info';
import { SinFanatsismoInfo } from './info/sin-fanatismo-info';

type ValorItem = {
	label: string;
	color: string;
	iconSrc: string;
	content: string;
};

function ValorInteractivo({ valor, isLeft }: { valor: ValorItem; isLeft?: boolean }) {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div
			ref={containerRef}
			className="relative cursor-pointer inline-block"
			onClick={() => setIsOpen(!isOpen)}
		>
			<p
				className="font-heading text-[1.25rem] md:text-[2.5rem] font-bold uppercase leading-tight transition-transform hover:scale-105"
				style={{ color: valor.color }}
			>
				{valor.label}
			</p>

			{isOpen && (
				<CambioParadigmaValueDetail
					title={valor.label}
					content={valor.content}
					iconSrc={valor.iconSrc}
					backgroundColor={valor.color}
					isLeft={isLeft}
				/>
			)}
		</div>
	);
}

function ValoresGrid({
	leftValues,
	rightValues,
	imageSrc,
	imageWidth,
	imageHeight,
}: {
	leftValues: ValorItem[];
	rightValues: ValorItem[];
	imageSrc: string;
	imageWidth: number;
	imageHeight: number;
}) {
	return (
		<div className="mx-auto mt-10 max-w-[62rem]">
			<style>{`
				.valores-mobile { display: flex; }
				.valores-desktop { display: none; }
				@media (min-width: 768px) {
					.valores-mobile { display: none; }
					.valores-desktop { display: flex; }
				}
			`}</style>
			{/* Mobile: palabras arriba, imagen, palabras abajo */}
			<div className="valores-mobile flex-col items-center gap-4">
				<div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
					{leftValues.map((v) => (
						<ValorInteractivo key={v.label} valor={v} isLeft={true} />
					))}
				</div>
				<div className="my-4 flex justify-center">
					<div className="overflow-hidden rounded-[1.25rem] bg-[#00b0cd] p-2">
						<Image
							src={imageSrc}
							alt=""
							width={imageWidth}
							height={imageHeight}
							className="h-auto w-[10rem]"
						/>
					</div>
				</div>
				<div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
					{rightValues.map((v) => (
						<ValorInteractivo key={v.label} valor={v} isLeft={false} />
					))}
				</div>
			</div>
			{/* Desktop: 3 columnas */}
			<div className="valores-desktop flex-row items-center justify-center gap-4 xl:gap-6">
				<div className="flex flex-1 flex-col gap-3 text-right xl:gap-5">
					{leftValues.map((v) => (
						<ValorInteractivo key={v.label} valor={v} isLeft={true} />
					))}
				</div>
				<div className="shrink-0">
					<div className="overflow-hidden relative rounded-[1.25rem] p-2 xl:p-0">
						<div className="bg-[#00BBB0] absolute w-[calc(100%-16%)] left-1/2 -translate-x-1/2 top-[10%] bottom-[18%] border-4 border-white rounded-4xl z-0" />
						<Image
							src={imageSrc}
							alt=""
							width={imageWidth}
							height={imageHeight}
							className="h-auto w-[20rem] xl:w-[30rem] z-1 relative"
						/>
					</div>
				</div>
				<div className="flex flex-1 flex-col gap-3 text-left xl:gap-5">
					{rightValues.map((v) => (
						<ValorInteractivo key={v.label} valor={v} isLeft={false} />
					))}
				</div>
			</div>
		</div>
	);
}

const millenialsLeftValues = [
	{
		label: 'SUSTENTABILIDAD',
		color: '#6e8f00',
		iconSrc: '/generaciones/valores-icons/earth-care.png',
		content:
			'Tienen conciencia del planeta y del futuro, son respetuosos con el medio ambiente, con los seres que lo habitan y con los recursos naturales, buscan construir en vez de depredar ',
	},
	{
		label: 'TECNOLOGÍA',
		color: '#00b3eb',
		iconSrc: '/generaciones/valores-icons/tech.png',
		content:
			'Celebran los avances digitales que hoy permiten automatizar funciones ahorrando costos, tiempo, distancias y recursos, buscan integrar la tecnología a todo lo que hacen',
	},
	{
		label: 'EMPRENDEDOR',
		color: '#ff9a00',
		iconSrc: '/generaciones/valores-icons/emprendedor.png',
		content:
			'Valoran el modelo emprendedor, la iniciativa autónoma, la independiencia, buscan relacionarse horizontalmente, sobre todo en lo laboral donde privilegian el respeto hacia el trabajador entendido como un colaborador',
	},
	{
		label: 'FELICIDAD',
		color: '#b377fc',
		iconSrc: '/generaciones/valores-icons/happy.png',
		content:
			'Creen que el concepto de felicidad dejó de ser un cliché para transformarse en el verdadero sentido de la vida, un propósito por sobre el dinero y el poder, privilegian la felicidad porque saben que empodera a las personas',
	},
];

const millenialsRightValues = [
	{
		label: 'COLABORACIÓN',
		color: '#fc5c5a',
		iconSrc: '/generaciones/valores-icons/colaboracion.png',
		content:
			'Están inmersos en la nueva economía colaborativa, apoyan a otros a cambio de nada, forman redes, evitan desperdiciar',
	},
	{
		label: 'GLOBALIDAD',
		color: '#e4c700',
		iconSrc: '/generaciones/valores-icons/global.png',
		content:
			'Su visión es internacional, entienden que el mundo está interconectado y que si bien la realidad local requiere prioridad, a la larga todo debe tener alcance planetario, en particular los negocios',
	},
	{
		label: 'DISEÑO',
		color: '#d88586',
		iconSrc: '/generaciones/valores-icons/design.png',
		content:
			'Entienden el diseño como una forma de pensar incluso más allá de lo estético, privilegian lo armónico, lo funcional, lo ergonómico, procuran que lo construido siempre tenga diseño',
	},
	{
		label: 'EQUIDAD',
		color: '#0079ff',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'Desprecian todo lo que pretenda dominar, apartar, marginar, privar, explotar, aplastar, denigrar. Desde la discriminación de género hasta el tema de los migrantes, los pueblos originarios y minorías de cualquier tipo',
	},
];

const centennialsLeftValues = [
	{
		label: 'HACKER',
		color: '#6e8f00',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'Usan la tecnología como algo natural de su tiempo y ya no como un arma contra ideas viejas. Su condición de hacker está en su ADN, tienen el impulso de modificar todo para que se ajuste a sus intereses, no solo en lo tecnológico',
	},
	{
		label: 'AMBIENTALISMO',
		color: '#00b3eb',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'El medio ambiente es religión para esta generación, aunque tienen cierta visión política sobre el tema, no parecen interesados en el activismo ni tampoco dispuestos a pagar sobrepecio por no contaminar',
	},
	{
		label: 'AUTODIDACTAS',
		color: '#ff9a00',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'El saber ya no es un bien escaso para esta generación, todo está en la red, hay un decreciente interés por estudios formales frente al empoderamiento por aprendizaje simplificado y práctico. La IA empieza a ser algo cotidiano para estos jóvenes',
	},
	{
		label: 'DESESPERANZA',
		color: '#b377fc',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'No tienen mayor e speranza en el futuro de la humanidad, no se interesan en las relaciones a largo plazo, ni los hijos, ni en la carrera funcionaria, desconfían de las instituciones, políticos y en general del sistema, pero ya no desde la violencia',
	},
];

const centennialsRightValues = [
	{
		label: 'EQUIDAD',
		color: '#fc5c5a',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'Tienen una alta sensibilidad por los temas sociales, por la no discriminación, por la transparencia y la justicia, pero no en un sentido activista, les interesan estos temas pero no tienen disposición para ir a una marcha',
	},
	{
		label: 'GENDERLESS',
		color: '#e4c700',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'Para ellos el respeto a la diversidad en esta materia es algo principal, cada vez hay más indiferencia por el género en los asuntos que tradicionalmente marcaron diferencias entre hombres y mujeres, como vestuario, profesiones, roles, etc',
	},
	{
		label: 'HONESTOS',
		color: '#d88586',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'No están interesados en aparentar, presumir o impresionar, llevan con dignidad y honestidad su apariencia física, social o económica sin completos, no sienten mayor atractivo por el poder, la fama o la riqueza, solo lo justo para existir',
	},
	{
		label: 'PROPÓSITO ',
		color: '#0079ff',
		iconSrc: '/generaciones/valores-icons/heart.png',
		content:
			'A pesar de la desesperanza necesitan dar un sentido a sus vidas, por eso buscan refugio en la espiritualidad, a falta de religiones, requieren un propósito que les oriente y refuerce su identidad, las redes le ayudan a encontrar burbujas de contención',
	},
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
						BabyBoomers y los Gen X (Tempranos y Tardíos), agrupan un conjunto
						de creencias pertenecientes a la cultura del antiguo paradigma,
						&ldquo;La Sociedad Disciplinaria&rdquo;.
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
					de su tiempo, los valores generacionales son creencias sobre cómo es
					el mundo, cómo debemos vivir en sociedad, qué debemos aceptar y
					rechazar.
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
					representativos de los años veinte, aunque a partir del 2025 empezarán
					a ser más gravitantes los valores Centennials.
				</p>

				{/* Grilla de valores con figura central - Millennials */}
				<ValoresGrid
					leftValues={millenialsLeftValues}
					rightValues={millenialsRightValues}
					imageSrc="/millennial-figura-der.png"
					imageWidth={390}
					imageHeight={294}
				/>
			</section>

			{/* Strip verde: INSTALAN VALORES MIENTRAS SON JÓVENES (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'INSTALAN VALORES\nMIENTRAS SON JÓVENES'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
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
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
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
					Esta nueva generación nació en el nuevo milenio, son la primera
					cohorte realmente de nativos digitales, heredaron una buena parte de
					los valores Millennials pero con una adaptación a su estilo.
				</p>

				{/* Grilla de valores con figura central - Centennials */}
				<ValoresGrid
					leftValues={centennialsLeftValues}
					rightValues={centennialsRightValues}
					imageSrc="/generaciones/centenials.png"
					imageWidth={490}
					imageHeight={294}
				/>
			</section>

			{/* Strip verde: POCA FE EN EL FUTURO (izquierda) */}
			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'POCA FE EN\nEL FUTURO'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
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
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
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
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<DesinteresSistemaInfo />}
					infoTitleSide="right"
				/>
			</section>
		</div>
	);
}

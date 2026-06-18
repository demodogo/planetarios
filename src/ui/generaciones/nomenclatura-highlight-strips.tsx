import Image from 'next/image';

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { FechaMilitanciaInfo } from './info/fecha-militancia-info';
import { GeneracionesSobrepuestasInfo } from './info/generaciones-sobrepuestas-info';
import { GeneracionesTempranasInfo } from './info/generaciones-tempranas-info';

export function NomenclaturaHighlightStrips() {
	return (
		<div className="flex w-full flex-col">
			<section className="mx-auto w-full max-w-[80rem] px-5 pb-10 pt-14 text-center sm:px-8 xl:px-[3.1875rem] xl:pb-16 xl:pt-[4.8125rem]">
				<h1 className="font-heading text-[2.5rem] md:text-[3.125rem] font-bold uppercase leading-[1] text-black xl:text-[4.6875rem]">
					NOMENCLATURA
				</h1>
				<div className="font-body-prototype mx-auto mt-6 flex max-w-[42.875rem] flex-col gap-4 text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					<p>
						Cada generación de turno la denominamos con los mismos nombres que
						utiliza la mayoría de las fuentes, por ejemplo,
						&ldquo;Babyboomer&rdquo;, &ldquo;GenX&rdquo; o
						&ldquo;Millennial&rdquo;. Sin embargo nosotros no usamos las mismas
						fechas que usan muchos para establecer el período que cubre cada
						generación.
					</p>
					<p>
						Nosotros utilizamos nuestras propias fechas: consideramos para cada
						generación períodos exactos de 10 años c/u.
					</p>
				</div>
			</section>
			<section className="flex w-full flex-col overflow-x-hidden pt-4 xl:pt-0">
				<HighlightStripCard
					title={'FECHA DE MILITANCIA,\nNO DE NACIMIENTO'}
					alignment="left"
					backgroundColor="#c1e61e"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<FechaMilitanciaInfo />}
					infoTitleSide="right"
				/>
			</section>

			<section className="mt-12 w-full bg-[#ffd3b6] px-5 py-12 text-center sm:px-8 sm:py-16 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:py-[4.5rem]">
				<div className="mx-auto max-w-[80rem]">
					<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[3.125rem]">
						CONVENCIÓN
					</h2>
					<p className="font-body-prototype mx-auto mt-6 max-w-[54.125rem] text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
						El acuerdo de asignar 10 años regulares a cada generación, y hacerla
						coincidir con el comienzo y final de la década, no es exacta ni
						totalmente coincidente con el resto de autores. Sin embargo, tiene
						el beneficio de ser un método simple, práctico, fácil de recordar y
						de aplicar cuando se trata de entender el comportamiento de grupos
						etários en una ecuación de negocios.
					</p>
				</div>
			</section>

			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[8rem]">
				<HighlightStripCard
					title={'GENERACIONES\nTEMPRANAS Y TARDIAS'}
					alignment="left"
					backgroundColor="#fa6907"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={250}
					titleOffsetY={18}
					infoCardContent={<GeneracionesTempranasInfo />}
					infoTitleSide="right"
				/>
			</section>

			<section className="mt-12 flex w-full flex-col overflow-x-hidden md:mt-14 xl:mt-[3.5rem]">
				<HighlightStripCard
					title={'GENERACIONES\nSOBREPUESTAS'}
					alignment="right"
					backgroundColor="#ffd3b6"
					barWidth={1000}
					barHeight={129}
					titleWidth={679}
					titleOffsetX={60}
					titleOffsetY={18}
					infoCardContent={<GeneracionesSobrepuestasInfo />}
					infoTitleSide="left"
				/>
			</section>

			<section className="mx-auto mt-12 flex w-full max-w-[80rem] flex-col items-center px-5 pb-24 pt-14 text-center sm:px-8 md:mt-14 xl:mt-[3.5rem] xl:px-[3.1875rem] xl:pb-[6.5rem] xl:pt-[4.8125rem]">
				<h2 className="font-heading text-[2.5rem] font-bold uppercase leading-[1] text-black sm:text-[3rem] xl:text-[4.6875rem]">
					CUADRANTE
					<br />
					GENERACIONAL
				</h2>
				<div className="font-body-prototype mx-auto mt-6 flex max-w-[39.1875rem] flex-col gap-4 text-[1.0625rem] leading-[1.07] text-black/80 xl:mt-8 xl:text-[1.5625rem]">
					Esto significa que una misma generación de turno militará durante dos
					décadas, pero a cada década se le asigna –por convención- el nombre de
					la generación entrante (“cuadrante generacional”) Las generaciones de
					turno son como olas que se forman y avanzan durante dos décadas
					agrupando jóvenes entre 20 y 29 años que van conformando la cultura de
					su tiempo
				</div>
				<div className="mt-12 w-full max-w-[74.0625rem] xl:mt-16">
					<Image
						src="/escalera-generacional.png"
						alt="Cuadrante generacional - escalera generacional"
						width={1185}
						height={449}
						className="h-auto w-full"
						priority
					/>
				</div>
			</section>
		</div>
	);
}

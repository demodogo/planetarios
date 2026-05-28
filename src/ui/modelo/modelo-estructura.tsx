import { MODEL_RING_COLORS, ModeloVariableCard } from './modelo-variable-card';

const items = [
	{
		color: '#FFD3B6',
		label: 'propósito',
		sublabel: 'inspiración',
		description:
			'La empresa debe tener un propósito y al mismo tiempo ser rentable',
		popoverDescription:
			'El propósito es un anhelo genuino de una organización por crear un mundo mejor, por resolver un dolor social o ambiental, desde el giro mismo de su negocio. No es RSE, filantropía ni marketing. Las empresas pueden tener un propósito y al mismo tiempo ser rentables.',
		popoverBackgroundColor: '#FFD3B6',
		popoverSide: 'left' as const,
	},
	{
		color: '#AC0018',
		label: 'mercado',
		sublabel: 'demanda',
		description:
			'Proporciona información del entorno, visualiza estrategia, tendencias, oportunidades, amenazas',
		popoverDescription:
			'El mercado es una variable que proporciona información del entorno, visualiza actores, tendencias, oportunidades, amenazas. Permite detectar necesidades y orienta cómo satisfacerlas. El sentido de la observación no es sólo obtener beneficios económicos sino también contribuir al bien común.',
		popoverBackgroundColor: '#AC0018',
		popoverSide: 'left' as const,
	},
	{
		color: '#FFE940',
		label: 'fuentes',
		sublabel: 'respaldo',
		description:
			'Considera 4 variables: Hechos – Fuentes – Tecnología – Procesos',
		popoverDescription:
			'Define lo técnicamente necesario para hacer realidad la propuesta de valor. Las fuentes están al servicio del mercado y no solo de necesidades internas. Se considera la eficiencia pero cuidando la efectividad.',
		popoverBackgroundColor: '#FFE940',
		popoverSide: 'right' as const,
	},
	{
		color: '#FA6907',
		label: 'canales',
		sublabel: 'entrega',
		description:
			'Establece la cadena comercial para llegar al mercado, incluyendo mecanismos físicos y digitales',
		popoverDescription:
			'Esta variable establece la cadena comercial y física para que la propuesta de valor se conecte de forma adecuada con la demanda. Incluye vendedores, distribuidores, agentes, representantes, plataformas, tiendas, almacenaje, transporte y delivery. Implica vincularse con canales conscientes.',
		popoverBackgroundColor: '#FA6907',
		popoverSide: 'right' as const,
	},
	{
		color: '#00B0F9',
		label: 'segmentos',
		sublabel: 'impacto',
		description:
			'Identifica antropológicamente a un grupo del mercado con necesidades concretas',
		popoverDescription:
			'Esta variable identifica antropológicamente al grupo específico del mercado al que se busca impactar, que tanto la elección del segmento acerca al propósito. Asocia demanda con valores generacionales. Define si el segmento es b2b o b2c.',
		popoverBackgroundColor: '#00B0F9',
		popoverSide: 'left' as const,
	},
	{
		color: '#762ADD',
		label: 'prop. valor',
		sublabel: 'oferta',
		description:
			'Responde 3 preguntas: Qué necesidad satisfacer, Qué beneficios agrega, Cómo se diferencia',
		popoverDescription: `Promesa que resuelve genuinamente demandas específicas de determinados segmentos del mercado.`,
		popoverBackgroundColor: '#762ADD',
		popoverSide: 'left' as const,
	},
	{
		color: '#C1E61E',
		label: 'comunicación',
		sublabel: 'relato',
		description:
			'Estrategia para alcanzar el objetivo de comunicación. La comunicación debe ser genuina y ética',
		popoverDescription:
			'Aquí se define la estrategia para alcanzar posicionamiento, imagen y reputación, también para incentivar la venta. Se arranca desde un relato que luego se convierte en contenido de valor y que se despliega en mensajes que se distribuyen por una red de medios. La comunicación debe ser genuina y ética.',
		popoverBackgroundColor: '#C1E61E',
		popoverSide: 'right' as const,
	},
	{
		color: '#257125',
		label: 'resultados',
		sublabel: 'proyecciones',
		description:
			'Permite evaluar la viabilidad financiera del proyecto y el retorno de la inversión',
		popoverDescription:
			'Esta variable permite evaluar la viabilidad financiera del proyecto y calcular el retorno de la inversión. Incluye análisis de EERR pero no así el Balance ni los estados de Caja. Además de las variables económicas establece los parámetros de impacto social y ambiental, cómo el propósito genera el triple impacto.',
		popoverBackgroundColor: '#257125',
		popoverSide: 'right' as const,
	},
];

const OUTER_CIRCLE_SIZE = 100;
const RING_STEP = 11.5;

function Circles() {
	return (
		<>
			{MODEL_RING_COLORS.map((color, i) => {
				const size = OUTER_CIRCLE_SIZE - i * RING_STEP;
				return (
					<div
						key={color}
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
						style={{
							width: `${size}%`,
							height: `${size}%`,
							backgroundColor: color,
						}}
					/>
				);
			})}
		</>
	);
}

export function ModeloEstructura() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="relative mx-auto w-full max-w-full lg:min-h-[43.75rem] xl:min-h-[56.1875rem]">
				<div className="relative z-10 px-5 pt-8 sm:px-8 lg:absolute lg:bottom-0 lg:left-0 lg:top-0 lg:flex lg:w-[24.25rem] lg:items-center lg:bg-white lg:px-[3.1875rem] xl:static xl:w-full xl:items-start xl:bg-transparent xl:pt-[22rem]">
					<div className="w-full md:w-[22rem] lg:w-full xl:w-[29.125rem]">
						<p className="font-heading text-[0.8125rem] font-normal uppercase text-black/60 sm:text-[0.875rem] lg:text-[1.125rem]">
							COMO SE ESTRUCTURA
						</p>
						<h2 className="font-heading mt-1 text-[2rem] font-bold uppercase leading-[1] text-black sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[4rem]">
							EL MODELO
							<br />
							DE VALOR
						</h2>
						<p className="font-body-prototype mt-4 text-[1.2rem] leading-[1.07] text-black/80 sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] xl:text-[1.375rem]">
							El modelo de valor es una matriz de 8 variables que sirve para
							configurar proyectos de todo tipo sean estos comerciales,
							artísticos, deportivos, sociales o de cualquier índole.
						</p>
					</div>
				</div>

				<div className="mt-6 flex justify-center lg:hidden">
					<div className="relative h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] md:h-[38rem] md:w-[38rem]">
						<Circles />
					</div>
				</div>

				<div
					className="absolute top-0 hidden lg:block xl:hidden"
					style={{ right: '-4rem', width: '43.75rem', height: '43.75rem' }}
				>
					<div className="relative h-full w-full">
						<Circles />
					</div>
				</div>

				<div
					className="absolute top-0 hidden xl:block"
					style={{
						right: '-5.3125rem',
						width: '56.1875rem',
						height: '56.1875rem',
					}}
				>
					<div className="relative h-full w-full">
						<Circles />
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-10 sm:px-8 lg:px-[3.1875rem] lg:pb-24">
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
					{items.map((item) => (
						<ModeloVariableCard key={item.sublabel} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}

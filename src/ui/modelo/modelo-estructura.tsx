const items = [
	{
		color: '#FFD3B6',
		label: 'propósito',
		sublabel: 'inspiración',
		description: 'La empresa debe tener un propósito y al mismo tiempo ser rentable',
	},
	{
		color: '#AC0018',
		label: 'mercado',
		sublabel: 'demanda',
		description:
			'Proporciona información del entorno, visualiza estrategia, tendencias, oportunidades, amenazas',
	},
	{
		color: '#FFE940',
		label: 'fuentes',
		sublabel: 'respaldo',
		description: 'Considera 4 variables: Hechos – Fuentes – Tecnología – Procesos',
	},
	{
		color: '#FA6907',
		label: 'canales',
		sublabel: 'entrega',
		description:
			'Establece la cadena comercial para llegar al mercado, incluyendo mecanismos físicos y digitales',
	},
	{
		color: '#00B0F9',
		label: 'segmentos',
		sublabel: 'impacto',
		description:
			'Identifica antropológicamente a un grupo del mercado con necesidades concretas',
	},
	{
		color: '#762ADD',
		label: 'prop. valor',
		sublabel: 'oferta',
		description:
			'Responde 3 preguntas: Qué necesidad satisfacer, Qué beneficios agrega, Cómo se diferencia',
	},
	{
		color: '#C1E61E',
		label: 'comunicación',
		sublabel: 'relato',
		description:
			'Estrategia para alcanzar el objetivo de comunicación. La comunicación debe ser genuina y ética',
	},
	{
		color: '#257125',
		label: 'resultados',
		sublabel: 'proyecciones',
		description:
			'Permite evaluar la viabilidad financiera del proyecto y el retorno de la inversión',
	},
];

const ringColors = [
	'rgba(37, 113, 37, 1)',
	'#C1E61E',
	'#762ADD',
	'#00B0F9',
	'#FA6907',
	'#FFE940',
	'#AC0018',
	'#FFD3B6',
];

function Circles() {
	return (
		<>
			{ringColors.map((color, i) => {
				const size = 100 - i * 10.5;
				return (
					<div
						key={i}
						className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
						style={{ width: `${size}%`, height: `${size}%`, backgroundColor: color }}
					/>
				);
			})}
		</>
	);
}

export function ModeloEstructura() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="relative w-full xl:min-h-[56.1875rem]">

				<div className="relative z-10 mx-auto w-full max-w-[80rem] px-5 pt-8 sm:px-8 xl:px-[3.1875rem] xl:pt-[22rem]">
					<div className="w-full md:w-[22rem] lg:w-[26rem] xl:w-[29.125rem]">
						<p className="font-heading text-[0.8125rem] font-normal uppercase text-black/60 sm:text-[0.875rem] md:text-[1rem] xl:text-[1.125rem]">
							COMO SE ESTRUCTURA
						</p>
						<h2 className="font-heading mt-1 text-[2rem] font-bold uppercase leading-[1] text-black sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[4rem]">
							EL MODELO
							<br />
							DE VALOR
						</h2>
						<p className="font-body-prototype mt-4 text-[0.875rem] leading-[1.07] text-black/80 sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.375rem]">
							El modelo de valor es una matriz de 8 variables que sirve para
							configurar proyectos de todo tipo sean estos comerciales, artísticos,
							deportivos, sociales o de cualquier índole.
						</p>
					</div>
				</div>

				<div className="mt-6 flex justify-center xl:hidden">
					<div className="relative h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] md:h-[34rem] md:w-[34rem] lg:h-[44rem] lg:w-[44rem]">
						<Circles />
					</div>
				</div>

				<div
					className="absolute top-0 hidden xl:block"
					style={{ right: '-5.3125rem', width: '56.1875rem', height: '56.1875rem' }}
				>
					<div className="relative h-full w-full">
						<Circles />
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-[80rem] px-5 pb-16 pt-10 sm:px-8 xl:px-[3.1875rem] xl:pb-24">
				<div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 xl:gap-x-8 xl:gap-y-12">
					{items.map((item) => (
						<div key={item.sublabel} className="flex flex-col items-center text-center xl:items-start xl:text-left">
							<div
								className="h-[7rem] w-[7rem] rounded-full border-[1.75rem] sm:h-[8rem] sm:w-[8rem] sm:border-[2rem] xl:h-[9.1875rem] xl:w-[9.1875rem] xl:border-[2.5rem]"
								style={{ borderColor: item.color }}
							/>
							<p className="font-heading mt-2 text-[0.75rem] leading-tight text-black/80 sm:text-[0.8125rem] xl:mt-3 xl:text-[0.875rem]">
								<span className="font-light uppercase">{item.label}</span>
								<br />
								<span className="font-bold uppercase">{item.sublabel}</span>
							</p>
							<p className="font-body-prototype mt-1 text-[0.6875rem] leading-[1.1] text-black/70 sm:text-[0.75rem] xl:text-[0.8125rem]">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

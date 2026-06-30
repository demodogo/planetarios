import Image from 'next/image';
import Link from 'next/link';

import { ASSOCIATE_LOGOS } from '@/constants/brand-logos';

const teamMembers = [
	{
		name: 'ROBERTO RÍOS',
		role: 'Consultor en Modelo de Valor',
		color: '#C1E61E',
		imageSrc: '/team/roberto.png',
	},
	{
		name: 'TAYDE VARGAS',
		role: 'Antropóloga Visual',
		color: '#00B0F9',
		imageSrc: '/team/tayde.png',
	},
	{
		name: 'SEBASTIÁN RIOS',
		role: 'Consultor en Modelo de Valor',
		color: '#FFD3B6',
		imageSrc: '/team/sebastian.png',
	},
] as const;

function LinkedinBadge() {
	return (
		<Link
			href="#"
			aria-label="LinkedIn"
			className="absolute right-[-1.125rem] top-[-0.7rem] z-10 block"
		>
			<Image
				src="/linkedin.png"
				alt="Linkedin"
				width={41}
				height={41}
				className="h-8 w-8"
			/>
		</Link>
	);
}

function TeamCard({
	name,
	role,
	color,
	imageSrc,
}: (typeof teamMembers)[number]) {
	return (
		<article className="flex flex-col items-center">
			<div className="relative w-[13.125rem]">
				<LinkedinBadge />
				<div className="relative h-[20rem] w-full overflow-hidden rounded-[0.625rem] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.12)]">
					<Image
						src={imageSrc}
						alt={name}
						fill
						className="object-contain object-bottom"
						sizes="210px"
					/>
				</div>
			</div>
			<div
				className="relative z-10 -mt-[0.8125rem] flex min-h-[3.5rem] w-[15.8125rem] items-center justify-center px-4 text-center"
				style={{ backgroundColor: color }}
			>
				<p className="font-heading text-[1.5rem] font-bold uppercase leading-none text-black">
					{name}
				</p>
			</div>
			<p className="font-body-prototype mt-3 text-center text-[1.0625rem] italic leading-none text-black/80">
				{role}
			</p>
		</article>
	);
}

export function NosotrosPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col bg-white">
			<main className="flex flex-1 flex-col">
				<section className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 pb-20 pt-16 sm:px-8 xl:px-[3.1875rem] xl:pb-[7rem] xl:pt-[5.25rem]">
					<h1 className="font-heading text-center text-[3.75rem] font-bold uppercase leading-none text-black sm:text-[4.5rem] xl:text-[4.6875rem]">
						EQUIPO
					</h1>
					<p className="font-body-prototype mb-8 mt-6 max-w-[51.5rem] text-center text-[1.125rem] leading-[1.18] text-black/80 xl:text-[1.5625rem]">
						Somos una consultora estratégica que propone cambios al modelo de
						negocio de las empresas para que puedan adaptarse mejor a los
						cambios que cada tanto va experimentando la sociedad. Nos dedicamos
						a la antropología de los negocios.
					</p>

					<div className="mt-16 grid w-full max-w-[64rem] grid-cols-1 justify-items-center gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:mt-[4.25rem] xl:max-w-none xl:gap-x-[11.625rem] xl:gap-y-0">
						{teamMembers.map((member) => (
							<TeamCard key={member.name} {...member} />
						))}
					</div>
				</section>

				<section className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 pb-24 sm:px-8 xl:px-[3.1875rem] xl:pb-[8.5rem]">
					<h2 className="font-heading text-center text-[3.5rem] font-bold uppercase leading-[0.92] text-black sm:text-[4.5rem] xl:text-[4.6875rem]">
						FOCO EN LA
						<br />
						ANTROPOLOGIA
					</h2>
					<div className="mt-10 w-full max-w-[60rem] text-left text-black/80 xl:mt-12">
						<p className="font-body-prototype text-[1.125rem] leading-[1.18] xl:text-[1.5625rem]">
							Ponemos especial atención en contar con antropólogos expertos en
							retratar la cultura de cada tiempo, de cada latitud, de cada
							ambiente, las creencias, los valores de cada capa generacional,
							aquello que resulta insuficiente capturar solo con herramientas
							sicodemográficas.
						</p>
						<p className="font-body-prototype mt-8 text-[1.125rem] leading-[1.18] xl:text-[1.5625rem]">
							<span className="font-bold text-black">Mayores y menores</span>
							<br />
							Contamos con profesionales con largos años de experiencia en el
							complejo puzzle de los negocios y también con jóvenes ingenieros
							con la vivencia de la cultura actual, de esta forma es posible
							combinar habilidades y acercarse más certeramente tanto a los
							“what” como a los “how”.
						</p>
					</div>
				</section>

				<section className="mx-auto flex w-full max-w-[80rem] flex-col px-5 pb-24 sm:px-8 xl:px-[6rem] xl:pb-[10rem]">
					<div className="flex flex-col items-center gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-14">
						<h2 className="font-heading text-[3.5rem] font-bold uppercase leading-none text-black sm:text-[4rem] xl:text-[4.6875rem]">
							PARTNERS
						</h2>
						<div className="flex flex-col items-center gap-8 xl:flex-row xl:items-center xl:gap-10">
							{ASSOCIATE_LOGOS.map((associate, index) => (
								<div
									key={associate.title}
									className="flex items-center gap-8 xl:gap-10"
								>
									<div className="relative">
										<Image
											src={associate.logo}
											alt={associate.title}
											className={associate.classNames}
										/>
									</div>
									{index < ASSOCIATE_LOGOS.length - 1 ? (
										<div className="hidden h-[3.75rem] w-px bg-black/35 xl:block" />
									) : null}
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

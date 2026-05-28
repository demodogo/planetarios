import { HomeFooter } from '@/ui/shared/footer';
import { SiteNavbar } from '@/ui/shared/site-navbar';

const teamMembers = [
	{
		name: 'ROBERTO RÍOS',
		role: 'Consultor en Modelo de Valor',
		color: '#C1E61E',
		img: '/team/roberto.png',
	},
	{
		name: 'TAYDE VARGAS',
		role: 'Antropóloga Visual',
		color: '#00B0F9',
		img: '/team/tayde.png',

	},
	{
		name: 'SEBASTIÁN RIOS',
		role: 'Consultor en Modelo de Valor',
		color: '#FFD3B6',
		img: '/team/sebastian.png',
	},
];

export function NosotrosPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<main className="flex flex-1 flex-col bg-white">
				<section className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 py-12 sm:px-8 xl:px-[3.1875rem] xl:py-20">
					<h1 className="font-heading text-[3rem] font-bold uppercase leading-none text-black sm:text-[4rem] xl:text-[4.6875rem]">
						EQUIPO
					</h1>
					<p className="font-body-prototype mt-6 max-w-[51.5rem] text-center text-[1rem] leading-[1.07] text-black/80 sm:text-[1.125rem] xl:text-[1.5625rem]">
						Somos una consultora estratégica que propone cambios al modelo de negocio de las
						empresas para que puedan adaptarse mejor a los cambios que cada tanto va
						experimentando la sociedad. Nos dedicamos a la antropología de los negocios.
					</p>

					<div className="mt-12 grid w-full grid-cols-1 gap-10 sm:grid-cols-3 xl:mt-16 xl:gap-8">
						{teamMembers.map((member) => (
							<div key={member.name} className="flex flex-col items-center">
								<div className="relative h-[25rem] w-full overflow-hidden rounded-[0.9375rem]">
									<img
										src={member.img}
										alt={member.name}
										className="h-full w-full object-contain object-top"
									/>
								</div>
								<div
                                    className="relative z-10 flex w-full items-center justify-center px-4 py-2 -mt-7"
									style={{ backgroundColor: member.color }}
								>
									<p className="font-heading text-[1.25rem] font-bold uppercase text-black xl:text-[1.5rem]">
										{member.name}
									</p>
								</div>
								<p className="font-body-prototype mt-2 text-center text-[1rem] italic text-black/80 xl:text-[1.125rem]">
									{member.role}
								</p>
							</div>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

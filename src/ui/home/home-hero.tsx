export function HomeHero() {
	return (
		<section className="mx-auto px-5 flex w-full flex-col items-center pt-14 md:pt-20 text-center">
			<div className="flec w-min flex-col items-center">
				<h2 className="font-heading text-5xl md:text-[5rem] uppercase font-bold lg:text-[7rem] xl:text-[8rem]">
					QUÉ ES
				</h2>
				<h1 className="font-heading text-5xl md:text-[5rem] lg:text-[7rem] font-bold uppercase text-[var(--brand-purple)] leading-[1.2]">
					PLANETARIOS
				</h1>
				<h2 className="font-heading text-5xl md:text-[5rem] lg:text-[7rem] font-bold  leading-[1.2]">
					CONSULTORA
				</h2>
				<p className="font-body-prototype text-justify md:text-center text-base font-light text-[rgb(0_0_0_/_0.8)] text-[1.125rem] md:text-[1.26rem] lg:text-[1.3125rem] xl:text-[1.5625rem]">
					Somos una consultora estratégica que propone cambios al modelo de
					negocio de las empresas para que puedan adaptarse mejor a los cambios
					que cada tanto va experimentando la sociedad. Nos dedicamos a la
					antropología de los negocios.
				</p>
			</div>
		</section>
	);
}

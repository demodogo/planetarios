export function HomeHero() {
	return (
		<section className="mx-auto px-5 flex w-full flex-col items-center pt-12 md:pt-32 text-center mb-8 md:mb-0">
			<style>
				{`
					@keyframes color-change {
						0%, 100% { color: #762add; }
						20% { color: #c1e61e; }
						40% { color: #00b0f9; }
						60% { color: #ffe940; }
						80% { color: #fa6907; }
					}
					.animate-color-change {
						animation: color-change 20s infinite;
					}
				`}
			</style>
			<div className="flex w-min flex-col items-center">
				<h2 className="font-heading text-[2.5rem] md:text-[5rem] uppercase font-bold lg:text-[7rem] xl:text-[8rem]">
					QUÉ ES
				</h2>
				<h1 className="font-heading text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-bold uppercase leading-[1.2] animate-color-change">
					PLANETARIOS
				</h1>
				<h2 className="font-heading text-[2.5rem] md:text-[5rem] lg:text-[7rem] font-bold  leading-[1.2]">
					CONSULTORA
				</h2>
				<p className="font-body-prototype text-justify md:text-center text-base font-light text-[rgb(0_0_0_/_0.8)] text-[1rem] md:text-[1.26rem] lg:text-[1.5rem] xl:text-[1.5625rem]">
					Somos una consultora estratégica que propone cambios al modelo de
					negocio de las empresas para que puedan adaptarse mejor a los cambios
					que cada tanto va experimentando la sociedad. Nos dedicamos a la
					antropología de los negocios.
				</p>
			</div>
		</section>
	);
}

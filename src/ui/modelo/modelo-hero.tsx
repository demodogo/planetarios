export function ModeloHero() {
	return (
		<section className="relative mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 pb-10 pt-14 sm:px-8 xl:px-[3.1875rem] xl:pb-16 xl:pt-[5.5rem]">
			<div className="absolute inset-0 -z-10 bg-[#00b0f9] xl:top-[1rem] xl:h-[40rem]" />
			<h2 className="font-heading text-[2rem] font-bold uppercase text-white xl:text-[2rem]">
				QUE ES EL
			</h2>
			<h1 className="font-heading text-center text-[5rem] font-bold uppercase leading-[1] text-black xl:text-[8rem]">
				MODELO
				<br />
				DE VALOR
			</h1>
			<p className="font-body-prototype mt-8 max-w-[43.9375rem] text-[1.0625rem] leading-[1.07] text-black/80 xl:text-[1.5625rem]">
				El Modelo de Valor es una herramienta de creación propia desarrollada por
				Planetarios Consultora en colaboración con nuestros asociados la
				consultora{' '}
				<span className="font-bold">Advisory Service</span>
			</p>
		</section>
	);
}

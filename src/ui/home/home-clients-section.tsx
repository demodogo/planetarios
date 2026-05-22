import Image from 'next/image';

import { ASSOCIATE_LOGOS, CLIENT_LOGOS } from '@/constants/brand-logos';

export function HomeClientsSection() {
	return (
		<section className="w-full  bg-[var(--surface-muted)]">
			<div className="mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20 xl:px-[7.5625rem] xl:pb-[3.4375rem] xl:pt-[5.8125rem]">
				<h3 className="font-heading text-center text-[2.625rem] leading-none font-bold text-black sm:text-[3.25rem] xl:text-[4rem]">
					NUESTROS CLIENTES
				</h3>
				<p className="font-body-prototype mt-3 max-w-[45.4375rem] text-center text-base leading-[1.18] font-light text-[rgb(0_0_0_/_0.8)] sm:text-[1.125rem] md:text-[1.3rem] lg:text-[1.8rem] xl:mt-[0.625rem] xl:text-[1.5625rem] xl:leading-[1.07]">
					Hemos trabajado con clientes internacionales y locales, con
					corporativos, medianas empresas y emprendedores, todos ellos de los
					más variados rubros.
				</p>

				<div className="mt-10 grid w-full grid-cols-2 place-items-center gap-x-6 gap-y-8 md:grid-cols-4 xl:mt-[2.25rem] xl:flex xl:h-[12.125rem] xl:w-[64.8125rem] xl:items-center xl:justify-between">
					{CLIENT_LOGOS.map((client) => (
						<Image
							key={client.title}
							src={client.logo}
							alt={client.title}
							className={client.classNames}
						/>
					))}
				</div>

				<h4 className="font-heading mt-28 text-center text-[1.5rem] leading-none font-bold text-black sm:text-[1.75rem] xl:mt-[5.5625rem] xl:text-[2rem]">
					EMPRESAS ASOCIADAS
				</h4>

				<div className="mt-8 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16 xl:mt-[2.0625rem] xl:gap-[10rem]">
					{ASSOCIATE_LOGOS.map((associate) => (
						<Image
							key={associate.title}
							src={associate.logo}
							alt={associate.title}
							className={associate.classNames}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

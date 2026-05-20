import Image from 'next/image';

import { ASSOCIATE_LOGOS, CLIENT_LOGOS } from '@/constants/brand-logos';

interface HomeClientsSectionProps {
	inSlide?: boolean;
}

export function HomeClientsSection({
	inSlide = false,
}: HomeClientsSectionProps) {
	const wrapperClassName = inSlide
		? 'mx-auto flex h-full w-full max-w-[80rem] flex-col items-center px-5 pb-8 pt-10 sm:px-8 lg:justify-between lg:px-12 lg:pb-10 lg:pt-10'
		: 'mx-auto flex w-full max-w-[80rem] flex-col items-center px-5 pb-14 pt-16 sm:px-8 md:pb-16 md:pt-20 xl:px-[7.5625rem] xl:pb-[3.4375rem] xl:pt-[5.8125rem]';

	const clientsGridClassName = inSlide
		? 'mt-8 grid w-full max-w-[64.8125rem] grid-cols-2 place-items-center gap-x-6 gap-y-8 md:grid-cols-4 lg:mt-6 lg:flex lg:items-center lg:justify-between'
		: 'mt-10 grid w-full grid-cols-2 place-items-center gap-x-6 gap-y-8 md:grid-cols-4 xl:mt-[2.25rem] xl:flex xl:h-[12.125rem] xl:w-[64.8125rem] xl:items-center xl:justify-between';

	const associatesTitleClassName = inSlide
		? 'font-heading mt-10 text-center text-[1.5rem] leading-none font-bold text-black sm:text-[1.75rem] lg:mt-8 lg:text-[2rem]'
		: 'font-heading mt-14 text-center text-[1.5rem] leading-none font-bold text-black sm:text-[1.75rem] xl:mt-[5.5625rem] xl:text-[2rem]';

	const associatesGridClassName = inSlide
		? 'mt-6 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16 lg:mt-6 lg:gap-24'
		: 'mt-8 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16 xl:mt-[2.0625rem] xl:gap-[10rem]';

	return (
		<section className="w-full">
			<div className={wrapperClassName}>
				<h3 className="font-heading text-center text-[2.625rem] leading-none font-bold text-black sm:text-[3.25rem] xl:text-[4rem]">
					NUESTROS CLIENTES
				</h3>
				<p className="font-body-prototype mt-3 max-w-[45.4375rem] text-center text-base leading-[1.18] font-light text-[rgb(0_0_0_/_0.8)] sm:text-[1.125rem] xl:mt-[0.625rem] xl:text-[1.5625rem] xl:leading-[1.07]">
					Hemos trabajado con clientes internacionales y locales, con
					corporativos, medianas empresas y emprendedores, todos ellos de los
					más variados rubros.
				</p>

				<div className={clientsGridClassName}>
					{CLIENT_LOGOS.map((client) => (
						<Image
							key={client.title}
							src={client.logo}
							alt={client.title}
							className={client.classNames}
						/>
					))}
				</div>

				<h4 className={associatesTitleClassName}>
					EMPRESAS ASOCIADAS
				</h4>

				<div className={associatesGridClassName}>
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

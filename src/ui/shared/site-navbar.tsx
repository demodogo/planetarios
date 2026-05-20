import { PLANETARIOS_LOGOS } from '@/constants/brand-logos';
import Image from 'next/image';
import Link from 'next/link';

export function SiteNavbar() {
	return (
		<header className="w-full bg-white shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)]">
			<div className="mx-auto flex min-h-[6.25rem] w-full max-w-[80rem] items-center flex-col gap-8 p-5 lg:flex-row lg:px-16">
				<Image
					src={PLANETARIOS_LOGOS.planetariosBlack}
					alt={'Planetarios'}
					width={59}
				/>
				<nav className="font-heading flex w-full flex-col items-center gap-3 text-md sm:justify-around sm:flex-row flex-1">
					<Link href="#">MODELO DE VALOR</Link>
					<Link
						href="#"
						className="flex w-full items-center bg-[var(--brand-yellow)] px-6 py-2 rounded-full text-center max-w-fit"
					>
						GENERACIONES DE TURNO
					</Link>
					<Link href="#">NOSOTROS</Link>
				</nav>
			</div>
		</header>
		/* <header className="w-full bg-white shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)]">
			<div className="mx-auto flex min-h-[6.25rem] w-full max-w-[80rem] flex-col gap-4 px-5 py-5 sm:px-8 xl:h-[6.25rem] xl:flex-row xl:items-center xl:gap-0 xl:px-[4.8125rem] xl:py-0">
				<Image
					src={PLANETARIOS_LOGOS.planetariosBlack}
					alt="Planetarios"
					width={59}
					height={59}
					className="h-[3.6875rem] w-[3.6875rem]"
				/>

				<nav className="font-heading flex w-full flex-col items-center gap-3 text-[0.9375rem] leading-none text-black sm:flex-row sm:justify-between xl:ml-[6.1875rem] xl:flex-1 xl:gap-0 xl:text-base">
					<Link href="#">MODELO DE VALOR</Link>
					<Link
						href="#"
						className="flex h-[2.9375rem] w-full max-w-[16.9375rem] items-center justify-center rounded-[1.46875rem] bg-[var(--brand-yellow)] px-6"
					>
						GENERACIONES DE TURNO
					</Link>
					<Link href="#">NOSOTROS</Link>
				</nav>
			</div>
		</header> */
	);
}

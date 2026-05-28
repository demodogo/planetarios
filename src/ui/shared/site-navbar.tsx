import { PLANETARIOS_LOGOS } from '@/constants/brand-logos';
import Image from 'next/image';
import Link from 'next/link';

export function SiteNavbar() {
	return (
		<header className="relative z-50 w-full bg-white shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.25)]">
			<div className="mx-auto flex min-h-[6.25rem] w-full max-w-[80rem] items-center flex-col gap-8 p-5 lg:flex-row lg:px-16">
				<Link href="/">
					<Image
						src={PLANETARIOS_LOGOS.planetariosBlack}
						alt={'Planetarios'}
						width={59}
					/>
				</Link>
				<nav className="font-heading flex w-full flex-col items-center gap-3 text-md sm:justify-around sm:flex-row flex-1">
					<Link href="/modelo">MODELO DE VALOR</Link>
					<Link
						href="/generaciones/contenido"
						className="flex w-full items-center bg-[var(--brand-yellow)] px-6 py-2 rounded-full text-center max-w-fit"
					>
						GENERACIONES DE TURNO
					</Link>
					<Link href="/nosotros">NOSOTROS</Link>
				</nav>
			</div>
		</header>
	);
}

import { PLANETARIOS_LOGOS } from '@/constants/brand-logos';
import Image from 'next/image';

export function HomeFooter() {
	return (
		<footer className="w-full bg-[var(--surface-footer)]">
			<div className="mx-auto flex w-full max-w-[80rem] flex-col items-center gap-3 px-5 py-5 text-center sm:px-8 xl:h-[6.5625rem] xl:flex-row xl:gap-0 xl:px-[3.1875rem] xl:py-0 xl:text-left">
				<Image
					src={PLANETARIOS_LOGOS.planetariosColored}
					alt="Planetarios Consultora"
					width={192}
					height={88}
					className="h-auto w-[9.5rem] xl:w-[12rem]"
				/>
				<div className="hidden xl:ml-[1.4375rem] xl:block xl:h-[3.09375rem] xl:w-px xl:bg-black/20" />
				<div className="flex flex-col items-center gap-1 uppercase text-black/50 xl:ml-8 xl:flex-row xl:items-center xl:gap-0">
					<p className="font-heading text-[0.8rem] leading-tight sm:text-[0.9375rem] xl:text-base">
						rrios@planetarios.cl
					</p>
					<span className="hidden xl:inline-block xl:px-4">|</span>
					<p className="font-heading text-[0.8rem] leading-tight sm:text-[0.9375rem] xl:text-base">
						(+56 9) 98202681
					</p>
					<span className="hidden xl:inline-block xl:px-4">|</span>
					<p className="font-heading text-[0.8rem] leading-tight sm:text-[0.9375rem] xl:text-base">
						Santiago de Chile
					</p>
				</div>
			</div>
		</footer>
	);
}

'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
	additionalDataIntro,
	documentaryNote,
	eightGenerationsCopy,
	silentGenerations,
	sixGenerations,
	sixGenerationsIntro,
} from './las-generaciones-data';
import { GenerationLaminaModal } from './generation-lamina-modal';

function SectionTitle({
	firstLine,
	secondLine,
	align = 'left',
}: {
	firstLine: string;
	secondLine: string;
	align?: 'left' | 'center';
}) {
	return (
		<h2
			className={`font-heading text-[2.5rem] font-bold uppercase leading-[0.88] text-black sm:text-[3.5rem] lg:text-[4.6875rem] ${align === 'center' ? 'text-center' : 'text-left'}`}
		>
			<span className="block">{firstLine}</span>
			<span className="block">{secondLine}</span>
		</h2>
	);
}

function GenerationCard({
	name,
	year,
	imageSrc,
	imageWidth,
	imageHeight,
	onClick,
}: {
	name: string;
	year: string;
	imageSrc: string;
	imageWidth: number;
	imageHeight: number;
	onClick: () => void;
}) {
	return (
		<article
			className="group relative flex cursor-pointer flex-col items-center text-center"
			onClick={onClick}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
			aria-label={`Ver ficha técnica ${name}`}
		>
			<div className="relative z-10 h-[13rem] w-[12rem] sm:h-[14.5rem] sm:w-[13rem]">
				<div className="absolute left-1/2 top-1/2 hidden h-[13.25rem] w-[6.5rem] -translate-x-1/2 -translate-y-1/2 rounded-[0.625rem] bg-[var(--brand-blue)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 lg:block" />
				<Image
					src={imageSrc}
					alt={name}
					width={imageWidth}
					height={imageHeight}
					className="absolute bottom-0 left-1/2 z-10 h-auto max-h-[13rem] w-auto -translate-x-1/2 transition-transform duration-300 ease-out group-hover:scale-105 sm:max-h-[14.5rem]"
				/>
			</div>
			<p className="relative z-10 font-heading mt-4 text-[1.05rem] font-semibold uppercase leading-[1.02] text-black transition-transform duration-300 ease-out group-hover:-translate-y-1">
				{name}
			</p>
			<p className="relative z-10 font-heading mt-1 text-[1.2rem] font-bold leading-none text-black transition-transform duration-300 ease-out group-hover:-translate-y-1">
				{year}
			</p>
		</article>
	);
}

export function LasGeneracionesIntroSection() {
	return (
		<section className="w-full">
			<div className="h-[4.75rem] w-full  sm:h-[6.9375rem]" />
			<div className="mx-auto w-full max-w-[80rem] px-5 pb-18 pt-12 sm:px-8 sm:pb-24 sm:pt-16 xl:px-[3.1875rem]">
				<SectionTitle
					firstLine="OCHO"
					secondLine="GENERACIONES"
					align="center"
				/>
				<div className="mx-auto mt-10 max-w-[54rem] sm:mt-14">
					<div className="rounded-[0.5rem] border-[0.5rem] border-white bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_0.125rem_rgba(0,0,0,0.08),0_0.125rem_0.375rem_rgba(0,0,0,0.1)]">
						<Image
							src="/generaciones/main_img_generaciones.svg"
							alt="Esquema de ocho generaciones de turno"
							width={884}
							height={562}
							className="h-auto w-full rounded-[0.25rem]"
						/>
					</div>
					<div className="font-body-prototype mt-7 space-y-1 text-[1.125rem] leading-[1.07] text-black/80 sm:text-[1.5625rem]">
						{eightGenerationsCopy.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export function LasGeneracionesGridSection() {
	const [selectedGeneration, setSelectedGeneration] = useState<
		(typeof sixGenerations)[0] | null
	>(null);

	return (
		<>
			<section className="mx-auto w-full max-w-[80rem] px-5 pb-20 sm:px-8 sm:pb-28 xl:px-[3.1875rem]">
				<div className="max-w-[54rem]">
					<SectionTitle firstLine="SEIS" secondLine="GENERACIONES" />
					<p className="font-body-prototype mt-4 max-w-[53.5rem] text-[1.125rem] leading-[1.07] text-black/80 sm:text-[1.5625rem]">
						{sixGenerationsIntro}
					</p>
				</div>
				<div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-14 lg:grid-cols-3 lg:gap-y-18">
					{sixGenerations.map((generation) => (
						<GenerationCard
							key={generation.name}
							{...generation}
							onClick={() => setSelectedGeneration(generation)}
						/>
					))}
				</div>
			</section>

			{selectedGeneration && (
				<GenerationLaminaModal
					name={selectedGeneration.name}
					templateSrc={selectedGeneration.templateSrc}
					templateMobileSrc={selectedGeneration.templateMobileSrc}
					onClose={() => setSelectedGeneration(null)}
				/>
			)}
		</>
	);
}

export function LasGeneracionesAdditionalSection() {
	const [selectedGeneration, setSelectedGeneration] = useState<
		(typeof silentGenerations)[0] | null
	>(null);

	return (
		<>
			<section className="w-full">
				<div className="w-full bg-[#ffd3b6] lg:w-1/2">
					<div className="mx-auto w-full max-w-[80rem] px-5 py-8 sm:px-8 sm:py-10 xl:px-[3.1875rem]">
						<h3 className="font-heading text-[3.125rem] font-bold uppercase leading-none text-black sm:text-[3rem]">
							DATOS ADICIONALES
						</h3>
						<p className="font-body-prototype mt-3 max-w-[37.6875rem] text-[1.125rem] leading-[1.07] text-black/80 sm:text-[1.5625rem]">
							{additionalDataIntro}
						</p>
					</div>
				</div>
				<div className="mx-auto w-full max-w-[80rem] px-5 pb-24 pt-14 sm:px-8 sm:pt-18 xl:px-[3.1875rem]">
					<div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
						{silentGenerations.map((generation) => (
							<article
								key={generation.name}
								className="group flex cursor-pointer justify-center text-center"
								onClick={() => setSelectedGeneration(generation)}
								role="button"
								tabIndex={0}
								onKeyDown={(e) =>
									(e.key === 'Enter' || e.key === ' ') &&
									setSelectedGeneration(generation)
								}
								aria-label={`Ver ficha técnica ${generation.name}`}
							>
								<div className="relative w-full max-w-[38rem]">
									<div className="relative flex min-h-[15rem] flex-col items-center justify-center pt-6">
										<div className="absolute left-1/2 top-1/2 hidden h-[12rem] w-[10.625rem] -translate-x-1/2 -translate-y-1/2 rounded-[0.75rem] bg-[var(--brand-blue)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 lg:block" />
										<h4 className="font-heading relative z-10 text-[2.5rem] font-bold uppercase leading-[0.88] text-black sm:text-[4.375rem]">
											<span className="block">
												{generation.name.split(' ')[0]}
											</span>
											<span className="block">
												{generation.name.split(' ').slice(1).join(' ')}
											</span>
										</h4>
										<p className="font-heading relative z-10 mt-5 text-[1.55rem] font-normal uppercase leading-none text-black sm:text-[2rem]">
											{generation.years}
										</p>
									</div>
								</div>
							</article>
						))}
					</div>
					<div className="mx-auto mt-18 max-w-[34.5625rem] text-center sm:mt-24">
						<p className="font-body-prototype text-[1.125rem] font-bold leading-[1.07] text-black/80 sm:text-[1.5625rem]">
							*Datos documentales
						</p>
						<p className="font-body-prototype mt-2 text-[1.125rem] leading-[1.07] text-black/80 sm:text-[1.5625rem]">
							{documentaryNote}
						</p>
					</div>
				</div>
			</section>

			{selectedGeneration && (
				<GenerationLaminaModal
					name={selectedGeneration.name}
					templateSrc={selectedGeneration.templateSrc}
					templateMobileSrc={selectedGeneration.templateMobileSrc}
					onClose={() => setSelectedGeneration(null)}
				/>
			)}
		</>
	);
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { TouchIcon } from '../shared/touch-icon';
import { MODEL_RING_COLORS } from './modelo-ring-colors';

const RING_STEP = 11.5;
const TARGET_SIZE = 100;

type PopoverSide = 'left' | 'center' | 'right';
type PopoverVertical = 'top' | 'bottom';

export interface ModeloVariableCardProps {
	color: string;
	label: string;
	sublabel: string;
	description: string;
	popoverDescription: string;
	popoverBackgroundColor: string;
	popoverSide?: PopoverSide;
	popoverVertical?: PopoverVertical;
	popoverTextColor?: 'black' | 'white';
}

function getRingSize(index: number) {
	return TARGET_SIZE - index * RING_STEP;
}

function getPopoverAlignment(popoverSide: PopoverSide) {
	switch (popoverSide) {
		case 'left':
			return 'left-0';
		case 'right':
			return 'right-0';
		default:
			return 'left-1/2 -translate-x-1/2';
	}
}

function ModeloVariablePopover({
	label,
	sublabel,
	description,
	backgroundColor,
	textColor = 'black',
	onClose,
	mobileFullscreen = false,
}: {
	label: string;
	sublabel: string;
	description: string;
	backgroundColor: string;
	textColor?: 'black' | 'white';
	onClose?: () => void;
	mobileFullscreen?: boolean;
}) {
	return (
		<div
			className={`relative overflow-hidden shadow-[0_0.75rem_2rem_rgba(0,0,0,0.18)] md:min-w-fit md:grid md:grid-cols-2 lg:h-[18.375rem] ${mobileFullscreen ? 'grid min-h-[22rem] rounded-[2rem]' : 'grid rounded-[2.125rem]'}`}
			style={{ backgroundColor }}
		>
			{onClose ? (
				<button
					type="button"
					aria-label="Cerrar popover"
					onClick={onClose}
					className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors ${textColor === 'white' ? 'border-white/30 bg-white/10 text-white hover:bg-white/15' : 'border-black/10 bg-white/30 text-black/80 hover:bg-white/45'}`}
				>
					<span className="relative block h-4 w-4">
						<span
							className={`absolute left-1/2 top-1/2 block h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full ${textColor === 'white' ? 'bg-white' : 'bg-black/75'}`}
						/>
						<span
							className={`absolute left-1/2 top-1/2 block h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full ${textColor === 'white' ? 'bg-white' : 'bg-black/75'}`}
						/>
					</span>
				</button>
			) : null}

			<div
				className={`relative ${mobileFullscreen ? 'h-[10.5rem]' : 'h-[8.5rem]'} md:h-auto md:w-[13.25rem]`}
			>
				<div
					className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 md:-left-[6rem] md:-top-[8rem] md:translate-x-0 md:translate-y-0 ${mobileFullscreen ? 'top-[34%] h-[13rem] w-[13rem]' : 'top-[52%] h-[11rem] w-[11rem]'} md:h-[25.875rem] md:w-[25.875rem]`}
				>
					{MODEL_RING_COLORS.map((ringColor, index) => {
						const size = getRingSize(index);
						return (
							<div
								key={ringColor}
								className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
								style={{
									width: `${size}%`,
									height: `${size}%`,
									backgroundColor: ringColor,
								}}
							/>
						);
					})}
				</div>
			</div>
			<div
				className={`${mobileFullscreen ? 'px-5 pb-7 pt-1 text-center' : 'px-5 pb-6 pt-2'} md:p-8 md:text-left`}
			>
				<p
					className={`font-heading uppercase leading-[0.88] ${mobileFullscreen ? 'text-[2rem]' : 'text-[1.8rem]'} md:text-[1.8rem] ${textColor === 'white' ? 'text-white/80' : 'text-black/80'}`}
				>
					<span className="block font-light">{label}</span>
					<span className="block font-bold">{sublabel}</span>
				</p>
				<p
					className={`font-body-prototype ${mobileFullscreen ? 'mt-4 text-[1.0625rem] leading-[1.14]' : 'mt-3 text-[1rem] leading-[1.08]'} md:mt-4 md:text-[1rem] md:leading-[1.08] ${textColor === 'white' ? 'text-white/80' : 'text-black/80'}`}
				>
					{description}
				</p>
			</div>
		</div>
	);
}

export function ModeloVariableCard({
	color,
	label,
	sublabel,
	description,
	popoverDescription,
	popoverBackgroundColor,
	popoverSide = 'center',
	popoverVertical = 'top',
	popoverTextColor = 'black',
}: ModeloVariableCardProps) {
	const [isMobilePopoverOpen, setIsMobilePopoverOpen] = useState(false);
	const [isMobileViewport, setIsMobileViewport] = useState(false);
	const cardRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 1023px)');
		const syncViewport = () => {
			const mobile = mediaQuery.matches;
			setIsMobileViewport(mobile);
			if (!mobile) {
				setIsMobilePopoverOpen(false);
			}
		};

		syncViewport();
		mediaQuery.addEventListener('change', syncViewport);

		return () => {
			mediaQuery.removeEventListener('change', syncViewport);
		};
	}, []);

	useEffect(() => {
		if (!isMobileViewport || !isMobilePopoverOpen) {
			return;
		}

		const handlePointerDown = (event: PointerEvent) => {
			if (!cardRef.current?.contains(event.target as Node)) {
				setIsMobilePopoverOpen(false);
			}
		};

		document.addEventListener('pointerdown', handlePointerDown);

		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
		};
	}, [isMobilePopoverOpen, isMobileViewport]);

	const mobilePopoverVisible = isMobileViewport && isMobilePopoverOpen;

	return (
		<div
			ref={cardRef}
			className="group relative flex flex-col items-center text-center lg:items-start lg:text-left"
			tabIndex={0}
		>
			<button
				type="button"
				className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
				aria-expanded={mobilePopoverVisible}
				aria-label={`${label} ${sublabel}`}
				onClick={() => {
					if (isMobileViewport) {
						setIsMobilePopoverOpen((current) => !current);
					}
				}}
			>
				<div className="relative h-[7rem] w-[7rem] sm:h-[8rem] sm:w-[8rem] lg:h-[9.1875rem] lg:w-[9.1875rem]">
					<div
						className="absolute inset-0 rounded-full"
						style={{ backgroundColor: color }}
					/>
					<div
						className={`absolute inset-[1.75rem] rounded-full bg-white flex items-center justify-center transition-[transform,opacity] duration-300 ease-out group-hover:scale-0 group-hover:opacity-0 group-focus-visible:scale-0 group-focus-visible:opacity-0 sm:inset-[2rem] lg:inset-[2.5rem] ${mobilePopoverVisible ? 'scale-0 opacity-0' : ''}`}
					>
						<span className="flex h-full w-full items-center justify-center md:hidden">
							<TouchIcon className="animate-pulse-tap" />
						</span>
					</div>
				</div>

				<p className="font-heading mt-2 text-[0.875rem] leading-tight text-black/80 sm:text-[0.9375rem] lg:mt-3 lg:text-[1rem]">
					<span className="font-light uppercase">{label}</span>
					<br />
					<span className="font-bold uppercase">{sublabel}</span>
				</p>
				<p className="font-body-prototype mt-1 text-[0.8125rem] leading-[1.1] text-black/70 sm:text-[0.875rem] lg:text-[0.9375rem]">
					{description}
				</p>
			</button>

			<div
				className={`pointer-events-none absolute z-20 hidden w-[37.75rem] opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block ${getPopoverAlignment(popoverSide)} ${popoverVertical === 'bottom' ? 'top-[calc(66%+1.75rem)] -translate-y-2' : 'bottom-[calc(106%+1.75rem)] translate-y-2'}`}
			>
				<ModeloVariablePopover
					label={label}
					sublabel={sublabel}
					description={popoverDescription}
					backgroundColor={popoverBackgroundColor}
					textColor={popoverTextColor}
				/>
			</div>

			{mobilePopoverVisible ? (
				<div className="fixed inset-0 z-40 flex items-center justify-center px-3 py-6 lg:hidden">
					<div
						className="absolute inset-0 bg-black/12"
						onClick={() => setIsMobilePopoverOpen(false)}
					/>
					<div className="relative z-10 w-full max-w-none">
						<ModeloVariablePopover
							label={label}
							sublabel={sublabel}
							description={popoverDescription}
							backgroundColor={popoverBackgroundColor}
							textColor={popoverTextColor}
							onClose={() => setIsMobilePopoverOpen(false)}
							mobileFullscreen
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}

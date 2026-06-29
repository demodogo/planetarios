'use client';

import { useEffect, useRef } from 'react';

interface GenerationLaminaModalProps {
	name: string;
	templateSrc: string;
	templateMobileSrc: string;
	onClose: () => void;
}

export function GenerationLaminaModal({
	name,
	templateSrc,
	templateMobileSrc,
	onClose,
}: GenerationLaminaModalProps) {
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKey);
		const scrollY = window.scrollY;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.width = '100%';
		return () => {
			document.removeEventListener('keydown', handleKey);
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			window.scrollTo(0, scrollY);
		};
	}, [onClose]);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) onClose();
	};

	return (
		<div
			ref={overlayRef}
			onClick={handleOverlayClick}
			style={{ animation: 'lamina-overlay-in 0.25s ease-out forwards' }}
			className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-black/70 backdrop-blur-sm sm:flex sm:items-center sm:justify-center sm:overflow-hidden sm:p-4"
		>
			<style>{`
				@keyframes lamina-overlay-in {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes lamina-content-in {
					from { opacity: 0; transform: scale(0.92); }
					to { opacity: 1; transform: scale(1); }
				}
				.lamina-img {
					height: auto;
					width: 100%;
					display: block;
				}
				@media (min-width: 640px) {
					.lamina-img {
						width: auto;
						max-width: 90vw;
						max-height: 85dvh;
						object-fit: contain;
					}
				}
			`}</style>
			<div
				style={{ animation: 'lamina-content-in 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
				className="relative flex w-full flex-col items-center sm:w-auto sm:max-w-[95vw]"
			>
				<button
					onClick={onClose}
					aria-label="Cerrar"
					className="fixed right-3 top-3 z-[201] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10 transition-transform duration-150 hover:scale-110 active:scale-95 sm:absolute sm:-right-4 sm:-top-4"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2.5}
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-4 w-4 text-black sm:h-5 sm:w-5"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				<div className="w-full overflow-hidden sm:rounded-xl sm:shadow-2xl">
					<picture>
						<source media="(min-width: 640px)" srcSet={templateSrc} />
						<source media="(max-width: 639px)" srcSet={templateMobileSrc} />
						<img
							src={templateSrc}
							alt={`Lamina tecnica ${name}`}
							className="lamina-img"
						/>
					</picture>
				</div>
			</div>
		</div>
	);
}
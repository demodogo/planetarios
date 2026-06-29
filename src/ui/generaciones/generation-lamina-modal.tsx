'use client';

import Image from 'next/image';
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
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', handleKey);
			document.body.style.overflow = '';
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
			className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
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
			`}</style>
			<div
				style={{ animation: 'lamina-content-in 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
				className="relative flex max-h-[90dvh] max-w-[95vw] flex-col items-center"
			>
				<button
					onClick={onClose}
					aria-label="Cerrar"
					className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/10 transition-transform duration-150 hover:scale-110 active:scale-95 sm:-right-4 sm:-top-4 sm:h-10 sm:w-10"
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

				<div className="overflow-hidden rounded-xl shadow-2xl">
					<Image
						src={templateSrc}
						alt={`Lámina técnica ${name}`}
						width={1200}
						height={900}
						className="hidden h-auto max-h-[85dvh] w-auto max-w-[90vw] object-contain sm:block"
						priority
					/>
					<Image
						src={templateMobileSrc}
						alt={`Lámina técnica ${name}`}
						width={600}
						height={900}
						className="block h-auto max-h-[85dvh] w-auto max-w-[90vw] object-contain sm:hidden"
						priority
					/>
				</div>
			</div>
		</div>
	);
}

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface GeneracionesSubNavProps {
	activeTab?: string;
}

const tabs = [
	{
		label: 'Naturaleza del Estudio',
		href: '/generaciones-de-turno/naturaleza',
	},
	{
		label: 'Las Generaciones',
		href: '/generaciones-de-turno/las-generaciones',
	},
	{
		label: 'Cambio de Paradigma',
		href: '/generaciones-de-turno/cambio-paradigma',
	},
	{ label: 'Contenido del Estudio', href: '/generaciones-de-turno/contenido' },
	{ label: 'Fuentes', href: '/generaciones-de-turno/fuentes' },
	{ label: 'Nomenclatura', href: '/generaciones-de-turno/nomenclatura' },
	{ label: 'Metodología', href: '/generaciones-de-turno/metodologia' },
];

export function GeneracionesSubNav({ activeTab }: GeneracionesSubNavProps) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [scrollData, setScrollData] = useState({ progress: 0, thumbWidth: 100 });

	const updateScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			const progress = scrollWidth > clientWidth ? scrollLeft / (scrollWidth - clientWidth) : 0;
			const thumbWidth = scrollWidth > clientWidth ? Math.max((clientWidth / scrollWidth) * 100, 10) : 100;
			setScrollData({ progress, thumbWidth });
		}
	};

	useEffect(() => {
		updateScroll();
		window.addEventListener('resize', updateScroll);
		return () => window.removeEventListener('resize', updateScroll);
	}, []);

	return (
		<nav className="relative w-full border-b border-black/10 bg-[var(--brand-yellow)]">
			<div 
				ref={scrollRef}
				onScroll={updateScroll}
				className="mx-auto flex w-full max-w-[80rem] items-center overflow-x-auto px-5 xl:px-[3.1875rem] pb-1.5 [&::-webkit-scrollbar]:hidden lg:[&::-webkit-scrollbar]:block"
			>
				{tabs.map((tab, i) => {
					const isActive = activeTab === tab.label;
					return (
						<Link
							key={tab.label}
							href={tab.href}
							className={`font-heading relative flex shrink-0 items-center px-3 py-3 text-[0.875rem] leading-none text-black transition-opacity xl:py-4 xl:text-base ${
								isActive ? 'font-bold' : 'opacity-70 hover:opacity-100'
							}`}
						>
							{tab.label}
							{i < tabs.length - 1 && (
								<span className="ml-3 h-[3.03125rem] w-px bg-black/30 xl:ml-4" />
							)}
						</Link>
					);
				})}
			</div>
			
			{/* Custom Scrollbar for Mobile/Tablet */}
			{scrollData.thumbWidth < 100 && (
				<div className="absolute bottom-0 left-0 h-1.5 w-full bg-black/5 lg:hidden">
					<div 
						className="absolute top-0 h-full rounded-full bg-black/20"
						style={{
							width: `${scrollData.thumbWidth}%`,
							left: `${scrollData.progress * (100 - scrollData.thumbWidth)}%`
						}}
					/>
				</div>
			)}
		</nav>
	);
}

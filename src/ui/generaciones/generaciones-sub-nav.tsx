import Link from 'next/link';

interface GeneracionesSubNavProps {
	activeTab?: string;
}

const tabs = [
	{ label: 'Naturaleza del Estudio', href: '#' },
	{ label: 'Las Generaciones', href: '#' },
	{ label: 'Cambio de Paradigma', href: '#' },
	{ label: 'Contenido del Estudio', href: '/generaciones/contenido' },
	{ label: 'Fuentes', href: '#' },
	{ label: 'Nomenclatura', href: '#' },
	{ label: 'Metodología', href: '#' },
];

export function GeneracionesSubNav({ activeTab }: GeneracionesSubNavProps) {
	return (
		<nav className="w-full border-b border-black/10 bg-[var(--brand-yellow)]">
			<div className="mx-auto flex w-full max-w-[80rem] items-center overflow-x-auto px-5 xl:px-[3.1875rem]">
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
		</nav>
	);
}

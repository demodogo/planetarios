import Link from 'next/link';

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

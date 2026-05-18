export interface PageInfo {
	title: string;
	description?: string;
	image?: string;
}

export const PAGES_INFO: Record<string, PageInfo> = {
	home: {
		title: 'PlanetaRios',
		description: 'Conoce nuestra misión',
		image: undefined,
	},
	valueModel: {
		title: 'Modelo de valor',
	},
	studioNature: {
		title: 'Naturaleza del estudio',
	},
	generations: {
		title: 'Las generaciones',
	},
	paradigmShift: {
		title: 'Cambio de paradigma ',
	},
	studioContent: {
		title: 'Contenido del estudio',
	},
	dataSouces: {
		title: 'Fuentes',
	},
	nomenclature: {
		title: 'Nomenclatura',
	},
	methodology: {
		title: 'Metodología',
	},
};

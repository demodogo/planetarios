import type { ComponentType } from 'react';

import { HighlightStripCard } from '@/ui/shared/highlight-strip-card';

import { InevitableObsolescenciaInfo } from './inevitable-obsolescencia-info';
import { NuestraContribucionInfo } from './nuestra-contribucion-info';
import { SomosJuvenologosInfo } from './somos-juvenologos-info';

type HighlightStripDefinition = {
	title: string;
	alignment: 'left' | 'right';
	backgroundColor: string;
	barWidth: number;
	barHeight: number;
	titleWidth: number;
	titleOffsetX: number;
	titleOffsetY: number;
	className?: string;
	infoTitleSide: 'left' | 'right';
	InfoComponent: ComponentType;
};

const HIGHLIGHT_STRIPS: HighlightStripDefinition[] = [
	{
		title: 'NUESTRA\nCONTRIBUCIÓN',
		alignment: 'left',
		backgroundColor: '#c1e61e',
		barWidth: 850,
		barHeight: 146,
		titleWidth: 409,
		titleOffsetX: 420,
		titleOffsetY: 20,
		className: 'xl:mb-[4.1875rem]',
		infoTitleSide: 'right',
		InfoComponent: NuestraContribucionInfo,
	},
	{
		title: 'INEVITABLE\nOBSOLESCENCIA',
		alignment: 'right',
		backgroundColor: '#00b0f9',
		barWidth: 850,
		barHeight: 128,
		titleWidth: 529,
		titleOffsetX: 13,
		titleOffsetY: 18,
		className: 'xl:mb-[3.1875rem]',
		infoTitleSide: 'left',
		InfoComponent: InevitableObsolescenciaInfo,
	},
	{
		title: 'SOMOS\nJUVENÓLOGOS',
		alignment: 'left',
		backgroundColor: '#ffe940',
		barWidth: 850,
		barHeight: 126,
		titleWidth: 410,
		titleOffsetX: 420,
		titleOffsetY: 17,
		infoTitleSide: 'right',
		InfoComponent: SomosJuvenologosInfo,
	},
];

export function HomeHighlightStrips() {
	return (
		<section className="flex w-full flex-col gap-12 pb-24 pt-20 md:gap-14 md:pb-28 xl:gap-0 xl:px-0 xl:pb-[10.4375rem]">
			{HIGHLIGHT_STRIPS.map(({ InfoComponent, ...strip }) => (
				<HighlightStripCard
					key={strip.title}
					{...strip}
					infoCardContent={<InfoComponent />}
				/>
			))}
		</section>
	);
}

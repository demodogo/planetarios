import { GeneracionesSubNav } from './generaciones-sub-nav';
import { NaturalezaHero } from './naturaleza-hero';
import { NaturalezaHighlightStrips } from './naturaleza-highlight-strips';

export function NaturalezaPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<GeneracionesSubNav activeTab="Naturaleza del Estudio" />
			<main className="flex flex-1 flex-col bg-white">
				<NaturalezaHero />
				<NaturalezaHighlightStrips />
			</main>
		</div>
	);
}

import { GeneracionesSubNav } from './generaciones-sub-nav';
import { FuentesHero } from './fuentes-hero';
import { FuentesHighlightStrips } from './fuentes-highlight-strips';

export function FuentesPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<GeneracionesSubNav activeTab="Fuentes" />
			<main className="flex flex-1 flex-col bg-white">
				<FuentesHero />
				<FuentesHighlightStrips />
			</main>
		</div>
	);
}

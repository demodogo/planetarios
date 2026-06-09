import { CambioParadigmaHighlightStrips } from './cambio-paradigma-highlight-strips';
import { GeneracionesSubNav } from './generaciones-sub-nav';

export function CambioParadigmaPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<GeneracionesSubNav activeTab="Cambio de Paradigma" />
			<main className="flex flex-1 flex-col bg-white">
				<CambioParadigmaHighlightStrips />
			</main>
		</div>
	);
}

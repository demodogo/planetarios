import { GeneracionesSubNav } from './generaciones-sub-nav';
import { MetodologiaHighlightStrips } from './metodologia-highlight-strips';

export function MetodologiaPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<GeneracionesSubNav activeTab="Metodología" />
			<main className="flex flex-1 flex-col bg-white">
				<MetodologiaHighlightStrips />
			</main>
		</div>
	);
}

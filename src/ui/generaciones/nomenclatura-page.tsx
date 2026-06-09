import { GeneracionesSubNav } from './generaciones-sub-nav';
import { NomenclaturaHighlightStrips } from './nomenclatura-highlight-strips';

export function NomenclaturaPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<GeneracionesSubNav activeTab="Nomenclatura" />
			<main className="flex flex-1 flex-col bg-white">
				<NomenclaturaHighlightStrips />
			</main>
		</div>
	);
}

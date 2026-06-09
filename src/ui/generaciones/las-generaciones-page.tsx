import { GeneracionesSubNav } from './generaciones-sub-nav';
import {
	LasGeneracionesAdditionalSection,
	LasGeneracionesGridSection,
	LasGeneracionesIntroSection,
} from './las-generaciones-sections';

export function LasGeneracionesPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col bg-white">
			<GeneracionesSubNav activeTab="Las Generaciones" />
			<main className="flex flex-1 flex-col bg-white">
				<LasGeneracionesIntroSection />
				<LasGeneracionesGridSection />
				<LasGeneracionesAdditionalSection />
			</main>
		</div>
	);
}

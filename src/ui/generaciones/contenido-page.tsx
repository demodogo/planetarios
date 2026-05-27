import { HomeFooter } from '@/ui/shared/footer';
import { SiteNavbar } from '@/ui/shared/site-navbar';
import { ContenidoHero } from './contenido-hero';
import { ContenidoHighlightStrips } from './contenido-highlight-strips';
import { GeneracionesSubNav } from './generaciones-sub-nav';

export function ContenidoPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<SiteNavbar />
			<GeneracionesSubNav activeTab="Contenido del Estudio" />
			<main className="flex flex-1 flex-col bg-white">
				<ContenidoHero />
				<ContenidoHighlightStrips />
			</main>
			<HomeFooter />
		</div>
	);
}

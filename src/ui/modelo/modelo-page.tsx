import { HomeFooter } from '@/ui/shared/footer';
import { SiteNavbar } from '@/ui/shared/site-navbar';
import { ModeloCasos } from './modelo-casos';
import { ModeloEstructura } from './modelo-estructura';
import { ModeloHero } from './modelo-hero';
import { ModeloHighlightStrips } from './modelo-highlight-strips';

export function ModeloPage() {
	return (
		<div className="flex min-h-dvh w-full flex-col">
			<main className="flex flex-1 flex-col bg-white">
				<ModeloHero />
				<ModeloHighlightStrips />
				<ModeloEstructura />
				<ModeloCasos />
			</main>
		</div>
	);
}

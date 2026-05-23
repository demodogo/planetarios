import { HomeClientsSection } from './home-clients-section';
import { HomeHero } from './home-hero';
import { HomeHighlightStrips } from './home-highlight-strips';

export function HomePage() {
	return (
		<div className="w-full mx-auto">
			<HomeHero />
			<HomeHighlightStrips />
			<HomeClientsSection />
		</div>
	);
}

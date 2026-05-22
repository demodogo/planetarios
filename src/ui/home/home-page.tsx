import { HomeClientsSection } from './home-clients-section';
import { HomeHero } from './home-hero';
import { HomeHighlightStrips } from './home-highlight-strips';

export function HomePage() {
	return (
		<div className="w-full mx-auto">
			<div className="mx-auto">
				<HomeHero />
			</div>
			<HomeHighlightStrips />
			<HomeClientsSection />
		</div>
	);
}

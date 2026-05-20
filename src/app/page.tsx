import { HomePage } from '@/ui/home/home-page';
import { SiteNavbar } from '@/ui/shared/site-navbar';

export default function Home() {
	return (
		<main className="flex min-h-dvh w-full flex-col bg-white">
			<SiteNavbar />
			<HomePage />
		</main>
	);
}

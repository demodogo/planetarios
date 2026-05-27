import { headingFont, monoFont } from '@/constants/fonts';
import { HomeFooter } from '@/ui/shared/footer';
import { SiteNavbar } from '@/ui/shared/site-navbar';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
	title: {
		template: '%s | Planetarios',
		default: 'Planetarios',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body
				className={`antialiased ${headingFont.variable}  ${monoFont.variable} antialiased`}
			>
				<SiteNavbar />

				{children}
				<HomeFooter />
			</body>
		</html>
	);
}

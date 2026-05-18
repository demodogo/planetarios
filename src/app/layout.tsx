import { bodyFont, headingFont, monoFont } from '@/constants/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s | PlanetaRios',
		default: 'PlanetaRios',
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
				className={`antialiased ${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

import { headingFont, monoFont } from '@/constants/fonts';
import type { Metadata } from 'next';
import 'swiper/css';
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
				{children}
			</body>
		</html>
	);
}

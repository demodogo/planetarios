import { JetBrains_Mono, Josefin_Sans } from 'next/font/google';

export const headingFont = Josefin_Sans({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-heading',
});

export const monoFont = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
});

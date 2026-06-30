'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CambioParadigmaValueDetailProps = {
	title: string;
	content: string;
	iconSrc: string;
	backgroundColor: string;
	isLeft?: boolean;
};
export function CambioParadigmaValueDetail({
	title,
	content,
	iconSrc,
	backgroundColor,
	isLeft,
}: CambioParadigmaValueDetailProps) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 20 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
			className={`min-w-[30rem] min-h-[12rem] flex flex-row absolute -top-[20%] ${isLeft ? 'right-0' : 'left-0'} p-6 z-50 rounded-xl items-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/20`}
			style={{ backgroundColor: backgroundColor }}
		>
			<div className="absolute inset-0 bg-black/20 pointer-events-none" />

			<div className="relative z-10 w-24 h-24 shrink-0 mr-6">
				<Image
					src={iconSrc}
					alt={title}
					fill
					className="object-contain brightness-0 invert"
				/>
			</div>
			<div className="flex flex-col text-left relative z-10">
				<h1 className="font-heading text-[1.75rem] font-bold text-white leading-tight mb-2">
					{title}
				</h1>
				<p className="font-body-prototype text-[1.0625rem] leading-snug text-white/90">
					{content}
				</p>
			</div>
		</motion.div>
	);
}

import Image from 'next/image';

export function TouchIcon({ className }: { className?: string }) {
	return (
		<Image
			src={'/click-icon3.svg'}
			alt="Click aquí"
			width={32}
			height={32}
			className={className}
		/>
	);
}

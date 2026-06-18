export function PinchIcon({ className }: { className?: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<style>
				{`
					@keyframes pinchExpand {
						0% { transform: scale(0.8); opacity: 0; }
						20% { transform: scale(0.9); opacity: 1; }
						80% { transform: scale(1.2); opacity: 1; }
						100% { transform: scale(1.3); opacity: 0; }
					}
					.animate-pinch {
						animation: pinchExpand 2s infinite ease-in-out;
						transform-origin: center;
					}
				`}
			</style>
			<g
				className="animate-pinch"
				stroke="currentColor"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M40 30 L30 30 L30 40 M30 30 L45 45" />
				<path d="M60 70 L70 70 L70 60 M70 70 L55 55" />
				<circle cx="45" cy="45" r="4" fill="currentColor" stroke="none" />
				<circle cx="55" cy="55" r="4" fill="currentColor" stroke="none" />
			</g>
		</svg>
	);
}

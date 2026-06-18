'use client';

import Image, { ImageProps } from 'next/image';
import { MouseEvent, useRef, useState } from 'react';

import { PinchIcon } from './pinch-icon';

export function ZoomImageHover(props: ImageProps) {
	const [position, setPosition] = useState<{
		x: number;
		y: number;
		width: number;
		height: number;
	} | null>(null);
	const [isHovering, setIsHovering] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const ZOOM = 4;
	const LENS_SIZE = 350;

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;
		setPosition({ x, y, width, height });
	};

	return (
		<div className="relative flex w-full flex-col items-start">
			<div className="mb-2 flex w-full items-center justify-start gap-1.5 text-black/50 md:hidden">
				<PinchIcon className="h-12 w-12 shrink-0" />
				<span className="font-body-prototype whitespace-nowrap text-[0.9rem] font-bold uppercase tracking-wider">
					Pinch para acercar
				</span>
			</div>

			<div
				ref={containerRef}
				className="relative w-full cursor-auto md:cursor-none"
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => {
					setIsHovering(false);
					setPosition(null);
				}}
				onMouseMove={handleMouseMove}
			>
				<Image {...props} className={props.className} />

				{isHovering && position && (
					<div
						className="pointer-events-none absolute z-50 hidden overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_10px_40px_rgb(0,0,0,0.3)] ring-1 ring-black/5 md:block"
						style={{
							width: `${LENS_SIZE}px`,
							height: `${LENS_SIZE}px`,
							left: `${position.x - LENS_SIZE / 2}px`,
							top: `${position.y - LENS_SIZE / 2}px`,
						}}
					>
						<div
							className="absolute"
							style={{
								width: `${position.width}px`,
								height: `${position.height}px`,
								left: `-${position.x - LENS_SIZE / 2}px`,
								top: `-${position.y - LENS_SIZE / 2}px`,
								transform: `scale(${ZOOM})`,
								transformOrigin: `${(position.x / position.width) * 100}% ${(position.y / position.height) * 100}%`,
							}}
						>
							<Image {...props} className={props.className} />8{' '}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

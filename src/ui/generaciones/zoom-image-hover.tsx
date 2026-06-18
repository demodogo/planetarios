'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useRef, MouseEvent } from 'react';

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
		const { left, top, width, height } = containerRef.current.getBoundingClientRect();
		const x = e.clientX - left;
		const y = e.clientY - top;
		setPosition({ x, y, width, height });
	};

	return (
		<div
			ref={containerRef}
			className="relative w-full cursor-none"
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => {
				setIsHovering(false);
				setPosition(null);
			}}
			onMouseMove={handleMouseMove}
		>
			<Image {...props} className={`${props.className || ''}`} />

			{isHovering && position && (
				<div
					className="pointer-events-none absolute z-50 overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_10px_40px_rgb(0,0,0,0.3)] ring-1 ring-black/5"
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
						<Image {...props} className={`${props.className || ''}`} />
					</div>
				</div>
			)}
		</div>
	);
}

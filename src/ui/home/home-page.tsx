'use client';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HomeFooter } from '../shared/footer';
import { HomeClientsSection } from './home-clients-section';
import { HomeHero } from './home-hero';
import { HomeHighlightStrips } from './home-highlight-strips';

export function HomePage() {
	return (
		<>
			<div className="w-full xl:hidden">
				<div className="w-full">
					<HomeHero />
				</div>
				<div className="w-full">
					<HomeHighlightStrips />
				</div>
				<div className="flex min-h-full w-full flex-col bg-[var(--surface-muted)]">
					<div className="flex-1">
						<HomeClientsSection />
					</div>
					<HomeFooter />
				</div>
			</div>

			<div className="hidden h-[calc(100dvh-6.25rem)] w-full xl:block">
				<Swiper
					direction="vertical"
					slidesPerView={1}
					mousewheel={{
						forceToAxis: true,
						releaseOnEdges: true,
						thresholdDelta: 30,
						thresholdTime: 400,
					}}
					speed={800}
					modules={[Mousewheel]}
					className="h-full w-full"
				>
					<SwiperSlide>
						<div className="h-full">
							<HomeHero />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-full">
							<HomeHighlightStrips />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="h-full">
							<div className="flex h-full w-full flex-col bg-[var(--surface-muted)]">
								<div className="flex-1">
									<HomeClientsSection inSlide />
								</div>
								<HomeFooter />
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

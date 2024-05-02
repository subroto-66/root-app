"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation, Pagination } from "swiper";

export default function slickslider() {
	return (
		<div className="container">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					// depth: 100,
					modifier: 2.5,

					depth: 100,
					modifier: 2,
				}}
				pagination={{ el: ".swiper-pagination", clickable: true }}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiper_container"
			>
				{/* <div className="img_container"> */}
				<SwiperSlide>
					<img src="./assets/images/img_1.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_2.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_3.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_4.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_5.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_6.jpg" alt="slide_image" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="./assets/images/img_7.jpg" alt="slide_image" />
				</SwiperSlide>
				{/* </div> */}

				<div className="slider-controler">
					{/* <div className="swiper-button-prev slider-arrow">
						<ion-icon name="arrow-back-outline"></ion-icon>
					</div>
					<div className="swiper-button-next slider-arrow">
						<ion-icon name="arrow-forward-outline"></ion-icon>
					</div> */}
					<div className="swiper-pagination"></div>
				</div>
				<div className="slider-next-prev-btn">
					<div className="swiper-button-prev slider-arrow">
						{/* <ion-icon name="arrow-back-outline"></ion-icon> */}
						<img width="20px" src="./back.png" alt="" />
					</div>
					<div className="swiper-button-next slider-arrow">
						{/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
						<img width="20px" src="./next.png" alt="" />
					</div>
				</div>
			</Swiper>
		</div>
	);
}

"use client";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function ImageSlider({ images }: { images: string[] }) {
    return(
        <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ 
                hide: true,
                draggable: true,
             }}
            className="
            [--swiper-navigation-color:#ffffff]
            [--swiper-navigation-size:25px]
            [--swiper-scrollbar-bg-color:rgba(0,0,0,0.1)]
            [--swiper-scrollbar-drag-bg-color:#00db8e] 
            
            "
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  className="mt-6 rounded-lg border object-cover w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
    )
};
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

type CarouselCardsProps = {
    children: React.ReactNode
}

export default function CarouselCards({ children }: CarouselCardsProps) {
    return (
        <Swiper
            spaceBetween={15}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={swiperBreakPoints}
            centeredSlides={true}
            centeredSlidesBounds={true}
        >
            {children}
        </Swiper>
    );
}

const swiperBreakPoints = {
    //xl
    1536: {
        slidesPerView: 6
    },
    //lg
    1200: {
        slidesPerView: 6,
    },
    //md
    900: {
        slidesPerView: 4,
    },
    //sm
    600: {
        slidesPerView: 4,
    }, //xs
    0: {
        slidesPerView: 2,
    }

}
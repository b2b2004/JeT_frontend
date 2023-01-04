import {SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar, Swiper} from "swiper";

function Sdfasdf(props){
    console.log("hi");
    return(
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>sdfasdf</SwiperSlide>
        </Swiper>
    )
}

export default Sdfasdf;
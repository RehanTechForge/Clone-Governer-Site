import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./styles.css"; // Ensure the path is correct

const Slider = () => {
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className} custom-underline"></span>`;
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/slideShow1.6f890b58.jpg"
            alt="Slide One"
            height={800}
            width={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slideShow3.0006489a.jpg"
            alt="Slide Two"
            height={800}
            width={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slideShow4.d9ba1e2d.jpg"
            alt="Slide Three"
            height={800}
            width={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slideShow5.b502aa01.jpg"
            alt="Slide Four"
            height={800}
            width={600}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slideShow6.03103579.jpg"
            alt="Slide Five"
            height={800}
            width={600}
          />
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default Slider;

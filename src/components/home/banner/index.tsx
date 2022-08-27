import { Pagination, Navigation } from "swiper";

// components
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import { Content, Container } from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = ({ slides }: { slides: string[] }) => {
  const getSlide = (slide: string) => (
    <SwiperSlide
      key={slide}
      style={{
        maxWidth: "120rem",
      }}
    >
      <Content src={slide} />
    </SwiperSlide>
  );

  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={"auto"}
        spaceBetween={16}
        centeredSlides
      >
        {slides.map(getSlide)}
      </Swiper>
    </Container>
  );
};

export default HomeBanner;

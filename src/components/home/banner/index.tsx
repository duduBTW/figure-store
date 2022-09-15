import { Pagination, Navigation, Autoplay } from "swiper";

// components
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import { Content, Container } from "./styles";

const HomeBanner = ({ slides }: { slides: string[] }) => {
  const getSlide = (slide: string) => (
    <SwiperSlide
      key={slide}
      style={{
        maxWidth: "120rem",
      }}
    >
      {({ isActive }) => <Content isActive={isActive} src={slide} />}
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
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

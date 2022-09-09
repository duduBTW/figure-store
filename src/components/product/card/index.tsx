import { Image } from "server/client/figures";
import { useMemo } from "react";
import { Pagination, Navigation } from "swiper";

// components
import Link from "next/link";
import FigureTooltip from "components/figure/tooltip";

// styles
import { Container, Miniature, Title } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCard = ({
  price,
  miniatures,
  color,
  id,
  name,
}: {
  price: number;
  name: string;
  miniatures: Image[];
  color: string;
  id: string;
}) => {
  const formatedPrice = useMemo(
    () =>
      Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price),
    [price]
  );

  return (
    <Link href={`/figure/${id}`}>
      <a>
        <FigureTooltip
          placement="right-start"
          figureColor={color}
          figureName={name}
        >
          <Container figureColor={color}>
            <Swiper
              loop
              modules={[Pagination, Navigation]}
              pagination={{
                enabled: true,
              }}
              spaceBetween={10}
              slidesPerView={1}
            >
              {miniatures.map((miniature) => (
                <SwiperSlide key={miniature.id}>
                  <Miniature src={`/figure/${miniature.medium}`} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Title variant="title-5">{formatedPrice}</Title>
          </Container>
        </FigureTooltip>
      </a>
    </Link>
  );
};

export default ProductCard;

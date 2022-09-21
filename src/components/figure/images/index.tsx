import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Image } from "server/client/figures";
import {
  Container,
  Content,
  ImageThumbsContainer,
  ImageThumbsMiniature,
  ImageThumbsMiniatureContainer,
} from "./styles";

const FigureImages = ({ images }: { images: Image[] }) => {
  const dynamicRoute = useRouter().asPath;
  const [imageActive, setImageActive] = useState(0);

  // Reset count to 0 on dynamic route change.
  useEffect(() => setImageActive(0), [dynamicRoute]);

  return (
    <Container>
      <ImageThumbs
        value={imageActive}
        onChange={(i) => setImageActive(i)}
        images={images}
      />
      <div>
        <Content
          src={`/figure/${images[imageActive]?.large}`}
          style={{
            maxWidth: "100%",
          }}
        />
      </div>
    </Container>
  );
};

const ImageThumbs = ({
  images,
  onChange,
  value,
}: {
  images: Image[];
  onChange: (imageIndex: number) => void;
  value: number;
}) => {
  return (
    <ImageThumbsContainer>
      {images.map((image, index) => (
        <ImageThumbsMiniatureContainer
          active={value === index}
          onMouseEnter={() => onChange(index)}
          onClick={() => onChange(index)}
          key={image.id}
        >
          <ImageThumbsMiniature src={`/figure/${image.small}`} />
        </ImageThumbsMiniatureContainer>
      ))}
    </ImageThumbsContainer>
  );
};

export default FigureImages;

import styled from "@emotion/styled";
import Text from "components/text";

export const Title = styled(Text)`
  transition: color 0.1s ease;
`;

interface ContainerProps {
  figureColor: string;
}
export const Container = styled.div<ContainerProps>`
  cursor: pointer;
  text-underline-offset: 0.4rem;

  &:hover {
    ${Title} {
      color: ${({ figureColor }) => figureColor};
    }
  }

  .swiper-slide {
    width: 100% !important;
  }

  .swiper-pagination {
    bottom: 2rem;
  }
`;

export const Miniature = styled.img`
  width: 100%;
  /* height: 20rem; */
  object-fit: cover;
  border-radius: 1.2rem;
  margin-bottom: 0.8rem;
  aspect-ratio: 6 / 7;
`;

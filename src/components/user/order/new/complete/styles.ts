import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const UserOderNewCompleteContainer = styled.div``;

export const Banner = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  z-index: -1;
  opacity: 0.6;
`;
export const Content = styled.div`
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mq.fromTabletMd} {
    margin: 8rem auto 4rem;
    max-width: 80rem;
    border-radius: 1.2rem;
  }

  ${mq.fromMobileLg} {
    padding: 3.2rem;
  }
`;

export const Yay = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 2222rem;
  border: 0.3rem solid var(--color-success);
  margin: 0 auto;
`;
export const Title = styled(Text)`
  text-align: center;
  color: var(--color-success);
`;
export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background: var(--color-divider);
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.2rem;

  ${mq.fromTabletMd} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const ProductMiniature = styled.img`
  display: flex;
  height: 6rem;
  width: 6rem;
  border-radius: 0.8rem;

  ${mq.fromTabletMd} {
    height: 8rem;
    width: 8rem;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

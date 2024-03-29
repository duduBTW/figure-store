import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-content);
  padding: 2rem 0;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.6rem;

  ${mq.fromMobileSm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.fromTabletSm} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  ${mq.fromTabletLg} {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  padding-top: 2rem;
  background: var(--color-content);
`;

export const Content = styled.img`
  height: 12rem;
  width: 100%;
  border-radius: 1.2rem;
  object-fit: cover;

  ${mq.fromMobileLg} {
    height: 16rem;
  }

  ${mq.fromTabletMd} {
    height: 24rem;
  }
`;

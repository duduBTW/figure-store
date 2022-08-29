import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  grid-area: images;
  max-width: 100%;

  ${mq.fromTabletMd} {
    min-width: 400px;
    max-width: 400px;
  }
`;

export const Content = styled.img`
  width: 100%;
  position: relative;

  ${mq.fromTabletMd} {
    margin-left: 2rem;
    border-radius: 1.2rem;
    position: sticky;
    top: calc(4rem + 8rem);
  }

  ${mq.fromDesktopSm} {
    margin-left: 0;
  }
`;

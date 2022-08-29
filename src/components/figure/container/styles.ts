import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  padding-top: 2rem;
  background: var(--color-content);
`;

export const Content = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "images"
    "price"
    "action"
    "description"
    "details";

  ${mq.fromTabletMd} {
    max-width: 120rem;
    grid-column-gap: 2rem;
    grid-template-areas:
      "images title"
      "images price"
      "images action"
      "images description"
      "images details";
    margin: 0 auto;
  }

  ${mq.fromDesktopSm} {
    grid-column-gap: 4rem;
  }
`;

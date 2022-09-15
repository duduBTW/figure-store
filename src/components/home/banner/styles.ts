import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  padding-top: 2rem;
  background: var(--color-content);
`;

interface ContentProps {
  isActive: boolean;
}
export const Content = styled.img<ContentProps>`
  height: 12rem;
  width: 100%;
  border-radius: 1.2rem;
  object-fit: cover;
  object-position: center 20%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
  transition: opacity 0.2s ease;

  ${mq.fromMobileLg} {
    height: 16rem;
  }

  ${mq.fromTabletMd} {
    height: 24rem;
  }
`;

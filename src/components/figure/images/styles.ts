import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  grid-area: images;
  display: flex;
  gap: 2rem;
  max-width: 100%;
  flex-direction: column;
  margin-left: 0;

  ${mq.fromTabletMd} {
    min-width: 52rem;
    max-width: 52rem;
    flex-direction: row;
    margin-left: 2rem;
  }

  ${mq.fromDesktopSm} {
    margin-left: 0;
  }
`;

export const Content = styled.img`
  width: 100%;
  position: relative;

  ${mq.fromTabletMd} {
    border-radius: 1.2rem;
    position: sticky;
    top: calc(4rem + 8rem);
  }
`;

export const ImageThumbsContainer = styled.div`
  max-width: 10rem;
  min-width: 10rem;
  display: none;
  flex-direction: column;
  gap: 0.8rem;

  ${mq.fromTabletMd} {
    display: flex;
  }
`;

interface ImageThumbsMiniatureContainerProps {
  active?: boolean;
}
export const ImageThumbsMiniatureContainer = styled.button<ImageThumbsMiniatureContainerProps>`
  cursor: pointer;
  opacity: 0.72;
  overflow: hidden;
  max-width: 100%;
  border: 0.2rem solid var(--color-divider);
  border-radius: 0.8rem;

  ${({ active }) =>
    active &&
    css`
      border-color: var(--color-primary-d);
      opacity: 1;
    `}

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0.2rem var(--color-primary);
  }
`;

export const ImageThumbsMiniature = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

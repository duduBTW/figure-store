import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  ${mq.fromMobileLg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.fromTabletSm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageUploadItemContainer = styled.div`
  max-width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
  background: var(--color-background);
  border-radius: 1.2rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ImageUploadItemMiniature = styled.img`
  border-radius: 1.2rem;
  height: 24rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
  background-color: white;

  ${mq.fromMobileLg} {
    height: 20rem;
  }
`;

export const ImageUploadDropzoneContainer = styled.button`
  cursor: pointer;
  min-height: 14rem;
  height: 100%;
  width: 100%;
  border-radius: 1.2rem;
  border: 0.1rem solid var(--color-primary);
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  transition: box-shadow 0.1s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 2px var(--color-primary);
  }

  ${mq.fromMobileLg} {
    min-height: 20rem;
  }
`;

export const ImageResetDropzoneContainer = styled.button`
  cursor: pointer;
  min-height: 14rem;
  height: 100%;
  width: 100%;
  border-radius: 1.2rem;
  border: 0.1rem solid var(--color-error);
  color: var(--color-error);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  transition: box-shadow 0.1s ease-in-out;
  &:focus,
  &:hover {
    box-shadow: 0 0 2px var(--color-error);
  }

  ${mq.fromMobileLg} {
    min-height: 20rem;
  }
`;

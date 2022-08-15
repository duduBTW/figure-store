import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
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
  height: 20rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
  background-color: white;
`;

export const ImageUploadDropzoneContainer = styled.button`
  cursor: pointer;
  min-height: 20rem;
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
`;

export const ImageResetDropzoneContainer = styled.button`
  cursor: pointer;
  min-height: 20rem;
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
`;

import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 100rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const AlertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 1px solid var(--color-divider);
  padding-top: 2rem;
`;

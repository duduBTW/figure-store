import styled from "@emotion/styled";

export const Container = styled.a`
  cursor: pointer;
  text-underline-offset: 0.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Miniature = styled.img`
  width: 100%;
  height: 32rem;
  object-fit: cover;
  border-radius: 1.2rem;
  margin-bottom: 0.8rem;
`;

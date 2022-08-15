import styled from "@emotion/styled";
import Text from "components/text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
export const Content = styled.input`
  transition: box-shadow 0.1s ease-in-out;
  border: 0.1rem solid var(--color-divider);
  outline: none;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 1.6em;
  border-radius: 0.8rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.02em;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0.2rem var(--color-primary);
  }
`;
export const Label = styled(Text)``;

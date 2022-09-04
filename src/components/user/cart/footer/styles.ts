import styled from "@emotion/styled";
import Button from "components/button";
import { mq } from "constants/theme";

export const Container = styled.div`
  padding: 1.8rem 2rem;
  background: var(--color-content);
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${mq.fromTabletMd} {
    position: relative;
    width: auto;
    gap: 2rem;
    padding: 0;
    margin-bottom: 0;
    margin-left: calc(22rem + 2rem);
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Continue = styled(Button)`
  width: 100%;

  ${mq.fromTabletMd} {
    align-self: flex-end;
  }
`;

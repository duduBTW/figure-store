import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 2rem;

  ${mq.fromTabletMd} {
    max-width: 80rem;
    margin-top: 8rem;
    padding-right: 4rem;
    gap: 4rem;
  }
`;

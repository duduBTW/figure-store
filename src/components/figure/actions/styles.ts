import styled from "@emotion/styled";
import Button from "components/button";
import { mq } from "constants/theme";

export const Container = styled.div`
  margin: 4rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${mq.fromDesktopSm} {
    margin: 6rem 0 0;
    flex-direction: row;
  }
`;

export const FigureActionsButton = styled(Button)`
  flex: 1;
`;

export const FigureActionsCardButton = styled(Button)``;

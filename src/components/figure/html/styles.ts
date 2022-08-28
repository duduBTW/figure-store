import styled from "@emotion/styled";
import { body1Styles, subtitle1, title3 } from "components/text/styles";
import { mq } from "constants/theme";

interface ContainerProps {
  figureColor: string;
}
export const Container = styled.div<ContainerProps>`
  margin: 3.2rem 2rem 0;

  p {
    ${body1Styles};
    padding: 0.8rem 0;
    color: var(--text-secondary);
  }

  h4 {
    ${subtitle1}
    padding: 0.4rem 0;
    margin: 0;
    color: ${({ figureColor }) => figureColor};
  }

  h3 {
    ${title3}
    margin: 2rem 0;
    color: ${({ figureColor }) => figureColor};
  }

  ${mq.fromDesktopSm} {
    margin: 3.2rem 0 0;
  }
`;

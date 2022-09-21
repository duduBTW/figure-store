import styled from "@emotion/styled";
import { body1Styles, subtitle1, title3 } from "components/text/styles";
import { mq } from "constants/theme";

interface ContainerProps {
  figureColor?: string;
}
export const Html = styled.div<ContainerProps>`
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;

  p {
    ${body1Styles};
    padding: 0.8rem 0;
    color: var(--text-secondary);
  }

  h4 {
    ${subtitle1}
    padding: 0.4rem 0;
    margin: 0;
    color: ${({ figureColor }) => figureColor ?? "var(--text-primary)"};
  }

  h3 {
    ${title3}
    margin: 2rem 0;
    color: ${({ figureColor }) => figureColor};
  }
`;

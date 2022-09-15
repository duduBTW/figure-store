import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";
import { ColorVariant, TextVariant } from ".";

export const body1Styles = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: 0.02em;

  ${mq.fromMobileSm} {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

export const subtitle1 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const title2 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 275;
  font-size: 3.8rem;
  line-height: 4.2rem;

  ${mq.fromMobileLg} {
    font-size: 4.2rem;
    line-height: 4.8rem;
  }
`;

export const title3 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 3.2rem;

  ${mq.fromMobileLg} {
    font-size: 2.8rem;
    line-height: 4rem;
  }
`;

export const title4 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 2rem;
  line-height: 3rem;

  ${mq.fromMobileLg} {
    font-size: 2.2rem;
    line-height: 3.2rem;
  }
`;

export const title5 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 600;
  letter-spacing: 0.02em;

  ${mq.fromMobileLg} {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

export const body2Styles = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 0.02em;
`;

export const buttonOutlined = css`
  cursor: pointer;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.2rem;
  text-underline-offset: 0.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const getStyles = (variant: TextVariant) => {
  switch (variant) {
    case "title-1":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 40px;
      `;

    case "title-2":
      return title2;

    case "title-3":
      return title3;

    case "title-4":
      return title4;

    case "title-5":
      return title5;

    case "title-6":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0.02em;
      `;

    case "subtitle-1":
      return subtitle1;

    case "subtitle-2":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
      `;

    case "body-1":
      return body1Styles;

    case "body-2":
      return body2Styles;

    case "button-outlined":
      return buttonOutlined;
  }
};

interface ContainerProps {
  variant: TextVariant;
  colorText: ColorVariant;
  name?: string;
}

export const Container = styled.div<ContainerProps>`
  ${({ variant }) => getStyles(variant)};
  grid-area: ${({ name }) => name ?? "unset"};
  color: ${({ colorText }) => {
    switch (colorText) {
      case "textPrimary":
        return "var(--text-primary)";

      case "textSecondary":
        return "var(--text-secondary)";

      case "primary":
        return "var(--color-primary)";

      default:
        return colorText;
    }
  }};
`;

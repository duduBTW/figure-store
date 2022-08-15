import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextVariant } from ".";

interface ContainerProps {
  variant: TextVariant;
}

export const body1Styles = css`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: 0.02em;
`;

export const title2 = css`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 275;
  font-size: 4.2rem;
  line-height: 4.8rem;
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
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 4rem;
      `;

    case "title-4":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 3.2rem;
        letter-spacing: 0.02em;
      `;

    case "title-5":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.8rem;
        letter-spacing: 0.02em;
      `;

    case "subtitle-1":
      return css`
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.4rem;
      `;

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
      return css`
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: 0.02em;
      `;
  }
};

export const Container = styled.div<ContainerProps>`
  ${({ variant }) => getStyles(variant)};
`;

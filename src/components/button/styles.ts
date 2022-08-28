import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonColor } from ".";

interface Content {
  dense?: boolean;
  color?: ButtonColor;
  loading?: boolean;
}
export const Content = styled.button<Content>`
  box-sizing: border-box;
  border: none;
  outline: none;

  cursor: pointer;

  border-radius: 1.2rem;
  padding: 0.6rem 4rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3rem;
  text-align: center;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  ${({ dense }) => {
    if (!dense) return "";

    return css`
      padding: 1rem 1.2rem;
      max-height: 100%;
      font-size: 1.6rem;
    `;
  }}

  ${({ color }) => {
    if (!color) return "";

    switch (color) {
      case "primary":
        return css`
          background: var(--color-primary);
          color: var(--color-content);
        `;

      case "primary-l":
        return css`
          background: var(--color-primary-l);
          color: var(--color-primary);
        `;
    }
  }}
  
  ${({ loading }) => {
    if (loading)
      return css`
        pointer-events: none;
        z-index: 4;
      `;
  }}
`;

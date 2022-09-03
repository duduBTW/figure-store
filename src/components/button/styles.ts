import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonColor } from ".";

interface Content {
  dense?: boolean;
  color?: ButtonColor;
  loading?: boolean;
}
export const Content = styled.button<Content>`
  transition: background 0.14s ease;
  box-sizing: border-box;
  border: 0.1rem solid transparent;
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
      padding: 0.4rem 1.2rem;
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

          &:hover {
            background: var(--color-primary-d);
          }

          &:focus {
            background: var(--color-primary-d);
            box-shadow: 0 0 0.4rem var(--color-primary);
          }
        `;

      case "primary-l":
        return css`
          transition: background 0 ease;
          background: var(--color-primary-l);
          color: var(--color-primary);

          &:hover,
          &:focus {
            border: 0.1rem solid var(--color-primary);
          }
        `;

      case "error-l":
        return css`
          transition: background 0 ease;
          background: var(--color-error-l);
          color: var(--color-error);

          &:hover,
          &:focus {
            border: 0.1rem solid var(--color-error);
          }
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

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  background: var(--color-content);
  margin: 0 auto;
  display: flex;
  overflow-x: auto;
  box-sizing: border-box;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.1rem;
    width: calc(100% + 4rem);
    margin: 0 -2rem;
    background: var(--color-divider);
  } */

  ${mq.fromTabletMd} {
    max-width: 80rem;
    border-radius: 1.2rem;
    margin: 2rem auto;

    &::after {
      display: none;
    }
  }
`;

interface ITabItem {
  selected?: boolean;
}
export const TabItem = styled.button<ITabItem>`
  cursor: pointer;
  text-align: center;
  padding: 1.2rem 2rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border-radius: 1.2rem;

  &:hover,
  &:focus {
    background: var(--color-primary-l);
  }

  ${({ selected }) => {
    if (!selected) return "";

    return css`
      color: var(--color-primary);
      font-weight: 700;

      position: relative;
      &:after {
        content: "";
        position: absolute;
        bottom: -0rem;
        left: 50%;
        transform: translateX(-50%);
        width: 6rem;
        height: 0.4rem;
        background: var(--color-primary);
        border-radius: 222rem;
        z-index: 2;
      }
    `;
  }}

  ${mq.fromMobileLg} {
    padding: 1.2rem 3.2rem;
  }
`;

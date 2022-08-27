import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  margin: -1.2rem -2rem 3.2rem;
  padding-bottom: 0.4rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    height: 0.1rem;
    width: calc(100% + 4rem);
    margin: 0 -2rem;
    background: var(--color-divider);
  }

  ${mq.fromMobileLg} {
    margin: -2rem -3.2rem 3.2rem;
  }
`;

interface ITabItem {
  selected?: boolean;
}
export const TabItem = styled.div<ITabItem>`
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

  &:hover {
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
        bottom: -0.4rem;
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

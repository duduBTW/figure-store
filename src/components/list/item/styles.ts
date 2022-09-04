import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

interface ListItemContainerProps {
  selected?: boolean;
  clickable?: boolean;
  hideBorder?: boolean;
}
export const ListItemContainer = styled.div<ListItemContainerProps>`
  border: ${({ hideBorder }) => (hideBorder ? "0" : "0.1rem")} solid
    ${({ selected }) =>
      selected ? "var(--color-primary)" : "var(--color-divider)"};
  background: var(--color-content);
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 1.6rem;
  display: grid;
  grid-template-areas:
    "startAction"
    "primary"
    "secondary"
    "endAction";

  ${({ clickable }) => {
    if (clickable)
      return css`
        user-select: none;
        cursor: pointer;

        &:hover {
          background: var(--color-primary-l);
        }
      `;
  }};

  ${mq.fromTabletMd} {
    grid-template-areas:
      "startAction primary   endAction"
      "startAction secondary endAction";
    grid-template-columns: auto 1fr auto;
  }
`;
export const StartAction = styled.div`
  grid-area: startAction;
  margin-bottom: 1.2rem;

  ${mq.fromTabletMd} {
    margin-bottom: 0;
    margin-right: 1.6rem;
    display: flex;
    align-items: center;
  }
`;
export const PrimaryText = styled(Text)`
  grid-area: primary;
  margin-top: 0.4rem;

  ${mq.fromTabletMd} {
    margin-top: 0;
  }
`;
export const SecondaryText = styled(Text)`
  grid-area: secondary;
  margin-top: 0.4rem;
`;
export const EndAction = styled.div`
  margin-top: 2rem;
  grid-area: endAction;

  ${mq.fromTabletMd} {
    margin-top: 0rem;
  }
`;

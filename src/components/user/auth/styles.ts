import styled from "@emotion/styled";
import { loadingContainer } from "components/container/styles";
import Text from "components/text";
import { mq } from "constants/theme";

export const UserAuthPageContainer = styled.main`
  display: flex;
`;

export const UserAuthContent = styled.main`
  background: var(--color-content);
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 2rem 3.2rem;
  max-width: 100%;
  width: 100%;

  ${mq.fromTabletSm} {
    padding: 6rem 4rem 3.2rem;
    min-width: 40rem;
  }

  ${mq.fromDesktopSm} {
    max-width: 62rem;
    min-width: 62rem;
    padding: 6rem 10rem 3.2rem;
  }
`;

export const UserAuthTitle = styled(Text)``;

export const UserAuthFooter = styled(Text)``;

interface UserAuthFormContainer {
  loading?: boolean;
}
export const UserAuthFormContainer = styled.form<UserAuthFormContainer>`
  ${({ loading }) => loading && loadingContainer}
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
`;
export const UserAuthFormDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--color-divider);
  margin: 2rem 0;
`;

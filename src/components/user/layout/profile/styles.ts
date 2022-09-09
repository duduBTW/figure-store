import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  border-top: 0.1rem solid var(--color-divider);
  background: var(--color-content);
`;

export const Content = styled.main`
  box-sizing: border-box;
  max-width: 80rem;
  width: 100%;
  margin-top: 8rem;
  margin-left: 4rem;
  padding-right: 2rem;

  ${mq.fromDesktopSm} {
    padding-right: 0;
  }
`;

export const SideNav = styled.aside`
  flex: 1;
  box-sizing: border-box;
  min-height: calc(100vh - 8.1rem);
  height: 100%;
  max-height: 100%;
  min-width: 24rem;
  border-right: 0.1rem solid var(--color-divider);
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  position: sticky;
  top: 0;
`;

export const SideItem = styled(Text)`
  cursor: pointer;
  width: 20rem;
  box-sizing: border-box;
  padding: 0.4rem 1.6rem;
  border-radius: 1.2rem;
  margin-right: 2rem;

  &:hover {
    background: var(--color-primary-l);
  }
`;

export const Spacer = styled.div`
  flex: 0;

  ${mq.fromDesktopSm} {
    flex: 1;
  }
`;

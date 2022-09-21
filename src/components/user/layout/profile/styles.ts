import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  border-top: 0.1rem solid var(--color-divider);
`;

export const Content = styled.main`
  box-sizing: border-box;
  width: 100%;

  ${mq.fromDesktopSm} {
    padding-right: 0;
  }

  ${mq.fromTabletMd} {
    max-width: 80rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    margin-left: 4rem;
    padding-right: 2rem;
  }
`;

export const SideNavContainer = styled.aside`
  flex: 1;
  box-sizing: border-box;
  min-height: calc(100vh - 8.1rem);
  height: 100%;
  max-height: 100%;
  min-width: 24rem;
  top: 0;
  display: none;
  justify-content: flex-end;

  ${mq.fromTabletMd} {
    display: flex;
  }
`;

export const SideNavContent = styled.aside`
  padding: 2rem 0.4rem;
  border-radius: 1.2rem;
  margin-top: 4rem;
  width: min-content;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
  position: sticky;
  top: 4rem;
  background: var(--color-content);
`;

export const SideItem = styled(Text)`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  cursor: pointer;
  width: 20rem;
  box-sizing: border-box;
  padding: 0.4rem 1.6rem;
  border-radius: 1.2rem;

  &:hover {
    background: var(--color-primary-l);
  }
`;

export const BottomNavContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  padding: 1.2rem 0;
  justify-content: space-around;
  width: 100%;
  background: var(--color-content);
  border-top: 0.1rem solid var(--color-divider);
  z-index: 3;

  ${mq.fromTabletMd} {
    display: none;
  }
`;

export const BottomItem = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;

  cursor: pointer;
  box-sizing: border-box;
  padding: 0.8rem 1.6rem 0.4rem;
  margin: -0.8rem -1.6rem -0.4rem;
  border-radius: 1.2rem;

  &:hover,
  &:focus {
    background: var(--color-primary-l);
  }
`;

export const Spacer = styled.div`
  flex: 0;

  ${mq.fromTabletMd} {
    flex: 1;
  }
`;

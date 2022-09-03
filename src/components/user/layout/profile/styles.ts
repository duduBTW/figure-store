import styled from "@emotion/styled";

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
`;

export const SideNav = styled.aside`
  flex: 1;
  height: calc(100vh - 8.1rem);
  min-width: 32rem;
  border-right: 0.1rem solid var(--color-divider);
`;

export const Spacer = styled.div`
  flex: 1;
`;

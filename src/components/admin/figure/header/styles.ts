import styled from "@emotion/styled";
import { mq } from "constants/theme";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

export const Container = styled.div`
  transition: margin 0.2s ease, padding 0.2s ease;
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;

  ${mq.fromTabletMd} {
    margin: 0rem auto 2rem;
    max-width: 80rem;
    border-radius: 1.2rem;
    padding: 2rem 3.2rem;
  }
`;

export const AdminFigureBackContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary);
  background: var(--color-content);
  width: 100%;
  box-sizing: border-box;
  padding: 2rem 2rem 0;

  &:hover {
    color: var(--color-primary);
  }

  ${mq.fromTabletMd} {
    padding: 0;
    background: transparent;
    margin: 4rem auto 0.8rem;
    max-width: 80rem;
  }
`;

export const AdminFigureBackIcon = styled(ArrowLeftLineIcon)`
  width: 2rem;
`;

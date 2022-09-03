import styled from "@emotion/styled";
import { mq } from "constants/theme";
import AdminFigureContainer from "../../../container";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";

export const Container = styled(AdminFigureContainer)`
  gap: 0.8rem;
  padding: 2rem;

  ${mq.fromMobileLg} {
    margin-top: 0;
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

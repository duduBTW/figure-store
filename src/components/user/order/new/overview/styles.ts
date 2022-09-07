import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

interface ContainerProps {
  confirm: boolean;
}
export const Container = styled.div<ContainerProps>`
  transition: background 0.2s ease;
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${({ confirm }) =>
    confirm ? "var(--color-content)" : "var(--color-background)"};

  ${mq.fromTabletMd} {
    position: relative;
    padding: 8rem 4rem;
    min-height: calc(100vh - 8rem);
    width: auto;
    min-width: 38rem;
    max-width: 48rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--color-divider);
`;

export const FigureOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.8rem;
`;

export const FigureOverviewMiniature = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 0.4rem;
  object-fit: cover;
  object-position: center;
  object-fit: cover;
`;

export const FigureOverviewName = styled(Text)`
  width: 80%;
`;

export const InfoOverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

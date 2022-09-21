import styled from "@emotion/styled";
import Text from "components/text";

export const SectionContainer = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid var(--color-divider);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const DeliverStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DeliverSteps = styled.div`
  display: flex;
  gap: 0.4rem;
`;

interface DeliverStepProps {
  active: boolean;
}
export const DeliverStep = styled.div<DeliverStepProps>`
  flex: 1;
  height: 0.6rem;
  background: ${({ active }) =>
    active ? "var(--color-primary)" : "var(--color-primary-l)"};
  border-radius: 222rem;
`;

export const FigureListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const FigureItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;
export const FigureDivider = styled.div`
  width: 100%;
  height: 0.1rem;
  background: var(--color-divider);
`;
export const FigureTitle = styled(Text)`
  flex: 1;
`;
export const FigureMiniature = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  object-position: top;
  border-radius: 0.8rem;
`;

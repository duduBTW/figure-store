import styled from "@emotion/styled";
import { loadingContainer } from "components/container/styles";
import { mq } from "constants/theme";

interface ContainerProps {
  confirm: boolean;
  loading?: boolean;
}
export const Container = styled.div<ContainerProps>`
  transition: background 0.2s ease;
  display: flex;
  justify-content: center;
  background: ${({ confirm }) =>
    confirm ? "var(--color-background)" : "var(--color-content)"};
  flex-direction: ${({ confirm }) => (confirm ? "column" : "column-reverse")};

  ${mq.fromTabletMd} {
    flex-direction: row;
  }

  ${({ loading }) => loading && loadingContainer};
`;

import styled from "@emotion/styled";
import { AlertType } from ".";

interface ContainerProps {
  type: AlertType;
}
export const Container = styled.div<ContainerProps>`
  padding: 1.6rem 2rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: ${({ type }) => {
    switch (type) {
      case "success":
        return "var(--color-success-l)";
      case "info":
        return "var(--color-info-l)";
      case "warning":
        return "var(--color-error-l)";

      default:
        break;
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case "success":
        return "var(--color-success-d)";
      case "info":
        return "var(--color-info-d)";
      case "warning":
        return "var(--color-error-d)";
    }
  }};
`;

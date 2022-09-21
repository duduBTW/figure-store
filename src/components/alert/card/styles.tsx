import styled from "@emotion/styled";
import { AlertType } from ".";

interface ContainerProps {
  type: AlertType;
}
export const AlertCardContainer = styled.div<ContainerProps>`
  border: 0.1rem solid transparent;
  cursor: pointer;
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
      case "error":
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
      case "error":
        return "var(--color-error-d)";
    }
  }};

  &:hover,
  &:focus {
    border-color: ${({ type }) => {
      switch (type) {
        case "success":
          return "var(--color-success-d)";
        case "info":
          return "var(--color-info-d)";
        case "error":
          return "var(--color-error)";

        default:
          break;
      }
    }};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

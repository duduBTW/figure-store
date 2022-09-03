// styles
import { PropsWithChildren } from "react";
import { Container } from "./styles";

const AdminFigureContainer = ({
  children,
  className,
  gap = 0,
}: PropsWithChildren<{ className?: string; gap?: number }>) => {
  return (
    <Container gap={gap} className={className}>
      {children}
    </Container>
  );
};

export default AdminFigureContainer;

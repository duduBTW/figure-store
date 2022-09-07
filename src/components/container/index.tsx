// styles
import { PropsWithChildren } from "react";
import { Container } from "./styles";

const AdminFigureContainer = ({
  children,
  className,
  gap = 0,
  loading = false,
}: PropsWithChildren<{
  className?: string;
  gap?: number;
  loading?: boolean;
}>) => {
  return (
    <Container gap={gap} loading={loading} className={className}>
      {children}
    </Container>
  );
};

export default AdminFigureContainer;

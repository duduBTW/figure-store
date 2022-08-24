// styles
import { PropsWithChildren } from "react";
import { Container } from "./styles";

const AdminFigureContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <Container className={className}>{children}</Container>;
};

export default AdminFigureContainer;

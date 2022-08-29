import { PropsWithChildren } from "react";

// components
import Text from "components/text";
import Link from "next/link";

// styles
import {
  AdminFigureBackContainer,
  Container,
  AdminFigureBackIcon,
} from "./styles";

const AdminFigureHeader = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AdminFigureBack>Back to figure list</AdminFigureBack>
      <Container>
        <Text variant="title-3">{children}</Text>
      </Container>
    </>
  );
};

export const AdminFigureBack = ({ children }: PropsWithChildren) => {
  return (
    <Link href="/admin/figure" passHref>
      <AdminFigureBackContainer>
        <AdminFigureBackIcon />
        <Text color="primary" variant="button-outlined">
          {children}
        </Text>
      </AdminFigureBackContainer>
    </Link>
  );
};

export default AdminFigureHeader;

import { PropsWithChildren } from "react";
import { User } from "pages/api/user";

// components
import UserLayout from "components/user/layout";
import { SideNav, Spacer, Content, Container } from "./styles";

const UserLayoutProfile = ({
  children,
  user,
}: PropsWithChildren<{
  user: User;
}>) => {
  return (
    <>
      <UserLayout user={user} />
      <Container>
        <SideNav />
        <Content>{children}</Content>
        <Spacer />
      </Container>
    </>
  );
};

export default UserLayoutProfile;

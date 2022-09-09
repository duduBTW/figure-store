import { PropsWithChildren } from "react";
import { User } from "pages/api/user";

// components
import UserLayout from "components/user/layout";

// styles
import { SideNav, Spacer, Content, Container, SideItem } from "./styles";

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
        <SideNav>
          <SideItem>Profile</SideItem>
          <SideItem>Orders</SideItem>
          <SideItem>Payment</SideItem>
          <SideItem>Address</SideItem>
        </SideNav>
        <Content>{children}</Content>
        <Spacer />
      </Container>
    </>
  );
};

export default UserLayoutProfile;

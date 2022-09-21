import { PropsWithChildren } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import service from "server/client/services";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

// components
import User4LineIcon from "remixicon-react/User4LineIcon";
import Notification4LineIcon from "remixicon-react/Notification4LineIcon";
import Link from "next/link";
import Button from "components/button";

// styles
import {
  SideNavContainer,
  Spacer,
  Content,
  Container,
  SideItem,
  BottomNavContainer,
  BottomItem,
  SideNavContent,
} from "components/user/layout/profile/styles";
import { Nav } from "./styles";

const AdminLayout = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { mutate: logout } = useMutation(service.logout, {
    onSuccess: () => {
      push("/login");
      queryClient.setQueryData(["user"], null);
    },
    onError: (error) => {
      console.log("error", error);
      toast.error("Cant logout, you are here forever now ヾ(≧▽≦*)o");
    },
  });

  return (
    <>
      <Nav>
        <Button onClick={() => logout()} dense color="primary-l">
          Sing out
        </Button>
      </Nav>
      <Container>
        <SideNav />
        <Content>{children}</Content>
        <BottomNav />
        <Spacer />
      </Container>
    </>
  );
};

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <Link href={"/admin/figure"}>
        <a>
          <BottomItem>
            <User4LineIcon />
            Products
          </BottomItem>
        </a>
      </Link>
      <Link href={"/admin/announcement"}>
        <a>
          <BottomItem>
            <Notification4LineIcon />
            Announcments
          </BottomItem>
        </a>
      </Link>
    </BottomNavContainer>
  );
};

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavContent>
        <Link href={"/admin/figure"}>
          <a>
            <SideItem>
              <User4LineIcon />
              Products
            </SideItem>
          </a>
        </Link>
        <Link href={"/admin/announcement"}>
          <a>
            <SideItem>
              <Notification4LineIcon />
              Announcments
            </SideItem>
          </a>
        </Link>
      </SideNavContent>
    </SideNavContainer>
  );
};

export default AdminLayout;

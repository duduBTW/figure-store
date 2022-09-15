import { PropsWithChildren } from "react";
import { User } from "pages/api/user";

// components
import UserLayout from "components/user/layout";
import User3LineIcon from "remixicon-react/User3LineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";
import MoneyDollarCircleLineIcon from "remixicon-react/MoneyDollarCircleLineIcon";
import ShoppingCartLineIcon from "remixicon-react/ShoppingCartLineIcon";
import Link from "next/link";

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
} from "./styles";

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
        <BottomNav />
        <Spacer />
      </Container>
    </>
  );
};

const BottomNav = () => {
  return (
    <BottomNavContainer>
      <Link href={"/user/profile"}>
        <a>
          <BottomItem>
            <User3LineIcon />
            Profile
          </BottomItem>
        </a>
      </Link>
      <Link href={"/user/order"}>
        <a>
          <BottomItem>
            <ShoppingCartLineIcon />
            Orders
          </BottomItem>
        </a>
      </Link>
      <Link href={"/user/payment"}>
        <a>
          <BottomItem>
            <MoneyDollarCircleLineIcon />
            Payment
          </BottomItem>
        </a>
      </Link>
      <Link href={"/user/adress"}>
        <a>
          <BottomItem>
            <MapPin2LineIcon />
            Address
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
        <Link href={"/user/profile"}>
          <a>
            <SideItem>
              <User3LineIcon />
              Profile
            </SideItem>
          </a>
        </Link>
        <Link href={"/user/order"}>
          <a>
            <SideItem>
              <ShoppingCartLineIcon />
              Orders
            </SideItem>
          </a>
        </Link>
        <Link href={"/user/payment"}>
          <a>
            <SideItem>
              <MoneyDollarCircleLineIcon />
              Payment
            </SideItem>
          </a>
        </Link>
        <Link href={"/user/adress"}>
          <a>
            <SideItem>
              <MapPin2LineIcon />
              Address
            </SideItem>
          </a>
        </Link>
      </SideNavContent>
    </SideNavContainer>
  );
};

export default UserLayoutProfile;

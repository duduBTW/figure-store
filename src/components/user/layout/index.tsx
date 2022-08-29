import ButtonIcon from "components/button/icon";
import Link from "next/link";
import { PropsWithChildren } from "react";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";

// styles
import {
  Container,
  UserNavContainer,
  Logo,
  Spacer,
  UserProfilePictureContent,
  SearchInputContent,
  SearchButton,
  Separator,
} from "./styles";

const UserLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <UserNav />
      {children}
    </Container>
  );
};

const UserNav = () => {
  return (
    <UserNavContainer>
      <Link href="/" passHref>
        <a>
          <Logo src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg" />
        </a>
      </Link>

      <Spacer />
      <SearchInput />
      <Separator />
      <Link href={"/cart"} passHref>
        <ButtonIcon tooltip="Cart">
          <ShoppingBagLineIcon color="var(--color-primary)" />
        </ButtonIcon>
      </Link>
      <UserProfilePicture />
    </UserNavContainer>
  );
};

const SearchInput = () => {
  return (
    <>
      <SearchInputContent placeholder="Search..." type="text" name="" id="" />
      <ButtonIcon>
        <SearchButton color="var(--color-primary)" />
      </ButtonIcon>
    </>
  );
};

const UserProfilePicture = () => {
  return <UserProfilePictureContent src="https://placewaifu.com/image/48/48" />;
};

export default UserLayout;

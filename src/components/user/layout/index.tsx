import { User } from "pages/api/user";
import { PropsWithChildren } from "react";

// components
import Link from "next/link";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";
import ButtonIcon from "components/button/icon";

// styles
import {
  Container,
  UserNavContainer,
  Logo,
  Spacer,
  UserProfilePicture,
  SearchInputContent,
  SearchButton,
  Separator,
} from "./styles";
import { useUser } from "pages/_app";

const UserLayout = ({ children }: PropsWithChildren<{ user: User | null }>) => {
  return (
    <Container>
      <UserNav />
      {children}
    </Container>
  );
};

const UserNav = () => {
  const { data: user } = useUser();

  return (
    <UserNavContainer>
      <Link href="/" passHref>
        <a>
          <Logo
            src={
              "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.jpg"
            }
          />
        </a>
      </Link>

      <Spacer />
      <SearchInput />
      {user && (
        <>
          <Separator />
          <Link href={"/user/cart"} passHref>
            <ButtonIcon tooltip="Cart">
              <ShoppingBagLineIcon color="var(--color-primary)" />
            </ButtonIcon>
          </Link>
          <Link href={"/user/profile"} passHref>
            <UserProfilePicture
              src={user.profilePicture ?? "https://placewaifu.com/image/48/48"}
            />
          </Link>
        </>
      )}
    </UserNavContainer>
  );
};

const SearchInput = () => {
  return (
    <>
      <SearchInputContent placeholder="Search..." type="text" name="" id="" />
      <ButtonIcon tabIndex={-1}>
        <SearchButton color="var(--color-primary)" />
      </ButtonIcon>
    </>
  );
};

export default UserLayout;

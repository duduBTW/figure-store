import ButtonIcon from "components/button/icon";
import Link from "next/link";
import { User } from "pages/api/user";
import { PropsWithChildren } from "react";
import ShoppingBagLineIcon from "remixicon-react/ShoppingBagLineIcon";

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

const UserLayout = ({
  children,
  user,
}: PropsWithChildren<{ user: User | null }>) => {
  return (
    <Container>
      <UserNav user={user} />
      {children}
    </Container>
  );
};

const UserNav = ({ user }: { user: User | null }) => {
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
          <UserProfilePicture
            src={user.profilePicture ?? "https://placewaifu.com/image/48/48"}
          />
        </>
      )}
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

export default UserLayout;

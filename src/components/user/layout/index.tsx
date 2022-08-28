import Link from "next/link";
import { PropsWithChildren } from "react";

// styles
import {
  Container,
  UserNavContainer,
  Logo,
  Spacer,
  UserProfilePictureContent,
  SearchInputContent,
  SearchButton,
  CartButton,
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
      <div>
        <CartButton color="var(--color-primary)" />
      </div>
      <UserProfilePicture />
    </UserNavContainer>
  );
};

const SearchInput = () => {
  return (
    <>
      <SearchInputContent placeholder="Search..." type="text" name="" id="" />
      <div>
        <SearchButton color="var(--color-primary)" />
      </div>
    </>
  );
};

const UserProfilePicture = () => {
  return <UserProfilePictureContent src="https://placewaifu.com/image/48/48" />;
};

export default UserLayout;

import Button from "components/button";
import Text from "components/text";
import Link from "next/link";
import { useUser } from "pages/_app";
import { PropsWithChildren } from "react";
import {
  Header,
  InfoItemContainer,
  Information,
  ProfilePicture,
} from "./styles";

const UserProfileInformation = () => {
  const { data: user, isLoading } = useUser();

  if (isLoading || !user) return <div>...</div>;
  return (
    <>
      <Header>
        <ProfilePicture src={user.profilePicture} />
        <Text variant="title-4">{user.name}</Text>
      </Header>
      <Information>
        {user.name && (
          <InfoItem url="name" label="Name">
            {user.name}
          </InfoItem>
        )}
        {user.email && (
          <InfoItem url="email" label="Email">
            {user.email}
          </InfoItem>
        )}
        {user.phone && (
          <InfoItem url="phone" label="Phone">
            {user.phone}
          </InfoItem>
        )}
        {user.document && (
          <InfoItem url="document" label="Document">
            {user.document}
          </InfoItem>
        )}
        {user.nacionalitty && (
          <InfoItem url="nacionalitty" label="Nacionalitty">
            {user.nacionalitty}
          </InfoItem>
        )}
      </Information>
    </>
  );
};

const InfoItem = ({
  label,
  children,
  url,
}: PropsWithChildren<{
  label: string;
  url: string;
}>) => {
  return (
    <InfoItemContainer>
      <Text variant="subtitle-1" name="label">
        {label}
      </Text>
      <Text variant="body-1" name="value">
        {children}
      </Text>
      <Link href={`/user/profile/edit/${url}`} passHref>
        <Button name="button" color="primary-l">
          Edit
        </Button>
      </Link>
    </InfoItemContainer>
  );
};

export default UserProfileInformation;

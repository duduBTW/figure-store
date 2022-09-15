import route from "server/client/routes";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Container from "components/container";
import Text from "components/text";
import UserProfileInformation from "components/user/profile/information";

const UserProfilePage = () => {
  return (
    <Container gap={2}>
      <Text variant="title-3">My profile</Text>
      <UserProfileInformation />
    </Container>
  );
};

UserProfilePage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserProfilePage;

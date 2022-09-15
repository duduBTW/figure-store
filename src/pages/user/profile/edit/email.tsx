import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "pages/_app";
import route from "server/client/routes";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Separator from "components/separator";
import Container from "components/container";
import Button from "components/button";
import Header from "components/header";
import Input from "components/input";

const UserProfileEditEmailPage = () => {
  const { data: user } = useUser();
  const formMethos = useForm({
    defaultValues: {
      email: user?.email,
    },
  });

  return (
    <Container>
      <Header backHref="/user/profile">Edit email</Header>
      <Separator height={2} />
      <FormProvider {...formMethos}>
        <form>
          <Input label="Email" name="email" type="email" />
          <Separator height={3.2} />
          <Button fullWidth>Save</Button>
        </form>
      </FormProvider>
    </Container>
  );
};

UserProfileEditEmailPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {});

export default UserProfileEditEmailPage;

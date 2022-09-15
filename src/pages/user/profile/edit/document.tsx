import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "pages/_app";
import route from "server/client/routes";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Container from "components/container";
import Button from "components/button";
import Separator from "components/separator";
import Header from "components/header";
import InputMask from "components/input/mask";

const UserProfilePage = () => {
  const { data: user } = useUser();
  const formMethos = useForm({
    defaultValues: {
      document: user?.document,
    },
  });

  return (
    <Container>
      <Header backHref="/user/profile">Edit Document</Header>
      <Separator height={2} />
      <FormProvider {...formMethos}>
        <form>
          <InputMask
            valueIsNumericString
            output="value"
            format="###-###-###-##"
            name="document"
            label="Document"
          />
          <Separator height={3.2} />
          <Button fullWidth>Save</Button>
        </form>
      </FormProvider>
    </Container>
  );
};

UserProfilePage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {});

export default UserProfilePage;

import { FormProvider, useForm } from "react-hook-form";
import { useUser } from "pages/_app";
import route from "server/client/routes";
import { countryListAllIsoData } from "components/user/auth/register/form";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Container from "components/container";
import Button from "components/button";
import Separator from "components/separator";
import Header from "components/header";
import InputSelect from "components/input/select";

const UserProfilePage = () => {
  const { data: user } = useUser();
  const formMethos = useForm({
    defaultValues: {
      nacionalitty: user?.nacionalitty,
    },
  });

  return (
    <Container>
      <Header backHref="/user/profile">Edit nacionalitty</Header>
      <Separator height={2} />
      <FormProvider {...formMethos}>
        <form>
          <InputSelect
            options={countryListAllIsoData}
            name="nacionalitty"
            label="Nacionalitty"
            placeholder="Select a nacionalitty"
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

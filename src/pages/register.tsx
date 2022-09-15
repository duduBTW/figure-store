import UserAuthBanner from "components/user/auth/banner";
import UserAuthRegisterForm from "components/user/auth/register/form";
import { UserAuthPageContainer } from "components/user/auth/styles";

const RegisterPage = () => {
  return (
    <UserAuthPageContainer>
      <UserAuthRegisterForm />
      <UserAuthBanner src="https://pbs.twimg.com/media/Fbk2K8fVQAIm7GF?format=jpg&name=4096x4096" />
    </UserAuthPageContainer>
  );
};

export default RegisterPage;

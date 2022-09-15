import UserAuthBanner from "components/user/auth/banner";
import UserAuthLoginForm from "components/user/auth/login/form";
import { UserAuthPageContainer } from "components/user/auth/styles";

const LoginPage = () => {
  return (
    <UserAuthPageContainer>
      <UserAuthLoginForm />
      <UserAuthBanner src="https://pbs.twimg.com/media/FcTPFOLaAAMa1l8?format=jpg&name=4096x4096" />
    </UserAuthPageContainer>
  );
};

export default LoginPage;

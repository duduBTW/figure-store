import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import service from "server/client/services";
import { LoginReqest } from "server/client/user";

// components
import Button from "components/button";
import Input from "components/input";
import Text from "components/text";

// styles
import {
  UserAuthContent,
  UserAuthFooter,
  UserAuthFormContainer,
  UserAuthTitle,
} from "../../styles";
import Link from "next/link";

const UserAuthLoginForm = () => {
  const { push, query } = useRouter();
  const { mutate, isLoading, isSuccess } = useMutation(service.login, {
    onSuccess: (user) => {
      if (user.role === "admin") {
        push("/admin/figure");
        return;
      }

      const redirectUrl = query["redirect"];
      push(redirectUrl && typeof redirectUrl === "string" ? redirectUrl : "/");
    },
    onError: () => toast.error("Username or password is incorrect"),
  });
  const formMethods = useForm<LoginReqest>();

  return (
    <UserAuthContent>
      <UserAuthTitle variant="title-1">Login</UserAuthTitle>
      <FormProvider {...formMethods}>
        <UserAuthFormContainer
          loading={isLoading || isSuccess}
          onSubmit={formMethods.handleSubmit((data) => mutate(data))}
        >
          <Input name="username" label="Email or document" />
          <Input name="password" label="Password" type="password" />
          <Button type="submit" loading={isLoading || isSuccess}>
            Enter
          </Button>
        </UserAuthFormContainer>
      </FormProvider>
      <UserAuthFooter>
        <Link href="/register">
          <a>
            <Text variant="button-outlined" color="primary">
              Register
            </Text>
          </a>
        </Link>
      </UserAuthFooter>
    </UserAuthContent>
  );
};

export default UserAuthLoginForm;

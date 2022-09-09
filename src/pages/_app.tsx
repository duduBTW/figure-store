import type { AppType } from "next/dist/shared/lib/utils";
import { ComponentType, PropsWithChildren, useState } from "react";
import { Global } from "@emotion/react";
import { User } from "./api/user";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

// styles
import "../styles/globals.css";
import globalStyles from "constants/globalStyles";
import service from "server/client/services";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MyApp: AppType = ({ Component, pageProps: { user, ...pageProps } }) => {
  const [queryClient] = useState(() => new QueryClient());

  const Layout = getLayout(Component);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider user={user}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} user={user} />
        </Layout>
      </UserProvider>
    </QueryClientProvider>
  );
};

const EmptyLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

function getLayout(
  Component: ComponentType<any>
): ComponentType<PropsWithChildren> {
  return (Component as any).Layout || EmptyLayout;
}

export const useUser = ({ initialData }: { initialData?: any } = {}) => {
  return useQuery<User>(["user"], service.getUser, {
    initialData,
  });
};

const UserProvider = ({
  children,
  user,
}: PropsWithChildren<{
  user: any;
}>) => {
  useUser({
    initialData: user,
  });

  return <>{children}</>;
};

export default MyApp;

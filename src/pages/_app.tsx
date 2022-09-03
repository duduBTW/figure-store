import type { AppType } from "next/dist/shared/lib/utils";
import { ComponentType, PropsWithChildren, useState } from "react";
import { Global } from "@emotion/react";
import { User } from "./api/user";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import "../styles/globals.css";
import globalStyles from "constants/globalStyles";

const EmptyLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

function getLayout(
  Component: ComponentType<any>
): ComponentType<PropsWithChildren<{ user: User | null }>> {
  return (Component as any).Layout || EmptyLayout;
}

const MyApp: AppType = ({ Component, pageProps: { user, ...pageProps } }) => {
  const [queryClient] = useState(() => new QueryClient());
  const Layout = getLayout(Component);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout user={user}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default MyApp;

import type { AppType } from "next/dist/shared/lib/utils";
import { ComponentType, PropsWithChildren } from "react";
import { Global } from "@emotion/react";
import { User } from "./api/user";

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
  const Layout = getLayout(Component);

  return (
    <Layout user={user}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;

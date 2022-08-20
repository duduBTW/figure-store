import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ComponentType, PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import { Global } from "@emotion/react";
import globalStyles from "constants/globalStyles";

const EmptyLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

function getLayout(
  Component: ComponentType<any>
): ComponentType<PropsWithChildren> {
  return (Component as any).Layout || EmptyLayout;
}

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const Layout = getLayout(Component);

  return (
    <Layout>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
};

export default MyApp;

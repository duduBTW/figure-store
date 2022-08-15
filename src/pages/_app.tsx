import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import { Global } from "@emotion/react";
import globalStyles from "constants/globalStyles";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
};

export default MyApp;

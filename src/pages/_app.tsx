import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import { Global } from "@emotion/react";
import globalStyles from "constants/globalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default MyApp;

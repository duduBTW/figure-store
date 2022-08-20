import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// components
import AdminTabs from "../figure/tabs";

// styles
import { Container } from "./styles";

const AdminLayout = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <AdminTabs />
        {children}
      </Container>
    </QueryClientProvider>
  );
};

export default AdminLayout;

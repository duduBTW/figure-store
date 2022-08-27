import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// styles
import { Container, Nav } from "./styles";

const AdminLayout = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AdminNav />
      <Container>{children}</Container>
    </QueryClientProvider>
  );
};

const AdminNav = () => <Nav />;

export default AdminLayout;

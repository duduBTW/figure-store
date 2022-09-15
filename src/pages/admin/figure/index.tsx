import { useMemo, useState } from "react";
import route from "server/client/routes";
import debounce from "lodash.debounce";
import { useQuery } from "@tanstack/react-query";

// server
import service from "server/client/services";

// components
import AdminFigureList from "components/admin/figure/list";
import AdminFigureListLoading from "components/admin/figure/list/loading";
import AdminFigureListError from "components/admin/figure/list/error";
import AdminLayout from "components/admin/layout";
import AdminFigureListHeader from "components/admin/figure/list/header";
import Container from "components/container";

const useFigureList = (search?: string) => {
  return useQuery(["figure-list", search], async () =>
    service.getProductList(search)
  );
};

const AdminFigurePage = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useFigureList(search);

  const onSearchChange = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value);
      }, 250),
    []
  );

  if (error) return <AdminFigureListError />;
  return (
    <Container>
      <AdminFigureListHeader onSearchChange={onSearchChange} />
      {isLoading ? (
        <AdminFigureListLoading />
      ) : (
        <AdminFigureList figures={data} />
      )}
    </Container>
  );
};

AdminFigurePage.Layout = AdminLayout;

export const getServerSideProps = route.admin(async (_, queryClient) => {
  await queryClient.prefetchQuery(["figure-list", ""], async () =>
    service.getProductList()
  );
});

export default AdminFigurePage;

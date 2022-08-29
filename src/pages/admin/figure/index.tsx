import type { GetServerSideProps } from "next";
import { useMemo, useState } from "react";
import route from "server/client/routes";
import debounce from "lodash.debounce";
import { useQuery } from "@tanstack/react-query";

// server
import service, { FigureListApiResponse } from "server/client/services";
import got from "got";

// components
import AdminFigureList from "components/admin/figure/list";
import AdminFigureListLoading from "components/admin/figure/list/loading";
import AdminFigureListError from "components/admin/figure/list/error";
import AdminLayout from "components/admin/layout";
import AdminFigureListHeader from "components/admin/figure/list/header";
import AdminTabs from "components/admin/figure/tabs";
import AdminFigureContainer from "components/admin/figure/container";

interface PageProps {
  data: { figures: FigureListApiResponse[] };
}

const useFigureList = ({
  initialData,
  search,
}: { initialData?: FigureListApiResponse[]; search?: string } = {}) => {
  return useQuery(
    ["figure-list", search],
    async () => service.getProductList(search),
    {
      initialData,
    }
  );
};

const AdminFigurePage = ({ data: { figures } }: PageProps) => {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useFigureList({
    initialData: figures,
    search,
  });

  const onSearchChange = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value);
      }, 250),
    []
  );

  if (error) return <AdminFigureListError />;
  return (
    <AdminFigureContainer>
      <AdminTabs selected="product" />
      <AdminFigureListHeader onSearchChange={onSearchChange} />
      {isLoading ? (
        <AdminFigureListLoading />
      ) : (
        <AdminFigureList figures={data} />
      )}
    </AdminFigureContainer>
  );
};

AdminFigurePage.Layout = AdminLayout;

export const getServerSideProps = route.admin(async ({ req }) => {
  const figures = await service.getProductList("");

  return {
    figures,
  };
});

export default AdminFigurePage;

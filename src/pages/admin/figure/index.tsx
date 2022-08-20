import { useState } from "react";
import route from "server/clientRoutes";
import { useQuery } from "@tanstack/react-query";
import type { GetServerSideProps, NextPage } from "next";

// server
import service, { FigureListApiResponse } from "server/client/services";

// components
import AdminFigureList from "components/admin/figure/list";
import AdminFigureListLoading from "components/admin/figure/list/loading";
import AdminFigureListError from "components/admin/figure/list/error";

import AdminLayout from "components/admin/layout";
import AdminFigureListHeader from "components/admin/figure/list/header";

interface PageProps {
  data: { figures: FigureListApiResponse[] };
}

const useFigureList = ({
  initialData,
  searchValue,
}: { initialData?: FigureListApiResponse[]; searchValue?: string } = {}) => {
  return useQuery(
    ["figure-list", searchValue],
    async () => service.getProductList(searchValue),
    {
      initialData,
    }
  );
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    const figures = await service.getProductList();

    return {
      figures,
    };
  });

const AdminFigurePage: NextPage<PageProps> = ({ data: { figures } }) => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useFigureList({
    initialData: figures,
    searchValue,
  });

  if (isLoading) return <AdminFigureListLoading />;
  if (error) return <AdminFigureListError />;
  return (
    <>
      <AdminFigureListHeader
        searchValue={searchValue}
        onSearchChange={(value) => setSearchValue(value)}
      />
      <AdminFigureList figures={data} />
    </>
  );
};

// @ts-ignore
AdminFigurePage.Layout = AdminLayout;

export default AdminFigurePage;

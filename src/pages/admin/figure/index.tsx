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
import AdminTabs from "components/admin/figure/tabs";
import AdminFigureContainer from "components/admin/figure/container";

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

const AdminFigurePage = ({ data: { figures } }: PageProps) => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useFigureList({
    initialData: figures,
    searchValue,
  });

  if (isLoading) return <AdminFigureListLoading />;
  if (error) return <AdminFigureListError />;
  return (
    <AdminFigureContainer>
      <AdminTabs selected="product" />
      <AdminFigureListHeader
        searchValue={searchValue}
        onSearchChange={(value) => setSearchValue(value)}
      />
      <AdminFigureList figures={data} />
    </AdminFigureContainer>
  );
};

AdminFigurePage.Layout = AdminLayout;

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    const figures = await service.getProductList();

    return {
      figures,
    };
  });

export default AdminFigurePage;

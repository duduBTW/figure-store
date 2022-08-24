import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";
import { useQuery } from "@tanstack/react-query";

// server
import service, { FigureListApiResponse } from "server/client/services";

// components
import AdminLayout from "components/admin/layout";
import AdminTabs from "components/admin/figure/tabs";

interface PageProps {
  data: { figures: FigureListApiResponse[] };
}

const useOrderList = ({
  initialData,
  searchValue,
}: { initialData?: FigureListApiResponse[]; searchValue?: string } = {}) => {
  return useQuery(
    ["figure-list", searchValue],
    async () => service.getOrderList(searchValue),
    {
      initialData,
    }
  );
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    const figures = await service.getOrderList();

    return {
      figures,
    };
  });

const AdminOrderPage: NextPage<PageProps> = ({ data: { figures } }) => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useOrderList({
    initialData: figures,
    searchValue,
  });

  return (
    <>
      <AdminTabs selected="orders" />
    </>
  );
};

// @ts-ignore
AdminOrderPage.Layout = AdminLayout;

export default AdminOrderPage;

import { useState } from "react";
import type { GetServerSideProps } from "next";
import route from "server/client/routes";
import { useQuery } from "@tanstack/react-query";

// server
import service, { FigureListApiResponse } from "server/client/services";

// components
import AdminLayout from "components/admin/layout";
import AdminTabs from "components/admin/figure/tabs";
import AdminFigureContainer from "components/admin/figure/container";

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

export const getServerSideProps = route.public(async (context) => {
  const figures = await service.getOrderList();

  return {
    figures,
  };
});

const AdminOrderPage = ({ data: { figures } }: PageProps) => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useOrderList({
    initialData: figures,
    searchValue,
  });

  return (
    <AdminFigureContainer>
      <AdminTabs selected="orders" />
    </AdminFigureContainer>
  );
};

AdminOrderPage.Layout = AdminLayout;

export default AdminOrderPage;

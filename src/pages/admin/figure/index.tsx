import { useQuery } from "@tanstack/react-query";
import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";

// server
import service, { FigureApiResponse } from "server/client/services";

// components
import AdminFigureList from "components/admin/figure/list";
import AdminFigureListLoading from "components/admin/figure/list/loading";
import AdminFigureListError from "components/admin/figure/list/error";

interface PageProps {
  data: { figures: FigureApiResponse[] };
}

const useFigureList = ({
  initialData,
}: { initialData?: FigureApiResponse[] } = {}) => {
  return useQuery(["figure-list"], service.getProductList, {
    initialData,
  });
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    const figures = await service.getProductList();

    return {
      figures,
    };
  });

const AdminFigurePage: NextPage<PageProps> = ({ data: { figures } }) => {
  const { data, isLoading, error } = useFigureList({
    initialData: figures,
  });

  if (isLoading) return <AdminFigureListLoading />;
  if (error) return <AdminFigureListError />;
  return <AdminFigureList figures={data} />;
};

export default AdminFigurePage;

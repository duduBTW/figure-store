import type { GetServerSideProps } from "next";
import route from "server/clientRoutes";
import { useMutation, useQuery } from "@tanstack/react-query";
import service, { FigureApiResponse } from "server/client/services";

// components
import AdminFigureForm from "components/admin/figure/form";
import Tabs from "components/tabs";
import AdminFigureImages from "components/admin/figure/images";
import AdminFigureHeader from "components/admin/figure/header";
import AdminLayout from "components/admin/layout";

interface PageProps {
  data: { figure: FigureApiResponse; id: string };
}

const useFigure = ({
  initialData,
  id,
}: { initialData?: FigureApiResponse; id?: string } = {}) => {
  return useQuery(["figure-item", id], async () => service.getProduct(id), {
    initialData,
    enabled: false,
  });
};

const EditFigurePage = ({
  data: { figure: figureInitialData, id },
}: PageProps) => {
  const {
    data: figure,
    refetch,
    isFetching,
  } = useFigure({
    initialData: figureInitialData,
    id,
  });
  const { mutate, isLoading } = useMutation(service.editProduct, {
    onSuccess: () => refetch(),
  });

  const getFormBody = () => {
    if (isLoading || isFetching) return <div>Loading...</div>;

    return (
      <AdminFigureForm
        key={0}
        submitButtonLabel="Save"
        onSubmit={mutate}
        formProps={{
          defaultValues: figure,
        }}
      />
    );
  };

  return (
    <>
      <AdminFigureHeader>Edit figure</AdminFigureHeader>
      <Tabs
        tabs={["information", "Images", "Orders"]}
        content={[getFormBody(), <AdminFigureImages key={1} />]}
      />
    </>
  );
};

EditFigurePage.Layout = AdminLayout;

export const getServerSideProps: GetServerSideProps<PageProps> = (context) =>
  route.public(context, async () => {
    return {
      figure: await service.getProduct("1"),
      id: String(context.params?.id),
    };
  });

export default EditFigurePage;

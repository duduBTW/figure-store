import route from "server/client/routes";
import { useMutation, useQuery } from "@tanstack/react-query";
import service, { FigureApiResponse } from "server/client/services";

// components
import Tabs from "components/tabs";
import AdminFigureForm from "components/admin/figure/form";
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
  const { mutate, isLoading } = useMutation(service.editProduct(id), {
    onSuccess: () => refetch(),
  });

  return (
    <>
      <AdminFigureHeader>Edit figure</AdminFigureHeader>
      <Tabs
        tabs={["information", "Images", "Orders"]}
        content={[
          <AdminFigureForm
            loading={isLoading || isFetching}
            key={0}
            submitButtonLabel="Save"
            onSubmit={mutate}
            formProps={{
              defaultValues: figure,
            }}
          />,
          <AdminFigureImages key={1} />,
        ]}
      />
    </>
  );
};

EditFigurePage.Layout = AdminLayout;

export const getServerSideProps = route.admin(async (context) => {
  try {
    const figure = await service.getProduct(String(context.params?.figureId));

    return {
      figure,
      id: String(context.params?.figureId),
    };
  } catch (error) {
    return 404;
  }
});

export default EditFigurePage;

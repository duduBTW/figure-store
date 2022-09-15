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
  id: string;
}

const useFigure = (id: string) =>
  useQuery(["figure-item", id], service.getProduct(id));

const EditFigurePage = ({ id }: PageProps) => {
  const { data: figure, refetch } = useFigure(id);
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
            loading={isLoading}
            key={0}
            submitButtonLabel="Save"
            onSubmit={mutate}
            formProps={{
              defaultValues: figure,
            }}
          />,
          <AdminFigureImages
            refetch={refetch}
            images={figure?.images}
            id={id}
            key={1}
          />,
        ]}
      />
    </>
  );
};

EditFigurePage.Layout = AdminLayout;

export const getServerSideProps = route.admin(async (context, queryClient) => {
  try {
    const id = String(context.params?.figureId);
    await queryClient.prefetchQuery(
      ["figure-item", id],
      service.getProduct(id)
    );

    return {
      id,
    };
  } catch (error) {
    return 404;
  }
});

export default EditFigurePage;

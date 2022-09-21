import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";
import { useRouter } from "next/router";

// components
import AdminFigureForm from "components/admin/figure/form";
import AdminFigureHeader from "components/admin/figure/header";
import AdminLayout from "components/admin/layout";
import AdminSuccess from "components/admin/success";

const CreateFigurePage = () => {
  const { push } = useRouter();
  const { mutate, isLoading, isSuccess } = useMutation(service.insertProduct, {
    onSuccess: ({ id }) => {
      push(`/admin/figure/${id}`);
      toast.success("Figure created!");
    },
  });

  const getFormBody = () => {
    if (isSuccess) return <AdminSuccess />;

    return (
      <AdminFigureForm
        loading={isLoading}
        submitButtonLabel="Create"
        onSubmit={mutate}
      />
    );
  };

  return (
    <>
      <AdminFigureHeader>Create figure</AdminFigureHeader>
      {getFormBody()}
    </>
  );
};

CreateFigurePage.Layout = AdminLayout;

export const getServerSideProps = route.admin(async () => {
  return {};
});

export default CreateFigurePage;

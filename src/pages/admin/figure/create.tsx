import type { GetServerSideProps, NextPage } from "next";
import { useMutation } from "@tanstack/react-query";
import route from "server/clientRoutes";
import service from "server/client/services";
import { useRouter } from "next/router";

// components
import AdminFigureForm from "components/admin/figure/form";
import AdminFigureHeader from "components/admin/figure/header";
import AdminLayout from "components/admin/layout";
import AdminLoading from "components/admin/loading";
import AdminSuccess from "components/admin/success";

const CreateFigurePage = () => {
  const { push } = useRouter();
  const { mutate, isLoading, isSuccess } = useMutation(service.insertProduct, {
    onSuccess: ({ id }) => {
      push(`/admin/figure/${id}`);
    },
  });

  const getFormBody = () => {
    if (isSuccess) return <AdminSuccess />;
    if (isLoading) return <AdminLoading />;

    return <AdminFigureForm submitButtonLabel="Create" onSubmit={mutate} />;
  };

  return (
    <>
      <AdminFigureHeader>Create figure</AdminFigureHeader>
      {getFormBody()}
    </>
  );
};

CreateFigurePage.Layout = AdminLayout;

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    return {};
  });

export default CreateFigurePage;

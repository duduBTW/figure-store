import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";

// components
import AdminFigureForm from "components/admin/figure/form";

const CreateFigurePage: NextPage = () => {
  return (
    <div>
      <AdminFigureForm
        title="Create product"
        submitButtonLabel="Create"
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    return {};
  });

export default CreateFigurePage;

import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";

// components
import AdminFigureForm from "components/admin/figure/form";
import service, { FigureApiResponse } from "server/client/services";
import Tabs from "components/tabs";

interface PageProps {
  data: { figure: FigureApiResponse };
}

const EditFigurePage: NextPage<PageProps> = ({ data: { figure } }) => {
  return (
    <Tabs
      tabs={["information"]}
      content={[
        <AdminFigureForm
          key={0}
          title="Edit product"
          submitButtonLabel="Save"
          onSubmit={(data) => console.log(data)}
          formProps={{
            defaultValues: figure,
          }}
        />,
      ]}
    />
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> = (context) =>
  route.public(context, async () => {
    return {
      figure: await service.getProduct("1"),
    };
  });

export default EditFigurePage;

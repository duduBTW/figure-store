import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";

const AdminFigurePage: NextPage = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    return {};
  });

export default AdminFigurePage;

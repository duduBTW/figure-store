import type { GetServerSideProps, NextPage } from "next";
import route from "server/clientRoutes";

const HomePage: NextPage = () => {
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
      eligendi.
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async () => {
    return {};
  });

export default HomePage;

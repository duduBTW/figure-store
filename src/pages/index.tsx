import type { GetServerSideProps, NextPage } from "next";
import Home from "components/home";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default HomePage;

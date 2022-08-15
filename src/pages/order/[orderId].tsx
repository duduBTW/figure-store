import type { GetServerSideProps, NextPage } from "next";

const OrderPage: NextPage = () => {
  return <div>Order</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default OrderPage;

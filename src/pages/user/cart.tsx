import route from "server/client/routes";

// components

import UserLayout from "components/user/layout";

const UserCartPage = ({ data: {} }: { data: {} }) => {
  return <div>User cart...</div>;
};

UserCartPage.Layout = UserLayout;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserCartPage;

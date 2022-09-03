import route from "server/client/routes";

const UserProfilePage = () => {
  return <div>teste</div>;
};

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserProfilePage;

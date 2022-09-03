import route from "server/client/routes";

// components
import UserLayoutProfile from "components/user/layout/profile";
import Text from "components/text";
import AddLineIcon from "remixicon-react/AddLineIcon";
import AdressList from "components/user/adress/list";
import ListItem from "components/list/item";

const UserAdressPage = () => {
  return (
    <>
      <Text variant="title-3">Adresses</Text>
      <div style={{ height: "2rem" }} />
      <AdressList />
      <div style={{ height: "2rem" }} />
      <ListItem
        startAction={<AddLineIcon />}
        onClick={() => {}}
        primary="Add new adress"
      />
    </>
  );
};

UserAdressPage.Layout = UserLayoutProfile;

export const getServerSideProps = route.user(async () => {
  return {};
});

export default UserAdressPage;

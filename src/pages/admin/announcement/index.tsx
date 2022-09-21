import { useQuery } from "@tanstack/react-query";
import route from "server/client/routes";
import service from "server/client/services";

// components
import AdminFigureListHeader from "components/admin/figure/list/header";
import AdminLayout from "components/admin/layout";
import Container from "components/container";
import Text from "components/text";
import AlertList from "components/alert/list";
import { useRouter } from "next/router";

const useAnnouncementList = () => {
  return useQuery(["announcement-list"], async () =>
    service.getAnnouncementList()
  );
};
const AdminAnnouncementPage = () => {
  const { push } = useRouter();
  const { data } = useAnnouncementList();

  if (!data) return <></>;
  return (
    <Container gap={3.2}>
      <Text variant="title-3">Announcements</Text>
      <AdminFigureListHeader
        create={{
          href: "/admin/announcement/create",
          label: "Create new announcement",
        }}
        onSearchChange={() => {}}
      />
      <AlertList
        onAlertClcik={({ id }) => push(`/admin/announcement/${id}`)}
        alerts={data}
      />
    </Container>
  );
};

AdminAnnouncementPage.Layout = AdminLayout;

export const getServerSideProps = route.admin();

export default AdminAnnouncementPage;

import { useMutation } from "@tanstack/react-query";
import AnnouncementForm from "components/admin/announcement/form";
import AdminLayout from "components/admin/layout";
import route from "server/client/routes";
import service from "server/client/services";
import Container from "components/container";
import Header from "components/header";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const CreateAnnouncementPage = () => {
  const { push } = useRouter();
  const {
    mutate: createAnnouncement,
    isLoading,
    isSuccess,
  } = useMutation(service.insertAnnouncement, {
    onSuccess: ({ id }) => {
      push(`/admin/announcement/${id}`);
      toast.success("Announcement created");
    },
    onError: () => {
      toast.error("Failed to create announcement");
    },
  });

  return (
    <Container gap={3.2} loading={isLoading || isSuccess}>
      <Header backHref="/admin/announcement">Create Announcment</Header>
      <AnnouncementForm
        onSubmit={createAnnouncement}
        loading={isLoading || isSuccess}
        submitButtonLabel="Create"
      />
    </Container>
  );
};

CreateAnnouncementPage.Layout = AdminLayout;

export const getServerSideProps = route.admin();

export default CreateAnnouncementPage;

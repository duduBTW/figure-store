import { useMutation, useQuery } from "@tanstack/react-query";
import AnnouncementForm from "components/admin/announcement/form";
import AdminLayout from "components/admin/layout";
import route from "server/client/routes";
import service from "server/client/services";
import Container from "components/container";
import Header from "components/header";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import NotFound from "components/notFound";

const useAnnouncement = (id: string) =>
  useQuery(["announcement-item", id], service.getAnnouncement(id));

const CreateAnnouncementPage = ({ id }: { id: string }) => {
  const { push } = useRouter();
  const { data: announcement } = useAnnouncement(id);
  const {
    mutate: updateAnnouncement,
    isLoading,
    isSuccess,
  } = useMutation(service.editAnnouncement(id), {
    onSuccess: () => {
      toast.success("Announcement updated");
    },
    onError: () => {
      toast.error("Failed to update announcement");
    },
  });

  if (!announcement)
    return (
      <NotFound
        back={{
          label: "Return to announcment list",
          url: "/admin/announcement",
        }}
      >
        Announcment not found
      </NotFound>
    );
  return (
    <Container gap={3.2} loading={isLoading}>
      <Header backHref="/admin/announcement">Edit Announcment</Header>
      <AnnouncementForm
        onSubmit={updateAnnouncement}
        loading={isLoading}
        formProps={{
          defaultValues: announcement,
        }}
        submitButtonLabel="Save"
      />
    </Container>
  );
};

CreateAnnouncementPage.Layout = AdminLayout;

export const getServerSideProps = route.admin(
  async ({ params }, queryClient) => {
    const id = String(params?.announcementId);
    await queryClient.prefetchQuery(
      ["announcement-item", id],
      service.getAnnouncement(id)
    );

    return { id };
  }
);

export default CreateAnnouncementPage;

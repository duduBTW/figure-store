import parse from "html-react-parser";
import { AnnouncementResponse } from "server/client/announcement";

// components
import { Dialog, DialogContent, DialogTitle } from "components/dialog";
import Button from "components/button";

// styles
import { HomeAnnouncementDialogHtml } from "./styles";

const HomeAnnouncementDialog = ({
  dialogAnnouncement,
  onDialogAnnouncementChange,
}: {
  dialogAnnouncement: AnnouncementResponse | null;
  onDialogAnnouncementChange: (data: AnnouncementResponse | null) => void;
}) => {
  return (
    <Dialog
      open={Boolean(dialogAnnouncement)}
      onOpenChange={(open) => {
        if (!open) onDialogAnnouncementChange(null);
      }}
    >
      <DialogContent>
        <DialogTitle>{dialogAnnouncement?.title}</DialogTitle>
        <HomeAnnouncementDialogHtml>
          {parse(dialogAnnouncement?.description.html ?? "")}
        </HomeAnnouncementDialogHtml>
        <Button
          type="button"
          onClick={() => onDialogAnnouncementChange(null)}
          color="primary-l"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default HomeAnnouncementDialog;

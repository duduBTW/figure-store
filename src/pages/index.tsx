import route from "server/client/routes";
import { AnnouncementResponse } from "server/client/announcement";
import service, { FigureListApiResponse } from "server/client/services";
import { useState } from "react";

// components
import HomeBanner from "components/home/banner";
import AlertList from "components/alert/list";
import ProductGrid from "components/product/grid";
import UserLayout from "components/user/layout";
import HomeContainer from "components/home/container";
import HomeAnnouncementDialog from "components/home/announcementDialog";

const HomePage = ({
  alerts,
  slides,
  newFigures,
}: {
  alerts: AnnouncementResponse[];
  slides: string[];
  newFigures: FigureListApiResponse[];
}) => {
  const [dialogAnnouncement, setDialogAnnouncement] =
    useState<AnnouncementResponse | null>(null);

  return (
    <>
      <HomeBanner slides={slides} />
      <HomeContainer>
        <AlertList
          alerts={alerts}
          onAlertClcik={(alert) => setDialogAnnouncement(alert)}
        />
      </HomeContainer>
      <ProductGrid figures={newFigures} title="New" />
      <HomeAnnouncementDialog
        dialogAnnouncement={dialogAnnouncement}
        onDialogAnnouncementChange={setDialogAnnouncement}
      />
    </>
  );
};

HomePage.Layout = UserLayout;

export const getServerSideProps = route.public(async () => {
  const slides = [
    "https://pbs.twimg.com/media/FcODsj_aMAAsmAd?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FZjkT28acAEOTBN?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FcI-RiVagAYR2ng?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FbI9FsLUUAAuqkV?format=jpg&name=medium",
  ];

  const alerts = await service.getAnnouncementListHome();
  const newFigures = await service.getNewProductList();

  return {
    slides,
    alerts,
    newFigures,
  };
});

export default HomePage;

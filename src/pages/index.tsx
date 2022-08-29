import type { GetServerSideProps } from "next";
import route from "server/client/routes";
import service, { FigureListApiResponse } from "server/client/services";

// components
import HomeBanner from "components/home/banner";
import AlertList from "components/alert/list";
import ProductGrid from "components/product/grid";
import UserLayout from "components/user/layout";

const HomePage = ({
  data: { alerts, slides, newFigures },
}: {
  data: {
    alerts: string[];
    slides: string[];
    newFigures: FigureListApiResponse[];
  };
}) => {
  return (
    <>
      <HomeBanner slides={slides} />
      <AlertList alerts={alerts} />
      <ProductGrid figures={newFigures} title="New" />
    </>
  );
};

HomePage.Layout = UserLayout;

export const getServerSideProps = route.public(async () => {
  const alerts = [
    "Shipping method suspension and resumption updates (Updated Jul 29, 2022)",
    "COVID-19 shipping restrictions (Updated Mar 10, 2022)",
  ];

  const slides = [
    "https://pbs.twimg.com/media/FZjkT28acAEOTBN?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FbKuuXragAAZ6fu?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/FbI9FsLUUAAuqkV?format=jpg&name=medium",
  ];

  const newFigures = await service.getNewProductList();

  return {
    slides,
    alerts,
    newFigures,
  };
});

export default HomePage;

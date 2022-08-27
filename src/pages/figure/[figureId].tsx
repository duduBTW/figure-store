import { useMemo } from "react";
import type { GetServerSideProps } from "next";
import route from "server/clientRoutes";
import service, {
  FigureApiResponse,
  FigureListApiResponse,
} from "server/client/services";
import parse from "html-react-parser";

// components
import FigureImages from "components/figure/images";
import FigureHtml from "components/figure/html";
import FigurePrice from "components/figure/price";
import FigureActions from "components/figure/actions";
import ProductGrid from "components/product/grid";

const OrderPage = ({
  data: { figure, relatedFigures },
}: {
  data: { figure: FigureApiResponse; relatedFigures: FigureListApiResponse[] };
}) => {
  return (
    <>
      <FigureImages />
      <FigurePrice price={figure.price} />
      <FigureActions />
      {figure.description?.html && (
        <FigureHtml>{parse(figure.description.html)}</FigureHtml>
      )}
      {figure.details?.html && (
        <FigureHtml>{parse(figure.details.html)}</FigureHtml>
      )}
      <ProductGrid figures={relatedFigures} title="Related" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = (context) =>
  route.public(context, async ({ query }) => {
    {
      const id = query["figureId"];
      if (typeof id !== "string")
        return {
          notFound: true,
        };

      const figure = await service.getProduct(id);
      if (!figure)
        return {
          notFound: true,
        };

      const relatedFigures = await service.getNewProductList();

      return {
        figure,
        relatedFigures,
      };
    }
  });

export default OrderPage;

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
import FigureContainer from "components/figure/container";
import FigureName from "components/figure/name";
import UserLayout from "components/user/layout";

const FigurePage = ({
  data: { figure, relatedFigures },
}: {
  data: { figure: FigureApiResponse; relatedFigures: FigureListApiResponse[] };
}) => {
  return (
    <>
      <FigureContainer>
        <FigureImages />
        <FigureName color={figure.color} name={figure.name} />
        <FigurePrice price={figure.price} />
        <FigureActions />
        {figure.description?.html && (
          <FigureHtml color={figure.color}>
            {parse(figure.description.html)}
          </FigureHtml>
        )}
        {figure.details?.html && (
          <FigureHtml color={figure.color}>
            {parse(figure.details.html)}
          </FigureHtml>
        )}
      </FigureContainer>

      <ProductGrid figures={relatedFigures} title="Related" />
    </>
  );
};

FigurePage.Layout = UserLayout;

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

export default FigurePage;

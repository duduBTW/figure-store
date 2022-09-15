import route from "server/client/routes";
import service, {
  FigureApiResponse,
  FigureListApiResponse,
} from "server/client/services";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import useNewOrderState from "state/newOrder";

// components
import FigureImages from "components/figure/images";
import FigureHtml from "components/figure/html";
import FigurePrice from "components/figure/price";
import FigureActions from "components/figure/actions";
import ProductGrid from "components/product/grid";
import FigureContainer from "components/figure/container";
import FigureName from "components/figure/name";
import UserLayout from "components/user/layout";
import { useUser } from "pages/_app";

const FigurePage = ({
  figure,
  relatedFigures,
}: {
  figure: FigureApiResponse;
  relatedFigures: FigureListApiResponse[];
}) => {
  const { push, asPath } = useRouter();
  const addFigures = useNewOrderState((state) => state.addFigures);
  const { data: user } = useUser();

  const authenticathed = (handler: () => void) => () => {
    if (!user) {
      push(`/login?redirect=${encodeURI(asPath)}`);
      return;
    }

    handler();
  };

  const { mutate, isLoading, isSuccess } = useMutation(service.insertCart, {
    onSuccess: () => {
      push(`/user/cart`);
    },
  });

  return (
    <>
      <FigureContainer>
        <FigureImages images={figure.images} />
        <FigureName color={figure.color} name={figure.name} />
        <FigurePrice price={figure.price} />
        <FigureActions
          onBuyClick={authenticathed(() => {
            push("/user/order/new");
            addFigures([figure]);
          })}
          onClick={authenticathed(() =>
            mutate({
              figureId: figure.id,
            })
          )}
          loading={isLoading || isSuccess}
        />
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

export const getServerSideProps = route.public(async ({ query }) => {
  {
    const id = query["figureId"];
    if (typeof id !== "string")
      return {
        notFound: true,
      };

    try {
      const figure = await service.getProduct(id)();
      if (!figure) return 404;

      return {
        figure,
        relatedFigures: await service.getNewProductList(),
      };
    } catch (error) {
      return 404;
    }
  }
});

export default FigurePage;

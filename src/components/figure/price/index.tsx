import { useMemo } from "react";
import { Content } from "./styles";

const FigurePrice = ({ price }: { price: number }) => {
  const formatedPrice = useMemo(
    () =>
      Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price),
    [price]
  );

  return <Content variant="title-2">{formatedPrice}</Content>;
};

export default FigurePrice;

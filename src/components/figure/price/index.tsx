import usePrice from "utils/usePrice";
import { Content } from "./styles";

const FigurePrice = ({ price }: { price: number }) => {
  const formatedPrice = usePrice(price);

  return <Content variant="title-2">{formatedPrice}</Content>;
};

export default FigurePrice;

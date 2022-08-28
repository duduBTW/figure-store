import { Content } from "./styles";

const FigureName = ({ name, color }: { name: string; color: string }) => {
  return (
    <Content color={color} variant="title-1">
      {name}
    </Content>
  );
};

export default FigureName;

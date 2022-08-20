// components
import Text from "components/text";
import Link from "next/link";

// server
import { FigureApiResponse } from "server/client/services";

// styles
import {
  Container,
  FigureContainer,
  FigureMiniature,
  FigureName,
  FigureSold,
  FigureStock,
} from "./styles";

const AdminFigureList = ({ figures }: { figures?: FigureApiResponse[] }) => {
  const getFigure = (figure: FigureApiResponse) => {
    return (
      <Link href={`/admin/figure/${figure.id}`} key={figure.id}>
        <FigureContainer>
          <FigureMiniature
            src={figure.images[0]}
            alt={`Miniature 0 for figure ${figure.name}`}
          />
          <FigureName color={figure.color} variant="title-3">
            {figure.name}
          </FigureName>
          <FigureSold>
            <Text variant="subtitle-2">Sold</Text>
            <Text variant="body-2">{figure.sold}</Text>
          </FigureSold>
          <FigureStock>
            <Text variant="subtitle-2">Stock</Text>
            <Text variant="body-2">{figure.stock}</Text>
          </FigureStock>
        </FigureContainer>
      </Link>
    );
  };

  if (!figures) return <AdminFigureListEmpty />;
  return <Container>{figures.map(getFigure)}</Container>;
};

const AdminFigureListEmpty = () => {
  return <div>Nothign found :(</div>;
};

export default AdminFigureList;

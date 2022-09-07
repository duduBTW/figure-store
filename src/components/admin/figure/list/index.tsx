// components
import Text from "components/text";
import Link from "next/link";

// server
import { FigureListApiResponse } from "server/client/services";

// styles
import {
  Container,
  FigureContainer,
  FigureMiniature,
  FigureName,
  FigureSold,
  FigureStock,
} from "./styles";

const AdminFigureList = ({
  figures,
}: {
  figures?: FigureListApiResponse[];
}) => {
  const getFigure = (figure: FigureListApiResponse) => {
    return (
      <Link href={`/admin/figure/${figure.id}`} key={figure.id}>
        <a>
          <Figure {...figure} />
        </a>
      </Link>
    );
  };

  if (!figures) return <AdminFigureListEmpty />;
  return <Container>{figures.map(getFigure)}</Container>;
};

const Figure = ({
  color,
  images,
  name,
  sold,
  stock,
  id,
}: FigureListApiResponse) => {
  return (
    <FigureContainer data-tcy-id={id} data-tcy="figure-card">
      <FigureMiniature
        src={
          images[0] ? `/figure/${images[0]?.medium}` : "/waifu-placeholder.png"
        }
        alt={`Miniature 0 for figure ${name}`}
      />
      <FigureName color={color} variant="title-3">
        {name}
      </FigureName>
      {sold && (
        <FigureSold>
          <Text variant="subtitle-2">Sold</Text>
          <Text variant="body-2">{sold}</Text>
        </FigureSold>
      )}
      {stock && (
        <FigureStock>
          <Text variant="subtitle-2">Stock</Text>
          <Text variant="body-2">{stock}</Text>
        </FigureStock>
      )}
    </FigureContainer>
  );
};

const AdminFigureListEmpty = () => {
  return <div>Nothign found :(</div>;
};

export default AdminFigureList;

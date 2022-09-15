import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3.2rem;
`;

interface IFigureName {
  color: string;
}
export const FigureName = styled(Text)<IFigureName>`
  margin-top: 1.6rem;
  grid-area: name;
  color: ${({ color }) => color};

  ${mq.fromMobileLg} {
    margin-top: 2rem;
    width: 80%;
  }
`;

// Figure item
export const FigureContainer = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid var(--color-divider);
  cursor: pointer;
  display: grid;
  grid-template-areas:
    "miniature miniature"
    "name      name"
    "sold      stock";
  grid-template-columns: 1fr 1.6fr;
  grid-template-rows: 22rem auto auto;

  ${mq.fromTabletMd} {
    grid-template-areas:
      "miniature name name"
      "miniature sold stock";
    grid-template-columns: 22rem 1fr 1.6fr;
    grid-template-rows: 12rem 12rem;

    &::after {
      width: calc(100% - 21.2rem);
      margin: 0;
      left: 21.2rem;
    }
  }

  &:hover {
    background: var(--color-primary-l);
  }
`;
export const FigureMiniature = styled.img`
  grid-area: miniature;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 1.2rem;
`;

export const FigureInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 1.6rem;

  ${mq.fromMobileLg} {
    margin: 0 0 2rem 2rem;
    align-self: flex-end;
  }
`;

export const FigureStock = styled(FigureInformation)`
  grid-area: stock;
`;
export const FigureSold = styled(FigureInformation)`
  grid-area: sold;
`;

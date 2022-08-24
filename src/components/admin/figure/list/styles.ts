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
  margin-top: 0.8rem;
  grid-area: name;
  color: ${({ color }) => color};

  ${mq.fromMobileLg} {
    margin-top: 2rem;
    margin-left: 2rem;
    width: 80%;
  }
`;

// Figure item
export const FigureContainer = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-areas:
    "miniature miniature"
    "name      name"
    "sold      stock";
  grid-template-columns: 1fr 1.6fr;
  grid-template-rows: 20rem auto auto;
  padding-bottom: 1.6rem;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.1rem;
    width: calc(100% + 4rem);
    margin: 0 -2rem;
    background: var(--color-divider);
  }

  ${mq.fromMobileLg} {
    padding-bottom: 0rem;
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
`;
export const FigureMiniature = styled.img`
  grid-area: miniature;
  width: 100%;
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

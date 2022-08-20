import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const Container = styled.div`
  box-sizing: border-box;
  background: var(--color-content);
  width: 100%;
  padding: 3.2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${mq.fromTabletMd} {
    margin: 2rem auto;
    max-width: 80rem;
    border-radius: 1.2rem;
  }

  ${mq.fromMobileLg} {
    padding: 4rem 3.2rem;
  }
`;

// Figure item
export const FigureContainer = styled.a`
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
`;
export const FigureMiniature = styled.img`
  grid-area: miniature;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 20%;
  border-radius: 1.2rem;
`;

interface IFigureName {
  color: string;
}
export const FigureName = styled(Text)<IFigureName>`
  margin-top: 0.8rem;
  grid-area: name;
  color: ${({ color }) => color};
`;

export const FigureInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const FigureStock = styled(FigureInformation)`
  grid-area: stock;
  margin-top: 1.6rem;
`;
export const FigureSold = styled(FigureInformation)`
  grid-area: sold;
  margin-top: 1.6rem;
`;

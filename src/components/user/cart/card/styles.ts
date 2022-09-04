import styled from "@emotion/styled";
import Text from "components/text";
import { subtitle1, title4, title5 } from "components/text/styles";
import { mq } from "constants/theme";

export const Container = styled.div`
  margin-bottom: 1.6rem;
  display: grid;
  grid-template-areas:
    "miniature title price"
    "miniature actions actions";
  grid-template-columns: auto 1fr auto;

  ${mq.fromTabletMd} {
    margin-bottom: 3.2rem;
    grid-template-areas:
      "miniature title price"
      "miniature actions actions";
  }
`;

interface TitleProps {
  color: string;
}
export const Title = styled.h2<TitleProps>`
  ${title5}
  margin-left: 1.2rem;
  min-height: 8rem;
  width: 80%;
  color: ${({ color }) => color ?? "var(--text-primary)"};

  ${mq.fromTabletMd} {
    min-height: auto;
    margin-top: 3.2rem;
    margin-left: 2rem;
    ${title4}
  }
`;
export const Miniature = styled.img`
  grid-area: miniature;

  width: 8rem;
  height: 8rem;
  border-radius: 0.8rem;

  ${mq.fromTabletMd} {
    width: 22rem;
    height: 24rem;
  }
`;

export const Price = styled(Text)`
  grid-area: price;

  ${mq.fromTabletMd} {
    margin-top: 3.2rem;
  }
`;

export const Actions = styled.div`
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.6rem;
  border-bottom: 0.1rem solid var(--color-divider);
  padding-bottom: 1.6rem;

  ${mq.fromTabletMd} {
    border-top: none;
    margin-top: 0;
    margin-left: 2rem;
    align-self: flex-end;
  }
`;

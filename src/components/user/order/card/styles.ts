import styled from "@emotion/styled";
import Text from "components/text";
import { mq } from "constants/theme";

export const UserOrderCardContainer = styled.div`
  border: 0.1rem solid var(--color-divider);
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const UserOrderCardProduct = styled.div`
  display: grid;
  grid-template-areas:
    "miniature"
    "status"
    "name"
    "deviler";

  ${mq.fromTabletMd} {
    grid-template-areas:
      "miniature status"
      "miniature name"
      "miniature deviler";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
  }
`;

export const Miniature = styled.img`
  grid-area: miniature;
  width: 22rem;
  height: 24rem;
  object-fit: cover;
  border-radius: 1.2rem;
  margin-right: 2rem;
`;

export const Status = styled.div`
  grid-area: status;
  margin-top: 0.8rem;

  ${mq.fromTabletMd} {
    margin-top: 0;
  }
`;

export const Name = styled(Text)`
  grid-area: name;
  width: 80%;
  margin-top: 0.8rem;
  justify-self: flex-start;

  ${mq.fromTabletMd} {
    margin-top: 1.2rem;
  }
`;

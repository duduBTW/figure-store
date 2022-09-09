import styled from "@emotion/styled";
import Text from "components/text";

export const UserOrderCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    "miniature status"
    "miniature name"
    "miniature deviler";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
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
`;

export const Name = styled(Text)`
  grid-area: name;
  width: 80%;
  margin-top: 1.2rem;
  justify-self: flex-start;
`;

export const Deliver = styled.div`
  grid-area: deviler;
`;

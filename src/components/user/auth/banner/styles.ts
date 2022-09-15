import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const UserAuthBannerImage = styled.img`
  pointer-events: none;
  height: 100vh;
  flex: 1rem;
  position: sticky;
  top: 0;
  object-fit: cover;
  object-position: center 20%;
  display: none;
  border-left: 0.1rem solid var(--color-divider);

  ${mq.fromTabletMd} {
    display: block;
  }
`;

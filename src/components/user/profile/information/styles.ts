import styled from "@emotion/styled";
import { mq } from "constants/theme";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const ProfilePicture = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 222rem;
  border: 0.1rem solid var(--color-divider);

  ${mq.fromTabletMd} {
    width: 8rem;
    height: 8rem;
  }
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 0.1rem solid var(--color-divider);
  padding: 2rem;
  border-radius: 1.2rem;
`;
export const InfoItemContainer = styled.div`
  display: grid;
  grid-template-areas:
    "label button"
    "value button";
  grid-template-columns: 1fr auto;
  align-items: center;
`;

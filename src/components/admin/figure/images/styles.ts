import styled from "@emotion/styled";
import AdminFigureContainer from "../../../container";
import Button from "components/button";
import { mq } from "constants/theme";

export const ImageItem = styled.img`
  object-fit: cover;
  border-radius: 1.2rem;
  width: 100%;
  height: 30rem;
`;
export const Section = styled(AdminFigureContainer)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UploadButton = styled(Button)`
  margin-top: 3.2rem;
`;

export const ImageList = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  ${mq.fromMobileLg} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.fromTabletSm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

import styled from "@emotion/styled";
import { BlockPicker } from "react-color";

export const Content = styled(BlockPicker)`
  border: 1px solid var(--color-divider);
  box-shadow: none !important;
  font-family: "Nunito";

  #rc-editable-input-2 {
    font-family: "Nunito";
    color: var(--color-secondary) !important;
    font-size: 1.4rem !important;
    height: 2.8rem !important;
  }
`;

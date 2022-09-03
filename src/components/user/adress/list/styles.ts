import styled from "@emotion/styled";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { title5, body2Styles } from "components/text/styles";

export const StyledRadio = styled(RadioGroupPrimitive.Item)({
  all: "unset",
  backgroundColor: "white",
  width: 20,
  height: 20,
  borderRadius: "100%",
  '&[data-state="checked"]': { border: "0.2rem solid var(--color-primary)" },
  '&[data-state="unchecked"]': { border: "0.2rem solid var(--text-primary)" },
  "&:hover": { backgroundColor: "var(--color-primary-l)" },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export const StyledIndicator = styled(RadioGroupPrimitive.Indicator)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "var(--color-primary)",
  },
});

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 0 2rem;
  border: 0.1rem solid var(--color-divider);
  border-radius: 1.2rem;
  margin-top: 2rem;

  &:hover {
    background: var(--color-primary-l);
  }
`;

export const RadioText = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.6rem 0;
`;

export const Label = styled.div`
  ${title5}
`;
export const SubLabel = styled.div`
  ${body2Styles}
`;

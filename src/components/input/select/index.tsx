import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectContentProps } from "@radix-ui/react-select";
import Text from "components/text";
import { useController, useFormContext } from "react-hook-form";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import ArrowUpSLineIcon from "remixicon-react/ArrowUpSLineIcon";

// styles
import { Container, inputStyles } from "../styles";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
  ${inputStyles}
  position: relative;
  background: var(--color-content);
`;

const StyledContent = styled(SelectPrimitive.Content)({
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  zIndex: 3,
});

const StyledViewport = styled(SelectPrimitive.Viewport)({
  padding: "0.4rem",
});

function Content({
  children,
  ...props
}: PropsWithChildren<SelectContentProps>) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item)({
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "var(--text-primary)",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 3.2rem 0 2.4rem",
  position: "relative",
  userSelect: "none",
  "&[data-disabled]": {
    color: "var(--color-divider)",
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-content)",
  },
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: "var(--color-primary)",
  cursor: "default",
};

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)(
  scrollButtonStyles
);

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)(
  scrollButtonStyles
);

// Exports
const SelectContainer = SelectPrimitive.Root;
const SelectTrigger = StyledTrigger;
const SelectValue = SelectPrimitive.Value;
const SelectContent = Content;
const SelectViewport = StyledViewport;
const SelectGroup = SelectPrimitive.Group;
const SelectItem = StyledItem;
const SelectItemText = SelectPrimitive.ItemText;
const SelectScrollUpButton = StyledScrollUpButton;
const SelectScrollDownButton = StyledScrollDownButton;

export const InputSelect = ({
  label,
  placeholder,
  options,
  name,
}: {
  label: string;
  name: string;
  placeholder?: string;
  options: {
    label: string;
    value: string;
  }[];
}) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value, ref, onBlur },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <Container error={Boolean(error)}>
      <Text variant="subtitle-2">{label}</Text>
      <SelectContainer value={value} onValueChange={onChange}>
        <SelectTrigger ref={ref} aria-label={label} onBlur={onBlur}>
          <SelectValue placeholder={placeholder} />
          <div
            style={{
              position: "absolute",
              right: "0.8rem",
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowDownSLineIcon color="var(--text-secondary)" />
          </div>
        </SelectTrigger>
        {error && (
          <Text variant="caption" color="error">
            {error.message}
          </Text>
        )}
        <SelectContent>
          <SelectScrollUpButton>
            <ArrowUpSLineIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <SelectItemText>{option.label}</SelectItemText>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <ArrowDownSLineIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectContainer>
    </Container>
  );
};

export default InputSelect;

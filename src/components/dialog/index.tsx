import { PropsWithChildren } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled from "@emotion/styled";
import { title5 } from "components/text/styles";

const StyledOverlay = styled(DialogPrimitive.Overlay)({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  position: "fixed",
  inset: 0,
  zIndex: 4,
});

const StyledContent = styled(DialogPrimitive.Content)({
  backgroundColor: "white",
  borderRadius: "1.2rem",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "48rem",
  maxHeight: "85vh",
  padding: "2.4rem",
  zIndex: 5,
  display: "flex",
  flexDirection: "column",
  gap: "2.4rem",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
  "&:focus": { outline: "none" },
});

function Content({
  children,
  ...props
}: PropsWithChildren<DialogPrimitive.DialogContentProps>) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title)`
  ${title5}
  color: var(--color-primary);
`;

const StyledDescription = styled(DialogPrimitive.Description)({
  margin: "10px 0 20px",
  color: "var(--color-primary)",
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

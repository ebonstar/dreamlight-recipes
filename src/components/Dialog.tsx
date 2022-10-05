import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled } from "../stitches.config";

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "$slate1",
  opacity: "50%",
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const StyledContent = styled(DialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "12px 24px",
  borderRadius: 6,
  backgroundColor: "$slate3",
  boxShadow:
    "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  "&:focus": { outline: "none" },
  "& h2": { fontWeight: "lighter", margin: "8px 0" },
});

export function Dialog({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent>{children}</StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

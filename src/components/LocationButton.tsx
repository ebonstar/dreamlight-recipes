import { styled } from "../stitches.config";

export const LocationButton = styled("button", {
  fontSize: "16px",
  fontWeight: "bold",
  border: "4px solid $sky4",
  padding: "2px 8px",
  background: "none",
  color: "$sky11",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "$sky5",
    borderColor: "$sky5",
    cursor: "pointer",
  },
  "&:active": {
    backgroundColor: "$sky6",
  },
  variants: {
    status: {
      active: {
        backgroundColor: "$sky4",
      },
    },
  },
});

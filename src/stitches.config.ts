import { slateDark, skyDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      ...slateDark,
      ...skyDark,
    },
  },
});

export const globalStyles = globalCss(...normalize, {
  body: {
    color: "$slate12",
    backgroundColor: "$slate1",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif," +
      "Apple Color Emoji, Segoe UI Emoji, system-ui",
    fontSize: "16px",
  },
});

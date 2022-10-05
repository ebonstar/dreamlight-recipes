import { slateDark, skyDark, sky } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      text: slateDark.slate12,
      background: slateDark.slate1,
      componentBackground: slateDark.slate3,
      primary: skyDark.sky11,
      secondary: slateDark.slate2,
      faded: slateDark.slate5,
    },
  },
  media: {
    bp1: "(min-width: 640px)",
  },
});

export const globalStyles = globalCss(...normalize, {
  body: {
    margin: "0",
    padding: "0",
    color: "$text",
    backgroundColor: "$background",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif," +
      "Apple Color Emoji, Segoe UI Emoji, system-ui",
    fontSize: "16px",
  },
});

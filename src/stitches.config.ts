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
    fontSizes: {
      1: "13px",
      2: "14px",
      3: "16px",
    },
    radii: {
      1: "2px",
      2: "4px",
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
    fontSize: "$3",
  },
});

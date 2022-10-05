import { slateDark, skyDark, cyan, orange } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export const { createTheme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      background: slateDark.slate1,
      componentBackground: slateDark.slate3,
      accent: slateDark.slate2,
      focus: skyDark.sky11,
      faded: slateDark.slate5,
      text: slateDark.slate12,
      accentText: slateDark.slate12,
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
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
  },
});

export const colourfulTheme = createTheme("colourful", {
  colors: {
    background: cyan.cyan9,
    componentBackground: cyan.cyan1,
    accent: orange.orange9,
    focus: orange.orange8,
    faded: orange.orange11,
    text: slateDark.slate1,
    accentText: slateDark.slate12,
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

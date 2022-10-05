import { slateDark, skyDark, indigo, amber } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export type Theme = "default" | "colourful";

export const { createTheme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      background: slateDark.slate1,
      text: slateDark.slate12,
      componentBackground: slateDark.slate3,
      componentText: slateDark.slate12,
      accent: slateDark.slate2,
      accentText: slateDark.slate12,
      focus: skyDark.sky11,
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
    background: amber.amber2,
    text: slateDark.slate1,
    componentBackground: indigo.indigo9,
    componentText: slateDark.slate12,
    accent: amber.amber6,
    accentText: slateDark.slate1,
    focus: amber.amber8,
    faded: amber.amber7,
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

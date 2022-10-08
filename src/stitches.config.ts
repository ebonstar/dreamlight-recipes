import { slateDark, skyDark, indigo, amber } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";
import { normalize } from "stitches-normalize-css";

export type Theme = "default" | "colourful";

export const { createTheme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      backgroundImage: `
        radial-gradient(50% 80% at 55% 40%, #2ec8eeb0, transparent),
        radial-gradient(110% 100% at 20% 0%, #151718, transparent),
        radial-gradient(150% 100% at 80% 0%, #e2ef70, transparent),
        radial-gradient(150% 100% at 0% 80%, #2ec8ee, transparent),
        radial-gradient(150% 100% at 100% 80%, #151718, #3772FF)`,
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
    bp2: "(min-width: 800px)",
  },
});

export const colourfulTheme = createTheme("colourful", {
  colors: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' transform='scale(1 -1)'%3E%3Cg fill='%233e63dd' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
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
    backgroundImage: "$backgroundImage",
    backgroundAttachment: "fixed",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif," +
      "Apple Color Emoji, Segoe UI Emoji, system-ui",
    fontSize: "$3",
  },
});

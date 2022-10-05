import { ReactNode, useEffect } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { slateDark, cyan } from "@radix-ui/colors";
import { colourfulTheme, styled, Theme } from "../stitches.config";
import { useLocalStorage } from "../utils/useLocalStorage";

const Flex = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const StyledHeading = styled("h1", {
  fontWeight: "lighter",
});

const themes: Record<Theme, string> = {
  default: slateDark.slate3,
  colourful: cyan.cyan9,
};

const ThemeToggle = styled(ToggleGroup.Item, {
  width: "20px",
  height: "20px",
  marginLeft: "$2",
  border: "none",
  borderRadius: "$1",
  cursor: "pointer",
  "&[data-state=on]": {
    outline: "2px solid $focus",
  },
  "&:hover": {
    outline: "2px solid $focus",
  },
});

export default function Header({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "default");
  useEffect(() => {
    if (theme === "default") document.body.classList.remove(colourfulTheme);
    if (theme === "colourful") document.body.classList.add(colourfulTheme);
  }, [theme]);
  return (
    <Flex>
      <StyledHeading>{children}</StyledHeading>
      <ToggleGroup.Root
        type="single"
        value={theme}
        onValueChange={(value) => setTheme((value as Theme) || "default")}
      >
        {(Object.keys(themes) as Theme[]).map((option) => (
          <ThemeToggle
            key={option}
            value={option}
            css={{ backgroundColor: themes[option] }}
          />
        ))}
      </ToggleGroup.Root>
    </Flex>
  );
}

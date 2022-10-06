import { ReactNode, useEffect } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { slateDark, indigo } from "@radix-ui/colors";
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
  colourful: indigo.indigo9,
};

const ThemeToggle = styled(ToggleGroup.Item, {
  width: "20px",
  height: "20px",
  margin: "$2 0 0 $1",
  border: "2px solid $background",
  borderRadius: "$1",
  cursor: "pointer",
  "&[data-state=on]": {
    borderColor: "$focus",
  },
  "&:hover": {
    borderColor: "$focus",
  },
});

export default function Header({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "default");

  useEffect(() => {
    if (theme === "default") document.body.classList.remove(colourfulTheme);
    if (theme === "colourful") document.body.classList.add(colourfulTheme);
  }, [theme]);

  const handleThemeClick = (theme: Theme | "") => {
    if (theme === "") return;
    setTheme(theme);
  };
  return (
    <Flex>
      <StyledHeading>{children}</StyledHeading>
      <ToggleGroup.Root
        type="single"
        value={theme}
        onValueChange={(value) => handleThemeClick(value as Theme)}
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

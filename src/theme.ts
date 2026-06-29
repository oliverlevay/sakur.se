import { red } from "@mui/material/colors";
import type { PaletteMode, ThemeOptions } from "@mui/material";

const fontFamily = ['"Roboto"', '"Helvetica"', "Arial", "sans-serif"].join(",");

// Design tokens that adapt to the active colour scheme. Keeping this as a
// function lets the palette (backgrounds, text, accents) change per mode
// instead of only flipping MUI's default light/dark surfaces.
export const getDesignTokens = (mode: PaletteMode = "light"): ThemeOptions => {
  const isDark = mode === "dark";
  const accent = isDark ? "#ff7fa6" : "#e85d86"; // sakura pink
  const gold = isDark ? "#e8c06a" : "#bf962f"; // pocket-watch gold
  const linkColor = isDark ? "#ff9dbb" : "#c34d74";
  const cardBorder = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return {
    palette: {
      mode,
      primary: { main: accent },
      secondary: { main: gold },
      error: { main: red.A400 },
      background: isDark
        ? { default: "#0b0e14", paper: "#141925" }
        : { default: "#f6f7f9", paper: "#ffffff" },
      text: isDark
        ? { primary: "#e9ecf2", secondary: "#9aa3b2" }
        : { primary: "#1a1f29", secondary: "#5b6472" },
      divider: cardBorder,
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily,
      h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
      h2: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 },
      h3: { fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.3 },
      body1: { lineHeight: 1.7 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          a: { color: linkColor, textDecoration: "none" },
          "a:hover": { textDecoration: "underline" },
          "::selection": { background: accent, color: "#fff" },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: `1px solid ${cardBorder}`,
            boxShadow: isDark
              ? "0 1px 3px rgba(0,0,0,0.45)"
              : "0 1px 3px rgba(0,0,0,0.06)",
          },
        },
      },
      MuiButton: {
        styleOverrides: { root: { textTransform: "none" } },
      },
      MuiIconButton: {
        styleOverrides: {
          root: { transition: "background-color .2s ease, color .2s ease" },
        },
      },
    },
  };
};

// The site is dark-only — these tokens are used for SSR emotion extraction.
const defaultTheme: ThemeOptions = getDesignTokens("dark");

export default defaultTheme;

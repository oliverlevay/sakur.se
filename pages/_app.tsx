import { useState, useMemo, useEffect, createContext, useContext } from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import defaultTheme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { isServer } from "src/isServer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  const state = useContext(ColorModeContext);
  if (state === undefined) {
    console.error("useColorMode must be used within ThemeProvider");
  }
  return state;
}

const localStoragePref = isServer ? "light" : localStorage.getItem("mode");

export default function MyApp(props: MyAppProps) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<PaletteMode>();

  useEffect(() => {
    if (!localStoragePref) {
      setMode(prefersDarkMode ? "dark" : "light");
    } else {
      setMode(localStoragePref as PaletteMode);
    }
  }, [prefersDarkMode]);

  const theme = useMemo(() => {
    const mergedTheme = {
      ...defaultTheme,
      palette: { ...defaultTheme.palette, mode },
    };
    return createTheme(mergedTheme);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <Component {...pageProps} />
        </ColorModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

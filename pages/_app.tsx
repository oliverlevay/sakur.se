import { useState, useMemo, useEffect, createContext, useContext } from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import defaultTheme from "src/theme";
import createEmotionCache from "src/createEmotionCache";
import { isServer } from "src/isServer";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  const state = useContext(ColorModeContext);
  if (state === undefined) {
    console.error("useColorMode must be used within ThemeProvider");
  }
  return state;
}

const localStoragePref = isServer ? "light" : localStorage.getItem("mode");

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

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

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          {getLayout(<Component {...pageProps} />)}
        </ColorModeContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

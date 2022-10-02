import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { FullPage } from "./Components/News/FullPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from "@mantine/core";
export const App = () => {
    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <NewsContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<News />} />
                            <Route path="/article" element={<FullPage />} />
                            <Route path="/news" element={<Search />} />
                        </Routes>
                    </BrowserRouter>
                </NewsContextProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

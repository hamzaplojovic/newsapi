import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { FullPage } from "./Components/News/FullPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
        <NewsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<News />} />
                    <Route path="/article" element={<FullPage />} />
                    <Route path="/news" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    );
};

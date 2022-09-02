import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { FullPage } from "./Components/News/FullPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    return (
        <NewsContextProvider pageNumber={pageNumber}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <News
                                pageNumber={pageNumber}
                                setPageNumber={setPageNumber}
                            />
                        }
                    />
                    <Route path="/article" element={<FullPage />} />
                    <Route path="/news" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    );
};

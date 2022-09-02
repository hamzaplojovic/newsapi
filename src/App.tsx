import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { FullPage } from "./Components/News/FullPage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

export const App = () => {
    const [pageNumber, setPageNumber] = useState(1);
    return (
        <NewsContextProvider pageNumber={pageNumber}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route
                            index
                            element={
                                <News
                                    pageNumber={pageNumber}
                                    setPageNumber={setPageNumber}
                                />
                            }
                        />
                        <Route path=":id" element={<FullPage />} />
                    </Route>
                    <Route path="/news/" element={<Outlet />}>
                        <Route index element={<Search />} />
                        <Route path=":id" element={<FullPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    );
};

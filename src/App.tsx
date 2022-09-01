import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { FullPage } from "./Components/News/FullPage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
    return (
        <NewsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<News />} />
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

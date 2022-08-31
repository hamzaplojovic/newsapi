import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { Search } from "./Components/News/Search";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
    return (
        <NewsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<News />} />
                    </Route>
                    <Route path="/news" element={<Outlet />}>
                        <Route index element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    );
};

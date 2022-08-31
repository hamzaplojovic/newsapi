import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
    return (
        <NewsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Outlet />}>
                        <Route index element={<News />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    );
};

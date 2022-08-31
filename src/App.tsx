import { NewsContextProvider } from "./context/context";
import { News } from "./Components/News/News";

export const App = () => {
    return (
        <NewsContextProvider>
            <News />
        </NewsContextProvider>
    );
};

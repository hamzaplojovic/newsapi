import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface NewsContextInterface {
    children: React.ReactNode;
}

export const NewsContext = createContext<any>(undefined);

export const NewsContextProvider = (props: NewsContextInterface) => {
    const [data, setData] = useState<any>([]);
    const [pageNumber, setPageNumber] = useState(1);
    const apikey = "e75c1dd786c8454d989a14ccd2e3ca27";

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&page=${pageNumber}&apiKey=${apikey}`
            )
            .then((r) => {
                setData([...data, ...r.data.articles]);
            });
    }, [pageNumber]);
    return (
        <NewsContext.Provider value={{ data, setPageNumber, pageNumber }}>
            {props.children}
        </NewsContext.Provider>
    );
};

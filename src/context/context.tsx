import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface NewsContextInterface {
    children: React.ReactNode;
    pageNumber: number;
}

export const NewsContext = createContext(undefined);

export const NewsContextProvider = (props: NewsContextInterface) => {
    const [data, setData] = useState();
    const apikey = "e75c1dd786c8454d989a14ccd2e3ca27";

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&page=${props.pageNumber}&apiKey=${apikey}`
            )
            .then((r) => {
                setData(r.data);
            });
    }, [props.pageNumber]);
    return (
        <NewsContext.Provider value={data}>
            {props.children}
        </NewsContext.Provider>
    );
};

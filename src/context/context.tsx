import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface NewsContextInterface {
    children: React.ReactNode;
}

export const NewsContext = createContext(undefined);

export const NewsContextProvider = (props: NewsContextInterface) => {
    const [data, setData] = useState();
    const apikey = "e75c1dd786c8454d989a14ccd2e3ca27";
    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apikey}`
            )
            .then((r) => {
                setData(r.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <NewsContext.Provider value={data}>
            {props.children}
        </NewsContext.Provider>
    );
};

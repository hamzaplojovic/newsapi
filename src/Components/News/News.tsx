import { useContext } from "react";
import { NewsContext } from "../../context/context";
import { Mapping } from "./FilteringComponents/Mapping";
import { Load } from "./FilteringComponents/LoadMore";
import { Layout } from "../Layout/Layout";

interface NewsInterface {
    pageNumber: number;
    setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const News = (props: NewsInterface) => {
    const data: undefined = useContext(NewsContext);
    return (
        <Layout>
            <Mapping data={data} />
        </Layout>
    );
};

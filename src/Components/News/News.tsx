import { useContext } from "react";
import { NewsContext } from "../../context/context";
import { Mapping } from "./FilteringComponents/Mapping/Mapping";
import { Layout } from "../Layout/Layout";

export const News = () => {
    const data: undefined = useContext(NewsContext);
    return (
        <Layout>
            <Mapping data={data} />
        </Layout>
    );
};

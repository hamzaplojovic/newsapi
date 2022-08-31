import { useContext, useState } from "react";
import { NewsContext } from "../../context/context";
import { Mapping } from "./FilteringComponents/Mapping";
import { Load } from "./FilteringComponents/LoadMore";
import { Layout } from "../Layout/Layout";

export const News = () => {
    const [pageSize, setPageSize] = useState(10);
    const data: any = useContext(NewsContext);
    return (
        <Layout>
            <Mapping data={data} pageSize={pageSize} />
            <Load state={pageSize} setState={setPageSize} data={data} />
        </Layout>
    );
};

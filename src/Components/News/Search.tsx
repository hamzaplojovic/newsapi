import { Load } from "./FilteringComponents/LoadMore";
import { useContext, useState } from "react";
import { NewsContext } from "../../context/context";
import { createStyles, Input } from "@mantine/core";
import { Layout } from "../Layout/Layout";
import { Filtering } from "./FilteringComponents/Filtering";

const useStyles = createStyles(() => ({
    wrapper: {
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        width: "50%",
    },
}));

export const Search = () => {
    const data: any = useContext(NewsContext);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState("");
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    };
    const { classes } = useStyles();
    return (
        <Layout>
            <div className={classes.wrapper}>
                <Input
                    size="lg"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                    className={classes.input}
                />
                <Filtering search={search} pageSize={pageSize} data={data} />
                <Load state={pageSize} setState={setPageSize} data={data} />
            </div>
        </Layout>
    );
};

import { createStyles } from "@mantine/core";
import { Layout } from "../../Layout/Layout";
import { SearchInput } from "./Input";
import { SearchButton } from "./Button";
import { Filtering } from "../FilteringComponents/Filtering";
import { useState } from "react";

const useStyles = createStyles(() => ({
    wrapper: {
        marginTop: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

export const SerchWrapper = () => {
    const [search, setSearch] = useState("");
    const [term, setTerm] = useState("");
    const [click, setClick] = useState("");
    const [pageSize, setPageSize] = useState(10);
    const { classes } = useStyles();

    return (
        <Layout>
            <div className={classes.wrapper}>
                <SearchInput
                    search={search}
                    term={term}
                    setSearch={setSearch}
                    setTerm={setTerm}
                />
                <SearchButton term={term} setClick={setClick} />

                {click === term && (
                    <Filtering
                        phrase={search}
                        sortBy={term}
                        pageSize={pageSize}
                    />
                )}
            </div>
        </Layout>
    );
};
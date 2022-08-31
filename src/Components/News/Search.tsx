import { useContext, useState } from "react";
import { NewsContext } from "../../context/context";
import NewsArticle from "./NewsArticle/NewsArticle";
import { createStyles, MediaQuery, Input } from "@mantine/core";
import { Layout } from "../Layout/Layout";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        padding: "5% 0%",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
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
    const [search, setSearch] = useState("");
    const handleChange = (e: any) => {
        setSearch(e.target.value);
    };
    const { classes } = useStyles();
    return (
        <Layout>
            <div className={classes.wrapper}>
                <Input
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                    className={classes.input}
                />
                <MediaQuery
                    query="(max-width:1000px)"
                    styles={{ flexDirection: "column" }}
                >
                    <div className={classes.container}>
                        {data &&
                            data.articles
                                .filter((item: any) => {
                                    if (
                                        item.title
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    ) {
                                        return item;
                                    }
                                })
                                .map((item: any) => (
                                    <NewsArticle data={item} key={item.url} />
                                ))}
                    </div>
                </MediaQuery>
            </div>
        </Layout>
    );
};

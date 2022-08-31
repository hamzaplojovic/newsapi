import { useContext } from "react";
import { NewsContext } from "../../context/context";
import NewsArticle from "./NewsArticle/NewsArticle";
import { createStyles, MediaQuery } from "@mantine/core";
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
}));

export const News = () => {
    const data: any = useContext(NewsContext);
    const { classes } = useStyles();
    return (
        <Layout>
            <MediaQuery
                query="(max-width:1000px)"
                styles={{ flexDirection: "column" }}
            >
                <div className={classes.container}>
                    {data &&
                        data.articles.map((item: any) => (
                            <NewsArticle data={item} key={item.url} />
                        ))}
                </div>
            </MediaQuery>
        </Layout>
    );
};

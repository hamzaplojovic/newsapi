import { useContext } from "react";
import { NewsContext } from "../../context/context";
import NewsArticle from "../NewsArticle/NewsArticle";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    container: {
        width: "100%",
        display: "flex",
        padding: "5% 5%",
        flexWrap: "wrap",
        justifyContent: "center",
    },
}));

export const News = () => {
    const data: any = useContext(NewsContext);
    const { classes } = useStyles();
    return (
        <div className={classes.container}>
            {data &&
                data.articles.map((item: any) => (
                    <NewsArticle data={item} key={item.url} />
                ))}
        </div>
    );
};

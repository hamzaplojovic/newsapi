import { SearchData } from "../../../context/search";
import { createStyles, MediaQuery } from "@mantine/core";
import NewsArticle from "../NewsArticle/NewsArticle";
import { Load } from "./LoadMore";
import { useState } from "react";

const useStyles = createStyles(() => ({
    container: {
        width: "100%",
        display: "flex",
        padding: "5% 0%",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonwrapper: {
        width: "100%",
        textAlign: "center",
        marginBottom: "3%",
    },
}));
export const Filtering = (props: {
    phrase: string;
    sortBy: string;
    pageSize: number;
}) => {
    const [pageSize, setPageSize] = useState(10);
    const { classes } = useStyles();
    const { data }: any = SearchData({
        phrase: props.phrase,
        sortBy: props.sortBy,
    });

    return (
        <MediaQuery
            query="(max-width:1000px)"
            styles={{ flexDirection: "column" }}
        >
            <div className={classes.container}>
                {data.articles &&
                    data.articles.slice(0, pageSize).map((item: any) => {
                        return <NewsArticle data={item} key={item.url} />;
                    })}
                <Load state={pageSize} setState={setPageSize} data={data} />
            </div>
        </MediaQuery>
    );
};

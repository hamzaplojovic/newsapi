import { useSearchData } from "../../../context/search";
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
export const Filtering = (props: { phrase: string; sortBy: string }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const { classes } = useStyles();
    const { data }: any = useSearchData({
        phrase: props.phrase,
        sortBy: props.sortBy,
        pageNumber: pageNumber,
    });
    console.log(data);

    return (
        <MediaQuery
            query="(max-width:1000px)"
            styles={{ flexDirection: "column" }}
        >
            <div className={classes.container}>
                {data &&
                    data.map((item: any) => {
                        return <NewsArticle data={item} key={item.url} />;
                    })}
                <Load
                    setNumberOfArticles={setPageNumber}
                    numberOfArticles={1}
                />
            </div>
        </MediaQuery>
    );
};

import { useSearchData } from "../../../../context/search";
import { MediaQuery } from "@mantine/core";
import NewsArticle from "../../NewsArticle/NewsArticle";
import { Load } from "../LoadMore/LoadMore";
import { useState } from "react";
import { useStyles } from "./FilteringStyles";

export const Filtering = (props: { phrase: string; sortBy: string }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const { classes } = useStyles();
    const { data }: any = useSearchData({
        phrase: props.phrase,
        sortBy: props.sortBy,
        pageNumber: pageNumber,
    });

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

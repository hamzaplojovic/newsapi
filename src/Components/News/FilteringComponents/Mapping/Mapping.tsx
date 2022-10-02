import NewsArticle from "../../NewsArticle/NewsArticle";
import { MediaQuery } from "@mantine/core";
import { Load } from "../LoadMore/LoadMore";
import { useStyles } from "./MappingStyles";

interface MappingInterface {
    data: any;
}

export const Mapping = (props: MappingInterface) => {
    const { classes } = useStyles();
    return (
        <>
            <MediaQuery
                query="(max-width:1000px)"
                styles={{ flexDirection: "column" }}
            >
                <div className={classes.container}>
                    {props?.data &&
                        props?.data?.data?.map((item: any) => (
                            <NewsArticle data={item} key={item.url} />
                        ))}
                </div>
            </MediaQuery>
            <Load
                setNumberOfArticles={props.data.setPageNumber}
                numberOfArticles={props.data.pageNumber}
            />
        </>
    );
};

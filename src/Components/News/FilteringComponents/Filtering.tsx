import { createStyles, MediaQuery } from "@mantine/core";
import NewsArticle from "../NewsArticle/NewsArticle";

interface FilteringInterface {
    data: any;
    search: any;
    pageSize: any;
}

const useStyles = createStyles(() => ({
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
}));

export const Filtering = (props: FilteringInterface) => {
    const { classes } = useStyles();
    return (
        <MediaQuery
            query="(max-width:1000px)"
            styles={{ flexDirection: "column" }}
        >
            <div className={classes.container}>
                {props.data &&
                    props.data.articles
                        .slice(0, props.pageSize)
                        .filter((item: any) => {
                            if (
                                item.title
                                    .toLowerCase()
                                    .includes(props.search.toLowerCase())
                            ) {
                                return item;
                            }
                        })
                        .map((item: any) => (
                            <NewsArticle data={item} key={item.url} />
                        ))}
            </div>
        </MediaQuery>
    );
};

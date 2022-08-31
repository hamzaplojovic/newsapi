import NewsArticle from "../NewsArticle/NewsArticle";
import { createStyles, MediaQuery } from "@mantine/core";

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

interface MappingInterface {
    data: any;
    pageSize: any;
}

export const Mapping = (props: MappingInterface) => {
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
                        .map((item: any) => (
                            <NewsArticle data={item} key={item.url} />
                        ))}
            </div>
        </MediaQuery>
    );
};

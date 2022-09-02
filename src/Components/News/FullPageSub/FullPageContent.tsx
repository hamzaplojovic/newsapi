import { Text, Title, Image } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
    fullpage: {
        width: "100%",
        marginTop: "3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0% 15%",
    },
    imagewrapper: {
        width: "60%",
        margin: "3% 0%",
    },
    title: {
        textAlign: "center",
    },
    date: {
        margin: "1% 0%",
    },
    description: {
        fontSize: "20px",
    },
    sources: {
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
    },
}));
export const FullPageContent = (props: { data: any }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.fullpage}>
            <Title className={classes.title}>{props.data.title}</Title>
            <div className={classes.imagewrapper}>
                <Image src={props.data.urlToImage} radius="lg" />
            </div>
            <Text className={classes.description}>
                {props.data.description}
            </Text>
            <div className={classes.sources}>
                <Text>Author: {props.data.author}</Text>
                <Text>Source: {props.data.source.name}</Text>
                <Text className={classes.date}>{props.data.publishedAt}</Text>
            </div>
        </div>
    );
};

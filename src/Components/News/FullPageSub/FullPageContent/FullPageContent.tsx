import { Text, Title, Image } from "@mantine/core";
import { useStyles } from "./PageContentStyles";
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

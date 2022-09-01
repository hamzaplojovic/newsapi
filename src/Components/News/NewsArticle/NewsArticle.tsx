import { Card, Image, Text, Button, Group, Anchor } from "@mantine/core";
import { createStyles, MediaQuery } from "@mantine/core";

const useStyles = createStyles(() => ({
    article: {
        width: "35%",
        margin: "5% 5%",
        transition: "all 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-10px)",
        },
    },
    button: {
        bottom: 0,
        transition: "all 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-3px)",
        },
    },
}));
type Data = {
    title: string;
    description: string;
    urlToImage: string;
};

interface ArticleInterface {
    data: Data;
}

function NewsArticle(props: ArticleInterface) {
    const { classes } = useStyles();
    return (
        <MediaQuery query="(max-width:1000px)" styles={{ width: "80%" }}>
            <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                className={classes.article}
            >
                <Card.Section>
                    <Anchor href={props.data.title}>
                        <Image
                            src={props.data.urlToImage}
                            height={260}
                            alt="Norway"
                            fit="cover"
                        />
                    </Anchor>
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500} size="md">
                        {props.data.title}
                    </Text>
                </Group>

                <Text size="xs" color="dimmed">
                    {props.data.description}
                </Text>
                <Anchor href={"/news/" + props.data.title}>
                    <Button
                        variant="light"
                        color="blue"
                        mt="md"
                        fullWidth
                        radius="md"
                        size="sm"
                        className={classes.button}
                    >
                        View Article
                    </Button>
                </Anchor>
            </Card>
        </MediaQuery>
    );
}

export default NewsArticle;

import { Card, Image, Text, Button, Group } from "@mantine/core";
import { MediaQuery } from "@mantine/core";
import { useNavigate } from "react-router";
import { useStyles } from "./NewsArticleStyles";

type Data = {
    title: string;
    urlToImage: string;
    content: string;
    description: string;
};

interface ArticleInterface {
    data: Data;
}

function NewsArticle(props: ArticleInterface) {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/article", { state: { data: props.data } });
    };
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
                    <Image
                        src={props.data.urlToImage}
                        height={260}
                        fit="cover"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500} size="md">
                        {props.data.title}
                    </Text>
                </Group>

                <Text size="xs" color="dimmed">
                    {props.data.content
                        ? props.data.content.slice(0, -13)
                        : props.data.description}
                </Text>
                <Button
                    className={classes.button}
                    onClick={handleClick}
                    variant="light"
                >
                    View Article
                </Button>
            </Card>
        </MediaQuery>
    );
}

export default NewsArticle;

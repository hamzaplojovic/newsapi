import { Card, Image, Text, Button, Group } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    article: {
        width: "30%",
        margin: "5% 5%",
    },
    button: {
        bottom: 0,
    },
}));

interface ArticleInterface {
    data: any;
}

function NewsArticle(props: ArticleInterface) {
    const { classes } = useStyles();
    return (
        <Card
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            className={classes.article}
        >
            <Card.Section>
                <Image src={props.data.urlToImage} height={260} alt="Norway" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{props.data.title}</Text>
            </Group>

            <Text size="sm" color="dimmed">
                {props.data.description}
            </Text>

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
        </Card>
    );
}

export default NewsArticle;

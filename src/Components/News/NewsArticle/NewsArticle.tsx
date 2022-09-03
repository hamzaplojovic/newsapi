import { Card, Image, Text, Button, Group } from "@mantine/core";
import { createStyles, MediaQuery } from "@mantine/core";
import { useNavigate } from "react-router";

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
        marginTop: "20px",
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
                        {props.data.description}
                    </Text>
                </Group>

                <Text size="xs" color="dimmed">
                    {props.data.description}
                </Text>
                <Button
                    variant="light"
                    fullWidth
                    className={classes.button}
                    onClick={handleClick}
                >
                    View Article
                </Button>
            </Card>
        </MediaQuery>
    );
}

export default NewsArticle;

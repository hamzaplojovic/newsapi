import { createStyles, Button } from "@mantine/core";

interface LoadMoreInterface {
    data?: any;
    setState: React.Dispatch<React.SetStateAction<number>>;
    state: number;
}

const useStyles = createStyles(() => ({
    buttonwrapper: {
        width: "100%",
        textAlign: "center",
        marginBottom: "3%",
    },
}));

export const Load = (props: LoadMoreInterface) => {
    const { classes } = useStyles();
    return (
        <div className={classes.buttonwrapper}>
            <Button
                size="md"
                onClick={() => {
                    if (props.data.articles.length > props.state) {
                        props.setState(props.state + 5);
                    } else {
                        alert("No content!");
                    }
                }}
            >
                Load More
            </Button>
        </div>
    );
};

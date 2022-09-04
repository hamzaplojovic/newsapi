import { createStyles, Button } from "@mantine/core";
interface LoadMoreInterface {
    setNumberOfArticles: React.Dispatch<React.SetStateAction<number>>;
    numberOfArticles: number;
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
                onClick={() => {
                    props.setNumberOfArticles(props.numberOfArticles + 1);
                }}
            >
                Load More
            </Button>
        </div>
    );
};

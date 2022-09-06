import { Button } from "@mantine/core";
import { useStyles } from "./LoadMoreStyles";
interface LoadMoreInterface {
    setNumberOfArticles: React.Dispatch<React.SetStateAction<number>>;
    numberOfArticles: number;
}

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

import { Button } from "@mantine/core";
import { useStyles } from "./ButtonStyles";

interface SearchButtonType {
    term: string;
    setClick: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchButton = (props: SearchButtonType) => {
    const { classes } = useStyles();
    return (
        <div className={classes.buttonWrapper}>
            <Button
                className={classes.button}
                onClick={() => {
                    props.setClick(props.term);
                }}
            >
                Search
            </Button>
        </div>
    );
};

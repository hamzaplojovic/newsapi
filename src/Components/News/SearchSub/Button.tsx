import { createStyles, Button } from "@mantine/core";

const useStyles = createStyles(() => ({
    input: {
        width: "50%",
    },
    buttonWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "3%",
        padding: "0% 43%",
        height: "40px",
        color: "primary",
    },
    button: {
        width: "100%",
    },
}));

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

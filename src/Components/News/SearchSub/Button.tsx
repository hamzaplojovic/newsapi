import { createStyles, Button } from "@mantine/core";

const useStyles = createStyles(() => ({
    input: {
        width: "50%",
    },
    button: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "3%",
        padding: "0% 43%",
    },
}));

export const SearchButton = (props: { term: any; setClick: any }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.button}>
            <Button
                color="primary"
                fullWidth
                sx={{ height: "40px" }}
                onClick={() => {
                    props.setClick(props.term);
                }}
            >
                Search
            </Button>
        </div>
    );
};

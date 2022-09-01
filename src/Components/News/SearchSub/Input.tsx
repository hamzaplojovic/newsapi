import { Chips } from "../FilteringComponents/Chips";
import { createStyles, Input } from "@mantine/core";

const useStyles = createStyles(() => ({
    input: {
        width: "50%",
    },
    chips: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0% 20%",
    },
}));

export const SearchInput = (props: {
    term: any;
    setTerm: any;
    search: any;
    setSearch: any;
}) => {
    const { classes } = useStyles();
    return (
        <div className={classes.chips}>
            <Input
                size="lg"
                placeholder="Search"
                value={props.search}
                onChange={(e: any) => {
                    props.setSearch(e.target.value);
                }}
                className={classes.input}
            />
            <Chips state={props.term} setState={props.setTerm} />
        </div>
    );
};

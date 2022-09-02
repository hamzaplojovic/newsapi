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

interface SearchInputType {
    term: string;
    setTerm: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput = (props: SearchInputType) => {
    const { classes } = useStyles();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        props.setSearch(e.target.value);
    };
    return (
        <div className={classes.chips}>
            <Input
                className={classes.input}
                placeholder="Search"
                value={props.search}
                onChange={handleChange}
            />
            <Chips state={props.term} setState={props.setTerm} />
        </div>
    );
};

import { Input } from "@mantine/core";
import { Chips } from "../../FilteringComponents/Chips/Chips";
import { useStyles } from "./InputStyles";
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

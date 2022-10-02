import { Chip } from "@mantine/core";
import { useStyles } from "./ChipsStyles";

interface ChipInterface {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

export const Chips = (props: ChipInterface) => {
    const { classes } = useStyles();

    return (
        <Chip.Group
            position="center"
            multiple={false}
            value={props.state}
            onChange={props.setState}
        >
            <Chip classNames={classes} value="popularity">
                By popularity
            </Chip>
            <Chip classNames={classes} value="relevance">
                By relevance
            </Chip>
            <Chip classNames={classes} value="publishedAt">
                By date
            </Chip>
        </Chip.Group>
    );
};

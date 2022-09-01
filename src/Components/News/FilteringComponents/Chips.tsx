import { createStyles, Chip } from "@mantine/core";

interface ChipInterface {
    state: any;
    setState: any;
}

const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
        "&[data-checked]": {
            "&, &:hover": {
                backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
                color: theme.white,
            },

            [`& .${getRef("iconWrapper")}`]: {
                color: theme.white,
            },
        },
    },

    iconWrapper: {
        ref: getRef("iconWrapper"),
    },
}));

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

import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme, _params, getRef) => ({
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

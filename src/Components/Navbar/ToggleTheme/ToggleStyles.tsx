import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },

    icon: {
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
        top: 3,
    },

    iconLight: {
        left: 4,
        color: theme.white,
        "& *": {
            cursor: "pointer",
        },
    },

    iconDark: {
        right: 4,
        color: theme.colors.gray[6],
    },
    wrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "30px 30px",
        marginTop: "14px",
        marginLeft: "30px",
    },
}));

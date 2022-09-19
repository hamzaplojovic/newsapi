import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    article: {
        width: "30%",
        margin: "5% 1%",
        height: 500,
        transition: "all 0.2s ease-in",
        overflow: "auto",
        boxShadow: theme.shadows.md,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.md,
        background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    button: {
        width: "90%",
        transition: "all 0.25s linear",
        "&:hover": {
            transform: "translateY(-3px)",
        },
        position: "absolute",
        bottom: "15px",
    },
    desc: {
        fontSize: theme.fontSizes.xs,
        color: theme.colors.gray[6],
    },
}));

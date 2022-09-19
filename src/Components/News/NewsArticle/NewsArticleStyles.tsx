import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    article: {
        width: "30%",
        margin: "5% 1%",
        height: 500,
        transition: "all 0.2s ease-in",
        overflow: "auto",
    },
    button: {
        width: "100%",
        marginTop: "20px",
        transition: "all 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-3px)",
        },
    },
}));

import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    article: {
        width: "35%",
        margin: "5% 5%",
        transition: "all 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-10px)",
        },
    },
    button: {
        bottom: 0,
        width: "100%",
        marginTop: "20px",
        transition: "all 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-3px)",
        },
    },
}));

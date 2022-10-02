import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_params) => ({
    fullpage: {
        width: "100%",
        marginTop: "3%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0% 15%",
    },
    imagewrapper: {
        width: "60%",
        margin: "3% 0%",
    },
    title: {
        textAlign: "center",
    },
    date: {
        margin: "1% 0%",
    },
    description: {
        fontSize: "20px",
    },
    sources: {
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
    },
}));

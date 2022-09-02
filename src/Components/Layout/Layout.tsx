import { NavbarMinimal } from "../Navbar/Navbar";
import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
    layout: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        width: "100%",
        alignItems: "center",
    },
    childWrapper: {
        width: "100%",
        justifyContent: "center",
    },
}));

export function Layout({
    children,
}: {
    children: React.ReactNode | React.ReactNode[];
}) {
    const { classes } = useStyles();
    return (
        <div className={classes.layout}>
            <NavbarMinimal />
            <div className={classes.childWrapper}>{children}</div>
        </div>
    );
}

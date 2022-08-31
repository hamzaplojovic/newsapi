import { useState } from "react";
import {
    Navbar,
    Tooltip,
    UnstyledButton,
    createStyles,
    Stack,
} from "@mantine/core";
import { TablerIcon, IconHome2, IconSearch } from "@tabler/icons";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme, _params) => ({
    link: {
        transition: "ease-in-out 0.2s all",
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        "& child, &:hover": {
            transform: "translateY(-1px)",
            scale: "1.2",
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[0],
        },
    },
    path: {
        transition: "ease-in-out 0.1s all",
        borderRadius: theme.radius.md,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        "&:hover": {
            transition: "ease-in-out all 0.3s",
            cursor: "pointer",
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },

    active: {
        transition: "ease-in-out 0.1s all",
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
    nav: {
        width: "100%",
        display: "flex",
        height: "80px",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    nav_section: {
        width: "100%",
        display: "flex",
        margin: 0,
    },
    stack: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    login: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;
    onClick?(): void;
    path: string;
}

function NavbarLink({ path, icon: Icon, label }: NavbarLinkProps) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={400}>
            <UnstyledButton className={cx(classes.link)}>
                <Link to={path} className={classes.path}>
                    <Icon stroke={1} size={25} />
                </Link>
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: "Home", path: "/" },
    { icon: IconSearch, label: "News", path: "/news" },
];

export function NavbarMinimal() {
    const [active, setActive] = useState(2);
    const { classes } = useStyles();

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            path={link.path}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
        />
    ));

    return (
        <Navbar p="md" className={classes.nav}>
            <Navbar p="md" className={classes.nav}>
                <Navbar.Section className={classes.nav_section}>
                    <Stack
                        justify="center"
                        spacing={30}
                        className={classes.stack}
                    >
                        {links}
                    </Stack>
                </Navbar.Section>
            </Navbar>
        </Navbar>
    );
}

import { Navbar, Tooltip, UnstyledButton, Stack } from "@mantine/core";
import { TablerIcon, IconHome2, IconSearch } from "@tabler/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SwitchToggle } from "../ToggleTheme/ToggleTheme";
import { useStyles } from "./NavbarStyles";
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
                    <SwitchToggle />
                </Navbar.Section>
            </Navbar>
        </Navbar>
    );
}

import { Switch, Group, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useStyles } from "./ToggleStyles";

export function SwitchToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { classes, cx } = useStyles();

    return (
        <Group position="center" my={30} mt={14} ml={30}>
            <div className={classes.root}>
                <IconSun
                    className={cx(classes.icon, classes.iconLight)}
                    size={18}
                    stroke={1.5}
                />
                <IconMoonStars
                    className={cx(classes.icon, classes.iconDark)}
                    size={18}
                    stroke={1.5}
                />
                <Switch
                    checked={colorScheme === "dark"}
                    onChange={() => toggleColorScheme()}
                    size="md"
                />
            </div>
        </Group>
    );
}

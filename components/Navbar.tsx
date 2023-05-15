"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Burger,
  Container,
  Group,
  Header,
  Text,
  createStyles,
  Transition,
  Paper,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { links } from "./staticData/Navbar";
import { lobster_two } from "@/font";
import { dataTypes } from "@/types/type";

const Navbar = (): JSX.Element => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const pathname = usePathname();
  return (
    <Header height={80} className={classes.root}>
      <Container size="xl" className={classes.header}>
        <Link href="/">
          <Text
            className={lobster_two.className}
            fz={{ base: "25px", sm: "35px" }}
            sx={{ fontWeight: 700 }}
          >
            Jack&June
          </Text>
        </Link>
        <Group spacing={30} className={classes.links}>
          {links.map((link: dataTypes) => (
            <Link href={link.link} key={link.link} passHref>
              <Text
                className={`${
                  pathname === link.link
                    ? classes.isActive
                    : classes.linkDesktop
                }`}
              >
                {link.label}
              </Text>
            </Link>
          ))}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} style={styles}>
              <Box className={classes.wrap}>
                {links.map((link) => (
                  <Link href={link.link}>{link.label}</Link>
                ))}
              </Box>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default Navbar;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  dropdown: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    padding: "20px",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  linkDesktop: {
    color: "#262a2c",
    ":hover": {
      color: "#E25D24",
    },
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px",
  },
  isActive: {
    color: "#E25D24",
  },
}));

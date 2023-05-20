"use client";
import { Box, Container, Text, createStyles } from "@mantine/core";
import { accessoriesData } from "./staticData/Accesssories";
import Accessory from "./Accessory";

const Accesories = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Box sx={{ background: "#fff" }}>
      <Container size="xl">
        <Box sx={{ padding: "50px 0" }}>
          <Text className={classes.heading}>ACCESSORIES</Text>
          <Box className={classes.boxWrap}>
            {accessoriesData.map((accessory) => (
              <Accessory key={accessory.id} {...accessory} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Accesories;

const useStyles = createStyles((theme) => ({
  heading: {
    fontSize: "20px",
    lineHeight: 1.3,
    fontWeight: 700,
    marginBottom: "20px",

    [theme.fn.largerThan("md")]: {
      fontSize: "24px",
    },
  },
  boxWrap: {
    rowGap: "15px",
    display: "flex",
    flexDirection: "column",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    [theme.fn.largerThan(1300)]: {
      justifyContent: "flex-start",
      columnGap: "25px",
      rowGap: "25px",
    },
  },
}));

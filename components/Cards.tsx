"use client";
import { Box, Container, Text, createStyles } from "@mantine/core";
import { cards } from "./staticData/Cards";
import { cardTypes } from "@/types/type";

const Cards = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div style={{ background: "#fff" }}>
      <Container size="xl">
        <Box className={classes.wrap}>
          {cards.map((card: cardTypes) => {
            const { id, bgImg, text, others } = card;
            return (
              <Box
                key={id}
                className={classes.bgImgWrap}
                sx={{
                  backgroundImage: `${bgImg}`,
                }}
              >
                <Box className={classes.innerWrap}>
                  <Text
                    fz={{ xs: "16px", sm: "14px", lg: "18px" }}
                    className={classes.text}
                  >
                    {text}
                  </Text>
                  <Text className={classes.subText}>{others}</Text>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </div>
  );
};

export default Cards;

const useStyles = createStyles((theme) => ({
  wrap: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
    rowGap: "15px",
    flexDirection: "column",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      columnGap: "15px",
    },
  },
  bgImgWrap: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "281px",
    padding: "15px",
    position: "relative",

    [theme.fn.largerThan("sm")]: {
      width: "400px",
    },
  },
  innerWrap: {
    background: "#fff",
    position: "relative",
    top: "180px",
    textAlign: "center",
    padding: "10px",
  },
  text: {
    color: "#c7b79d",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  subText: {
    color: "#262a2c",
    fontSize: "24px",
    fontWeight: 400,
    lineHeight: 1.2,
    letterSpacing: "0.2px",
  },
}));

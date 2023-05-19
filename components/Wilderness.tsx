"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  createStyles,
} from "@mantine/core";
import Image from "next/image";

const Wilderness = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Flex align="center" className={classes.wrap}>
      <Box className={classes.imgWrap}></Box>

      <Container size="xl" sx={{ textAlign: "center" }}>
        <img
          src="https://preview.codeless.co/june/default/wp-content/uploads/2017/11/vc.png"
          style={{ marginBottom: "15px", width: "143px" }}
        />
        <Box>
          <Text className={classes.text}>WILDERNESS</Text>
          <Text className={classes.text}>PRINTED TEES</Text>
          <Text className={classes.text}>STARTING $12</Text>
        </Box>
        <img
          src="https://preview.codeless.co/june/default/wp-content/uploads/2017/11/vc.png"
          style={{ marginTop: "15px", width: "143px" }}
        />
        <Box>
          <Button className={classes.cta}>SHOP COLLECTION</Button>
        </Box>
      </Container>
    </Flex>
  );
};

export default Wilderness;

const useStyles = createStyles((theme) => ({
  wrap: {
    position: "relative",
    top: 0,
    bottom: 0,
    overflow: "hidden",
    width: "100%",
    height: "507px",
    background: "#060b20",
    zIndex: 1,
  },
  imgWrap: {
    position: "absolute",
    right: 0,
    left: 0,
    minHeight: "507px",
    width: "100%",
    zIndex: -1,
    background:
      "url(https://preview.codeless.co/june/default/wp-content/uploads/2017/11/1-compressed.jpg) no-repeat",
    backgroundPosition: "left top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundBlendMode: "normal",
  },
  text: {
    fontSize: "60px",
    fontWeight: 600,
    letterSpacing: "8px",
    color: "#ffff",
    lineHeight: 1,

    [theme.fn.smallerThan("md")]: {
      fontSize: "30px",
    },
  },
  cta: {
    marginTop: "20px",
    background: "#9aab7d",
    ".mantine-Button-label": {
      fontSize: "14px",
      fontWeight: 600,
    },
    ":hover": {
      background: "#9aab7d",
    },
  },
}));

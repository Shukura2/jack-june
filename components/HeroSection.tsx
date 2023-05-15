"use client";
import Link from "next/link";
import { Box, Container, Text, createStyles, rem } from "@mantine/core";
import { motion } from "framer-motion";
import { child, container } from "@/styles/view";

const text = "Exhale Style";

const HeroSection = () => {
  const { classes } = useStyle();
  return (
    <div className={classes.wrap}>
      <Container size="xl" className={classes.container}>
        <Box sx={{ textAlign: "center", color: "#fff" }}>
          <Text sx={{ fontWeight: 600 }} fz={{ base: "22px", sm: "36px" }}>
            Inhale Fashion
          </Text>
          <Box className={classes.box}>
            <motion.div variants={container} initial="hidden" animate="visible">
              {Array.from(text).map((letter, index) => (
                <motion.span variants={child} key={index}>
                  {letter === "" ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </Box>

          <Box className={classes.text}>New Spring Collection Flat 40% Off</Box>
          <Link href="/">
            <Box className={classes.cta}>SHOP COLLECTION</Box>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;

const useStyle = createStyles((theme) => ({
  wrap: {
    position: "relative",
    backgroundImage:
      "url(https://preview.codeless.co/june/default/wp-content/uploads/2017/11/largebanner-compressed.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
  },
  container: {
    minHeight: "664px",
    display: "grid",
    placeContent: "center",
  },
  box: {
    fontWeight: 700,
    fontSize: 96,
    lineHeight: 0.95,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 600,
    marginBottom: 20,
  },
  cta: {
    padding: "15px 20px",
    background: "#000",
    color: "white",
    borderRadius: 26,
    width: 205,
    margin: "0 auto",
    fontSize: 16,
    fontWeight: 600,
    ":hover": {
      background: "#000",
    },
  },
}));

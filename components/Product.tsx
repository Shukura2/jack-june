"use client";
import { useState } from "react";
import { Box, Text, createStyles, Loader, Rating } from "@mantine/core";
import { ArrowsDiagonal } from "tabler-icons-react";
import { featuredDataTypes } from "@/types/type";

const Product = ({
  bgImg,
  isSale,
  name,
  amount,
  ratings,
}: featuredDataTypes) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { classes } = useStyles();
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={classes.wrap}
    >
      <Box
        sx={{
          backgroundImage: `url(${bgImg[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "497px",
          padding: "10px",
          position: "relative",
        }}
      >
        {isSale && <Box className={classes.saleTag}>SALE!</Box>}
        {isHover && (
          <Box
            onClick={() => {
              setIsloading(true);
            }}
            className={classes.hoverTag}
          >
            {isLoading ? <Loader color="#E25D24" /> : <ArrowsDiagonal />}
          </Box>
        )}
      </Box>
      <Box className={classes.box}>
        <Text sx={{ fontWeight: 600, letterSpacing: "0.4px" }}>{name}</Text>
        <Text sx={{ color: "#eb5a46", fontWeight: 600 }}>${amount}</Text>
        {ratings === 0 ? "" : <Rating value={ratings} />}
      </Box>
    </Box>
  );
};

export default Product;

const useStyles = createStyles((theme) => ({
  wrap: {
    [theme.fn.largerThan("sm")]: {
      width: "49%",
    },
    [theme.fn.largerThan("lg")]: {
      width: "23%",
    },
  },
  saleTag: {
    background: "#eb5a46",
    color: "#ffff",
    borderRadius: "3px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    padding: "5px 10px",
  },
  hoverTag: {
    width: "50px",
    height: "50px",
    background: "#ffff",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    position: "absolute",
    right: "10px",
    top: "30px",
    borderRadius: "5px",
    ":hover": {
      color: "#eb5a46",
    },
  },
  box: {
    padding: "15px 0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
}));

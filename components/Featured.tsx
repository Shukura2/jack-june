"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Box, Container, Loader, createStyles } from "@mantine/core";
import { featured } from "./staticData/Feature";
import Product from "./Product";
import { featuredDataTypes } from "@/types/type";

const allCategories = [...new Set(featured.map((item) => item.categories))];

const Featured = (): JSX.Element => {
  const { classes } = useStyles();
  const [categories] = useState<string[]>(allCategories);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<featuredDataTypes | any>(featured);

  useEffect(() => {
    const products = featured.filter((item) => item.categories === "featured");
    setProducts(products);
    return;
  }, []);

  const filterItems = (categories: string) => {
    const otherCategories = featured.filter(
      (item) => item.categories === categories
    );
    setProducts(otherCategories);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div style={{ background: "#fff" }}>
      <Container size="xl">
        <Box className={classes.wrap}>
          {categories.map((item, index) => (
            <React.Fragment key={item}>
              <Box
                className={classes.itemWrap}
                sx={{
                  color: `${selectedIndex === index ? "#E25D24" : "#c1cad1"}`,
                }}
                onClick={() => {
                  setLoading(true);
                  setSelectedIndex(index);
                  filterItems(item);
                }}
              >
                {item}
              </Box>
              <Box className={classes.imgWrap}>
                <Image
                  src={`https://preview.codeless.co/june/default/wp-content/themes/june/img/separator2.png`}
                  width={24}
                  height={14}
                  alt="Divider"
                  style={{
                    display: `${index === categories.length - 1 && "none"}`,
                  }}
                />
              </Box>
            </React.Fragment>
          ))}
        </Box>

        <Box>
          {loading ? (
            <Box className={classes.loaderWrap}>
              <Loader color="#E25D24" />
            </Box>
          ) : (
            <Box className={classes.productWrap}>
              {products.map((item: featuredDataTypes) => (
                <Product key={item.id} {...item} />
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Featured;

const useStyles = createStyles((theme) => ({
  wrap: {
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  productWrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",

    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  itemWrap: {
    textTransform: "capitalize",
    paddingTop: "15px",
    fontSize: "18px",
    fontWeight: 700,
    cursor: "pointer",
  },
  imgWrap: {
    width: "24px",
    height: "14px",

    [theme.fn.largerThan("sm")]: {
      margin: "0 20px",
    },
  },
  loaderWrap: {
    height: "497px",
    display: "flex",
    justifyContent: "center",
    padding: "50px 0",
  },
}));

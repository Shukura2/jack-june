"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { CircleCheck, Check, Heart } from "tabler-icons-react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import {
  Box,
  Container,
  Grid,
  Text,
  Rating,
  TextInput,
  Button,
  createStyles,
  List,
} from "@mantine/core";
import { featured } from "@/components/staticData/Feature";

const Product = (): JSX.Element => {
  const params = useParams();
  const { classes } = useStyles();
  const { productId } = params;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [isSelectOtherColors, setIsSelectOtherColors] =
    useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);
  const [newSelectedColor, setNewSelectedColor] = useState("");
  const items = featured.find((item) => item.id === Number(productId));

  useEffect(() => {
    thumbsSwiper?.slideTo(2);
  }, []);

  const handleSelectColor = (idx: number) => {
    if (idx === selectedBox) {
      setSelectedBox(null);
    } else {
      setSelectedBox(idx);
    }
  };

  if (!items) {
    return <Text>Product not found</Text>;
  }
  return (
    <Box sx={{ background: "#fff" }}>
      <Container size="xl">
        <Grid
          sx={{
            margin: "50px 0",
            "@media (max-width: 767px)": {
              margin: "25px 0",
            },
          }}
        >
          <Grid.Col md={6}>
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {items.bgImg.map((item, index) => (
                <SwiperSlide key={index}>
                  {isSelectOtherColors ? (
                    <img src={(items.bgImg[0] = newSelectedColor)} />
                  ) : (
                    <img src={item} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {items.bgImg.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid.Col>

          <Grid.Col
            md={6}
            sx={{
              paddingLeft: "32px",
              "@media (max-width: 767px)": { paddingLeft: "0" },
            }}
          >
            <Text className={classes.home}>Home</Text>
            <Text className={classes.title}>{items.name}</Text>
            <Text sx={{ fontSize: "25px" }}>${items.amount}</Text>
            <Box className={classes.stockWrap}>
              <Box className={classes.stockSub}>
                <CircleCheck style={{ color: "#8aba56" }} />
                <Text sx={{ color: "#c1cad1" }}>In Stock</Text>
              </Box>
              <Box className={classes.ratings}>
                {items.ratings === 0 ? "" : <Rating value={items.ratings} />}
                <Text>(1) Write a Review?</Text>
              </Box>
            </Box>

            <Box className={classes.text}>
              This amazing dress is sure to make you stand out from the crowd.
              Intricately designed, this stylish number is an idiosyncratic
              piece. Team it with a pair of heels or boots and minimal
              accessories for a sassy look.
            </Box>

            {items.color && items.color !== null && (
              <React.Fragment>
                <Text sx={{ padding: "25px 0 15px" }}>Color</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {items.color &&
                    items.color.map((item, index) => (
                      <Box
                        key={index}
                        onClick={() => {
                          handleSelectColor(index);
                          setIsSelectOtherColors(true);
                          if (item === null) {
                            setNewSelectedColor(items.bgImg[0]);
                          } else {
                            setNewSelectedColor(item.image[0]);
                          }
                        }}
                        className={classes.colorBox}
                        sx={{
                          border: `${
                            item.type === "white" ? "1px solid #c1cad1" : "none"
                          }`,
                          backgroundColor: `${item.type}`,
                        }}
                      >
                        {index === selectedBox ? (
                          <React.Fragment>
                            {item.type === "white" ? (
                              <Check
                                color="#c1cad1"
                                size={17}
                                strokeWidth={3}
                              />
                            ) : (
                              <Check color="#fff" size={17} strokeWidth={3} />
                            )}
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </Box>
                    ))}
                </Box>
              </React.Fragment>
            )}

            <Text sx={{ padding: "20px 0" }}>Size</Text>
            <Box sx={{ display: "flex", columnGap: "20px" }}>
              {items.size.map((item) => (
                <TextInput
                  key={item}
                  value={item}
                  readOnly
                  className={classes.sizeBox}
                />
              ))}
            </Box>

            <Box sx={{ padding: "10px 0" }}>
              <Text sx={{ padding: "20px 0" }}>Qty</Text>
              <Box className={classes.qtyWrap}>
                <Box sx={{ display: "flex" }}>
                  <TextInput
                    value={qty}
                    onChange={(event) => {
                      setQty(parseInt(event.target.value));
                    }}
                    className={classes.input}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button
                      onClick={() => setQty(qty + 1)}
                      variant="outline"
                      className={classes.symbolWrap}
                    >
                      +
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (qty > 1) {
                          setQty(qty - 1);
                          return;
                        }
                      }}
                      className={classes.symbolWrap}
                    >
                      -
                    </Button>
                  </Box>
                </Box>
                <Button variant="filled" fullWidth className={classes.cta}>
                  ADD TO CART
                </Button>
              </Box>
            </Box>

            <Box className={classes.wishlistWrap}>
              <Box className={classes.wishlist}>
                <Text>Add to Wishlist</Text>
                <Heart size={20} style={{ color: "#eb5a46" }} />
              </Box>
              <Box className={classes.share}>
                <Text>Share this</Text>
                <FaFacebookF style={{ fontSize: "20px" }} />
                <AiOutlineTwitter style={{ fontSize: "20px" }} />
                <AiOutlineGoogle style={{ fontSize: "20px" }} />
                <FaPinterestP style={{ fontSize: "20px" }} />
              </Box>
            </Box>

            <Box sx={{ padding: "30px 0" }}>
              <Text sx={{ color: "#8b99a3", paddingBottom: "20px" }}>
                SKU: N/A
              </Text>
              <Box className={classes.sku}>
                <Text>Categories:</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {items.modalCategories.map((item) => (
                    <Text key={item}>{item}</Text>
                  ))}
                </Box>
              </Box>
              <Box className={classes.tagWrap}>
                <Text>Tags:</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {items.tags.map((tag) => (
                    <Text key={tag} className={classes.tag}>
                      {tag}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>

        <Text className={classes.titles}>DESCRIPTION</Text>
        <Text className={classes.texts}>
          Basics never wear out of fashion. You can team your basics with
          literally everything. They can carry any look with ease. Pair it with
          a blazer and a jean to give it that not-so-formal yet casual look,
          with a pair of 3/4ths or chinos and uber cool loafer, it gives you fun
          outing look.
        </Text>
        <Text className={classes.content}>
          The premium knits Dresses from Zara are made of 100% combed cotton.
          Pre-shrunk to let you worry less about shrinkage. This amazing skirt
          is sure to make you stand out from the crowd. Team it up with a solid
          crop top and wedge heels or casual shoes for a sassy look.
        </Text>
        <List withPadding listStyleType="disc" className={classes.content}>
          <List.Item>Stonewashed</List.Item>
          <List.Item>2-pocket design</List.Item>
          <List.Item>Mid-rise</List.Item>
          <List.Item>Cotton spandex fabric</List.Item>
        </List>

        <Text className={classes.titles}>PRODUCT DETAILS</Text>
        <Text className={classes.content}>
          Mustard brown woven A-line midi skirt, has two pockets, a full button
          placket with a button closure on the front, and a waistband with belt
          loops and gathers beneath Comes with a matching fabric belt
        </Text>
        <Text className={classes.titles}>MATERIAL & CARE</Text>
        <Text className={classes.content}>100% Cotton</Text>
        <Text className={classes.content}>Machine-wash cold</Text>
      </Container>
    </Box>
  );
};

export default Product;

const useStyles = createStyles((theme) => ({
  home: {
    color: "#c1cad1",
    lineHeight: 1.3,
  },
  title: {
    borderBottom: "1px solid #c1cad1",
    padding: "15px 0 20px",
    marginBottom: "30px",
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 600,
    margin: "0.67em 0",
  },
  stockWrap: {
    padding: "30px 0",
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("md")]: {
      padding: "0",
    },
  },
  stockSub: {
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    padding: "10px 20px 10px 0",
    borderRight: "1px solid #8b99a3",

    [theme.fn.smallerThan("md")]: {
      borderRight: "none",
    },
  },
  ratings: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    padding: "15px 0 15px 20px",

    [theme.fn.smallerThan("md")]: {
      paddingLeft: "0",
    },
  },
  text: {
    color: "#c1cad1",
    paddingBottom: "30px",
    borderBottom: "1px solid #c1cad1",
  },
  colorBox: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    cursor: "pointer",
  },
  sizeBox: {
    width: "50px",
    cursor: "pointer",
    "& .mantine-Input-input": {
      padding: "0 2px",
      textAlign: "center",
      height: "50px",
    },
  },
  qtyWrap: {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
  },
  input: {
    width: "60px",
    borderRadius: "0",
    "& .mantine-Input-input": {
      height: "60px",
      padding: "0",
      textAlign: "center",
    },
  },
  symbolWrap: {
    width: "30px",
    height: "30px",
    borderRadius: "0",
    padding: "0",
    textAlign: "center",
    fontSize: "18px",
    "& .mantine-1wpc1xj": {
      borderColor: "#8b99a3",
    },
  },
  cta: {
    background: "#000",
    height: "60px",
    ":hover": {
      background: "#000",
    },
  },
  wishlistWrap: {
    padding: "25px 0 40px ",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    borderBottom: "1px solid #8b99a3",

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: "10px",
    },
  },
  wishlist: {
    padding: "5px 0 5px",
    marginRight: "20px",
    borderBottom: "1px dashed #000",
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    width: "fit-content",
  },
  share: {
    display: "flex",
    alignItems: "center",
    columnGap: "15px",
    padding: "5px 0 5px 20px",
    borderLeft: "1px solid #8b99a3",

    [theme.fn.smallerThan("sm")]: {
      borderLeft: "none",
      paddingLeft: "0",
    },
  },
  sku: {
    display: "flex",
    columnGap: "10px",
    paddingBottom: "20px",
    color: "#8b99a3",
  },
  tagWrap: {
    display: "flex",
    columnGap: "10px",
    color: "#8b99a3",
  },
  tag: {
    ":hover": {
      background: "#F2F4F6",
      padding: "5px 10px",
      color: "white",
    },
  },
  titles: {
    paddingBottom: "5px",
    fontWeight: 600,
  },
  texts: {
    color: "#8b99a3",
    margin: "5px 0",
    lineHeight: 2,
  },
  content: {
    color: "#8b99a3",
    margin: "5px 0",
    lineHeight: 2,
    paddingBottom: "15px",
  },
}));

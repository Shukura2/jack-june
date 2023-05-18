"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Box,
  Text,
  createStyles,
  Loader,
  Rating,
  Modal,
  Grid,
  Flex,
  TextInput,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { ArrowsDiagonal } from "tabler-icons-react";
import { CircleCheck, Check, Heart } from "tabler-icons-react";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { featuredDataTypes } from "@/types/type";
import IconCloseModal from "./Icon/IconCloseModal";

const Product = ({
  bgImg,
  isSale,
  name,
  amount,
  ratings,
  color,
  size,
  modalCategories,
  tags,
  id,
}: featuredDataTypes) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { classes } = useStyles();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 1024px)");
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [isSelectOtherColors, setIsSelectOtherColors] =
    useState<boolean>(false);
  const [newSelectedColor, setNewSelectedColor] = useState<string | string[]>(
    bgImg
  );
  const [qty, setQty] = useState<number>(1);

  const handleBox = (idx: number) => {
    if (idx === selectedBox) {
      setSelectedBox(null);
    } else {
      setSelectedBox(idx);
    }
  };

  const handleDetailedPage = (id: number) => {
    router.push(`/product/${id}`);
  };

  return (
    <>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => handleDetailedPage(id)}
        className={classes.wrap}
      >
        <Box
          className={classes.productWrap}
          sx={{ backgroundImage: `url(${bgImg[0]})` }}
        >
          {isSale && <Box className={classes.saleTag}>SALE!</Box>}
          {isHover && (
            <Box
              onClick={(event) => {
                setIsloading(true);
                event.stopPropagation();
                setTimeout(() => {
                  setIsloading(false);
                  setIsOpened(true);
                  return;
                }, 1500);
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

      <Modal
        opened={isOpened}
        onClose={() => setIsOpened(false)}
        size={matches ? "80%" : "100%"}
        withCloseButton={false}
        centered
        className={classes.modalCustom}
      >
        <Grid>
          <Grid.Col lg={6} className={classes.gridCol}>
            <Swiper modules={[Navigation]} navigation>
              {bgImg.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    backgroundImage: `${
                      isSelectOtherColors
                        ? `url(${newSelectedColor})`
                        : `url(${image})`
                    } `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "83vh",
                    objectFit: "scale-down",
                  }}
                ></SwiperSlide>
              ))}
            </Swiper>
          </Grid.Col>

          <Grid.Col
            lg={6}
            className={classes.gridColOther}
            h={{ base: "850px", lg: "85vh" }}
          >
            <Text sx={{ color: "#c1cad1" }}>Home</Text>
            <Text className={classes.name}>{name}</Text>
            <Text className={classes.amount}>${amount}</Text>
            <Box className={classes.boxWrap}>
              <Box className={classes.content}>
                <CircleCheck style={{ color: "#8aba56" }} />
                <Text sx={{ color: "#c1cad1" }}>In Stock</Text>
              </Box>
              <Box className={classes.ratingsWrap}>
                {ratings === 0 ? "" : <Rating value={ratings} />}
                <Text>(1) Write a Review?</Text>
              </Box>
            </Box>
            <Box className={classes.contentWrap}>
              This amazing dress is sure to make you stand out from the crowd.
              Intricately designed, this stylish number is an idiosyncratic
              piece. Team it with a pair of heels or boots and minimal
              accessories for a sassy look.
            </Box>

            {color && color !== null && (
              <React.Fragment>
                <Text className={classes.colorWrap}>Color</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {color &&
                    color.map((item, index) => (
                      <Box
                        key={index}
                        onClick={() => {
                          handleBox(index);
                          setIsSelectOtherColors(true);
                          if (item === null) {
                            setNewSelectedColor(bgImg[0]);
                          } else {
                            setNewSelectedColor(item.image[0]);
                          }
                        }}
                        className={classes.boxWrapper}
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
              {size.map((item) => (
                <TextInput
                  key={item}
                  value={item}
                  readOnly
                  className={classes.qtyInput}
                />
              ))}
            </Box>

            <Box sx={{ padding: "10px 0" }}>
              <Text sx={{ paddingBottom: "20px" }}>Qty</Text>
              <Box className={classes.qtyWrap}>
                <Box sx={{ display: "flex" }}>
                  <TextInput
                    value={qty}
                    onChange={(event) => {
                      setQty(parseInt(event.target.value));
                    }}
                    className={classes.qtyBox}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button
                      onClick={() => setQty(qty + 1)}
                      variant="outline"
                      className={classes.qtyControl}
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
                      className={classes.qtyControl}
                    >
                      -
                    </Button>
                  </Box>
                </Box>
                <Button variant="filled" fullWidth className={classes.cart}>
                  ADD TO CART
                </Button>
              </Box>
            </Box>

            <Box className={classes.wishlist}>
              <Box className={classes.wishlistSub}>
                <Text>Add to Wishlist</Text>
                <Heart size={20} style={{ color: "#eb5a46" }} />
              </Box>
              <Box className={classes.wishlistContent}>
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
              <Box className={classes.cartWrap}>
                <Text>Categories:</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {modalCategories.map((item) => (
                    <Text key={item}>{item}</Text>
                  ))}
                </Box>
              </Box>
              <Box className={classes.tagsWrap}>
                <Text>Tags:</Text>
                <Box sx={{ display: "flex", columnGap: "10px" }}>
                  {tags.map((tag) => (
                    <Text key={tag} className={classes.tag}>
                      {tag}
                    </Text>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          <Flex className={classes.flex} onClick={() => setIsOpened(false)}>
            <IconCloseModal />
          </Flex>
        </Grid>
      </Modal>
    </>
  );
};

export default Product;

const useStyles = createStyles((theme) => ({
  wrap: {
    cursor: "pointer",
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
  modalCustom: {
    "& .mantine-1q36a81": {
      padding: "0",
      overflow: "hidden",
    },
  },
  gridCol: {
    width: "100%",
    position: "relative",
    "& .mantine-1627la5": {
      padding: "0",
    },
  },
  gridColOther: {
    padding: "30px",
    overflow: "scroll",
    "::-webkit-scrollbar": {
      width: "13px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
  name: {
    fontSize: "36px",
    lineHeight: 1.2,
    fontWeight: 600,
    margin: "20px 0",
  },
  amount: {
    borderTop: "1px solid #c1cad1",
    fontSize: "24px",
    paddingTop: "20px",
  },
  boxWrap: {
    padding: "25px 0",
    display: "flex",
    flexWrap: "wrap",
  },
  content: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    padding: "10px 20px 10px 0",
    borderRight: "1px solid #8b99a3",
  },
  ratingsWrap: {
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    padding: "10px 0 10px 20px",
  },
  contentWrap: {
    color: "#c1cad1",
    paddingBottom: "25px",
    borderBottom: "1px solid #c1cad1",
  },
  colorWrap: {
    paddingTop: "25px",
    paddingBottom: "15px",
  },
  boxWrapper: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "grid",
    placeContent: "center",
    cursor: "pointer",
  },
  qtyInput: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    "& .mantine-Input-input": {
      padding: "0 2px",
      textAlign: "center",
    },
  },
  qtyWrap: {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
  },
  qtyBox: {
    width: "60px",
    borderRadius: "0",
    "& .mantine-Input-input": {
      height: "60px",
      padding: "0",
      textAlign: "center",
    },
  },
  qtyControl: {
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
  cart: {
    background: "#000",
    height: "60px",
    ":hover": {
      background: "#000",
    },
  },
  wishlist: {
    padding: "20px 0 35px ",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    borderBottom: "1px solid #8b99a3",

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: "10px",
    },
  },
  wishlistSub: {
    padding: "5px 0 5px",
    marginRight: "20px",
    borderBottom: "1px dashed #000",
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    width: "fit-content",
  },
  wishlistContent: {
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
  cartWrap: {
    display: "flex",
    columnGap: "10px",
    paddingBottom: "20px",
    color: "#8b99a3",
  },
  tagsWrap: {
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
  flex: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  productWrap: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "497px",
    padding: "10px",
    position: "relative",
  },
}));

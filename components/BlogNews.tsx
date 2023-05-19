"use client";
import { Box, Container, Text, createStyles } from "@mantine/core";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogAndNewsUpdate } from "./staticData/Blog";
import { blogAndUpdateTypes } from "@/types/type";

const BlogNews = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Box sx={{ background: "#fff" }}>
      <Container size="xl">
        <Box className={classes.wrap}>
          <Text fz={{ base: "24px", md: "36px" }} className={classes.title}>
            Blog & News Updates
          </Text>
          <Text className={classes.subTitle}>
            Checkout our blog & the latest in style and offers as they happen
          </Text>
        </Box>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {blogAndNewsUpdate.map((item: blogAndUpdateTypes) => {
            const { id, image, likes, share, tagOne, tagTwo, title } = item;
            return (
              <SwiperSlide
                style={{ cursor: "pointer", position: "relative" }}
                key={id}
              >
                <Box
                  className={classes.imgWrap}
                  sx={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <Box className={classes.container}>
                    <Box className={classes.textBox}>
                      <Text className={classes.text}>{tagOne}</Text>
                      <Text className={classes.text}>{tagTwo}</Text>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ padding: "25px 0" }}>
                  <Box className={classes.infoWrap}>
                    <Text sx={{ color: "#8b99a3", fontSize: "14px" }}>
                      By {` `}
                      <em style={{ color: "#E25D24" }}>ANITA GIBS</em> /
                      September 28, 2017
                    </Text>
                    <Box sx={{ display: "flex", columnGap: "10px" }}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AiOutlineHeart color="#E25D24" />
                        <Text sx={{ marginLeft: "5px" }}>{likes}</Text>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <BsFillShareFill color="#E25D24" />
                        <Text sx={{ marginLeft: "5px" }}>{share}</Text>
                      </Box>
                    </Box>
                  </Box>

                  <Text className={classes.titleOther}>{title}</Text>
                  <Text sx={{ color: "#8b99a3", lineHeight: 1.3 }}>
                    Do you think the ripped Denim you're wearing makes it good
                    on its own? Do you?
                  </Text>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Box>
  );
};

export default BlogNews;

const useStyles = createStyles((theme) => ({
  wrap: {
    padding: "50px 0",
    textAlign: "center",

    [theme.fn.smallerThan("md")]: {
      padding: "30px 0",
    },
  },
  title: {
    lineHeight: 1.4,
    fontWeight: 600,
    color: "#262a2c",
    paddingBottom: "15px",
  },
  subTitle: {
    lineHeight: 1.2,
    color: "#8b99a3",
  },
  imgWrap: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "242px",
    position: "relative",
    padding: "10px",
  },
  container: {
    position: "absolute",
    bottom: "10px",
  },
  textBox: {
    display: "flex",
    columnGap: "15px",
  },
  text: {
    background: "#fff",
    padding: "7px 15px",
    borderRadius: "20px",
    ":hover": {
      background: "#E25D24",
      color: "#fff",
    },
  },
  infoWrap: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleOther: {
    margin: "15px 0",
    fontSize: "20px",
    fontWeight: 600,
  },
}));

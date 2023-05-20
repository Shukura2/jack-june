import { Box, Text, createStyles } from "@mantine/core";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { accessoriesType } from "@/types/type";

const Accessory = ({ id, image, isSale }: accessoriesType): JSX.Element => {
  const { classes } = useStyles();

  return (
    <Box
      key={id}
      sx={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.imageWrap}
    >
      {isSale && <Text className={classes.sale}>SALE!</Text>}
      <Box className={classes.cartWrap}>
        <MdOutlineAddShoppingCart size={22} />
      </Box>
    </Box>
  );
};

export default Accessory;

const useStyles = createStyles((theme) => ({
  cartWrap: {
    minWidth: "60px",
    height: "60px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    position: "absolute",
    bottom: "25px",
    left: "25px",
    display: "grid",
    placeContent: "center",
  },
  sale: {
    background: "#eb5a46",
    color: "#ffff",
    borderRadius: "3px",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    padding: "5px 10px",
  },
  imageWrap: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "468px",
    padding: "10px",
    position: "relative",

    [theme.fn.largerThan("sm")]: {
      width: "49%",
    },
    [theme.fn.largerThan("md")]: {
      width: "32%",
    },
    [theme.fn.largerThan(1300)]: {
      width: "23%",
    },
  },
}));

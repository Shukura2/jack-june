"use client";
import {
  Box,
  Button,
  Container,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";

const Subscribe = (): JSX.Element => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrap}>
      <Container size="xl" className={classes.container}>
        <Box className={classes.box}>
          <Box>
            <Text className={classes.subs}>SUBSCRIBE & NEVER MISS A THING</Text>
            <Text>
              Subscribe to our newsletter & Get the latest right in your inbox
              every week
            </Text>
          </Box>
          <Box className={classes.inputWrap}>
            <TextInput
              type="text"
              placeholder="Enter your Email"
              styles={{
                input: {
                  border: "none",
                },
              }}
              className={classes.inputContent}
            />
            <Button variant="subtle" className={classes.subscribeBtn}>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const useStyles = createStyles((theme) => ({
  wrap: {
    background:
      "url(https://preview.codeless.co/june/default/wp-content/uploads/2017/10/section.jpg) no-repeat scroll center center",
    minHeight: "169px",
    color: "white",
    display: "flex",
    backgroundColor: "#060b20",
    justifyContent: "center",
  },
  container: {
    display: "grid",
    placeContent: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "50px",
    "@media (max-width: 1045px)": {
      flexDirection: "column",
      minWidth: "100%",
    },
  },
  subs: {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: 700,
    letterSpacing: "0.4px",
    marginBottom: "10px",
    "@media (max-width: 1045px)": {
      marginBottom: "0",
    },
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px 5px 0",
    borderRadius: "30px",
    background: "#fff",
    maxWidth: "400px",
    marginTop: "15px",
  },
  inputContent: {
    fontSize: "16px",
    color: "#000",
    padding: "0 10px",
  },
  subscribeBtn: {
    textTransform: "uppercase",
    borderLeft: "1px solid #dbe1e6",
    fontSize: "14px",
    color: "#000",
    ".mantine-Button-label": {
      fontSize: "14px",
    },
    ":hover": {
      background: "none",
    },
  },
}));

import "./App.css";
import { Typography, Box, Grid } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppDrawer from "./components/AppDrawer";
import CardComponent from "./components/CardComponent";
import Graph from "./components/Graph";
import BasicTable from "./components/BasicTable";
import HeaderImage from "./assets/HeaderImage.png";
import { cards } from "./assets/data";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

const App = () => {
  const ChatBot = require("./assets/ChatBot.png");
  const HeaderIcon = require("./assets/HeaderIcon.png");

  return (
    <ThemeProvider theme={theme}>
      <Box style={{ overflowX: "hidden" }}>
        <img
          src={HeaderImage}
          style={{ marginTop: -30, marginLeft: "18%", height: 345 }}
        />
        <AppDrawer />
        <Box
          style={{
            backgroundColor: "#f5f5f5",
            marginLeft: "18%",
            marginTop: -300,
          }}
        >
          <Box
            style={{
              padding: 40,
              height: 150,
              marginLeft: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                style={{ color: "white", fontWeight: "500" }}
              >
                Good Morning, Cody
              </Typography>
              <Typography variant="body" style={{ color: "white" }}>
                Take a look at the latest update for your shop PVTLmotions
              </Typography>
            </Box>
            <Box>
              <img src={HeaderIcon} style={{ margin: 10 }} />
              <img src={HeaderIcon} style={{ margin: 10 }} />
              <img src={HeaderIcon} style={{ margin: 10 }} />
              <img src={HeaderIcon} style={{ margin: 10 }} />
              <img src={HeaderIcon} style={{ margin: 10 }} />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: -50,
              marginLeft: 20,
            }}
          >
            {cards.map((item, index) => (
              <CardComponent card={item} />
            ))}
          </Box>
          <Box style={{ marginLeft: 20 }}>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={10}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 50,
                }}
              >
                <Graph />
                <BasicTable />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          <Box
            style={{
              position: "fixed",
              bottom: 0,
              right: 0,
              margin: 15,
            }}
          >
            <img src={ChatBot} />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

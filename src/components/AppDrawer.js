import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { appDrawerList } from "../assets/data";

const AppDrawer = () => {
  const MainIcon = require("../assets/MainIcon.png");
  const AppDrawerIcon = require("../assets/AppDrawerIcon.png");
  const Profile = require("../assets/Profile.png");
  const Business = require("../assets/Business.png");

  return (
    <Box>
      <Drawer
        style={{ position: "relative" }}
        variant="permanent"
        anchor="left"
        PaperProps={{
          style: { width: "18%", padding: 10 },
        }}
      >
        <img
          src={MainIcon}
          style={{ margin: 25, alignSelf: "center", width: "65%" }}
        />
        <Box
          style={{
            backgroundColor: "#F7F8FC",
            borderRadius: 10,
            padding: 15,
            marginBottom: 20,
            border: "1px solid white",
            boxShadow: "1px 1px 10px 10px #00000007 inset",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <img
            src={Business}
            style={{
              width: 45,
              height: 45,
              marginRight: 10,
            }}
          />
          <Typography>PVTLmotions</Typography>
        </Box>
        <Box style={{ borderLeft: "8px solid #1E6CC4", marginLeft: -6 }}>
          <ListItem style={{}}>
            <ListItemIcon>
              <img src={AppDrawerIcon} style={{ marginRight: 20 }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ marginLeft: -14 }} />
          </ListItem>
        </Box>
        <List>
          {appDrawerList.map((text, index) => (
            <>
              <Box>
                <ListItem
                  key={text}
                  style={{
                    margin: 2,
                  }}
                >
                  <img src={AppDrawerIcon} style={{ marginRight: 20 }} />
                  <ListItemText primary={text} />
                </ListItem>
              </Box>
            </>
          ))}
        </List>
        <Box
          style={{
            position: "fixed",
            width: "18%",
            bottom: 0,
            fontSize: "25px",
          }}
        >
          <hr />
          <Box
            style={{
              display: "flex",
              direction: "row",
              paddingBottom: 10,
            }}
          >
            <img
              src={Profile}
              style={{
                width: 45,
                height: 45,
                margin: "0 10px",
              }}
            />
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "0px 10px",
              }}
            >
              <Typography>Cody</Typography>
              <Typography variant="caption">Cody.everbee.com</Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;

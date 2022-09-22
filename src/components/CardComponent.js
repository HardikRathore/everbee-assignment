import * as React from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";

const CardComponent = ({ card }) => {
  const Growth = require("../assets/Growth.png");

  return (
    <Card
      style={{
        borderRadius: 20,
        width: "15%",
        height: "20%",
        boxShadow: "10px 10px #00000005",
      }}
    >
      <CardContent>
        <img src={card.img} />
        <Typography
          style={{ fontWeight: 600, color: "#707070", marginBottom: 5 }}
        >
          {card.title}
        </Typography>
        <Typography variant="h6" style={{ marginBottom: 5 }}>
          {card.amount}
        </Typography>
        <Box style={{ display: "flex", direction: "row" }}>
          <img
            src={Growth}
            style={{ marginTop: 8, marginRight: 8, width: 12, height: 6 }}
          />
          <Typography variant="caption">
            <Typography
              variant="caption"
              style={{ color: "#0EB000", fontWeight: 600 }}
            >
              {card.change}
            </Typography>{" "}
            form last week
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

import React from "react";
import "./leftPanel.css";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
function leftPanel(props) {
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.heading}
          </Typography>
          <Typography variant="h5" component="div">
            Overview
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit!
            <br />
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! iusto impedit! iusto impedit! iusto impedit! iusto
            impedit! iusto impedit! iusto impedit! iusto impedit! iusto impedit!
            iusto impedit! iusto impedit! iusto impedit! iusto impedit! iusto
            impedit! iusto impedit! iusto impedit!
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default leftPanel;

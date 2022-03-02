import * as React from "react";
import { Tab, Typography, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import ServiceCard from "../widgets/ServiceCard/ServiceCard";
import "./ServiceGrid.css";
import Services from "../../data/services/Services";
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const ServiceGrid = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="service-container" id="services">
      <Typography component="div">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box className="techvanto-service">
              <Typography component="h2" className="techvanto-whyus-heading">
                Our Services
              </Typography>
              <Tabs
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs"
                className="services-tabs"
              >
                <Tab label="COLLEGES" value="1" />
                <Tab label="Intermediate" value="2" />
                <Tab label="UNDERGRADS" value="3" />
                <Tab label="COMPANIES" value="4" />
                <Tab label="Schools" value="5" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <div className="row service-grid">
                {Services.map((data) => {
                  return (
                    data.tab === "Colleges" && (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    )
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel value="2">
              <div className="row service-grid">
                {Services.map((data) => {
                  return (
                    data.tab === "Intermediate" && (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    )
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="row service-grid">
                {Services.map((data) => {
                  return (
                    data.tab === "Undergrads" && (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    )
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="row service-grid">
                {Services.map((data) => {
                  return (
                    data.tab === "Companies" && (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    )
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="5">
              <div className="row service-grid">
                {Services.map((data) => {
                  return (
                    data.tab === "School" && (
                      <ServiceCard
                        icon={data.icon}
                        title={data.text}
                        description={data.description}
                        link={data.link}
                      ></ServiceCard>
                    )
                  );
                })}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </Typography>
    </div>
  );
};

export default ServiceGrid;

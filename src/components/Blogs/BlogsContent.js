import { Grid, Container } from "@mui/material";
import React from "react";
import BlogsCard from "./BlogsCard";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },

  card: {
    width: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    fill: "#yellow",
  },
}));

function BlogsContent(props) {
  const classes = useStyles();
  const blogItems = props.blogs;
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Grid container spacing={3}>
        {blogItems &&
          blogItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogsCard classes={classes} content={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default BlogsContent;

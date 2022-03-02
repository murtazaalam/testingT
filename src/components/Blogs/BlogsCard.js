import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./BlogCard.css";
import Avatar from "@material-ui/core/Avatar";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";

export default function BlogsCard({ classes, content }) {
  console.log(">>>", content);
  return (
    <Card className={classes.card}>
      <Link to={`/blogs/${content._id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${content.blog_image}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {content.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {content.headline}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className={classes.cardActions}>
        <Box className={classes.author}>
          <Avatar src={`${content.author_image}`} />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              {content.author_name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {content.posted_on}
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import * as api from "../utils/api";
import { Link } from "react-router-dom";
import IncrementArticleVote from "./IncrementArticleVote";
import {
  Container,
  Stack,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import dayjs from "dayjs";
// import ClipLoader from "react-spinners/ClipLoader";


const Articles = ({ articles, setArticles, topic }) => {

  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles({topic, sortBy, order})
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err, "ERR");
      });
// eslint-disable-next-line
  }, [topic, sortBy, order]);

  if(isLoading) return (
    <Box sx={{ display: 'flex', justifyContent:'center' }}>
    <CircularProgress />
  </Box>
  )

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "35px 20px",
      }}
    >
      <Box sx={{mb: 3, display:"flex", flexDirection:'row-reverse'}}>
        <FormControl sx={{mr: 1, ml: 2, width:"125px"}} color="secondary">
          <InputLabel>Sort by</InputLabel>
            <Select label="sort_by" value={sortBy} onChange={(e) => {setSortBy(e.target.value)}}>
              <MenuItem value={"created_at"}>Date</MenuItem>
              <MenuItem value={"author"}>Author</MenuItem>
              <MenuItem value={"title"}>Title</MenuItem>
              <MenuItem value={"votes"}>Votes</MenuItem>
              <MenuItem value={"comment_count"}>Comments</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{ml:2, width:"135px"}} color="secondary">
          <InputLabel>Order</InputLabel>
            <Select label="order" value={order} onChange={(e) => {setOrder(e.target.value)}}>
              <MenuItem value={"asc"}>Ascending</MenuItem>
              <MenuItem value={"desc"}>Descending</MenuItem>
            </Select>
        </FormControl>
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item key={article.article_id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardActionArea
                    component={Link}
                    to={{
                      pathname: `/articles/${article.article_id}`,
                    }}
                  >
                    <Typography color="primary">
                      {article.topic.charAt(0).toUpperCase() +
                        article.topic.slice(1)}
                    </Typography>
                    <CardMedia
                      image={`https://source.unsplash.com/random?${article.title}`}
                      title={article.title}
                      sx={{
                        paddingTop: "56.25%",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {article.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography color="textSecondary">
                            by {article.author}
                          </Typography>
                        </Box>
                        <Typography color="textSecondary">
                          {new dayjs(article.created_at).format("D MMM YYYY")}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <IncrementArticleVote
                    votes={article.votes}
                    article_id={article.article_id}
                  />
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      {/* <Stack>
      <Pagination 
      count={10}
      page={page}
      onChange={() => {setPage()}}/>
      </Stack> */}
    </Container>
  );
};

export default Articles;

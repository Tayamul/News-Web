import React, { useEffect, useState } from 'react'
import * as api from '../utils/api'
// import './articles.css'
import {Link} from 'react-router-dom'
// import { Bars } from 'react-loading-icons'
import IncrementArticleVote from './IncrementArticleVote'

import { Container, Stack, Grid, Card, CardActionArea, CardMedia, CardContent, Avatar, Box, Typography} from '@mui/material'
import dayjs from "dayjs";

const Articles = ({articles, setArticles, topic}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    api.getArticles(topic).then(({articles}) => {
      setArticles(articles);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err, "ERR")
    })
  }, [topic])

  if (isLoading) return <p>Loading...</p>

  return (
      <Container maxWidth="xl"
      sx={{
        padding: "35px 20px",
      }}>
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
                    <Typography color='textSecondary'>
                      {article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}
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
                          <Avatar
                            alt={article.author}
                            src={`https://api.multiavatar.com/${article.author}.svg`}
                            sx={{ width: 35, height: 35, mr: 1 }}
                          />
                          <Typography color="textSecondary">
                            {article.author}
                          </Typography>

                        </Box>
                        <Typography color="textSecondary">
                          {new dayjs(article.created_at).format("D MMM YYYY")}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <IncrementArticleVote votes={article.votes} article_id={article.article_id}/>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
      </Container>
    )
  }
  
  export default Articles



  //   <main className='articles__container'>
  //     <ul className='articles-box'>
  //       {articles.map((article) => {
  //         return <li key={article.article_id} className='articles-list'>
  //           <Link to={`/articles/${article.article_id}`}><img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='random image for now'/>
  //           <h3 className='articles-title'>{article.title}</h3>
  //           <h6 className='articles-author'>Author: {article.author}</h6>
  //           <h5 className='articles-topic'>Topic: {article.topic}</h5></Link>
  //           <IncrementArticleVote votes={article.votes} article_id={article.article_id}/>
  //         </li>
  //       })}
  //     </ul>
  // </main>


  

import React from "react";
import { useState, useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import {Link} from 'react-router-dom'
import * as api from "../utils/api";


const Nav = ({setArticles}) => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(0);

  useEffect(() => {
    api.getTopics().then((data) => {
      setTopics(data.topics);
    })
  }, [])

  const handleChange = (e, newValue) => {
    setSelectedTopic(newValue);
  }

  const handleClick = (slug) => {
    console.log(slug,"NAV SLUG")
    api.getArticles(slug).then((data) => {
      console.log(data, "NAV")
      setArticles(data.articles);
    })
  }

  return (
    <Tabs
      value={selectedTopic}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="select a topic">
        
      <Tab label="All Articles" key="All Articles" component={Link} to='/'/>
      {topics.map(({slug}) => {
        return <Tab label={slug} key={slug} component={Link} to={`/${slug}`} onChange={() => {handleClick(slug)}}/>
      })}
      
    </Tabs>
  );
};

export default Nav;

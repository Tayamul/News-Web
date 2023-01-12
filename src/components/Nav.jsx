import * as React from 'react'
import {useState, useEffect} from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './nav.css'
import * as api from '../utils/api'

const Nav = ({setArticles}) => {

  const [topic, setTopic] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(topic === 'topics') return;
    setIsLoading(true);
    api.getArticlesByQuery(topic).then((data) => {
      setArticles(data.articles)
      setIsLoading(false);
    })
  }, [topic])

  if(isLoading) return <p>Loading...</p>

  return (
    <nav className='navBar'>
        <select value={topic} onChange={(e) => {setTopic(e.target.value)}}>
            <option value="topics">Topics</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
        </select>
        <DensityMediumIcon />
    </nav>
    )
  }
  
  export default Nav

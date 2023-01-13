// import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle';
import { CssBaseline } from '@mui/material';

function App() {

  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Nav setArticles={setArticles}/>
      <Routes>
        <Route path='/' element={<Articles articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/coding' element={<Articles topic='coding' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/football' element={<Articles topic='football' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/cooking' element={<Articles topic='cooking' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav setArticles={setArticles}/>
      <Routes>
        <Route path='/' element={<Articles articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import ErrorPage from './components/ErrorPage'
import User from './components/User'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle';
import { CssBaseline } from '@mui/material';
import {UserContext} from './context/UserContext'


function App() {

  const [user, setUser] = useState("grumpy19");
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
      <CssBaseline />
      <Header />
      <Nav setArticles={setArticles}/>
      <Routes>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/users' element={<User/>}/>
        <Route path='/' element={<Articles articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/coding' element={<Articles topic='coding' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/football' element={<Articles topic='football' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/cooking' element={<Articles topic='cooking' articles={articles} setArticles={setArticles}/>}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

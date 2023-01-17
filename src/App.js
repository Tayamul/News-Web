// import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import ErrorPage from './components/ErrorPage'
import User from './components/User'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {UserContext} from './context/UserContext'
import {theme} from './context/Theme'

function App() {

  const [user, setUser] = useState({
    name: "Paul Grump",
    username: "grumpy19",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
  });
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;

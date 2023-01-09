import './App.css';
import {Routes, Route} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header'
import Articles from './components/Articles'

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;

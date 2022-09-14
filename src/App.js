// import { Card } from 'react-bootstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/homepage/Home.js';
// import Card from './components/card/Card';
import Movielist from './components/movielist/Movielist';
import Movie from './pages/movie/Movie';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Header />
        {/* <Card/> */}
        <Routes>
          <Route  index element={<Home/>}/>
          <Route  path='movie/:id' element={<Movie />}/>
          <Route  path='movies/:type' element={<Movielist />}/>
          <Route  path='/*' element={<h1>error page</h1>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;

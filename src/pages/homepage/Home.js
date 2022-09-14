import React, { useEffect, useState } from 'react';
import './home.css'
// react responsive caraousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../../components/movielist/Movielist';
import Footers from '../../components/footer/Footers';

const Home = () => {

    const [popularMovies,setPopularMovies]=useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setPopularMovies(data.results);
            console.warn(popularMovies)
        })
    },[popularMovies])
    
  return (
    <div className="poster">
       <Carousel
       showThumbs={false}
       autoPlay={true}
       transitionTime={1}
       infiniteLoop={true}
       showStatus={false}
       >
        {popularMovies.map(movie=>(
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
            </div>
            <div className="posterImage__overlay">
                <div className="posterImage__title">{movie? movie.original_title:''}</div>
                <div className="posterImage__runtime">
                    {movie ? movie.release_date:''}
                    <span className="posterImage__rating">
                        {movie?movie.vote_average:''}
                        <i className="fas fa-star" />{''}
                    </span>
                </div>
                    <div className="posterImage__description">{movie?movie.overview:''}</div>

            </div>

            </Link>

        ))}
       </Carousel>

      <Movielist/>
      <Footers />
    </div>
  )
}

export default Home
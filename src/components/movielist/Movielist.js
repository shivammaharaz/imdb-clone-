import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import Footers from '../footer/Footers';

import './Movielist.css'


const Movielist = () => {
    const [movies,setMovie]=useState([])
    const {type} =useParams()

    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type:'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setMovie(data.results);
            console.warn(movies)
        })
    }
    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData();
    },[type])
    
  return (<>
    <div className="movie__list">
        <h2 className="list__title">{(type?type:'popular').toUpperCase()}</h2>
        <div className="list__cards">
            {
                movies.map(movie=>(
                  <Card movie={movie} />  
                ))
            }
        </div>
    </div>
    {/* <Footers/> */}
    </>
  )
}

export default Movielist
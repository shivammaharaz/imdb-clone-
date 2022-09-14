import React, {useEffect,useState} from 'react'
import './Movie.css'
import { useParams } from 'react-router-dom'
import Footers from '../../components/footer/Footers'

const Movie = () => {
    const [details,setDetails]=useState([])
    const {id}=useParams();
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setDetails(data);
            console.warn(details)
        })
    }
    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    },[id])

   
  return (
    <>
    <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" alt="" src={`https://image.tmdb.org/t/p/original${details ? details.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" alt="" src={`https://image.tmdb.org/t/p/original${details ? details.poster_path : ""}`} />

                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{details ? details.original_title : ""}</div>
                        <div className="movie__tagline">{details ? details.tagline : ""}</div>
                        <div className="movie__rating">
                            {details ? details.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{details ? "(" + details.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{details ? details.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{details ? "Release date: " + details.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                details && details.genres
                                ? 
                                details.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{details ? details.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    details && details.homepage && <a href={details.homepage} rel='noreferrer' target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    details && details.imdb_id && <a href={"https://www.imdb.com/title/" + details.imdb_id} target="_blank" rel='noreferrer' style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    details && details.production_companies && details.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" alt='' src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
        <Footers/>
        </>
  )
}

export default Movie
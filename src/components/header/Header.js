import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Footers from '../footer/Footers';


const Header = () => {
  return (<>
    <div className="header">
        <div className="headerLeft">
            <Link className='link' to='/' style={{textDecoration:"none"}}><p><span>M</span>ovies<span>H</span>ub</p></Link>
            <Link to='/movies/popular' style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:"none"}}><span>Upcoming</span></Link>

        </div>

    </div>
    {/* <Footers /> */}
    </>
  )
}

export default Header
import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom';
import MenuList from './MenuList';

const SideBar = () => {
  const isMenuOpen =useSelector((store)=>store.app.isMenuOpen);

if(!isMenuOpen) return null;

  //early return pattern
  return (
    <div className="w-1/5">
      <MenuList/>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li>Demo</li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul> */}
    </div>
  )
}

export default SideBar
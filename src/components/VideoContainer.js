import React from 'react'
import { useEffect,useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
 const [videos,setvideos]=useState([]);
  useEffect(()=>{getVideo()},[]);

  const getVideo=async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
     {videos.map((videos)=> <Link key={videos.id} to={"/watch?v="+videos.id}><VideoCard   info={videos}/> </Link>)}
    </div>
  )
}

export default VideoContainer
//first pass 1 prop to test then map it
//map mai key de dena
//but you should use a unique key prop for the Link component instead of the VideoCard component. This is because the Link component is the direct parent of each VideoCard, and React needs a unique identifier for each child component within a list.
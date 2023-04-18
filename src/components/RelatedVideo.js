import React,{useEffect,useState} from 'react'
import { RELATED_VIDEO,GOOGLE_API_KEY } from '../utils/Constants'
import RelatedVideoCard from './RelatedVideoCard';
import { Link,useSearchParams } from 'react-router-dom';
const RelatedVideo = () => {
    const [searchParams]=useSearchParams();
    const [RelatedVideo,setRelatedVideo]=useState([]);

    useEffect(() => {
        getRelatedVideo();
      }, []);
 

      const options = {
        part: "snippet",
        maxResults: 100,
        order: "viewCount",
        region: "IN",
        relatedToVideoId: searchParams?.get("v"),
        type: "video",
        key: GOOGLE_API_KEY,
      };    
      async function getRelatedVideo() {
    
        const data = await fetch(
          `${RELATED_VIDEO}/search?` + new URLSearchParams(options)
        );
        const videoinfo = await data.json();
        console.log(videoinfo.items);
        setRelatedVideo(videoinfo.items);
      }

  return (
    <div className={" h-[100px]" }>
    {/* {relatedVideo.map((video)=>{ <RelatedVideoCard key={video.id} data={video} />})} */}
   { RelatedVideo.map((video)=>  <Link to={"/watch?v="+video.id.videoId} key={video.id.videoId}> <RelatedVideoCard data={video}/></Link>)}
  </div>
  )
}

export default RelatedVideo
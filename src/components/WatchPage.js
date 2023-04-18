import React, { useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { COMMENT_API } from '../utils/Constants';
import Comments from "./Comments";
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import RelatedVideo from './RelatedVideo';
export const WatchPage = () => {
    const dispatch=useDispatch();
    const [commentsData, setData]=useState([]);

    async function getComment()
  {
     const response= await fetch(COMMENT_API+searchParams.get("v"));
     const data= await response.json();
     //console.log(data.items);
     setData(data.items);
     
  }
   

  useEffect(() => {
    getComment();
    dispatch(closeMenu());
  }, []);



       useEffect(()=>{dispatch(closeMenu());},[]);
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
       return (
         <div className="flex flex-col w-full">
         <div className="flex">
    <div className='px-5'> <iframe
    width="1000"
    height="500"
    src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
   
  {/* <CommentsContainer/> */}
  <Comments data={commentsData}/>
  </div>
  <div className={"w-full " }>
   <RelatedVideo/>
  </div>
  </div>
  </div>
  )
}
// This is because the useEffect hook will only run when the dependencies in the dependency array change, and since the dependency array is empty, it will never change.
// the dispatch function in Redux is a way to send actions to the store and update the application's state based on the information in those actions.
//For example, if the URL for a YouTube video is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the v parameter in this case is set to dQw4w9WgXcQ.
// useSearchParams extracts parameters from the query string portion of the URL. The query string is the part of the URL that comes after the ? character and contains one or more key-value pairs separated by & characters. For example, in the URL https://example.com/search?q=react&lang=en, useSearchParams can extract the values of the q and lang parameters.
//For example, if the current URL is https://example.com/?v=123, then searchParams.get("v") would return the string "123", which is the value of the "v" query parameter in the URL.



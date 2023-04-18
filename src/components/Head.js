import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState,useEffect } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { cacheResults } from '../utils/searchSlice';
const Head = () => {

  const[searchQuery,setsearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
const[showsuggestions,setShowSuggestions]=useState(false);

const searchCache=useSelector((store)=>store.search);
const dispatch=useDispatch();
// searchCache={
//   "iphone":["iphone 11","iphone pro"]
// }
// searchQuery=iphone


useEffect(()=>{
const timer=setTimeout(()=>{
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }
  else{
    getSearchSuggestions();
  }
},200);

return()=>{
  clearTimeout(timer);
}}
,[searchQuery]) 

const getSearchSuggestions=async ()=>{
  console.log("api -" + searchQuery)
  const data=await fetch(YOUTUBE_SEARCH_API +searchQuery)
  const json=await data.json();
 // console.log(json[1]);
   setSuggestions(json[1]);

   //update cache
   dispatch(cacheResults({[searchQuery]:json[1],
  })
  );
};

const toggleMenuHandler=()=>{
  dispatch(toggleMenu());
};

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className="flex col-span-1">
          <img 
          onClick={()=>toggleMenuHandler()}
          className='h-8 cursor-pointer' alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="/>  
          <a href="/">
      <img className="h-8 mx-2" alt="youtubelogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"/>
      </a>
        </div>

        <div className=' col-span-10 px-20'>
          <div>
        <input className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
        type="text" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)} 
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}/>

        <button className="border border-gray-400  rounded-r-full px-5 py-2 bg-gray-100">🔍</button>
        </div>

        {showsuggestions && (<div className='absolute bg-white px-5 py-2 w-[30rem] shadow-lg rounded-lg'>
          <ul>
            {suggestions.map(s=><li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-200"> 🔍 {s}</li>)}
            
          </ul>
        </div>
        )}
         </div>
        <div className="col-span-1">
        <img className="h-8" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
    </div>
  )
}

export default Head
//this code delays the execution of the getSearchSuggestions() function by 200 milliseconds to avoid triggering it too frequently when the user is typing quickly. If the searchQuery state changes before the delay has elapsed, any pending timer is canceled to avoid triggering the effect multiple times.
import React from 'react'
const VideoCard = ({info}) =>{
    const snippet = info?.snippet;
    const statistics = info?.statistics;
    const channelTitle = snippet?.channelTitle;
    const title = snippet?.title;
    const thumbnailUrl = snippet?.thumbnails?.medium?.url;
    
    return (
      <div className='p-2 m-2 w-72 h-80 shadow-lg hover:scale-105 max-sm:w-96 max-sm:h-96'>
        <img className='rounded-xl ' alt="thumbnail" src={thumbnailUrl}/>
        <ul>
          <li className='font-bold py-2'>{title.substring(0,60)}</li>
          <li className='font-semibold'>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    );
  };

export default VideoCard
//If you know the value of the src attribute at the time the component is rendered, you can simply set it as a string using double quotes, like src="thumbnails.medium.url". However, if the value is dynamic and calculated at runtime, you would need to use the curly braces to evaluate the expression.

//use optional channing
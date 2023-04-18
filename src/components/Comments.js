import React, { useEffect } from "react";
import { BiLike,BiDislike } from "react-icons/bi";
import { useSelector } from "react-redux";
const CommentCard = ({ data }) => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

  
  return (
    <div className={" flex m-1  rounded-sm " +(isMenuOpen && "w-[800px]")}>
      
      <img
        className="h-10 rounded-full my-4 mx-3"
        src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt="profile"
      />
       <div className="flex flex-col justify-center my-3">
       <p className="lowercase font-semibold text-xl">
        @{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
      </p>
     
      <p>{data?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
      <div className="flex py-1">
      <span className="px-4"><BiLike/>{data?.snippet?.topLevelComment?.snippet?.likeCount}</span> <span className="mx-4"><BiDislike/></span>
      </div>
    
      </div>
      
    </div>
  );
};

function Comments(props) {
    const { data } = props;
  
    return (
      <div className="m-2 p-2 w-[1008px]">
        <h1 className="font-bold text-2xl ">Comments:</h1>
        {data.map((comment, index) => (
          <div key={index}>
            <CommentCard data={comment} />
          </div>
        ))}
      </div>
    );
  }
  

// const CommentList = ({ comments }) => {
//   return  comments.map((comment,index)=>
//     <div key={index}>
//          <CommentCard   data={comment}/>
//     </div>
//   )
// };

// const Comments = ({data}) => {
 // console.log(data);
//   return (
//     <div className="m-2 p-2 w-[1008px]">
//       <h1 className="font-bold text-2xl ">Comments:</h1>
//       <CommentList comments={data} />
     
//     </div>
//   );
// };

export default Comments;
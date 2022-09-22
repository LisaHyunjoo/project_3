import React from 'react'
import CommentListItem from './CommentListItem';
import PostListItem from './PostListItem'

function CommentList(props) {
    const{comments} = props;

    return(
     <>
     {comments.map((comment,index) => {
         return(
             <CommentListItem
                key={comment.id}
                post={comment}
             />
         )
     })}
     </>
    )
}

export default CommentList


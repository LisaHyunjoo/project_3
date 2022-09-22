import React from 'react'

function CommentListItem (props) {
    const {comment} = props

    return(
        <h1>{comment.content}</h1>
    )
}

export default CommentListItem
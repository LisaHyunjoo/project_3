import React, {Component} from 'react'
import CommentList from '../list/PostList'

class PostView extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
            return (
                <>
                  <div>
                      <h1>{this.props.title}</h1>
                      <h2>{this.props.content}</h2>
                  </div>

                  <h3>Comment</h3>
                  <CommentList comments={this.post.comment} />
                </>                
            )
    }
   

}

export default PostView;
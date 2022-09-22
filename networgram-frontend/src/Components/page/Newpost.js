import React, {Component} from 'react'
import CommentList from '../list/CommentList'

class NewPost extends Component {

    render() {
            return (
 
                <div>
                    <h1>Title: {this.props.title}</h1>
                    <p>Author: {this.props.author}</p>
                    <div>
                        <p>Body: {this.props.body}</p>
                    </div>
                    <h3>Comments:</h3>
                    <ul>{this.props.comments[0]}</ul>
                </div>             
            )
    }
   

}

export default NewPost;
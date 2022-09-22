import React, {Component} from 'react'

class CommentListItem extends Component {
    render() {
        return (
            <div>
                <li>{this.props.message}</li>
            </div>
        )
    }
}

export default CommentListItem
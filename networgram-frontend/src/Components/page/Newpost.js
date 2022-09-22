import React, {Component} from 'react'
import PostList from '../list/PostList'

class Newpost extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
            return (
                <>
                   <PostList 
                        posts={data}
                        onClickItem={(item) => {
                            (item.id)
                        }}
                   />
                </>                
            )
    }
   

}

export default Newpost;
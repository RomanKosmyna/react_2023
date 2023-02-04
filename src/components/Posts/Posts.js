import {Component} from "react";
import {postsRequest} from "../../api";
import {Post} from "../Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postsRequest.getAll()
            .then(({data}) => this.setState({posts: data}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts};
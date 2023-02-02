import {Component} from "react";

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}

export {Post};
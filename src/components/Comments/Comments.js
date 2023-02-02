import {Component} from "react";
import {axiosRequest} from "../../config";
import {requestLinks} from "../../api";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axiosRequest.get(requestLinks.comments)
            .then(({data}) => this.setState({comments: data}))
    }

    render() {
        return  (
            <div>
                {this.state.comments.map(comment => <div key={comment.id}>{comment.id} --- {comment.name}</div>)}
            </div>
        )
    }
};

export {Comments};
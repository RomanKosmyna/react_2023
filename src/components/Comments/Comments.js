import {Component} from "react";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {a:0, b:25};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }

    inc() {
        this.setState(prev => ({a:prev.a + 1}))
    }

    render() {
        // console.log(this.inc())
        return  (
            <div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                {/*<div>C: {this.state.c}</div>*/}
                <button onClick={() => this.inc()}>Click</button>
            </div>
        )
    }
};

export {Comments};
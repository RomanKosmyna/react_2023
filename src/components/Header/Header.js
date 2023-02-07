import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {selectedPost ? <h1>{selectedPost.title}</h1> : null}
        </div>
    );
};

export default Header;
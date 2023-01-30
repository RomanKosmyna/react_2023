import React, {useEffect, useState} from 'react';
import {axiosConfig} from "../../configs";
import {requestLinks} from "../../api";
import {Posts} from "../../components";

const PostsPage = () => {

    return (
        <Posts/>
    );
};

export {PostsPage};
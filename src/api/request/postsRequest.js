import {axiosRequest} from "../../config";
import {requestLinks} from "../endpoints";

const postsRequest = {
    getAll: () => axiosRequest.get(requestLinks.posts)
};

export {postsRequest};
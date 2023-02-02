import {requestLinks} from "../endpoints";
import {axiosRequest} from "../../config";

const commentsRequest = {
    getAll: () => axiosRequest.get(requestLinks.comments)
};

export {commentsRequest};
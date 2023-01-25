import {axiosService} from "./axiosService";
import {urls} from "../config";

const commentService = {
    getAllComments: () => axiosService.get(urls.comments),
    createComment: (newComment) => axiosService.post(urls.comments, newComment)
};

export {commentService};
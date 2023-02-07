import {axiosService, urls} from "../../configs";

const postRequest = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {postRequest};
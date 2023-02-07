import {axiosService, urls} from "../../configs";

const userRequest = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
};

export {userRequest};
import {axiosService} from "./axiosService";
import {urls} from "../config";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    createUser: (newUser) => axiosService.post(urls.users, newUser)
};

export {userService};
import axios from "axios";
import {baseURL} from "../api";

const axiosRequest = axios.create({baseURL});

export {axiosRequest};
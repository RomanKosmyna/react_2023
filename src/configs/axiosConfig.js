import axios from "axios";
import {baseURL} from "../api/endpoints";

const axiosConfig = axios.create({baseURL});

export {axiosConfig};
import {AuthContext} from "../hoc/AuthProvider";
import {useContext} from "react";

const useAuthContext = () => useContext(AuthContext);

export {useAuthContext};
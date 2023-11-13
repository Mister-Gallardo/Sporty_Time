import axios from "axios";
import state from '../store/index';

export function getMe() {
    return axios.get(state.apiPath + '/users/me')
}

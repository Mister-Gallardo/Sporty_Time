import axios from "axios";
import state from '../store/index';

export function getClubs() {
    return axios.get(state.apiPath + '/clubs')
}

export function getClub(id: number) {
    return axios.get(state.apiPath + '/clubs/' + id)
}

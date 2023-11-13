import axios from "axios";
import state from '../store/index';

export function getMyMatches() {
    return axios.get(state.apiPath + '/matches/my')
}

export function createMatche(body: object) {
    return axios.post(state.apiPath + '/matches', body)
}

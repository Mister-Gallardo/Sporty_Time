import axios from 'axios'
import state from '../store/index'

export function login() {
    return axios.post(state.apiPath + '/auth/login')
}

export function registration() {
    return axios.post(state.apiPath + '/register')
}
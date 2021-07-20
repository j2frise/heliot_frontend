import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function auth(token,email) {
    let request = await requestAxios(config.backend, 'post', '/api/auth', {token,email});
    return request;
}

async function usersList() {
    let request = await requestAxios(config.backend, 'get', '/api/users');
    return request;
}

async function getOneUser(id) {
    let request = await requestAxios(config.backend, 'get', '/api/users/'+id);
    return request;
}

async function createUser(data) {
    let request = await requestAxios(config.backend, 'post', '/api/users/',data);
    return request;
}

async function updateUser(id, data) {
    let request = await requestAxios(config.backend, 'put', '/api/users/'+id, data);
    return request;
}

async function deleteUser(id) {
    let request = await requestAxios(config.backend, 'delete', '/api/users/'+id);
    return request;
}

async function changeAdminAccess(id, param) {
    let request = await requestAxios(config.backend, 'put', '/api/users/'+id+'/'+param);
    return request;
}

export {auth, usersList, getOneUser, createUser, updateUser, deleteUser, changeAdminAccess}
import {requestAxios, requestFetch} from "../api";
import { config } from '../config';


export async function facilitiesList() {
    let request = requestAxios(config.backend, 'get', '/api/facilities');
    return request;
}

export async function usersFacilityList(id) {
    let request = requestAxios(config.backend, 'get', `/api/facilities/${id}/users`);
    return request;
}

export async function facilitiesParams(param, id) {
    let request = requestAxios(config.backend, 'get', `/api/facilities/${param}/${id}`);
    return request;
}

export async function createFacility(data) {
    let request = await requestAxios(config.backend, 'post', '/api/facilities/',data);
    return request;
}

export async function addUsers(id, data) {
    let request = await requestAxios(config.backend, 'post', '/api/facilities/'+id+'/users',data);
    return request;
}

export async function deleteUserFacility(id, userId) {
    let request = requestAxios(config.backend, 'delete', `/api/facilities/${id}/users/${userId}`);
    return request;
}

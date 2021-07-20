import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function requestAccessDemands() {
    let request = await requestAxios(config.backend, 'get', '/api/requestAccess/demands');
    return request;
}

async function requestAccessAmended(id, data) {
    let request = await requestAxios(config.backend, 'put', '/api/requestAccess/'+id, data);
    return request;
}


async function accessType(applicationId) {
    let request = await requestAxios(config.backend, 'get', '/api/accessTypes/application/'+applicationId);
    return request;
}

async function accessJob(applicationId) {
    let request = await requestAxios(config.backend, 'get', '/api/access/jobs/application/'+applicationId);
    return request;
}

async function accessUser(applicationId) {
    let request = await requestAxios(config.backend, 'get', '/api/access/users/application/'+applicationId);
    return request;
}

async function giveAccessJob(data) {
    let request = await requestAxios(config.backend, 'post', '/api/access/jobs', data);
    return request;
}

async function giveAccessUser(data) {
    let request = await requestAxios(config.backend, 'post', '/api/access/users', data);
    return request;
}

export {requestAccessDemands, requestAccessAmended, accessType, accessJob, accessUser, giveAccessJob, giveAccessUser}
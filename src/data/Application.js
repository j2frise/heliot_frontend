import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function applicationsList() {
    let request = await requestAxios(config.backend, 'get', '/api/applications');
    return request;
}

export {applicationsList}
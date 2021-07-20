import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function countriesList() {
    let request = await requestAxios(config.backend, 'get', '/api/countries');
    return request;
}

export {countriesList}
import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function facilitiesTypeList() {
    let request = await requestAxios(config.backend, 'get', '/api/facilityTypes');
    return request;
}


export {facilitiesTypeList}
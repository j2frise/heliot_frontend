import {requestAxios, requestFetch} from "../api";
import { config } from '../config';

async function regionsList() {
    let request = await requestAxios(config.backend, 'get', '/api/regions');
    return request;
}

async function regionsCountriesList(countryId) {
    let request = await requestAxios(config.backend, 'get', '/api/regions/country/'+countryId);
    return request;
}

export {regionsList, regionsCountriesList}
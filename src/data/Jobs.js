import {requestAxios, requestFetch} from "../api";
import { config } from '../config';


export async function jobsList() {
    let request = requestAxios(config.backend, 'get', '/api/jobs');
    return request;
}

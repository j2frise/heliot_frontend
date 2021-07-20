import axios from "axios";
import { getSessionCookie } from "../context/session";
import {config} from '../config'
import Cookies from "js-cookie";

export function requestFetch(server, method, uri, data = null) {
    const token = getSessionCookie().accessToken?getSessionCookie().accessToken:null;

    if (!uri) {
        console.error('fonction de api requiere uri')
        return
    }

    var url = server + uri
    var setUrl
    var headers = {'Content-Type': 'application/json'}
    
    method = method.toLowerCase()
    
    
    if (token) {
        headers['Authorization'] = 'Bearer '+token;
    }
    
    if(method === 'get' || method === 'delete') {
        setUrl = data === null? fetch(url, {method: method.toUpperCase(), headers: headers}): fetch(`${url}?${data}`, {method: method.toUpperCase(), headers: headers})
    } else if(method === 'post' || method === 'put') {
        if(data === null) {
            data = {}
            /*console.error('veillez envoyer les données pour cette methode')
            return*/
        }
        let options = {
                        method: method.toUpperCase(),
                        headers: headers,
                        body: data
                    }
        setUrl = fetch(url,options)
    } else if(method === 'post_file' || method === 'put_file') {
        var myMethod = method === 'post_file'?"POST":"PUT";
        
        if(data === null) {
            console.error('veillez envoyer les données pour cette methode')
            return
        }
        //headers['Content-Type'] = 'multipart/form-data';
        delete headers['Content-Type'];

        let options = {
                method: myMethod,
                headers: headers,
                body: data
            }
        setUrl = fetch(url, options)
    } else {
        console.error('cette methode n\'est pas prise en compte par l\'api')
        return
    }
    return setUrl
    .then(response => response.json())  
}

export async function requestAxios(server, method, uri, data = null) {
    const $load = document.querySelector(".loader")
    const $offline = document.querySelector(".offline")

    if($load)$load.classList.remove('hide')
    
    try {
        const token = getSessionCookie().login_sso?getSessionCookie().accessToken:null;
        if (!uri) {
            console.error('fonction de api requiere uri')
            return
        }
        var url = server + uri
        var headers = {'Content-Type': 'application/json'}
        let request
        method = method.toLowerCase()
        
        if (token) {
            headers['Authorization'] = 'Bearer '+token;
        }
        console.log(token);

        if(method === 'get' || method === 'delete') {
            var config = {method,headers}
        
            if(data === null){
                config.url= url
            } else {
                config.url= url+'?'+data
            }
            request = await axios(config);
        } else if(method === 'post' || method === 'put') {
            if(data === null) {
                data = {}
                /*console.error('veillez envoyer les données pour cette methode')
                return*/
            }
            let options = {
                headers: headers
            }
            request = await axios[method](url, data, options);
        } else {
            if($load)$load.classList.add('hide')
            return 'cette methode n\'est pas prise en compte par l\'api'
        }

        if($load)$load.classList.add('hide')
        return request.data;
    } catch(error){
        if(error.response == undefined){
            if($load)$load.classList.add('hide')
            if($offline)$offline.classList.remove('hide')
            return []
        } 
        else {
            if($offline)$load.classList.add('add')
            let req = error.response.data.message
            if(req === "Unauthorized"){
                if($load)$load.classList.add('hide')
                alert("Votre session a expiré, veuillez vous reconnecter");
                if(getSessionCookie().user){
                    let email = getSessionCookie().user.email;
                    Cookies.remove("session");
                }
            } else{
                if($load)$load.classList.add('hide')
                return req
            }
        }
    }
}
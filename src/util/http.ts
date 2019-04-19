import axios, {AxiosResponse} from "axios";
import { config } from '@vue/test-utils';

let instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
  });

// axios request 拦截
instance.interceptors.request.use( (config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// axios response 拦截
instance.interceptors.response.use( (response) => {
    // Do something with response data
    return response;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
  });

/**
 * 封装get请求
 * @param url
 * @param params
 * @returns (Promise)
 */
export function fetch(url: string, params: any) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
          params
      }).then( (res: AxiosResponse<any>) => {
          resolve( res.data );
      }).catch( error => {
          reject(error);
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns (Promise)
 */
export  function post(url: string, data: any) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then( (res: AxiosResponse<any>) => {
          resolve(res.data);
      }).catch(error => {
          reject(error);
      })
  })
}
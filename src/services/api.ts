import axios, { AxiosInstance } from "axios";

const API_KEY = "b707774b8cc962dac8c75a2b2a1d149332be0f6d4e1efa2f78525a8f8bc4c995"
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

/*************************************************/
/* BASE SETUP */
/*************************************************/
const baseRequest: AxiosInstance = axios.create({
  baseURL: `${CORS_PROXY}https://api.unsplash.com/`,
  headers: {
    'x-requested-with': 'xhr'
  }
});

/*************************************************/
/* METHODS */
/*************************************************/

/* 
* getPhotos
* returns the list of pictures
*/
export function getPicturesRequest(query: string = "") {
  return baseRequest.get(`search/photos?query=${query}&client_id=${API_KEY}`);
}
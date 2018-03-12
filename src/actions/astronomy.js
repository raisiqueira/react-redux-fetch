import Axios from 'axios';

export default function fetchData() {
  const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  const API_KEY = 'TFoP7Ejw0327PJikb6yu3qcr52BBMNunlbmtZ7bB';
  const request = Axios.get(API_URL + API_KEY)

  return {
    type: 'FETCH_DATA',
    payload: request
  }
}
import axios from 'axios'
import { AsyncStorage } from 'react-native'

// const BASE_URL = "http://10.0.3.2:3000/api/v1/"
const BASE_URL = "http://174.138.17.218/api/";

function getToken() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('idToken').then(token => {
      resolve(token);
    }).catch(err => {
      reject(err);
    });
  });
}

const get = (url) => {
  return new Promise((resolve, reject) => {
    getToken().then(token => {
      axios.get(BASE_URL + url, {
        headers: {
          'Authorization': token
        }
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    }).catch(err => {
      reject(err);
    });
  });
}

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    getToken().then(token => {
      axios.post(BASE_URL + url, data, {
        headers: {
          'Authorization': token
        }
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    }).catch(err => {
      reject(err);
    });
  });
}


export default {
  get: get,
  post: post
}
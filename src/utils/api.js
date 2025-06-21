

// export const apiBaseUrl = 'http://localhost:8080/api';
// export const apiBaseUrl = 'http://192.168.x.x:8080/api'; // local IP üzerinden test için
// export const apiBaseUrl = 'http://backend:8080/api'; // docker için
 export const apiBaseUrl = process.env.REACT_APP_API_URL;

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// list of all endpoints

// logins
export const adminLogin = (data) => api.post("/api/login-admin", data);
export const nurseLogin = (data) => api.post("/api/login-nurse", data);

// logout
export const nurseLogout = () => api.post("/api/logout-nurse");

// get nurses
export const getNurses = () => api.post("/api/get-nurses");

export const addPatientIdentification = () =>
  api.post("/api/patient/identification");

// interceptor when token gets expired while using system (NOT USING TOKENS IN THIS APPLICATION)
// api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       originalRequest &&
//       !originalRequest._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/refresh`,
//           { withCredentials: true }
//         );

//         return api.request(originalRequest);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }

//     throw error;
//   }
// );

export default api;

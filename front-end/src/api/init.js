import axios from "axios";

const api = axios.create({
  baseURL: "https://16dgqbln9e.execute-api.ap-southeast-1.amazonaws.com/dev/" //process.env.REACT_APP_API_URL
});

// // Add a 401 response interceptor
// api.interceptors.response.use(undefined, err => {
//   const error = err.response;
//   // if error is 401
//   if (error) {
//     if (error.status === 401 && error.config &&
//       !error.config.__isRetryRequest) {
//       return this.props.history.push('/signOut')
//     }
//   }
// });

export default api;

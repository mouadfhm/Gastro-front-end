import axios from "axios";
const CustomizedAxios = axios;
CustomizedAxios.defaults.baseURL = "http://127.0.0.1:8000";
let token;
if(localStorage.ReeferApp) {
  token = JSON.parse(localStorage.ReeferApp);
  CustomizedAxios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };
}
export default CustomizedAxios;


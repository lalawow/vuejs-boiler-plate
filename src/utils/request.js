import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
import api from "@/api"
import qs from "qs"
import Cookies from "js-cookie";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout

});

// service.defaults.withCredentials = true
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters["user/isLogged"]) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers["X-Token"] = store.getters["user/token"];
    // }
    if (config.method === "post") {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded"
      config.data = qs.stringify(config.data)
      const sessionID = Cookies.get("JSESSIONID")
        //config.headers["Cookie"] = `JSESSIONID=${sessionID}`
    }
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (parseInt(res.code) !== api.successCode) {
      // Message({
      //   message: res.message || "Error",
      //   type: "error",
      //   duration: 5 * 1000
      // });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          "You have been logged out, you can cancel to stay on this page, or log in again",
          "Confirm logout", {
            confirmButtonText: "Re-Login",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });


      }
      if (parseInt(res.code) === api.failCode) {
        return res
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
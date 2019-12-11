import { news, transfer, requires, achieves, user, web, comments } from "../utils/api";
const successCode = parseInt(process.env.VUE_APP_API_SUCCESS_CODE)
const failCode = parseInt(process.env.VUE_APP_API_FAIL_CODE)

export default {
  news,
  transfer,
  requires,
  achieves,
  user,
  web,
  comments,
  successCode,
  failCode
};
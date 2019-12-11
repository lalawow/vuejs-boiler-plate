export const publishUrl = {
  achieve: process.env.VUE_APP_PUBLISH_ACHIEVE_URL || "/home",
  require: process.env.VUE_APP_PUBLISH_REQUIRE_URL || "/home",
}

export const apiBase = process.env.VUE_APP_BASE_API || ""
export const fileBase = process.env.VUE_APP_BASE_FILE || ""

export const captcha = {
  web: "webcaptcha",
  require: "requirecaptcha",
  achieve: "achievecaptcha"
}

export const chatQQ = process.env.VUE_APP_CHAT_QQ || ""
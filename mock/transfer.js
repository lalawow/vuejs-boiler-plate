import Mock from "mockjs";
import { random } from "lodash";
import { transferOptionsDict } from "./utils/constants";
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const successCode = parseInt(process.env.VUE_APP_API_SUCCESS_CODE) || 0;

const preUrl = "/content/transfer";
const imgBase = "https://placeimg.com/115/86/";
const bigImgBase = "https://placeimg.com/359/265/";
const imgOpt = ["animals", "arch", "nature", "people", "tech"];

const randomTransferOption = key => {
  const options = transferOptionsDict[key].options;
  const keys = Object.keys(options);
  return keys[random(keys.length)];
};

const mockData = Mock.mock({
  "items|1000": [
    {
      id: "@id",
      title: "@csentence",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      displayTime: "@datetime",
      pageviews: "@integer(300, 5000)",
      content: "@csentence",
      publishDate: "@datetime",
      dealDate: "@datetime",
      industry: randomTransferOption("industry"),
      region: randomTransferOption("region"),
      method: randomTransferOption("method"),
      clicks: "@integer(300,5000)",
      patentNumber: "@id"
    }
  ]
});

export default [
  {
    url: preUrl,
    type: "get",
    response: config => {
      const items = mockData.items;
      const count = items.length;
      const { url, query } = config;
      const id = pathToRegexp(`/mock${preUrl}/:id`).exec(url);
      if (id) {
        return getItem(id[1]);
      }
      const { limit = 10, page = 1, type = "project" } = query;
      const start = random(count - limit);
      const data = Array(parseInt(limit))
        .fill(0)
        .map((i, index) => ({
          ...items[start + index],
          pic: imgBase + imgOpt[random(5)]
        }));
      return {
        code: successCode,
        count,
        data
      };
    }
  }
];

const getItem = id => {
  const item = mockData.items.find(i => i.id === id);
  return {
    code: successCode,
    data: { ...item, pic: bigImgBase + imgOpt[random(5)] }
  };
};

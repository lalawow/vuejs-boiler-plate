import Mock from "mockjs";
import { random } from "lodash";
const successCode = parseInt(process.env.VUE_APP_API_SUCCESS_CODE) || 0;

const preUrl = "/collaboration";

const mockData = Mock.mock({
  "items|100": [
    {
      id: "@id",
      title: "@csentence",
      "status|1": ["published", "draft", "deleted"],
      author: "name",
      displayTime: "@datetime",
      pageviews: "@integer(300, 5000)",
      content: "@csentence",
      publishDate: "@datetime",
      subject: "@ctitle"
      // pic: "@dataImage('200x100')"
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
      const { limit = 10, page = 1, type = "supply" } = config.query;
      const data = Array(parseInt(limit))
        .fill(0)
        .map(i => items[random(count - 1)]);
      return {
        code: successCode,
        count,
        data
      };
    }
  }
];

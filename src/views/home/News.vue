<template>
  <div class="news-container">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="tab in tabs" :key="tab.type" :name="tab.type" :label="tab.label">
        <router-link v-for="(info, index) in news[tab.type].data" :key="index" class="one-news" :to="getPath(tab,info)">
          <div class="one-news-txt">
            <div class="one-news-title">
              <span class="blue-dot">&#8226;</span>
              &nbsp;{{info.title}}
            </div>
            <div class="one-news-content">&nbsp;&nbsp;&nbsp;{{parseHtml2Txt(info.content,100)}}</div>
          </div>
          <div class="one-news-date">{{info.publishDate.substr(0,10)}}</div>
        </router-link>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import { parseHtml2Txt } from "@/utils";
const tabs = [
  { label: "政策法规", type: "policy", detail: "" },
  { label: "科研动态", type: "dynamic", detail: "" },
  { label: "活动新闻", type: "activity", detail: "activityDetail" }
];
export default {
  data() {
    return {
      activeName: "policy",
      tabs
    };
  },
  created() {
    tabs.forEach(tab => {
      this.getNews(tab.type);
    });
  },
  computed: {
    ...mapGetters("home", ["news"])
  },
  methods: {
    ...mapActions("home", ["getNews"]),
    getPath(tab, item) {
      const typeOptions = {
        12: "country",
        13: "region",
        14: "school",
        16: "activity",
        15: "tech"
      };
      const name = tab.type === "policy" ? "policyDetail" : "activityDetail";
      const type = typeOptions[item.categoryId];
      return { name, params: { id: item.id, type } };
    },
    parseHtml2Txt(content, length) {
      return parseHtml2Txt(content, length);
    }
  }
};
</script>

<style lang="scss">
.news-container {
  width: 100%;
  .el-tabs__header {
    margin-bottom: 0 !important;
  }
  .el-tabs__item {
    font-size: 1.25rem !important;
    font-weight: bold;
    color: #999999;
  }

  .el-tabs__item.is-active {
    color: $--color-primary;
  }

  .one-news {
    width: 100%;
    border-bottom: 0.0625rem solid #eeeeee;
    height: 4.125rem;
    padding: 1rem 0.75rem;
    display: flex;
    justify-content: space-between;

    &:hover {
      background-color: #f7f7f7;
    }
    .one-news-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 32rem;
      .blue-dot {
        color: $--color-primary;
      }
    }
    .one-news-content {
      font-size: 0.875rem;
      color: #999999;
      margin-top: 0.5rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 32rem;
    }
    .one-news-date {
      font-size: 0.875rem;
      color: #999999;
    }
  }
}
</style>

<template>
  <div class="pic-news-block">
    <el-carousel height="23.375rem" indicator-position="none">
      <el-carousel-item v-for="info in newsData" :key="info.id">
        <div class="one-news" :style="`background-image: url('${fileBase}${info.coverPath}')`" @click="goToDetail(info)">
          <div class="news-txt">{{info.title}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { fileBase } from "@/utils/config";
export default {
  data() {
    return { fileBase };
  },
  computed: {
    ...mapGetters({
      recommendList: "home/recommendList",
      catDict: "common/catDict",
      flatCatDict: "common/flatCatDict"
    }),
    newsData() {
      return this.recommendList;
      // return this.recommendList.filter(n => n.coverPath);
    }
  },
  methods: {
    goToDetail(info) {
      const { id } = info;
      const category = this.flatCatDict[info.categoryId];
      const parent = category.parentId
        ? this.flatCatDict[category.parentId]
        : null;
      if (parent.type === "policy") {
        const type = category.type;
        const params = { id, type };
        this.$router.push({ name: "policyDetail", params });
        return;
      }
      if (parent.type === "act") {
        const type = category.type === "activity" ? "activity" : "tech";
        const params = { id, type };
        this.$router.push({ name: "activityDetail", params });
        return;
      }
    }
  }
};
</script>

<style lang="scss">
.pic-news-block {
  width: 100%;
  height: 23.375rem;
  .one-news {
    width: 100%;
    height: 23.375rem;
    display: flex;
    align-items: flex-end;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    .news-txt {
      background: rgba(0, 0, 0, 0.65);
      width: 100%;
      height: 3.125rem;
      line-height: 3.125rem;
      font-size: 1rem;
      color: white;
      padding-left: 1.5rem;
    }
  }

  .carousel__indicators {
    left: inherit !important;
    bottom: 0.9375rem !important;
    right: -1.25rem !important;
  }

  .carousel__indicator {
    width: 0.75rem !important;
    height: 0.75rem !important;
    border-radius: 0.375rem !important;
    margin-right: 0.625rem !important;

    &::before {
      height: 0.75rem !important;
      border-radius: 0.375rem !important;
    }
  }
}
</style>

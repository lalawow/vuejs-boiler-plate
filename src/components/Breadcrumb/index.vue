<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)" class>{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
// import pathToRegexp from "path-to-regexp";
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");

export default {
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && (item.meta.title || item.meta.breadcrumbType)
      );
      const first = matched[0];

      // if (!this.isDashboard(first)) {
      //   matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
      //     matched
      //   );
      // }

      this.levelList = matched.map(item => {
        if (item.meta.breadcrumbType === "function") {
          const title = item.meta.breadcrumbFunc(this.$route.params.type);
          return { ...item, meta: { title } };
        }
        return item;
      });
      this.levelList.unshift({ path: "/home", meta: { title: "首页" } });
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  }
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 0.875rem;
  color: $--color-primary;
  margin-bottom: 3.125rem;

  a {
    color: $--color-primary;
  }

  .no-redirect {
    color: #000;
    cursor: text;
  }
}
</style>

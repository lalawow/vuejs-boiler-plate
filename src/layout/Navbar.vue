<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="title">
        <img src="/images/logo.png" />
        <div class="title-txt">科技成果转化信息化服务平台</div>
      </div>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" @keyup.enter.native="handleSearch">
          <el-select v-model="select" slot="prepend" placeholder="综合">
            <el-option label="综合" value="0"></el-option>
            <el-option label="转化" value="1"></el-option>
            <el-option label="成果" value="2"></el-option>
            <el-option label="需求" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { isEmpty } from "lodash";
const searchPage = [
  "mixSearch",
  "transferSearch",
  "achieveSearch",
  "requireSearch"
];

export default {
  data() {
    return {
      input: "",
      select: "0"
    };
  },
  components: {},
  computed: {},
  methods: {
    handleSearch() {
      if (
        this.input.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").length > 0
      )
        this.$router.push({
          name: searchPage[parseInt(this.select)],
          params: { keyword: this.input, page: 1 }
        });
    }
  }
};
</script>

<style lang="scss">
$nav-height: 7.5rem;

.navbar-container {
  width: 100%;
  color: $--color-primary;
  .navbar {
    width: $--main-width;
    margin: 0 auto;
    display: flex;
    height: $nav-height;
    justify-content: space-between;
    align-items: center;

    .title {
      display: flex;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      .title-txt {
        padding-left: 0.9375rem;
      }
    }

    .search {
      .el-button {
        background-color: $--color-blue;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: white;
        border: 0.0625rem solid $--color-blue;
        border-top: 0;
        border-bottom: 0;
      }

      .el-input-group__prepend {
        padding: 0 1.125rem;
        border-left: 0.0625rem solid $--color-blue;
        border-top: 0.0625rem solid $--color-blue;
        border-bottom: 0.0625rem solid $--color-blue;
        border-right: 0.0625rem solid $--color-blue;
      }
      .el-select {
        .el-input__inner {
          width: 4.5rem;
          padding: 0 0 0 0.625rem !important;
          color: #999;
          border: 0;
        }
      }

      .el-input__inner {
        border-left: 0;
        border-top: 0.0625rem solid $--color-blue;
        border-bottom: 0.0625rem solid $--color-blue;
        border-right: 0;
      }

      .el-input-group__append {
        border-right-width: 0rem;
        border-top: 0.0625rem solid $--color-blue;
        border-bottom: 0.0625rem solid $--color-blue;
      }
    }
  }
}
</style>

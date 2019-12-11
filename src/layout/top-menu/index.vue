<template>
  <div class="top-menu">
    <div class="menu-items">
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#025393" text-color="#fff" active-text-color="#fff">
        <menu-item v-for="menu in menus" :menu="menu" :key="menu.name" />
      </el-menu>

      <div v-if="isLogged" style="cursor:pointer;">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{user.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <router-link v-else to="/login">
        <el-button type="info" class="login-btn">登录 | 注册</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MenuItem from "./MenuItem";
import { constantRoutes as routes } from "@/router";
const menus = routes.filter(r => r.meta && r.meta.topMenu);

export default {
  data() {
    return {
      menus
    };
  },
  components: { MenuItem },
  computed: {
    ...mapGetters({
      isLogged: "user/isLogged",
      user: "user/user"
    })
  },
  methods: {
    ...mapActions({
      logout: "user/logout"
    }),
    handleSelect(name) {
      this.$router.push({ name });
    },
    handleCommand(command) {
      this.logout();
    }
  }
};
</script>

<style lang="scss" scoped>
.top-menu {
  width: 100%;
  height: 3.125rem;
  background-color: $--color-primary;
  display: flex;
  justify-content: center;

  .menu-items {
    width: $--main-width;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-menu {
      height: 3.125rem;
      border: 0;
    }
  }

  .el-dropdown-link {
    color: white;
  }

  .login-btn {
    height: 2.4rem;
    padding: 0 1.25rem;
  }
}

.el-dropdown-menu {
  padding: 0 !important;
}
</style>

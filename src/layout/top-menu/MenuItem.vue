<template>
  <el-menu-item v-if="visibleChildren.length===0" :index="menu.name" class="top-menu-item" :class="{ active: isActive, inActive: !isActive }">{{menu.meta.title}}</el-menu-item>
  <el-submenu v-else :index="menu.name" class="top-menu-item top-s-menu-item" :class="{ active: isActive, inActive: !isActive }">
    <template slot="title">
      <div @click="handleClick(menu.name)" class="title-btn">{{menu.meta.title}}</div>
    </template>
    <el-menu-item v-for="submenuItem in visibleChildren" :index="submenuItem.name" :key="submenuItem.name" class="top-submenu-item">{{submenuItem.meta.title}}</el-menu-item>
  </el-submenu>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    menu: {
      type: Object,
      default() {
        return { path: "", topText: "" };
      }
    }
  },
  components: {},
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    isActive() {
      for (let path of this.$route.matched) {
        if (path.name === this.menu.name) return true;
      }
      return false;
    },
    visibleChildren() {
      if (!this.menu.children) return [];
      return this.menu.children.filter(c => c.meta && c.meta.topMenu);
    }
  },
  methods: {
    handleClick(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style lang="scss">
$menu-item-height: 3.125rem;
$menu-item-width: 8.25rem;
.el-menu--popup {
  width: $menu-item-width;
  min-width: $menu-item-width;
}
.top-menu-item {
  line-height: $menu-item-height !important;
  height: $menu-item-height !important;
  border: 0 !important;
  background-color: $--color-primary;
  color: white;
  text-align: center;
  cursor: pointer;
  flex-grow: 0;
  margin-right: 0.3125rem;
  width: $menu-item-width;
  font-size: 1rem;
  /* padding: 0 !important; */

  &:hover {
    background-color: $--color-blue !important;
  }

  .el-submenu__title {
    padding: 0;
  }
  .title-btn {
    /* background-color: aquamarine; */
    color: white;
    width: 100%;
    height: $menu-item-height;
    line-height: $menu-item-height;
    border: 0;
    font-size: 1rem;
  }
  .el-submenu__title {
    height: $menu-item-height !important;
    line-height: $menu-item-height !important;
    border: 0 !important;
    width: 100%;
    font-size: 0.8rem;

    i {
      display: none;
    }

    &:hover {
      background-color: $--color-blue !important;
    }
  }

  .menu-item-link {
    width: 100%;
    height: 100%;
    line-height: $menu-item-height !important;
  }
}

.top-submenu-item {
  width: 100%;
  text-align: center;
  &:hover {
    background-color: $--color-blue !important;
  }

  &.is-active {
    background-color: $--color-blue !important;
  }
}

.el-submenu {
  min-width: $menu-item-width !important;
}

.active {
  background-color: $--color-blue !important;

  .el-submenu__title {
    background-color: $--color-blue !important;
  }
}

.in-active {
  background-color: $--color-primary !important;
}
</style>

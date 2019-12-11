<template>
  <div class="app-wrapper">
    <div class="container">
      <navbar />
      <top-menu />
      <div class="big-main-frame">
        <app-main />
        <links />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import TopMenu from "./top-menu";
import AppMain from "./AppMain";
import Links from "./Links";
import Footer from "./Footer";

export default {
  name: "Layout",
  components: {
    Navbar,
    TopMenu,
    AppMain,
    Links,
    Footer
  },
  mixins: [],
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .big-main-frame {
    background-color: #eee;
    background-image: url("/images/background.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% auto;
  }
}

.mobile .fixed-header {
  width: 100%;
}
</style>

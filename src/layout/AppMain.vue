<template>
 <section class="app-main">
  <router-view :key="key" />
 </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
    withSide() {
      return this.$route.path !== "/home";
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
$half: 50%;

.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 8.125rem); */
  width: 100%;
  position: relative;
  overflow: hidden;

  .q-button {
    position: absolute;
    top: 23.75rem;
    left: unquote("calc( #{$half} + 38.875rem )");
    z-index: 1000;
    font-size: 0px;
  }
}
.fixed-header + .app-main {
  padding-top: 3.125rem;
}
</style>

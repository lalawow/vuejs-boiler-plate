<template>
  <div class="nf-container full-width">
    <group-banner bg-img="/images/zcfg.png" text="404" />
    <div class="center-container">
      <div class="nf-main">本地址页面不存在</div>
    </div>
  </div>
</template>

<script>
import GroupBanner from "@/components/GroupBanner";
export default {
  components: { GroupBanner }
};
</script>

<style lang="scss" scoped>
.nf-container {
  .nf-main {
    padding: 150px 0;
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
    color: #aaa;
  }
}
</style>

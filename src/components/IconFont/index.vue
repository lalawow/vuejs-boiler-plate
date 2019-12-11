<template>
  <i class="iconfont" :class="{ [icon]: true }"></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "icon"
    }
  }
};
</script>

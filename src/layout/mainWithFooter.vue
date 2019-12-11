<template>
  <div class="main-container">
    <el-container style="height: 100%;">
      <el-main>
        <slot></slot>
      </el-main>
      <el-footer class="main-el-footer">
        <main-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import mainFooter from "@/components/main-footer";
export default {
  data() {
    return {};
  },
  components: { mainFooter },
  methods: {}
};
</script>

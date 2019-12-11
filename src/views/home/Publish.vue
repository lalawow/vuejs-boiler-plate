<template>
  <div class="publish-block">
    <div v-if="isLogged" class="publish-block">
      <a :href="achieveLink" target="_blank" class="publish-btn supply">
        <icon-font icon="award" class="publish-icon" />
        <span>发布成果</span>
      </a>
      <a :href="requireLink" target="_blank" class="publish-btn demand">
        <icon-font icon="publish" class="publish-icon" />
        <span>发布需求</span>
      </a>
    </div>
    <div v-else class="publish-block">
      <div class="publish-btn supply" @click="pubWarning">
        <icon-font icon="award" class="publish-icon" />
        <span>发布成果</span>
      </div>

      <div class="publish-btn demand" @click="pubWarning">
        <icon-font icon="publish" class="publish-icon" />
        <span>发布需求</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconFont from "@/components/IconFont";
import { mapGetters } from "vuex";
import { Message } from "element-ui";
import { publishUrl } from "@/utils/config";
import { getToken } from "@/utils/auth";

export default {
  components: { IconFont },
  computed: {
    ...mapGetters({
      isLogged: "user/isLogged"
    }),
    requireLink() {
      return `${publishUrl.require}${getToken()}`;
    },
    achieveLink() {
      return `${publishUrl.achieve}${getToken()}`;
    }
  },
  methods: {
    pubWarning() {
      Message.error("登录后才能发布内容");
    }
  }
};
</script>

<style lang="scss" scoped>
.publish-block {
  width: 100%;
  display: flex;

  .publish-btn {
    margin: 1rem 0.75rem;
    flex-grow: 1;
    height: 4.5rem;
    line-height: 4.5rem;
    border-radius: 0.3125rem;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.supply {
      background-color: #5192c5;

      &:hover {
        background-color: #5192c580;
      }
    }

    &.demand {
      background-color: #48a5e0;
      &:hover {
        background-color: #48a5e080;
      }
    }

    .publish-icon {
      color: white;
      font-size: 2rem;
      margin-right: 0.75rem;
    }

    span {
      font-size: 1.25rem;
    }
  }
}
</style>

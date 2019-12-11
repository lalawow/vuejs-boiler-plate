<template>
  <div class="transfer-block">
    <div class="title-row">
      <div class="block-title">成果转化排行</div>
      <div class="more-btn">
        <router-link to="/transfer">更多 ></router-link>
      </div>
    </div>
    <div>
      <router-link v-for="transfer in transferList.data" :key="transfer.id" class="one-trans" :to="{name:'transferDetail',params:{id:transfer.id}}">
        <div class="trans-img">
          <img :src="`${fileBase}${transfer.coverPath}`" />
        </div>
        <div class="trans-txt">
          <div class="trans-title">{{transfer.title}}</div>
          <div class="trans-content">{{parseHtml2Txt(transfer.caseDescription,100)}}</div>
          <div class="trans-pviews">
            <icon-font class="views-icon" icon="eye" />
            &nbsp;{{transfer.clicks}}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { parseHtml2Txt } from "@/utils";
import { fileBase } from "@/utils/config";
import IconFont from "@/components/IconFont";

export default {
  data() {
    return {
      tabName: "first",
      fileBase
    };
  },
  created() {
    this.getTransferList();
  },
  components: { IconFont },
  computed: {
    ...mapGetters("home", ["transferList"])
  },
  methods: {
    ...mapActions("home", ["getTransferList"]),
    parseHtml2Txt(txt, n) {
      return parseHtml2Txt(txt, n);
    }
  }
};
</script>

<style lang="scss">
.transfer-block {
  width: 100%;

  .title-row {
    display: flex;
    width: 100%;
    align-items: flex-end;

    .block-title {
      color: $--color-primary;
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 2.5rem;
      border-bottom: 0.125rem solid $--color-primary;
    }
    .more-btn {
      flex-grow: 1;
      text-align: right;
      border-bottom: 0.125rem solid #eeeeee;
      color: #999999;
      padding-bottom: 0.625rem;
      font-size: 0.875rem;
    }
  }

  .one-trans {
    padding: 1rem 1rem 1rem 0;
    border-bottom: 0.0625rem solid #eeeeee;
    display: flex;

    &:hover {
      background-color: #f7f7f7;
    }

    .trans-img {
      flex-grow: 0;

      img {
        width: 7.1875rem;
        height: 5.375rem;
        margin-right: 1.125rem;
      }
    }

    .trans-txt {
      flex-grow: 1;
      flex-shrink: 1;

      .trans-title {
        font-size: 1rem;
        //font-weight: bold;
        padding-bottom: 0.625rem;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20.5rem;
      }

      .trans-content {
        font-size: 0.875rem;
        color: #999999;
        padding-bottom: 1.25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20.5rem;
      }

      .trans-pviews {
        color: #999999;
        font-size: 1rem;
        line-height: 1rem;
        display: flex;
        align-items: center;

        i {
          color: $--color-primary;
        }
      }
    }
  }
}
</style>

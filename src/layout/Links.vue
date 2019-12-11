<template>
  <div class="links-div">
    <div class="links-frame">
      <div class="links-inner-frame">
        <div class="top-links" v-if="withLinks">
          <div class="top-links-title">友情链接</div>
          <div class="links-btns">
            <a v-for="(link,index) in friendLinks" :key="index" class="link-btn" :href="link.url" target="_blank">{{link.title}}</a>
          </div>
        </div>
        <div class="bottom-links">
          <div class="bottom-logo">
            <img src="/images/bottom-logo.png" />
          </div>
          <div class="menu-links">
            <div v-for="group in menus" class="menu-group" :key="group.name">
              <div class="group-title">
                <router-link :to="group.path">{{group.meta.title}}</router-link>
              </div>
              <div class="group-children">
                <div v-for="child in group.children" :key="child.name" class="group-child">
                  <router-link :to="{name:child.name}">{{child.meta.title}}</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="qr-img">
            <div>
              <img src="/images/qr.png" />
            </div>
            <div class="qr-txt">公众号</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import collaboration from "@/router/collaboration";
import policy from "@/router/policy";
import activity from "@/router/activity";
import transfer from "@/router/transfer";
import aboutus from "@/router/aboutus";
console.log("about", aboutus);
const menus = [collaboration, policy, activity, transfer, aboutus].map(
  group => ({
    ...group,
    children: (group.children || []).filter(c => c.meta && c.meta.topMenu)
  })
);
export default {
  data() {
    return {
      menus
    };
  },
  computed: {
    // 友情链接部分只在首页出现
    ...mapGetters("home", ["friendLinks"]),
    withLinks() {
      return this.$route.fullPath === "/home";
    }
  }
};
</script>

<style lang="scss" scoped>
.links-div {
  width: 100%;
  padding-bottom: 1.875rem;
  margin-top: 1.875rem;

  .links-frame {
    width: $--main-width;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1.875rem;
    /* opacity: 0.8; */
    margin: 0 auto;

    .links-inner-frame {
      width: 100%;
      /* padding: 0.625rem 1.875rem 1.4375rem 1.875rem; */

      .top-links {
        padding-bottom: 2.5rem;
        border-bottom: 0.0625rem solid $--color-primary-light-5;
        .top-links-title {
          font-size: 1.125rem;
          font-weight: bold;
        }
        .links-btns {
          display: flex;
          flex-wrap: wrap;

          .link-btn {
            background-color: #ebf2f7;
            width: 8.25rem;
            height: 2.125rem;
            line-height: 2.125rem;
            flex-shrink: 0;
            flex-grow: 0;
            margin-top: 0.625rem;
            margin-right: 0.1875rem;
            border-radius: 0.125rem;
            text-align: center;
            cursor: pointer;
            font-size: 0.875rem;
            color: #333333;

            &:hover {
              background-color: $--color-primary;
              color: white;
            }
          }
        }
      }
      .bottom-links {
        display: flex;
        padding-top: 2.5rem;

        .bottom-logo,
        .qr-img {
          width: 7.1875rem;

          img {
            width: 100%;
          }
          text-align: center;
          color: #666;
          font-size: 0.875rem;

          .qr-txt {
            padding-top: 0.625rem;
          }
        }

        .menu-links {
          display: flex;
          flex-grow: 1;
          justify-content: space-evenly;
          padding-top: 0.625rem;

          .group-title {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 1rem;
            color: #000;
          }

          .group-child {
            font-size: 0.875rem;
            padding-bottom: 0.625rem;
          }
        }
      }
    }
  }
}
</style>

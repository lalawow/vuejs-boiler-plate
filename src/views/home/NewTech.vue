<template>
  <div class="new-tech-block">
    <div class="title-row">
      <div class="block-title">最新成果</div>
      <div class="more-btn">
        <router-link to="/collaboration/achieves">更多 ></router-link>
      </div>
    </div>
    <div class="tech-news-rolling-bg" @mouseover="paused=true" @mouseout="paused=false">
      <div :style="{ top }" class="home-tech-news-list" :class="{'is-paused':paused}">
        <router-link v-for="(achieve,index) in rollingList" :key="`${achieve.id}-${index}`" class="one-tech" :to="{name:'achieveDetail',params:{id:achieve.id}}">
          <div class="tech-title">
            <span class="blue-dot">&#8226;</span>
            &nbsp;{{achieve.title.substr(0,22)}}
          </div>
          <div class="tech-detail">
            <div class="tech-subject">{{achieve.industry}}</div>
            <div class="tech-date">{{achieve.updateTime.substr(0,10)}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const showNews = 10;
export default {
  data() {
    return {
      tabName: "first",
      rollingList: (this.achievesList || {}).data || [],
      key: parseInt(Math.random() * 10000),
      activeIndex: 0,
      paused: false
    };
  },
  created() {
    this.getAchievesList();
  },
  watch: {
    achievesList: function(val) {
      this.rollingList = [...val.data];
      for (let i = 0; i < 100; i++) {
        this.rollingList = this.rollingList.concat([...val.data]);
      }
    }
  },
  computed: {
    ...mapGetters("home", ["achievesList"]),
    top() {
      // return -this.activeIndex * 3.125 + "rem";
      return 0;
    }
  },
  methods: {
    ...mapActions("home", ["getAchievesList"]),
    startRolling() {
      const interval = 2000;
      setInterval(() => {
        const pop = this.rollingList.splice(0, 1);

        this.rollingList.push(pop[0]);
      }, interval);
    }
  }
};
</script>

<style lang="scss">
.new-tech-block {
  width: 100%;
  /* min-height: 40rem; */
  border-bottom: 0.0625rem solid #eee;

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

  .one-tech {
    display: flex;
    padding: 1rem 0.75rem;
    justify-content: space-between;

    &:hover {
      background-color: #f7f7f7;
    }
    .blue-dot {
      color: $--color-primary;
    }

    .tech-detail {
      display: flex;
      color: #999999;
      font-size: 0.875rem;

      .tech-subject {
        margin-right: 1.875rem;
      }
    }
  }

  .tech-news-rolling-bg {
    height: 31.25rem;
    overflow: hidden;
    position: relative;
    margin: 0.5rem 0;
  }
  .home-tech-news-list {
    position: relative;
    animation-duration: 2400s;
    animation-name: animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &.is-paused {
      animation-play-state: paused;
    }
  }

  @keyframes animation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
}
</style>

<template>
  <div class="home-container">
    <div class="full-width top-carousel">
      <carousel :data="imgData" :controls="false"></carousel>
    </div>
    <div class="center-container home-main">
      <div class="home-main-layer">
        <div class="left-part">
          <pic-news />
        </div>
        <div class="right-part">
          <news />
        </div>
      </div>
      <div class="home-main-layer">
        <div class="left-part">
          <transfer-list />
        </div>
        <div class="right-part">
          <new-tech />
          <publish />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import News from "./News";
import NewTech from "./NewTech";
import TransferList from "./TransferList";
import Publish from "./Publish";
import PicNews from "./PicNews";
import { fileBase } from "@/utils/config";

const imgs = [
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png"
];
export default {
  data() {
    return {
      // imgData: imgs.map(
      //   img =>
      //     `<div class="carousel-img-frame"><img class="carousel-img" src="${img}" /></div>`
      // )
    };
  },
  components: { News, NewTech, TransferList, Publish, PicNews },
  computed: {
    ...mapGetters("home", ["carouselPics"]),
    imgData() {
      const genImgDiv = img =>
        `<div class="carousel-img-frame" style="background-image: url('${fileBase}${img}')"></div>`;
      return this.carouselPics.map(i => genImgDiv(i.coverPath));
    }
  },
  methods: {}
};
</script>

<style lang="scss">
$carousel-height: 340px;
.home-container {
  width: 100%;

  .top-carousel {
    height: $carousel-height;

    .carousel-img-frame {
      height: $carousel-height;
      width: 100vw;
      background-size: cover;
      background-position: center;

      .carousel-img {
        height: $carousel-height;
        width: 100%;
      }
    }

    .carousel__indicator {
      width: 2.125rem;
      margin: 0 0.375rem;
      &::before {
        height: 0.25rem;
      }
    }

    .carousel__indicator--active {
      &::before {
        background-color: $--color-primary;
      }
    }
  }

  .home-main {
    min-height: 31.25rem;

    .home-main-layer {
      width: 100%;
      display: flex;
      margin-bottom: 1.5rem;

      .left-part {
        width: 31.25rem;
        padding-right: 1.875rem;
        min-height: 18.75rem;
        flex-shrink: 0;
      }
      .right-part {
        flex-grow: 1;
      }
    }
  }
}
</style>

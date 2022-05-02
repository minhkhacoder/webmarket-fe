<template>
  <section class="cate" id="cate">
    <div class="heading">
      <b></b>
      <span>danh mục</span>
      <a href="#">Xem tất cả >></a>
    </div>

    <swiper
      class="cate-container"
      :slidesPerView="4"
      :spaceBetween="20"
      :autoplay="{
        delay: 7500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 2,
        },
        '1020': {
          slidesPerView: 3.2,
        },
      }"
    >
      <!-- <swiper-wrapper> -->
      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-meat.png" alt="" />
        <div><span>thịt</span></div>
      </swiper-slide>

      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-fish.png" alt="" />
        <dir><span>cá</span></dir>
      </swiper-slide>

      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-seafood.png" alt="" />
        <div><span>hải sản</span></div>
      </swiper-slide>

      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-vegetable.png" alt="" />
        <div><span>rau củ</span></div>
      </swiper-slide>

      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-spice.png" alt="" />
        <div><span>gia vị</span></div>
      </swiper-slide>

      <swiper-slide class="cate-box">
        <img src="../assets/cate-icon-other.png" alt="" />
        <div><span>khác</span></div>
      </swiper-slide>
      <!-- </swiper-wrapper> -->
    </swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

// Import Swiper styles
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.cate {
  &-box {
    padding: 3rem 3rem;
    background: #fff;
    border: 2px solid var(--black);
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    img {
      margin: 1rem 0;
      height: 10rem;
      width: 10rem;
    }
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  &-box:hover {
    border: 2px solid var(--orange);
  }
}
</style>
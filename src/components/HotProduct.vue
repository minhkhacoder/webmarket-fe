<template>
  <section class="products" id="products">
    <div class="heading">
      <b></b>
      <span>sản phẩm nổi bật</span>
      <a href="#">Xem tất cả >></a>
    </div>

    <swiper
      class="product-container"
      :slidesPerView="3"
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
      <swiper-slide class="product-box">
        <img src="../assets/product-1.png" alt="" />
        <h3>fresh orange</h3>
        <div class="product-price">$4.99/- - 10.99/-</div>
        <div class="product-star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a href="#" class="btn">add to cart</a>
      </swiper-slide>

      <swiper-slide class="product-box">
        <img src="../assets/product-2.png" alt="" />
        <h3>fresh orange</h3>
        <div class="product-price">$4.99/- - 10.99/-</div>
        <div class="product-star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a href="#" class="btn">add to cart</a>
      </swiper-slide>

      <swiper-slide class="product-box">
        <img src="../assets/product-3.png" alt="" />
        <h3>fresh orange</h3>
        <div class="product-price">$4.99/- - 10.99/-</div>
        <div class="product-star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a href="#" class="btn">add to cart</a>
      </swiper-slide>

      <swiper-slide class="product-box">
        <img src="../assets/product-4.png" alt="" />
        <h3>fresh orange</h3>
        <div class="product-price">$4.99/- - 10.99/-</div>
        <div class="product-star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <a href="#" class="btn">add to cart</a>
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
</style>
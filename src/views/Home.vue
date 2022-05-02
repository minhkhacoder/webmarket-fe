<template>
  <div>
    <!-- Header -->
    <!-- <Header /> -->
    <!-- Home -->
    <section class="home" id="home">
      <div class="home-content">
        <h3>fresh and <span>Organic</span> product for your</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" class="btn">shop now</a>
      </div>
    </section>
    <!-- Categories -->
    <Categories />
    <!-- Hot Product -->
    <HotProduct />
    <!-- Product -->
    <Product />
    <!-- Features -->
    <Features />
  </div>
</template>

<script>
// import Header from "../components/Header.vue";
import Features from "../components/Features.vue";
import HotProduct from "../components/HotProduct.vue";
import Product from "../components/Product.vue";
import Categories from "../components/Categories.vue";
export default {
  name: "Home",
  components: {
    // Header,
    Features,
    HotProduct,
    Product,
    Categories,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/banner-bg.webp) no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 17rem;
  padding-bottom: 10rem;
  &-content {
    text-align: center;
    width: 60rem;
    h3 {
      color: var(--black);
      font-size: 3rem;
      span {
        color: var(--orange);
      }
    }
    p {
      color: var(--light-color);
      font-size: 1.7rem;
      padding: 1rem 0;
      line-height: 1.8;
    }
  }
}
</style>
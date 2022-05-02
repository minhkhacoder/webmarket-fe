<template>
  <section class="product">
    <div class="heading">
      <b></b>
      <span>sản phẩm</span>
      <a href="#">Xem tất cả >></a>
    </div>
    <div class="product-container">
      <div class="wrapper">
        <div class="product-box">
          <img src="../assets/product-1.png" alt="" />
          <h3>fresh orange</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
        <div class="product-box">
          <img src="../assets/product-2.png" alt="" />
          <h3>fresh onion</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
        <div class="product-box">
          <img src="../assets/product-3.png" alt="" />
          <h3>fresh meat</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
        <div class="product-box">
          <img src="../assets/product-4.png" alt="" />
          <h3>fresh cabbage</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
        <div class="product-box">
          <img src="../assets/product-5.png" alt="" />
          <h3>fresh potato</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
        <div class="product-box">
          <img src="../assets/product-6.png" alt="" />
          <h3>fresh avocado</h3>
          <div class="product-price">$4.49 - 10.99</div>
          <div class="product-star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <div class="btn">add to cart</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.product {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 1.5rem;
  }
  &-heading {
    text-align: start;
  }
  &-container {
    padding: 1rem;
  }
  &-box {
    background: #fff;
    border-radius: 0.5rem;
    text-align: center;
    padding: 3rem 2rem;
    outline-offset: -1rem;
    outline: var(--outline);
    box-shadow: var(--box-shadow);
    transform: 0.2s linear;
    margin: 1rem;
    img {
      height: 20rem;
    }
    h3 {
      font-size: 2.5rem;
      color: var(--black);
    }
  }
  &-box:hover {
    outline-offset: 0;
    outline: var(--outline-hover);
  }
  &-price {
    font-size: 2rem;
    color: var(--light-color);
    padding: 0.5rem 0;
  }
  &-star {
    i {
      font-size: 1.7rem;
      color: var(--orange);
      padding: 0.5rem 0;
    }
  }
}
</style>
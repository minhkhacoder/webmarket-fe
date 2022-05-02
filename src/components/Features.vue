<template>
  <section class="fea" id="features">
    <div class="heading">
      <b></b>
      <span>đặc điểm nổi bật</span>
    </div>
    <div class="fea-container">
      <div class="fea-box">
        <img src="../assets/feature-img-1.png" alt="" />
        <h3>fresh and organic</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ipsam quia?
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <div class="fea-box">
        <img src="../assets/feature-img-2.png" alt="" />
        <h3>fre delivery</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ipsam quia?
        </p>
        <a href="#" class="btn">read more</a>
      </div>
      <div class="fea-box">
        <img src="../assets/feature-img-3.png" alt="" />
        <h3>easy payment</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          deserunt ipsam quia?
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.fea {
  &-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
  }
  &-box {
    padding: 3rem 2rem;
    background: #fff;
    outline: var(--outline);
    outline-offset: -1rem;
    text-align: center;
    box-shadow: var(--box-shadow);
    img {
      margin: 1rem 0;
      height: 15rem;
    }
    h3 {
      font-size: 2.5rem;
      line-height: 1.8;
      color: var(--black);
    }
    p {
      font-size: 1.5rem;
      line-height: 1.8;
      color: var(--light-color);
      padding: 1rem 0;
    }
  }
  &-box:hover {
    outline: var(--outline-hover);
    outline-offset: 0;
  }
}
</style>
<template>
  <header class="header">
    <a href="#" class="header-logo"
      ><i class="fas fa-shopping-basket"></i>roro</a
    >
    <!-- <nav class="header-navbar">
      <div class="btn">đăng nhập</div>
    </nav> -->
    <div class="header-items">
      <div class="header-icons">
        <div
          class="header-icons-item fas fa-search header-search-btn"
          v-on:click="search"
          v-on:scroll="scrollFunction"
        ></div>
        <div
          class="header-icons-item fas fa-shopping-cart header-cart-btn"
          v-on:click="cart"
          v-on:scroll="scrollFunction"
        ></div>
        <!-- <div
        class="header-icons-item fas fa-user header-login-btn"
        v-on:click="login"
        v-on:scroll="scrollFunction"
      ></div> -->

        <div
          class="header-icons-item fas fa-bars header-menu-btn"
          v-on:click="login"
          v-on:scroll="scrollFunction"
        ></div>
      </div>
      <div class="btn" v-on:click="login" v-on:scroll="scrollFunction">
        <a href="#">đăng nhập</a>
      </div>
    </div>
    <form action="" class="header-search-form">
      <input type="search" class="search-box" placeholder="Search here..." />
      <label for="search-box" class="fas fa-search"></label>
    </form>
    <div class="header-cart">
      <div class="header-cart-box">
        <img src="../assets/cart-img-1.png" alt="" />
        <div class="header-cart-content">
          <div class="fas fa-trash header-cart-trash"></div>
          <h3>watermelon</h3>
          <span class="header-cart-price">$4.49 -</span>
          <span class="header-cart-quantity">qty: 1</span>
        </div>
      </div>
      <div class="header-cart-box">
        <img src="../assets/cart-img-2.png" alt="" />
        <div class="header-cart-content">
          <div class="fas fa-trash header-cart-trash"></div>
          <h3>onion</h3>
          <span class="header-cart-price">$4.49 -</span>
          <span class="header-cart-quantity">qty: 1</span>
        </div>
      </div>
      <div class="header-cart-box">
        <img src="../assets/cart-img-3.png" alt="" />
        <div class="header-cart-content">
          <div class="fas fa-trash header-cart-trash"></div>
          <h3>chicken</h3>
          <span class="header-cart-price">$4.49 -</span>
          <span class="header-cart-quantity">qty: 1</span>
        </div>
      </div>
      <div class="header-cart-total">total: $19.69</div>
      <div class="btn">checkout</div>
    </div>
    <!-- Login -->
    <form action="" class="header-login">
      <h3>login</h3>
      <input
        type="phone"
        v-model="phone"
        name="phone"
        placeholder="enter your phone"
        class="header-login-box"
      />
      <input
        type="password"
        v-model="password"
        name="password"
        placeholder="enter your password"
        class="header-login-box"
      />
      <!-- <p>forget your password <a href="#">click here</a></p> -->
      <input type="submit" value="login now" class="btn" />
      <p>
        don't have an account
        <a href="#" v-on:click="register" v-on:scroll="scrollFunction"
          >create now</a
        >
      </p>
    </form>
    <!-- Register -->
    <form action="" class="header-register">
      <h3>register</h3>
      <input
        type="phone"
        placeholder="enter your phone"
        class="header-login-box"
      />
      <input
        type="password"
        placeholder="enter your password"
        class="header-register-box"
      />
      <input
        type="password"
        placeholder="enter comfirm your password"
        class="header-register-box"
      />

      <input type="submit" value="register now" class="btn" />
      <p>
        you have an account
        <a href="#" v-on:click="login" v-on:scroll="scrollFunction"
          >login now</a
        >
      </p>
    </form>
  </header>
</template>

<script>
export default {
  methods: {
    // TODO: ON CLICK EVENT SEARCH FROM
    search: function () {
      let searchForm = document.querySelector(".header-search-form");
      let cart = document.querySelector(".header-cart");
      let login = document.querySelector(".header-login");
      let register = document.querySelector(".header-register");
      register.classList.remove("active");
      searchForm.classList.toggle("active");
      cart.classList.remove("active");
      login.classList.remove("active");
    },
    // TODO: ON CLICK EVENT CART
    cart: function () {
      let cart = document.querySelector(".header-cart");
      let searchForm = document.querySelector(".header-search-form");
      let login = document.querySelector(".header-login");
      let register = document.querySelector(".header-register");
      register.classList.remove("active");
      cart.classList.toggle("active");
      searchForm.classList.remove("active");
      login.classList.remove("active");
    },
    // TODO: ON CLICK EVENT LOGIN
    login: function () {
      let login = document.querySelector(".header-login");
      let searchForm = document.querySelector(".header-search-form");
      let cart = document.querySelector(".header-cart");
      let register = document.querySelector(".header-register");
      register.classList.remove("active");
      login.classList.toggle("active");
      searchForm.classList.remove("active");
      cart.classList.remove("active");
    },
    // TODO: ON CLICK EVENT REGISTER
    register: function () {
      let register = document.querySelector(".header-register");
      let searchForm = document.querySelector(".header-search-form");
      let cart = document.querySelector(".header-cart");
      let login = document.querySelector(".header-login");
      login.classList.remove("active");
      register.classList.toggle("active");
      searchForm.classList.remove("active");
      cart.classList.remove("active");
    },

    // TODO: SCROLL EVENT
    scrollFunction: function () {
      let searchForm = document.querySelector(".header-search-form");
      let cart = document.querySelector(".header-cart");
      let login = document.querySelector(".header-login");
      let register = document.querySelector(".header-register");
      register.classList.remove("active");
      searchForm.classList.remove("active");
      cart.classList.remove("active");
      login.classList.remove("active");
    },
  },
};
</script>

<style lang="scss">
/* ---------------- */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 9%;
  background: #fff;
  box-shadow: var(--box-shadow);
  a {
    color: var(--black);
    text-decoration: none;
  }
  &-navbar {
    display: none;
  }
  &-items {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    .btn {
      margin: 0 1rem;
      padding: 0.5rem 1rem;
      a {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .btn:hover {
      a {
        color: #fff;
      }
    }
  }
  &-logo {
    font-size: 2.5rem;
    font-weight: bolder;

    i {
      color: var(--orange);
      padding: 0 1rem;
    }
  }
  /* &-navbar {
    a {
      font-size: 1.7rem;
      margin: 0 1rem;
      color: var(--black);
      text-decoration: none;
    }
    a:hover {
      color: var(--orange);
    }
  } */
  &-icons {
    margin: 0 1rem;
  }
  &-icons div {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border-radius: 50%;
    background: #eee;
    color: var(--black);
    font-size: 2rem;
    margin-left: 0.5rem;
    text-align: center;
    cursor: pointer;
  }

  &-icons div:hover {
    background: var(--orange);
    color: #fff;
  }
  &-menu-btn {
    display: none;
  }
  &-search-form {
    position: absolute;
    top: 20%;
    right: 25%;
    width: 50rem;
    height: 5rem;
    background: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    input {
      height: 100%;
      width: 100%;
      background: none;
      text-transform: none;
      font-size: 1.6rem;
      color: var(--black);
      padding: 0 1.5rem;
    }
    label {
      font-size: 2.2rem;
      padding-right: 1.5rem;
      color: var(--black);
      cursor: pointer;
    }
    label:hover {
      color: var(--orange);
    }
  }
  &-search-btn {
    display: none;
  }
  &-search-form.active {
    right: 2rem;
    transition: 0.3s ease-in-out;
  }
  &-cart {
    position: absolute;
    top: 110%;
    right: -110%;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
    width: 35rem;
    background: #fff;
    &-box {
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      margin: 1rem 0;
      img {
        height: 10rem;
      }
    }
    &-trash {
      font-size: 2rem;
      position: absolute;
      top: 50%;
      right: 2rem;
      cursor: pointer;
      color: var(--light-color);
      transform: translateY(-50%);
    }
    &-trash:hover {
      color: var(--orange);
    }
    &-content {
      h3 {
        color: var(--black);
        font-size: 1.7rem;
        padding-bottom: 1rem;
      }
      span {
        color: var(--light-color);
        font-size: 1.6rem;
      }
    }
    &-quantity {
      padding-left: 1rem;
    }
    &-total {
      font-size: 2.5rem;
      padding: 1rem 0;
      text-align: center;
      color: var(--black);
    }
    .btn {
      display: block;
      text-align: center;
      margin: 1rem;
    }
  }
  &-cart.active {
    right: 2rem;
    transition: 0.4s linear;
  }
  &-login {
    position: absolute;
    top: 110%;
    right: -110%;
    width: 35rem;
    box-shadow: var(--box-shadow);
    padding: 2rem;
    border-radius: 0.5rem;
    background: #fff;
    text-align: center;
    h3 {
      font-size: 2.5rem;
      text-transform: uppercase;
      color: var(--black);
    }
    &-box {
      width: 100%;
      margin: 0.7rem 0;
      background: #eee;
      border-radius: 0.5rem;
      padding: 1rem;
      font-size: 1.6rem;
      color: var(--black);
      text-transform: none;
    }
    p {
      font-size: 1.4rem;
      padding: 0.5rem 0;
      color: var(--light-color);
      a {
        color: var(--orange);
        text-decoration: underline;
      }
    }
    .btn {
      display: block;
      text-align: center;
      width: 100%;
    }
  }
  &-login.active {
    right: 2rem;
    transition: 0.4s ease-in;
  }
  &-register {
    position: absolute;
    top: 110%;
    right: -110%;
    width: 35rem;
    box-shadow: var(--box-shadow);
    padding: 2rem;
    border-radius: 0.5rem;
    background: #fff;
    text-align: center;
    h3 {
      font-size: 2.5rem;
      text-transform: uppercase;
      color: var(--black);
    }
    &-box {
      width: 100%;
      margin: 0.7rem 0;
      background: #eee;
      border-radius: 0.5rem;
      padding: 1rem;
      font-size: 1.6rem;
      color: var(--black);
      text-transform: none;
    }
    p {
      font-size: 1.4rem;
      padding: 0.5rem 0;
      color: var(--light-color);
      a {
        color: var(--orange);
        text-decoration: underline;
      }
    }
    .btn {
      display: block;
      text-align: center;
      width: 100%;
    }
  }
  &-register.active {
    right: 2rem;
    transition: 0.4s ease-in;
  }
}

// !: RESPONSIVE
@media (min-width: 1200px) {
  .header {
    padding: 2rem;
    &-search-form {
      top: 20%;
      right: 25%;
    }
    &-search-form.active {
      display: none;
    }
    &-search-btn {
      display: none;
    }
  }
}
@media (max-width: 991px) {
  .header {
    padding: 2rem;
    &-search-form {
      top: 110%;
      right: -120%;
    }
    &-search-form.active {
      right: 2rem;
      transition: 0.3s ease-in-out;
    }
    &-search-btn {
      display: inline-block;
    }
  }
}

@media (max-width: 768px) {
  .header {
    &-menu-btn {
      display: inline-block;
    }
    &-items {
      .btn {
        display: none;
      }
      a {
        font-size: 1.5rem;
      }
    }
    &-search-form {
      width: 90%;
    }
    &-navbar {
      display: block;
      position: absolute;
      top: 110%;
      right: -120%;
      width: 30rem;
      box-shadow: var(--box-shadow);
      border-radius: 0.5rem;
      background: #fff;
      a {
        font-size: 2rem;
        margin: 2rem 2.5rem;
        display: block;
      }
    }
    &-navbar.active {
      right: 2rem;
      transition: 0.4s ease-in;
    }
  }
}
</style>
<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
<style lang="scss">
:root {
  --orange: #ff7800;
  --black: #130f40;
  --light-color: #666;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  --border: 0.1rem solid rgba(0, 0, 0, 0.1);
  --outline: 0.2rem solid rgba(0, 0, 0, 0.1);
  --outline-hover: 0.2rem solid var(--black);
}
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-transform: capitalize;
  transition: all 0.2s linear;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 7rem;
}
body {
  background: #eee;
}

section {
  padding: 2rem 9%;
}

// !: PUBLIC USING
.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.8rem 3rem;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  border: 0.2rem solid var(--black);
  color: var(--black);
  cursor: pointer;
  background: none;
}
.btn:hover {
  color: #fff;
  background: var(--orange);
  border: 0.2rem solid var(--orange);
}

.heading {
  display: flex;
  position: relative;
  margin-bottom: 0;
  padding: 15px 10px 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-left: 30px;
  padding-left: 30px;
  align-items: center;
  border: 0;
  span {
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--black);
  }
  ::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    margin-top: 2px;
    width: 4px;
    height: 24px;
    top: 20px;
    background-color: var(--orange);
  }
  a {
    color: var(--orange);
    padding-right: 15px;
    display: inline-block;
    padding-left: 15px;
    font-size: 2rem;
    font-weight: bold;
    margin-left: auto;
    text-decoration: none;
  }
}

// !: RESPONSIVE
@media (max-width: 991px) {
  html {
    font-size: 55%;
  }
  section {
    padding: 2rem;
  }
}
@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
  .heading {
    font-size: 2.5rem;
    a {
      display: none;
    }
  }
}
</style>

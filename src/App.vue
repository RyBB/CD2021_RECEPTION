<template>
  <div id="app">
    <bb-header></bb-header>
    <router-view />
  </div>
</template>
<script>
import header from "./components/globals/Header.vue";

export default {
  name: "App",
  components: {
    "bb-header": header,
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);
@import url(./lampoon.ttf);

// 全体共有の変数
:root {
  --main-color: #03e9f4;
  --main-color1: #00ffff;
  --main-color2: #ff00ff;
  --main-color3: #ffff00;
  --main-color4: #00ff00;

  /* Base font size */
  font-size: 10px;

  /* Set neon color */
  --neon-text-color: #f40;
  --neon-border-color: #08f;
}

.back {
  text-align: center;
  margin: 1rem 2rem;
  font-size: calc(max(1.5vw, 1.5rem));
  width: 5rem;
  a {
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #fff;
    &:hover {
      color: var(--main-color);
      border-bottom: 1px solid var(--main-color);
    }
  }
}

body {
  margin: 0;
  background-color: #000;
}
#app {
  color: #2c3e50;
  text-align: left;
  background-color: #000;
  height: 100vh;
  font-family: "Exo 2", sans-serif;
}
.cd2021-bb-button {
  font-style: italic;
  color: #fff;
  font-size: 2rem;
  padding: 1rem 1rem 1rem;
  border: 0.2rem solid #fff;
  border-radius: 1rem;
  text-transform: uppercase;
  animation: flicker 1.5s infinite alternate;
  cursor: pointer;
  &:hover {
    color: rgb(255, 196, 0);
    border-color: rgb(255, 196, 0);
  }
}
/* Animate neon flicker */
@keyframes flicker {
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
      0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
      0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color),
      0 0 10rem var(--neon-text-color);

    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff,
      0 0 2rem var(--neon-border-color), inset 0 0 2rem var(--neon-border-color),
      0 0 4rem var(--neon-border-color), inset 0 0 4rem var(--neon-border-color);
  }
  20%,
  24%,
  55% {
    text-shadow: none;
    box-shadow: none;
  }
}
@media (max-width: 767px) {
  .cd2021-bb-button {
    width: 50vw;
    margin: 0 auto;
  }
}
</style>

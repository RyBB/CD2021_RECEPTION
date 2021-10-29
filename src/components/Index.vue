<template>
  <div class="cd2021-bb-body">
    <div class="cd2021-bb-btn" @click="router('/entry')">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      sign up
    </div>
    <div class="cd2021-bb-btn" @click="router('/qrcode')">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      QR code
    </div>
    <div class="cd2021-bb-btn" @click="router('/mypage')">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      my page
    </div>
    <div class="cd2021-bb-btn" @click="router('/ranking')">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      ranking
    </div>
  </div>
</template>
<script>
export default {
  name: "cd2021-bb-body",
  methods: {
    router(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Lampoon";
  src: url("lampoon.ttf");
}

.cd2021-bb-body {
  background-color: #000;
  height: 100vh;
  text-align: center;
}
.cd2021-bb-btn {
  position: relative;
  font-family: "lampoon";
  font-size: calc(min(8vw, 5rem));
  margin: 5vh 0;
  padding: 5vh 0;
  color: var(--main-color);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 5px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: var(--main-color);
    color: #050801;
    box-shadow: 0 0 5px var(--main-color), 0 0 25px var(--main-color),
      0 0 50px var(--main-color), 0 0 200px var(--main-color);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  &:nth-child(1) {
    filter: hue-rotate(0);
  }
  &:nth-child(2) {
    filter: hue-rotate(90deg);
  }
  &:nth-child(3) {
    filter: hue-rotate(180deg);
  }
  &:nth-child(4) {
    filter: hue-rotate(270deg);
  }
  span {
    position: absolute;
    display: block;
    &:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--main-color));
      animation: animate1 2s linear infinite;
    }
    &:nth-child(3) {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, var(--main-color));
      animation: animate2 2s linear infinite;
    }
  }
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
</style>

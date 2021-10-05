<template>
  <div class="signup">
    <label>User Name</label>
    <input v-model="name" placeholder="BB" />
    <div @click="signup(name)">sign up</div>
  </div>
</template>
<script>
export default {
  name: "signup",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    signup(name) {
      if (!name) {
        this.$toasted.error("表示名を入力してください", {
          position: "bottom-right",
          duration: 2000,
          fullWidth: true,
        });
      } else {
        alert("post");
      }
    },
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

:root {
  /* Base font size */
  font-size: 10px;

  /* Set neon color */
  --neon-text-color: #f40;
  --neon-border-color: #08f;
}

.signup {
  display: flex;
  font-family: "Exo 2", sans-serif;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  color: #fff;
  font-size: 2rem;
  input {
    font-size: 3rem;
    height: 4.5rem;
    width: 30rem;
    margin: 0 3rem;
  }
  div {
    font-style: italic;
    color: #fff;
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
    // // &::-moz-selection {
    // //   background-color: var(--neon-border-color);
    // //   color: var(--neon-text-color);
    // // }
    // &::selection {
    //   background-color: var(--neon-border-color);
    //   color: var(--neon-text-color);
    // }
    // &:focus {
    //   outline: none;
    // }
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
  .signup {
    margin: 5rem 0 0 0;
    flex-flow: column;
    text-align: center;
    input {
      font-size: 2rem;
      height: 4.5rem;
      width: 50vw;
      margin: 2rem 3rem 5rem;
    }
    div {
      width: 50vw;
      margin: 0 auto;
    }
  }
}
</style>

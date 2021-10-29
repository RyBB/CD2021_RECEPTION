<template>
  <div class="cd2021-bb-signup">
    <div class="back"><a href="/CD2021_RECEPTION">back </a></div>
    <div class="cd2021-bb-signup-form">
      <label>User Name</label>
      <input v-model="name" placeholder="名前" />
      <div class="cd2021-bb-button" @click="signup(name)">sign up</div>
    </div>
    <div class="cd2021-bb-signup-yourid" v-if="isShownId">
      {{ name }} さんのIDは<span class="your-id">{{ id }}</span
      >です
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      name: "",
      id: "",
      isShownId: false,
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
        return;
      }
      return fetch(
        "https://t3k8cgtf7h.execute-api.ap-northeast-1.amazonaws.com/dev/bb-api/cd2021-signup",
        {
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          this.isShownId = true;
          this.id = res.id;

          // セッションストレージに保存
          sessionStorage.setItem("id", res.id);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss">
.cd2021-bb-signup {
  color: var(--main-color);
  filter: hue-rotate(0);
}

.cd2021-bb-signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  font-size: 3rem;
  input {
    color: #fff;
    font-size: 3rem;
    width: 30vw;
    text-align: center;
    border: none;
    background-color: #000;
    border-bottom: 1px solid var(--main-color);
    outline: none;
    padding-bottom: 8px;
    margin: 0 2rem;
  }
}
@media (max-width: 767px) {
  .cd2021-bb-signup-form {
    flex-flow: column;
    text-align: center;
    input {
      font-size: 3rem;
      height: 4.5rem;
      width: 50vw;
      margin: 5rem;
    }
  }
}

.cd2021-bb-signup-yourid {
  margin: 50px 0 0 0;
  font-size: 3rem;
  text-align: center;
  .your-id {
    font-size: 5rem;
    font-weight: bold;
    margin: 0 1rem;
    filter: hue-rotate(90deg);
  }
}
</style>

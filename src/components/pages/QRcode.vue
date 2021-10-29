<template>
  <div class="cd2021-bb-qrcode">
    <div class="back"><a href="/CD2021_RECEPTION">back </a></div>
    <div class="cd2021-bb-qrcode-form">
      <label>Your ID</label>
      <input type="tel" v-model="id" placeholder="ID" />
      <div class="cd2021-bb-button" @click="showQR(id)">show QR Code</div>
    </div>
    <div class="cd2021-bb-canvas">
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "cd2021-bb-qrcode",
  data() {
    return {
      id: "",
      placeholder: "IDを入力してください",
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("id");
    console.log(this.id);
    if (!this.id) return;
    this.showQR(this.id);
  },
  methods: {
    showQR(number) {
      if (!number) {
        this.$toasted.error("IDを入力してください", {
          position: "bottom-right",
          duration: 2000,
          fullWidth: true,
        });
        return;
      }

      // セッションストレージに保存
      sessionStorage.setItem("id", number);

      // QRコードの描画
      const canvas = document.getElementById("canvas");
      return new Promise((res, rej) =>
        QRCode.toCanvas(
          canvas,
          number,
          {
            width: 300,
          },
          (err) => (!err ? res(canvas) : rej(err))
        )
      );
    },
  },
};
</script>

<style lang="scss">
.cd2021-bb-qrcode {
  color: var(--main-color);
  filter: hue-rotate(90deg);
}

.cd2021-bb-qrcode-form {
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
.cd2021-bb-canvas {
  text-align: center;
}

@media (max-width: 767px) {
  .cd2021-bb-qrcode-form {
    flex-flow: column;
    text-align: center;
    input {
      font-size: 3rem;
      height: 4.5rem;
      width: 50vw;
      margin: 5rem;
    }
  }
  .cd2021-bb-canvas {
    text-align: center;
    margin: 5rem 0 0 0;
  }
}
</style>

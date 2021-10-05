<template>
  <div class="cd2021-bb-qrcode">
    <input v-model="message" placeholder="あなたの番号を入力してください" />
    <button @click="showQR(message)">表示</button>
    <div>
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>
<script>
import QRCode from "qrcode";
export default {
  name: "cd2021-bb-qrcode",
  methods: {
    showQR(number) {
      if (!number) return;
      console.log(number);
      var canvas = document.getElementById("canvas");
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
  text-align: center;
  margin: 100px 0 0 0;
  input {
    width: 300px;
    font-size: 16px;
    border: none;
    background-color: #000;
    color: #03e9f4;
    border-bottom: 1px solid #03e9f4; /*text3の下線*/
    outline: none;
    padding-bottom: 8px;
  }
  div {
    margin: 100px 0 0 0;
  }
}
</style>

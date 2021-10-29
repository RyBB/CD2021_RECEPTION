<template>
  <div class="cd2021-bb-mypage">
    <div class="back"><a href="/CD2021_RECEPTION">back </a></div>
    <div class="cd2021-bb-mypage-form">
      <label>Your ID</label>
      <input v-model="id" placeholder="ID" />
      <div class="cd2021-bb-button" @click="showMypage(id)">show My page</div>
    </div>
    <div class="cd2021-bb-mypage-data" v-if="isShowMyPage">
      <div class="cd2021-bb-mypage-player">
        <label>プレイヤー名：</label>
        {{ playerName }}
      </div>
      <div class="cd2021-bb-mypage-highscore">
        <div>YOUR HIGH SCORE</div>
        <dl>
          <dt>DARTONE</dt>
          <dd>{{ score.darts }}</dd>
          <dt>COMPILE TOWER</dt>
          <dd>{{ score.tower }}</dd>
          <dt>FLYING GYOZA</dt>
          <dd>{{ score.gyoza }}</dd>
        </dl>
      </div>
      <div class="cd2021-bb-mypage-record">
        <div>YOUR SCORE RECORD</div>
        <table>
          <tr>
            <th>timestamp</th>
            <th>game</th>
            <th>score</th>
          </tr>
          <tr v-for="row in myScoreRecords" :key="row.id">
            <td>{{ row.value["登録日時"].value | dayjs }}</td>
            <td>{{ row.value["ゲーム"].value }}</td>
            <td>{{ row.value["得点"].value }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "cd2021-bb-mypage",
  data() {
    return {
      id: "",
      thisid: "",
      placeholder: "IDを入力してください",
      isShowMyPage: false,
      isGetData: false,
      playerName: "",
      score: {
        darts: 0,
        tower: 0,
        gyoza: 0,
      },
      myScoreRecords: [],
    };
  },
  mounted() {
    this.id = sessionStorage.getItem("id");
    if (!this.id) return;
  },
  filters: {
    dayjs: function (date) {
      return dayjs(date).format("MM/DD HH:mm");
    },
  },
  methods: {
    showMypage(number) {
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

      // 一度データを取得したら画面遷移するまで再取得できないようにする
      if (this.id === this.myid) return;

      // kintoneから自分のデータを取得する処理
      return fetch(
        "https://t3k8cgtf7h.execute-api.ap-northeast-1.amazonaws.com/dev/bb-api/cd2021-mypage",
        {
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: number }), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
        }
      )
        .then((resp) => resp.json())
        .then((res) => {
          console.log(res.body);

          const record = res.body.record;
          this.isGetData = true;
          this.myid = this.id;

          // 該当するレコードがなかったらエラー表示
          if (!record) {
            this.isShowMyPage = false;
            this.$toasted.error("IDが不正です", {
              position: "bottom-right",
              duration: 2000,
              fullWidth: true,
            });
            return;
          }

          // 該当するレコードがあったら表示
          this.isShowMyPage = true;

          this.playerName = record["ユーザー名"].value;
          this.score = {
            darts: record["最高得点_ダーツ"].value,
            tower: record["最高得点_タワー"].value,
            gyoza: record["最高得点_餃子"].value,
          };
          this.myScoreRecords = record["テーブル"].value;
          console.log(this.myScoreRecords);
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss">
.cd2021-bb-mypage {
  color: var(--main-color);
  filter: hue-rotate(180deg);
}

.cd2021-bb-mypage-form {
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
.cd2021-bb-mypage-player {
  text-align: center;
  font-size: calc(max(50px, 3rem));
  color: #fff;
  text-shadow: 3px 2px 1px rgb(0, 132, 255);
  label {
    font-size: 0.6em;
    margin: 0 0 0 -5vw;
  }
}
.cd2021-bb-mypage-highscore {
  text-align: center;
  font-size: calc(max(30px, 3vw));
  div {
    margin: 10% 0 0 0;
  }
  dl {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    font-size: 0.8em;
    dt {
      flex-basis: 50%;
      padding: 20px;
      padding: 1rem 1rem 1rem;
      text-transform: uppercase;
      color: #fff;
      text-shadow: 3px 2px 1px rgb(0, 132, 255);
    }
    dd {
      flex-basis: 20%;
      padding: 20px;
      margin: 0;
      color: #fff;
    }
  }
}
.cd2021-bb-mypage-record {
  text-align: center;
  font-size: calc(max(25px, 2.5vw));
  margin: 5rem 0 0 0;
  table {
    margin: 0 auto;
    width: 100vw;
    tr {
      width: 100%;
      th {
        color: #fff;
        text-shadow: 3px 2px 1px rgb(0, 132, 255);
      }
      th,
      td {
        width: calc(100vw / 3);
        padding: 10px;
        margin: 0;
        color: #fff;
        font-size: 0.8em;
      }
    }
  }
}
@media (max-width: 767px) {
  .cd2021-bb-mypage-form {
    flex-flow: column;
    text-align: center;
    input {
      font-size: 3rem;
      height: 4.5rem;
      width: 50vw;
      margin: 5rem;
    }
  }
  .cd2021-bb-mypage-highscore {
    div {
      margin: 20% 0 0 0;
    }
    dl {
      flex-flow: column;
    }
  }
}
</style>

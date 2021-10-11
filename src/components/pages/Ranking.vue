<template>
  <div class="cd2021-bb-ranking">
    <div class="back"><a href="/CD2021_RECEPTION">back </a></div>
    <div class="cd2021-bb-ranking-data">
      <div>score ranking</div>
      <ul class="">
        <li @click="activate(0)" :class="{ active: isActive === '0' }">
          total
        </li>
        <li @click="activate(1)" :class="{ active: isActive === '1' }">
          compile tower
        </li>
        <li @click="activate(2)" :class="{ active: isActive === '2' }">
          dartone
        </li>
        <li @click="activate(3)" :class="{ active: isActive === '3' }">
          flying gyoza
        </li>
      </ul>
      <div class="main">
        <table>
          <tr v-for="row in selectedRanking" :key="row.index">
            <td>{{ row.rank }}</td>
            <td>{{ row.user }}</td>
            <td>{{ row.score }}</td>
          </tr>
        </table>
      </div>
      <!-- <dl>
          <dt>DARTONE</dt>
          <dd>{{ score.darts }}</dd>
          <dt>COMPILE TOWER</dt>
          <dd>{{ score.tower }}</dd>
          <dt>FLYING GYOZA</dt>
          <dd>{{ score.gyoza }}</dd>
        </dl>
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
        </table> -->
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "cd2021-bb-ranking",
  data() {
    return {
      isActive: "0",
      rankingAllData: [],
      selectedRanking: [],
    };
  },
  async mounted() {
    try {
      const data = await fetch(
        "https://t3k8cgtf7h.execute-api.ap-northeast-1.amazonaws.com/dev/bb-api/cd2021-ranking2"
      );
      const { body } = await data.json();
      const records = JSON.parse(body.Item.records.S);
      console.log(records);
      this.rankingAllData = records;
      this.showRanking();
    } catch (err) {
      console.error(err);
    }
  },
  filters: {
    dayjs: function (date) {
      return dayjs(date).format("MM/DD HH:mm");
    },
  },
  methods: {
    activate(num) {
      this.isActive = String(num);
      this.showRanking();
    },
    showRanking() {
      const arr = [
        "総合得点",
        "最高得点_タワー",
        "最高得点_ダーツ",
        "最高得点_餃子",
      ];
      const type = arr[Number(this.isActive)];

      let [count, tmp] = [0, 0];
      this.selectedRanking = this.rankingAllData
        .map((val) => {
          return {
            score: Number(val[type].value),
            user: val["ユーザー名"].value,
          };
        })
        .sort((a, b) => (Number(a.score) < Number(b.score) ? 1 : -1))
        .map((val, index) => {
          if (val.score !== tmp) {
            count = index + 1;
            tmp = val.score;
          }
          return {
            index: index,
            rank: count,
            ...val,
          };
        });
    },
  },
};
</script>

<style lang="scss">
.cd2021-bb-ranking {
  color: var(--main-color);
  filter: hue-rotate(270deg);
}

.cd2021-bb-ranking-data {
  text-align: center;
  font-size: calc(max(4vw, 2rem));
  text-transform: uppercase;
  ul {
    margin: 10vw 0;
    padding: 0;
    font-size: calc(min(2vw, 30px));
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      width: calc(min(20vw, 200px));
      &:nth-child(2) {
        filter: hue-rotate(90deg);
      }
      &:nth-child(3) {
        filter: hue-rotate(180deg);
      }
      &:nth-child(4) {
        filter: hue-rotate(270deg);
      }
    }
    .active {
      background: var(--main-color);
      color: #050801;
      box-shadow: 0 0 5px var(--main-color), 0 0 25px var(--main-color),
        0 0 50px var(--main-color), 0 0 200px var(--main-color);
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
  }
}
@media (max-width: 767px) {
  .cd2021-bb-ranking-data {
    ul {
      font-size: 1.5rem;
    }
  }
}
</style>

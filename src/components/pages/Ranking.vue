<template>
  <div class="cd2021-bb-ranking">
    <div class="back">
      <a href="/CD2021_RECEPTION">back </a>
    </div>
    <div class="cd2021-bb-ranking-timestamp">updated_at {{ timestamp }}</div>
    <div class="cd2021-bb-ranking-data">
      <div>score ranking</div>
    </div>
    <div class="cd2021-bb-ranking-data-menu">
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
    </div>
    <div id="myTable" class="cd2021-bb-ranking-table-main">
      <input v-model="search" placeholder="NAME" @input="searchName" />
      <table>
        <tbody class="list">
          <tr class="cd2021-bb-ranking-table-main-header" v-if="isShownRanking">
            <th>RANK</th>
            <th>SCORE</th>
            <th>ID</th>
            <th>NAME</th>
          </tr>
          <tr v-for="row in seachSelectedRanking" :key="row.index">
            <td class="rank cd2021-bb-ranking-table-main-rank">
              {{ row.rank }}
            </td>
            <td class="score cd2021-bb-ranking-table-main-score">
              {{ row.score }}
            </td>
            <td class="id cd2021-bb-ranking-table-main-id">
              {{ row.id }}
            </td>
            <td class="user cd2021-bb-ranking-table-main-user">
              {{ row.user }}
            </td>
          </tr>
        </tbody>
      </table>
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
      search: "",
      isShownRanking: false,
      timestamp: "",
      rankingAllData: [],
      selectedRanking: [],
      seachSelectedRanking: [],
    };
  },
  async mounted() {
    try {
      const data = await fetch(
        "https://t3k8cgtf7h.execute-api.ap-northeast-1.amazonaws.com/dev/bb-api/cd2021-ranking2"
      );
      const { body } = await data.json();
      this.timestamp = body.Item.timestamp.S;
      const records = JSON.parse(body.Item.records.S);
      this.isShownRanking = true;
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
            id: val["$id"].value,
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
      this.seachSelectedRanking = this.selectedRanking;
    },
    searchName() {
      let searchWord = this.search.trim();
      console.log(searchWord);
      if (!searchWord) {
        this.seachSelectedRanking = this.selectedRanking;
      } else {
        this.seachSelectedRanking = this.selectedRanking.filter((record) =>
          record.user.includes(searchWord)
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cd2021-bb-ranking {
  color: var(--main-color);
}
.cd2021-bb-ranking-timestamp {
  color: #fff;
  text-align: right;
  width: 95vw;
}
.cd2021-bb-ranking-data {
  filter: hue-rotate(270deg);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  font-size: 3rem;
  flex-flow: column;
  text-align: center;
  // font-size: calc(max(30px, 3vw));
}
.cd2021-bb-ranking-data-menu {
  ul {
    margin: 10vw 0;
    padding: 0;
    font-size: calc(max(2.5vw, 2rem));
    display: flex;
    justify-content: center;
    list-style-type: none;
    li {
      text-align: center;
      width: 25vw;
      cursor: pointer;
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
      background-color: var(--main-color);
      color: #050801;
      box-shadow: 0 0 5px var(--main-color), 0 0 25px var(--main-color),
        0 0 50px var(--main-color), 0 0 200px var(--main-color);
      -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    }
  }
}
.cd2021-bb-ranking-table-main {
  text-align: center;
  font-size: calc(max(3vw, 15px));
  color: #fff;
  input {
    margin: 0 0 5% 0;
    width: 50vw;
    height: 3vh;
    font-size: 2rem;
  }
  table {
    margin: auto;
    .cd2021-bb-ranking-table-main-header {
      color: #ffbf00;
      font-size: 1.2em;
    }
    .cd2021-bb-ranking-table-main-rank {
      color: #ffbf00;
      font-family: "roboto";
    }
    .cd2021-bb-ranking-table-main-user {
      // width: 50vw;
      font-family: "roboto";
    }
    .cd2021-bb-ranking-table-main-score {
      font-family: "roboto";
    }
  }
}
@media (max-width: 767px) {
  .cd2021-bb-ranking-data-menu {
    ul {
      font-size: 1.5rem;
    }
  }
}
</style>

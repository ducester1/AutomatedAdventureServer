<template>
  <v-card class="rounded-card title" min-width="300" max-width="300" hover>
    <v-layout>
      <v-spacer />
      <v-card-title>
        {{ players[0].playerName }}
      </v-card-title>
      <v-spacer />
    </v-layout>
    <div style="position: relative">
      <v-container
        width="100%"
        style="position: absolute"
        class="skills-container"
      >
        <v-row>
          <v-col cols="4" class="skills-cols" v-for="n in 24" :key="n">
            <v-btn class="custom-btn">{{ getSkill(n) }}</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-img :src="background"></v-img>
    </div>
    <p>total time botted:</p>
  </v-card>
</template>

<script>
import PlayerAPI from "@/services/PlayerAPI.js";
export default {
  data() {
    return {
      background: { src: require("../assets/Skills_tab.png") },
      players: [
        {
          _id: { $oid: "618d32a7e8d9cd0fd9fdbb51" },
          playerName: "automatedAdventure1",
          stats: {
            attack: { $numberInt: "1" },
            defense: { $numberInt: "2" },
            health: { $numberInt: "11" },
            strength: { $numberInt: "7" },
          },
          banned: false,
        },
      ],
    };
  },
  mounted() {
    this.loadPlayers();
  },
  methods: {
    async loadPlayers() {
      const response = await PlayerAPI.getToDos();
      this.players = response.data;
    },
    getSkill(n) {
      switch (n) {
        case 1:
          return this.players[0].stats.attack.$numberInt;
        case 2:
          return this.players[0].stats.health.$numberInt;
        default:
          return 0;
      }
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 25px;
}

.title {
  color: #f3f304;
  background-color: #504937;
}

.skills-container {
  padding-top: 18px;
  padding-left: 34px;
}

.skills-cols {
  padding-left: 34px;
  padding-right: 0px;
  padding-top: 11px;
  padding-bottom: 0px;
  margin: 0px;
}

.v-btn {
  z-index: 1;
  width: 40px !important;
  padding: 0px !important;
  min-width: 0px !important;
  color: #f3f304;
  background-color: #504937 !important;
}
.custom-btn::before {
  color: transparent;
}

.custom-btn:hover {
  color: red;
}
</style>

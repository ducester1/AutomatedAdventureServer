<template>
  <v-card class="rounded-card title" min-width="300" max-width="300" hover>
    <v-layout>
      <v-spacer />
      <v-card-title>
        {{ player.playerName }}
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
    <p>woodcutting:</p>
    <p>gathered 69 logs</p>
  </v-card>
</template>

<script>
import PlayerAPI from "@/services/PlayerAPI.js";
export default {
  props: ["player"],
  data() {
    return {
      background: { src: require("../assets/Skills_tab.png") },
      player: [],
    };
  },
  methods: {
    async loadPlayers() {
      let response = await PlayerAPI.getPlayers();
      this.players = response.data;
    },
    getSkill(n) {
      const levels = JSON.parse(JSON.stringify(this.player)).levels;
      switch (n) {
        case 1:
          return levels.attack;
        case 2:
          return levels.hitpoints;
        case 3:
          return levels.mining;
        case 4:
          return levels.strength;
        case 5:
          return levels.agility;
        case 6:
          return levels.smithing;
        case 7:
          return levels.defense;
        case 8:
          return levels.herblore;
        case 9:
          return levels.fishing;
        case 10:
          return levels.ranged;
        case 11:
          return levels.thieving;
        case 12:
          return levels.cooking;
        case 13:
          return levels.prayer;
        case 14:
          return levels.crafting;
        case 15:
          return levels.firemaking;
        case 16:
          return levels.magic;
        case 17:
          return levels.fletching;
        case 18:
          return levels.woodcutting;
        case 19:
          return levels.runecrafting;
        case 20:
          return levels.slayer;
        case 21:
          return levels.farming;
        case 22:
          return levels.construction;
        case 23:
          return levels.hunter;
        case 24:
          return levels.total;
        default:
          return 0;
      }
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 25px !important;
}

.title {
  color: #f3f304 !important;
  background-color: #504937 !important;
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
  color: #f3f304 !important;
  background-color: #504937 !important;
}
.custom-btn::before {
  color: transparent;
}

.custom-btn:hover {
  color: red;
}
</style>

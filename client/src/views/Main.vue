<template>
  <div>
    <v-container fluid style="width: 70%">
      <v-row :align="centered" style="height: 150px">
        <v-col cols="4" v-for="p in players" :key="p.playerName">
          <player-card :player="p" />
          <!-- <player :player="p" /> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PlayerAPI from "@/services/PlayerAPI.js";
import PlayerCard from "../components/PlayerCard.vue";

export default {
  components: {
    PlayerCard,
  },
  data() {
    return {
      players: [],
    };
  },
  created() {
    this.loadPlayers();
  },
  methods: {
    async loadPlayers() {
      let response = await PlayerAPI.getPlayers();
      this.players = response.data;
    },
  },
};
</script>
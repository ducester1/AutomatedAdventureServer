<template>
  <div>
    <v-container fluid style="width: 70%">
      <v-row :align="centered" style="height: 150px">
        <v-col cols="4" v-for="n in 12" :key="n">
          <player />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Player from "@/components/PlayerCard";

export default {
  components: {
    Player,
  },
  data: () => ({}),
};
</script>
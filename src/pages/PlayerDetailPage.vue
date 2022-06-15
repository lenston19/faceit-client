<template>
  <q-page class="q-container">
    {{ playerData }}
    <q-card v-if="filteredGames">
      <q-tabs
        v-model="selectedGame"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          v-for="game in filteredGames"
          :key="game.id"
          :label="game.name"
          :name="game.faceitId"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="selectedGame" animated>
        <q-tab-panel
          v-for="game in filteredGames"
          :key="game.id"
          :name="game.faceitId"
        >
          <p v-for="(value, key) in playerData[game.key]" :key="key + value">
            {{ key }}-{{ value }}
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
  <q-inner-loading dark :showing="isLoading">
    <q-spinner-pie class="fixed-center" size="50px" color="secondary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { Player } from 'components/models';
import { usePlayer } from 'src/hooks/usePlayer';
import { useRoute } from 'vue-router';

const $route = useRoute();

const { getPlayerById } = usePlayer();

const isLoading = ref<boolean>(true);
const gamesList = [
  {
    id: 1,
    name: 'CS:GO',
    faceitId: 'csgo',
    key: 'csgoStats',
  },
  {
    id: 2,
    name: 'DOTA 2',
    faceitId: 'dota2',
    key: 'dota2Stats',
  },
];
const playerData = ref<Player>();
const selectedGame = ref();
const filteredGames = computed(() =>
  gamesList.filter((g) => playerData.value && playerData.value[g.key])
);

onMounted(async () => {
  isLoading.value = true;
  playerData.value = await getPlayerById(Number($route.params.id));
  selectedGame.value =
    filteredGames.value[0] && filteredGames.value[0].faceitId;
  isLoading.value = false;
});
</script>

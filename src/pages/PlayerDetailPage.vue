<template>
  <q-page class="q-container q-py-md">
    <q-btn
      icon="las la-arrow-left"
      color="secondary"
      label="Игроки"
      :to="{ name: 'players' }"
    />
    <q-card class="q-my-md" v-if="filteredGames">
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
          <div class="text-h6">
            {{ playerData?.firstName }} ({{ playerData?.nickname }})
            {{ playerData?.lastName }}
          </div>
          <div class="row justify-center">
            <q-list bordered class="col-12 col-md-6 q-mb-md">
              <q-item
                v-for="(value, key) in playerData[game.key]"
                :key="key + value"
              >
                <q-item-section>
                  <q-item-label class="text-overline">{{ key }}</q-item-label>
                </q-item-section>

                <q-item-section side center>
                  <q-badge color="secondary" :label="value" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <StatsChart :playerId="playerData.faceitId" :gameId="game.faceitId" />
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
import StatsChart from 'src/components/StatsChart.vue';

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
  if (playerData.value.csgoStats !== null) {
    delete playerData.value.csgoStats.player;
    delete playerData.value.csgoStats.id;
  }
  if (playerData.value.dota2Stats !== null) {
    delete playerData.value.dota2Stats.player;
    delete playerData.value.dota2Stats.id;
  }
  selectedGame.value =
    filteredGames.value[0] && filteredGames.value[0].faceitId;
  isLoading.value = false;
});
</script>

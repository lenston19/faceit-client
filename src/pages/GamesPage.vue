<template>
   <q-page class="q-container">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div
        v-for="game in gamesList"
        :key="game.name"
        class="col-12 col-md-4 col-lg-4"
      >
        <q-btn
          style="min-heigth: 200px; height: 100%;"
          class="full-width bg-accent text-black"
          :label="game.name"
          @click="
            $router.push({
              name: 'players',
              query: { game: game.key },
            })
          "
        />
      </div>
    </div>
  </q-page>
  <q-inner-loading dark :showing="isLoading">
    <q-spinner-pie class="fixed-center" size="50px" color="secondary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const gamesList = [
  {
    name: 'Dota 2',
    key: 'dota2Stats',
  },
    {
    name: 'CS:GO',
    key: 'csgoStats',
  },
]

const isLoading = ref<boolean>(true);

onMounted(async () => {
  isLoading.value = false;
});
</script>

<template>
  <q-page class="q-container">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div v-for="player in PlayerList" :key="player.nickname" class="col-12 col-md-3 col-lg-4">
        <q-card style="min-heigth: 200px; height: 100%">
          <q-card-section>
            <div class="text-h5">
              {{ player.nickname }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
  <q-inner-loading dark :showing="isLoading">
    <q-spinner-pie class="fixed-center" size="50px" color="secondary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Player } from 'components/models'
import { usePlayer } from '../hooks/usePlayer';

const { fetchPlayer } = usePlayer()

const isLoading = ref<boolean>(true);
const PlayerList = ref<Player[]>([])

onMounted(async () => {
  isLoading.value = true;
  PlayerList.value = await fetchPlayer()
  isLoading.value = false;
})
</script>

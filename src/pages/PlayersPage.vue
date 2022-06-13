<template>
  <q-page class="q-container" style="min-heigth: 100vh">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div v-for="player in PlayerList" :key="player.nickname" class="col-12 col-md-3 col-lg-4">
        <q-card>
          <q-card-section>
            <div class="text-h5">
              {{ player.nickname }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Player } from 'components/models'
import { usePlayer } from '../hooks/usePlayer';

const { fetchPlayer } = usePlayer()

const PlayerList = ref<Player[]>([])

onMounted(async () => {
  PlayerList.value = await fetchPlayer()
})
</script>

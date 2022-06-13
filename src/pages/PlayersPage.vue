<template>
  <q-page class="q-container">
    <div class="row q-py-md">
      <q-table
        grid
        grid-header
        title="Игроки"
        class="full-width text-accent"
        :rows="playerList"
        :columns="columns"
        :filter="customFilter"
        row-key="name"
        hide-header
        hide-bottom
        :pagination="{ rowsPerPage: 0 }"
        ><template v-slot:top-right>
          <q-input
            borderless
            dense
            dark
            debounce="300"
            v-model="customFilter"
            placeholder="Поиск"
          >
            <template v-slot:append>
              <q-icon name="search" color="accent" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
  <q-inner-loading dark :showing="isLoading">
    <q-spinner-pie class="fixed-center" size="50px" color="secondary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Player } from 'components/models';
import { usePlayer } from '../hooks/usePlayer';

const columns = [
  {
    name: 'firstName',
    label: 'Имя',
    field: 'firstName',
    sortable: true,
  },
  {
    name: 'lastName',
    label: 'Фамилия',
    field: 'lastName',
    sortable: true,
  },
  {
    name: 'nickname',
    label: 'Никнейм',
    field: 'nickname',
    sortable: true,
  },
  {
    name: 'elo',
    label: 'ELO',
    field: (playerList) => playerList.csgoStats.elo,
    sortable: true,
  },
  {
    name: 'averageKdRatio',
    label: 'Ср. кол. У/C',
    field: (playerList) => playerList.csgoStats.averageKdRatio,

    sortable: true,
  },
  {
    name: 'averageHs',
    label: 'Ср. кол. ХШ',
    field: (playerList) => playerList.csgoStats.averageHs,

    sortable: true,
  },
  {
    name: 'winRate',
    label: 'Доля побед %',
    field: (playerList) => playerList.csgoStats.winRate,
    sortable: true,
  },
];

const { fetchPlayer } = usePlayer();

const customFilter = ref<string>('');
const isLoading = ref<boolean>(true);
const playerList = ref<Player[]>([]);

onMounted(async () => {
  isLoading.value = true;
  playerList.value = await fetchPlayer();
  console.log(playerList.value);

  isLoading.value = false;
});
</script>

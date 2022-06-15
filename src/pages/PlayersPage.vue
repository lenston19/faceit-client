<template>
  <q-page class="q-container">
    <div class="row q-py-md q-col-gutter-sm">
      <div class="col-12 col-md-4">
        <q-select
          standout="bg-primary text-secondary"
          v-model="selectedFaculty"
          :options="facultiesList"
          option-label="name"
          clearable
          dark
          label="Факультет"
          @clear="selectedGroup = undefined"
        />
      </div>
      <div class="col-12 col-md-4">
        <q-select
          standout="bg-primary text-secondary"
          v-model="selectedGroup"
          :options="
            groupsList.filter((g) => g.faculty.id === selectedFaculty?.id)
          "
          option-label="name"
          clearable
          dark
          label="Группа"
          :disable="!selectedFaculty"
        />
      </div>
      <div class="col-12 col-md-4">
        <q-select
          standout="bg-primary text-secondary"
          v-model="selectedGame"
          :options="gamesList"
          option-label="name"
          clearable
          dark
          label="Игра"
        />
      </div>
      <q-table
        grid
        grid-header
        title="Игроки"
        class="stats-table full-width text-accent"
        :rows="
          playerList.filter(
            (p) =>
              (!selectedFaculty || p.group.faculty.id === selectedFaculty.id) &&
              (!selectedGroup || p.group.id === selectedGroup.id) &&
              (!selectedGame || p[selectedGame.key])
          )
        "
        :columns="columns"
        :filter="customFilter"
        row-key="name"
        hide-header
        hide-bottom
        @row-click="goToDetail"
        :pagination="{ rowsPerPage: 0 }"
      >
        <template v-slot:top-right>
          <div class="row">
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
          </div>
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
import { Player, Faculty, Group } from 'components/models';
import { usePlayer } from 'src/hooks/usePlayer';
import { useFaculty } from 'src/hooks/useFaculty';
import { useGroup } from 'src/hooks/useGroup';
import { useRoute, useRouter } from 'vue-router';

const $router = useRouter();
const $route = useRoute();

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
    name: 'group',
    label: 'Группа',
    field: (player: Player) => player.group.name,
    sortable: true,
  },
  {
    name: 'faculty',
    label: 'Факультет',
    field: (player: Player) => player.group.faculty.name,
    sortable: true,
  },
  {
    name: 'games',
    label: 'Игры',
    field: (player: Player) =>
      gamesList
        .filter((g) => player[g.key])
        .map((g) => g.name)
        .join(' | '),
    sortable: false,
  },
];

const { fetchPlayer } = usePlayer();
const { fetchFaculty } = useFaculty();
const { fetchGroup } = useGroup();

const customFilter = ref<string>('');
const isLoading = ref<boolean>(true);
const playerList = ref<Player[]>([]);
const facultiesList = ref<Faculty[]>([]);
const selectedFaculty = ref<Faculty>();
const groupsList = ref<Group[]>([]);
const selectedGroup = ref<Group>();
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
const selectedGame = ref();

const goToDetail = (e: Event, row: Player) => {
  $router.push({
    name: 'playerDetail',
    params: { id: row.id },
  });
};

onMounted(async () => {
  isLoading.value = true;
  playerList.value = await fetchPlayer($route.query);
  facultiesList.value = await fetchFaculty();
  groupsList.value = await fetchGroup();
  isLoading.value = false;
});
</script>

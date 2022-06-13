<template>
  <q-page class="q-container">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div
        v-for="group in GroupList"
        :key="group.name"
        class="col-12 col-md-3 col-lg-4"
      >
        <q-btn
          style="min-heigth: 200px; height: 100%;"
          class="full-width bg-accent text-black"
          @click="
            $router.push({
              name: 'players',
              query: { group: group.id },
            })
          "
        >
          <div class="col">
            <div class="text-h5 text-center">
              {{ group.name }}
            </div>
            <div class="text-center">
              Факультет <br />"<b>{{ group.faculty.name }}</b
              >"
            </div>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
  <q-inner-loading dark :showing="isLoading">
    <q-spinner-pie class="fixed-center" size="50px" color="secondary" />
  </q-inner-loading>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Group } from 'components/models';
import { useGroup } from '../hooks/useGroup';

const { fetchGroup } = useGroup();

const isLoading = ref<boolean>(true);
const GroupList = ref<Group[]>([]);

onMounted(async () => {
  isLoading.value = true;
  GroupList.value = await fetchGroup();
  isLoading.value = false;
});
</script>

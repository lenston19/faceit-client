<template>
  <q-page class="q-container">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div v-for="group in GroupList" :key="group.name" class="col-12 col-md-3 col-lg-4">
        <q-card style="min-heigth: 200px; height: 100%">
          <q-card-section>
            <div class="text-h5 text-center">
              {{ group.name }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-center">
              Факультет <br />"<b>{{ group.faculty.name }}</b>"
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
import { Group } from 'components/models'
import { useGroup } from '../hooks/useGroup';

const { fetchGroup } = useGroup()

const isLoading = ref<boolean>(true);
const GroupList = ref<Group[]>([])

onMounted(async () => {
  isLoading.value = true;
  GroupList.value = await fetchGroup()
  isLoading.value = false;
})
</script>

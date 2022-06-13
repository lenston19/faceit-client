<template>
  <q-page class="q-container">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div v-for="faculty in facultyList" :key="faculty.name" class="col-12 col-md-4 col-lg-4">
        <q-card style="min-heigth: 200px; height: 100%">
          <q-card-section>
            <div class="text-h6">
              {{ faculty.name }}
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
import { Faculty } from 'components/models'
import { useFaculty } from '../hooks/useFaculty';

const { fetchFaculty } = useFaculty()

const isLoading = ref<boolean>(true);
const facultyList = ref<Faculty[]>([])

onMounted(async () => {
  isLoading.value = true;
  facultyList.value = await fetchFaculty()
  isLoading.value = false;
})

</script>

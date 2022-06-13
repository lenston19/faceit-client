<template>
  <q-page class="q-container" style="min-heigth: 100vh">
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Faculty } from 'components/models'
import { useFaculty } from '../hooks/useFaculty';

const { fetchFaculty } = useFaculty()

const facultyList = ref<Faculty[]>([])

onMounted(async () => {
  facultyList.value = await fetchFaculty()
})

</script>

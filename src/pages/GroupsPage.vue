<template>
  <q-page class="q-container" style="min-heigth: 100vh">
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
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Group } from 'components/models'
import { useGroup } from '../hooks/useGroup';

const { fetchGroup } = useGroup()

const GroupList = ref<Group[]>([])

onMounted(async () => {
  GroupList.value = await fetchGroup()
})
</script>

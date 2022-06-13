<template>
  <q-page class="q-container" style="min-heigth: 100vh">
    <div class="row q-col-gutter-md justify-center q-py-md">
      <div v-for="i in 10" :key="i" class="col-12 col-md-3 col-lg-4">
        <q-card>
          <q-card-section>
            <div class="text-h5">
              Факультет ASD
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

</script>

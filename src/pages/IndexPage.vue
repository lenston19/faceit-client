<template>
  <q-page class="q-container">
    <div class="row">
      <div class="col-12">
        <q-img class="main__img" src="~assets/CyberLight.jpg" />
      </div>
      <div class="q-py-md col-12 flex justify-center">
        <q-btn
          icon="lab la-vk"
          class="full-width text-h5"
          color="secondary"
          href="https://vk.com/cyberlightrsue"
          text-color="primary"
        >
          Официальная группа ВК
        </q-btn>
      </div>
      <div class="q-py-md col-12 flex justify-center">
        <q-btn
          icon="las la-trophy"
          class="full-width text-h5"
          color="secondary"
          text-color="primary"
          :to="{ name: 'players' }"
        >
          Список игроков вуза
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

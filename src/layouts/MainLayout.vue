<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img
              src="https://sun2-11.userapi.com/s/v1/ig2/tbSCbWV4JvfXynjzdnqugKPgi0S_21Ur_UaxGttEGUWMERtdkB0kRsPHVz2qsxp63u6epCz3ziSvLKZG6Rxk0nWZ.jpg?size=50x50&quality=95&crop=528,108,864,864&ava=1">
          </q-avatar>
          CyberLight RSUE
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab v-for="link in links" :key="link.name" :to="link.url" :label="link.name" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">

const links = [
  {
    name: 'Главная',
    url: '/'
  },
  {
    name: 'Факультеты',
    url: '/faculties'
  },
  {
    name: 'Группы',
    url: '/groups'
  },
  {
    name: 'Игроки',
    url: '/players'
  },
]

</script>

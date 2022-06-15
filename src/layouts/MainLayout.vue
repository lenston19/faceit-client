<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <router-link to="/">
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://sun2-11.userapi.com/s/v1/ig2/tbSCbWV4JvfXynjzdnqugKPgi0S_21Ur_UaxGttEGUWMERtdkB0kRsPHVz2qsxp63u6epCz3ziSvLKZG6Rxk0nWZ.jpg?size=50x50&quality=95&crop=528,108,864,864&ava=1"
              />
            </q-avatar>
            CyberLight RSUE
          </q-toolbar-title>
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-primary" style="min-height: 100vh;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row justify-center">
      <q-toolbar class="col">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <img
          @click="goToHome()"
          src="~assets/logo-m.svg"
          style="cursor: pointer; width: 50px; height: 50px"
        />
        <q-toolbar-title
          @click="goToHome()"
          style="padding-left: 2px; padding-top: 10px"
          >idipile Example
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab
          :to="{ name: 'profile', params: { id: 1 } }"
          replace
          label="Benoit Trouve"
        />
        <q-route-tab
          :to="{ name: 'profile', params: { id: 2 } }"
          replace
          label="Celian Lecomte"
        />
        <q-route-tab
          :to="{ name: 'profile', params: { id: 3 } }"
          replace
          label="Guillaume Talercio"
        />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <h3>Copyright © 2022 - Midipile Mobility</h3>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  font-size: 15px;
}
</style>

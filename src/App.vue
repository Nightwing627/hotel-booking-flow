<template>
  <v-app>
    <v-app-bar app color="#d3eaed" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/hotel.svg"
          transition="scale-transition"
          width="40"
        />
        <v-btn
          @click="$router.push({ name: 'Home' })"
          text
          style="font-size: 32px"
          >Hotels</v-btn
        >
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="pt-6">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    data: null
  })
};
</script>

<style >
.v-select.v-text-field input {
  color: #800000 !important;
  font-size: 16px;
}
.v-select.v-text-field label {
  color: #800000 !important;
}
.v-select {
  color: #800000;
}
</style> 
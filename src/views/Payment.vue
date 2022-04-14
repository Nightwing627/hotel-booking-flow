<template>
  <v-row>
    <v-col v-for="guest in guests" :key="guest" cols="6">
      <v-card>
        <v-container>
          <v-card-title class="justify-center">
           Welcome {{ guest.name | capitalize }}
          </v-card-title>
          <form @submit.prevent="onSubmit">
            <v-text-field
              required
              disabled
              v-model="guest.name"
              label="Name"
            ></v-text-field>
            <v-text-field
              required
              disabled
              v-model="guest.email"
              label="Email"
            ></v-text-field>
            <v-text-field
              required
              disabled
              v-model="guest.phone"
              label="Phone Number"
            ></v-text-field>
            <v-text-field
              required
              disabled
              v-model="guest.hes"
              label="HES"
            ></v-text-field>
            <v-text-field
              required
              disabled
              v-model="guest.tc"
              label="TC"
            ></v-text-field>
            <v-text-field
              required
              disabled
              v-model="guest.age"
              label="Age"
            ></v-text-field>
          </form>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import filters from "@/mixins/filter.js";
export default {
  data() {
    return {
      guests: []
    };
  },
  mounted: function() {
    this.guests = this.$route.params.guest;
  },
  mixins: [filters]
};
</script>

<style>
</style>
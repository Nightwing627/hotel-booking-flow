<template>
  <v-row no-gutters>
    <v-col cols="6" v-for="n in hotels" :key="n.id">
      <HotelCard :id="n.id" :hotel="n" />
    </v-col>
  </v-row>
</template>


<script>
import HotelCard from "../components/HotelCard.vue";
import hotelData from "../assets/hotels.json"

export default {
  data() {
    return {
      hotels: hotelData.hotels
    };
  },
  components: {
    HotelCard
  }
};
</script>

<style #scoped>
</style>
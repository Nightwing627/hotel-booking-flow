<template>
  <v-card
    @click="goToDetails(id, hotel)"
    id="card"
    max-width="500"
    height="500"
    class="mx-auto my-12"
  >
    <v-img height="250" :src="getImage"></v-img>
    <v-card-title> {{ hotel.name }} </v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="hotel.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ms-4">
          {{ hotel.rating }} ({{ hotel.ratingCount }})
        </div>
      </v-row>
      <div class="my-4 text-subtitle-1">
        $ {{ hotel.price }} • {{ hotel.location }}
      </div>
      <div>
        {{ hotel.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: String,
    hotel: Object
  },
  data() {
    return {
      peopleCount: 0
    };
  },
  methods: {
    goToDetails(id, hotel) {
      this.$router.push({
        name: "HotelDetail",
        params: { id: id, selectedHotel: hotel }
      });
    }
  },
  computed: {
    getImage() {
      return require("@/" + this.hotel.image);
    }
  }
};
</script>

<style #scoped>
#card {
  border-style: solid;
  border-color: #333333;
}
</style>
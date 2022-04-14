<template>
  <v-row>
    <v-col class="align-center" cols="6">
      <h1>{{ selected.name }}</h1>
      <h3 class="mt-2">{{ selected.description }}</h3>
      <v-row class="mt-2">
        <v-col class="d-flex align-center">
          <div>
            <v-icon>
              mdi-map-marker
            </v-icon>
            {{ selected.location }}
          </div>
        </v-col>
        <v-col>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateRangeText"
                hint="Check-in and Check-out dates"
                label="Reservation Dates"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dates"
              range
              scrollable
              :min="new Date().toISOString().substr(0, 10)"
            >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-card outlined elevation="3" color="#F6F6F6">
          <v-card-text class="blue--text"> $ {{ selected.price }} </v-card-text>
        </v-card>
      </v-row>
      <v-divider class="my-8"></v-divider>
      <div class="mt-4">
        <v-row class="d-flex justify-space-between">
          <div class="ms-4 text-subtitle-1 blue--text d-flex align-center">
            Guest amount:
          </div>
          <div class="d-flex align-center">
            <v-btn
              @click="guestCount >= 1 ? guestCount-- : guestCount"
              class="mx-2"
              fab
              dark
              x-small
              color="#333333"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>
            <v-card-text class="black--text">{{ guestCount }}</v-card-text>
            <v-btn
              @click="guestCount++"
              class="mx-2"
              fab
              dark
              x-small
              color="#333333"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </v-row>
        <v-row class="mt-4 justify-center">
          <v-btn @click="reserve()" outlined elevation="2" color="primary"
            >Reserve</v-btn
          >
        </v-row>
      </div>
    </v-col>
    <v-col cols="6" class="d-flex align-center">
      <v-img height="500px" width="500px" contain :src="getImage" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dates: [],
      modal: false,
      selected: Object,
      guestCount: 0,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" - ");
    },
    getImage() {
      return require("@/" + this.selected.image);
    }
  },
  methods: {
    reserve() {
      if (this.guestCount !== 0 && this.dates.length > 1) {
        this.$router.push({
          name: "Reservation",
          params: { guestCount: this.guestCount, dates: this.dates}
        });
      } else {
        this.$toasted.show("Please select reservation date & guest count", {
          theme: "toasted-primary",
          position: "bottom-left",
          iconPack: "mdi",
          icon: "alert",
          duration: 2000
        });
      }
    }
  },
  mounted: function() {
    this.selected = this.$route.params.selectedHotel;
  }
};
</script>

<style>
</style>
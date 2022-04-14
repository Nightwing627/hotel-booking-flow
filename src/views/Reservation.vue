<template>
  <div>
    <v-row>
      <v-col v-for="(i, index) in guestCount" :key="i" cols="6">
        <v-card>
          <v-container>
            <v-card-title class="justify-center">
              Reservation Form
            </v-card-title>
            <form @submit.prevent="onSubmit">
              <v-text-field
                required
                v-model="guests[index].name"
                label="Name"
                :error-messages="nameErrors($v.guests.$each.$iter[index].name)"
                @input="$v.guests.$each.$iter[index].name.$touch()"
                @blur="$v.guests.$each.$iter[index].name.$touch()"
                ref="name"
              ></v-text-field>
              <v-text-field
                required
                v-model="guests[index].email"
                label="Email"
                :error-messages="
                  emailErrors($v.guests.$each.$iter[index].email)
                "
                @input="$v.guests.$each.$iter[index].email.$touch()"
                @blur="$v.guests.$each.$iter[index].email.$touch()"
                ref="email"
              ></v-text-field>
              <v-text-field
                required
                v-model="guests[index].phone"
                label="Phone Number"
                hint="05..."
                :counter="11"
                :error-messages="
                  phoneErrors($v.guests.$each.$iter[index].phone)
                "
                @input="$v.guests.$each.$iter[index].phone.$touch()"
                @blur="$v.guests.$each.$iter[index].phone.$touch()"
                ref="phone"
              ></v-text-field>
              <v-text-field
                required
                v-model="guests[index].hes"
                label="HES"
                :counter="12"
                :error-messages="hesErrors($v.guests.$each.$iter[index].hes)"
                @input="$v.guests.$each.$iter[index].hes.$touch()"
                @blur="$v.guests.$each.$iter[index].hes.$touch()"
                ref="hes"
              ></v-text-field>
              <v-text-field
                required
                v-model="guests[index].tc"
                label="TC"
                :counter="11"
                :error-messages="tcErrors($v.guests.$each.$iter[index].tc)"
                @input="$v.guests.$each.$iter[index].tc.$touch()"
                @blur="$v.guests.$each.$iter[index].tc.$touch()"
                ref="TC"
              ></v-text-field>
              <v-text-field
                required
                v-model="guests[index].age"
                label="Age"
                :error-messages="ageErrors($v.guests.$each.$iter[index].age)"
                @input="$v.guests.$each.$iter[index].age.$touch()"
                @blur="$v.guests.$each.$iter[index].age.$touch()"
                ref="Age"
              ></v-text-field>
            </form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row class=" my-8 justify-center">
      <v-btn @click="goToPayment()" class="primary">Go to Payment</v-btn>
    </v-row>
  </div>
</template>

<script>
import validations from "@/mixins/validator.js";

export default {
  data() {
    return {
      guestCount: Number,
      dates: [],
      guests: [],
      isFormDone: false,
    };
  },
  mounted: function() {
    this.guestCount = this.$route.params.guestCount;
    this.dates = this.$route.params.dates;
    for (let i = 0; i < this.guestCount; i++) {
      this.guests.push({
        name: "",
        email: "",
        phoneNo: "",
        hes: "",
        tc: "",
        age: ""
      });
    }
  },
  mixins: [validations],
  methods: {
    goToPayment() {
      let error = 0;
      Object.values(this.$refs).forEach(val => {
        val.forEach(el => {
          if (!el.hasFocused || el.errorMessages.length !== 0) {
            error += 1;
          }
        });
      });
      if (error > 0) {
        this.$toasted.show("Please fill form as excepted", {
          theme: "toasted-primary",
          position: "top-right",
          iconPack: "mdi",
          icon: "alert",
          duration: 2000
        });
      } else {
        this.$router.push({ name: "Payment", params: { guest: this.guests } });
      }
    }
  }
};
</script>

<style>
</style>
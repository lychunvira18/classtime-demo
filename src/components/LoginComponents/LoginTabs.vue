<template>
  <v-card flat width="600">
    <v-tabs v-model="tab" background-color="transparent" centered color="black" class="mb-5">
      <v-tab v-for="item in items" :key="item">
        <div style="width: 100px">{{ item }}</div>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item style="height:400px" v-for="item in items" :key="item">
        <v-container class="px-12" v-if="item=='Login'">
          <v-form ref="form">
            <v-text-field label="Username" v-model="username"></v-text-field>
            <v-text-field label="Password" v-model="password" type="password" append-icon="mdi-eye"></v-text-field>

            <v-checkbox
              color="black"
              v-model="login_checkbox"
              label="Remember my password"
              required
              class="mb-5 mt-6"
            ></v-checkbox>

            <v-btn color="black" dark block height="50" @click="login()">Login</v-btn>
          </v-form>
        </v-container>
        <v-container class="px-12" v-else>
          <v-form ref="form">
            <v-text-field label="Username"></v-text-field>
            <v-text-field label="Email"></v-text-field>
            <v-text-field label="Password" type="password" append-icon="mdi-eye"></v-text-field>

            <v-checkbox
              color="black"
              v-model="register_checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="I agree with the Terms and Conditions."
              required
              class="mb-5 mt-6"
            ></v-checkbox>

            <v-btn color="black" dark block height="50">Register</v-btn>
          </v-form>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import backend from "../../Service";
import auth from "../../auth";
import synclog from '../../synclog';
export default {
  data() {
    return {
      password : "",
      username : "",
      tab: null,
      items: ["Login", "Register"],
      login_checkbox: true,
      register_checkbox: false
    };
  },
  methods : {
    async login() {
      const message = await backend.login(this.username, this.password)
      alert(message.message)
    } 
  },
  created(){
    auth();
    synclog
  }
};
</script>

<style>
</style>
<template>
  <v-app>
    <Navbar v-if="$route.name !== 'login' && $route.name !== 'stream'" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  
  created : () => ({
    
  })
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

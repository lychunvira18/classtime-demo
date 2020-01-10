<template>
  <nav>
    <v-app-bar dense class="black lighten-2 pr-2" dark flat app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-thin">Class</span>
        <span class="font-weight-bold">Time</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-record</v-icon>
      </v-btn>-->
      <StartStream />
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <template v-slot:prepend>
        <v-list-item two-line class="my-3">
          <v-list-item-avatar color="pink">
            <span class="white--text">CL</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle class="caption text-uppercase">{{
              user.role
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense class="mt-3">
          <v-list-item-group v-model="item" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import StartStream from "../components/StartStream";

export default {
  data: () => {
    return {
      drawer: true,
      item: 1,
      items: [
        { text: "Home", route: "/" },
        { text: "Device Manager", route: "/device-manager" }
      ],
      user: {
        name: "Ly Chunvira",
        role: "Student"
      }
    };
  },
  components: {
    StartStream
  }
};
</script>

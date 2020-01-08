<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-record</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span>Create stream</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Tags" required></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
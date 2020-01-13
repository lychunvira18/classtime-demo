<template>
  <v-card flat>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-container>
          <v-row class="px-3">
            <v-col cols="10" class="text-left">
              <div class="headline">{{this.streamName}}</div>
              <div class="body-2 font-weight-light">Vignesh Manoharan</div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end align-center">
              <div class="mx-2">
                <v-icon color="red lighten-2">mdi-eye</v-icon>
              </div>
              <div>
                <span class="red--text text--lighten-2">34</span>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-expansion-panel-header>
          <!-- <div class="link">Show Details</div> -->
          <span class="overline">Show description</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati officiis blanditiis ab praesentium rem? Ratione,
                architecto molestiae. Velit recusandae fugiat perferendis
                veritatis assumenda, debitis in iusto. Voluptatum reiciendis
                ipsam vitae.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1">
              <span class="subtitle-1">Tags:</span>
            </v-col>
            <v-col cols="11">
              <span>
                <v-chip dark class="mr-2" v-for="tag in tags" :key="tag">
                  {{
                  tag
                  }}
                </v-chip>
              </span>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "streamdetails",
  data() {
    return {
      streamName: this.$route.params.streamName,
      tags: [
        "#web-apps",
        "#design-patterns",
        "#batch6",
        "#html",
        "#batch8",
        "#batch7"
      ]
    };
  }
};
</script>

<style scoped>
.link {
  color: #0275d8;
  text-decoration: underline;
}
</style>

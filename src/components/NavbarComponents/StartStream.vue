<template>
  <v-dialog v-model="start_stream" max-width="670px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" outlined>
        <v-icon left>mdi-record</v-icon>Go Live
      </v-btn>
    </template>
    <v-card v-if="user.role === 'Student'">
      <v-card-title>
        <span class="title font-weight-regular">Create stream</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="Title" color="black" v-model="streamTitle" required></v-text-field>
          <v-text-field label="Description" color="black" v-model="description" required></v-text-field>
          <!-- <v-text-field required label="Tags" color="black" :value="tag_list.toString()"></v-text-field> -->
          <!-- <v-combobox

            label="Tags"
            color="black"
            v-model="tag_list"
            :items="tags"
            chips
            multiple
            hide-selected
          >
            <template v-slot:selection="data">
              <v-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :input-value="data.selected"
                :disabled="data.disabled"
                @click:close="data.parent.selectItem(data.item)"
              >
                <span class="pr-2">{{ data.item }}</span>
                <v-icon small @click="data.parent.selectItem(data.item)">mdi-close</v-icon>
              </v-chip>
            </template>
          </v-combobox>
          <p class="overline my-3">Suggested Tags:</p>
          <v-chip-group column multiple active-class="primary--text" v-model="tag_list">
            <v-chip v-for="tag in tags" :key="tag" :value="tag">
              {{
              tag
              }}
            </v-chip>
          </v-chip-group>

          <v-switch
            class="pa-0 mt-6"
            dense
            color="grey darken-2"
            v-model="is_conference"
            label="Conference call"
          ></v-switch>-->
          <v-switch
            class="pa-0 mt-5"
            dense
            color="grey darken-2"
            v-model="is_private"
            label="Private stream"
          ></v-switch>

          <v-text-field
            label="Password"
            v-model="password"
            color="black"
            required
            v-if="is_private"
          ></v-text-field>
          <!-- <div v-else></div> -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black darken-1" text @click="start_stream = false">Cancel</v-btn>
        <v-btn color="black darken-1 font-weight-bold" text @click="start_stream = false">Continue</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="user.role !== 'Student'">
      <v-card-title>
        <span class="title font-weight-regular">Create stream</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="Title" color="black" required></v-text-field>
          <v-text-field label="Description" color="black" required></v-text-field>

          <!-- <v-switch
            class="pa-0 mt-6"
            dense
            color="grey darken-2"
            v-model="is_conference"
            label="Conference call"
          ></v-switch>-->
          <v-switch
            class="pa-0 mt-5"
            dense
            color="grey darken-2"
            v-model="is_private"
            label="Private stream"
          ></v-switch>
          <v-text-field label="Password" color="black" required v-if="is_private"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black darken-1" text @click="start_stream = false">Cancel</v-btn>
        <v-dialog v-model="select_class" max-width="780px">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="font-weight-black" @click="startStream()">Continue</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="title font-weight-regular">Setup</span>
            </v-card-title>
            <v-card-text>
              <p class="my-2">Where are you streaming from?</p>
              <v-select
                :items="classes"
                :menu-props="{ maxHeight: '200' }"
                label="Select a class"
                solo
              ></v-select>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="black darken-1" text @click="select_class = false">Cancel</v-btn>
              <v-dialog v-model="select_classes" max-width="800px">
                <template v-slot:activator="{ on }">
                  <v-btn text v-on="on" class="font-weight-black">Continue</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="title font-weight-regular">Setup</span>
                  </v-card-title>
                  <v-card-text>
                    <p class="my-2">Would you like to cast the stream to other rooms?</p>
                    <div class="checkboxes_overflow">
                      <v-checkbox
                        v-for="classroom in classes_cast"
                        :key="classroom.name"
                        class="mb-0 pb-0"
                        color="black"
                        v-model="classroom.value"
                        :label="classroom.name"
                      ></v-checkbox>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black darken-1" text @click="select_classes = false">Cancel</v-btn>
                    <v-btn
                      color="black darken-1"
                      text
                      @click="
                        start_stream = select_class = select_classes = false
                      "
                    >
                      {{
                      classes_cast.filter(
                      classroom => classroom.value == true
                      ).length > 0
                      ? "Yes"
                      : "No"
                      }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import backend from "../../Service";
export default {
  data: () => ({
    tag_list: [],
    start_stream: false,
    tags: [
      "#web-apps",
      "#design-patterns",
      "#batch6",
      "#html",
      "#batch8",
      "#batch7"
    ],
    value: false,
    select_class: false,
    select_classes: false,
    classes: [
      "KIT Campus I - Classroom 1",
      "KIT Campus I - Classroom 2",
      "KIT Campus I - Classroom 3",
      "KIT Campus II - Classroom 1",
      "KIT Campus II - Classroom 2",
      "KIT Campus II - Classroom 3"
    ],
    classes_cast: [
      { name: "KIT Campus I - Classroom 1", value: false },
      { name: "KIT Campus I - Classroom 2", value: false },
      { name: "KIT Campus I - Classroom 3", value: false },
      { name: "KIT Campus II - Classroom 1", value: false },
      { name: "KIT Campus II - Classroom 2", value: false },
      { name: "KIT Campus II - Classroom 3", value: false }
    ],
    is_conference: false,
    is_private: false,
    streamTitle: "",
    description: "",
    password: ""
  }),
  props: {
    user: Object
  },
  methods: {
    async startStream() {
      console.log("HI");
      const stream = await backend.startStream(
        this.streamTitle,
        this.description,
        this.is_private,
        this.password
      );
      this.start_stream = false;
      this.$route.replace(`/stream/${stream.data.streamCode}`);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.checkboxes_overflow {
  height: 200px;
  overflow: auto;
}
</style>

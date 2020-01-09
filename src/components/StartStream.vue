<template>
  <v-dialog v-model="start_stream" max-width="670px">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-record</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="title font-weight-regular">Create stream</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field label="Title" color="black" required></v-text-field>
          <v-text-field
            required
            label="Tags"
            color="black"
            :value="tags.forEach(tag => tag.value ? tag.name : '')"
          ></v-text-field>
          <p class="overline my-3">Suggested Tags:</p>
          <div>
            <v-chip
              class="mr-2 mb-2"
              :class="tag.value ? 'black white--text' : ''"
              v-for="tag in tags"
              @click="tag.value=!tag.value"
              v-model="tag.value"
              :key="tag.name"
            >#{{tag.name}}</v-chip>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black darken-1" text @click="start_stream = false">Cancel</v-btn>
        <v-dialog v-model="select_class" max-width="780px">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="font-weight-black">Continue</v-btn>
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
                    <v-dialog v-model="is_conference" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="font-weight-black"
                          color="black darken-1"
                          text
                          v-on="on"
                        >{{classes_cast.filter(classroom => (classroom.value == true)).length > 0 ? 'Yes' : 'No'}}</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="title font-weight-regular">Is this a conference call?</span>
                        </v-card-title>
                        <v-card-text>
                          <p class="mt-4">
                            Click
                            <span class="font-weight-bold">YES</span> for a conference call and
                            <span class="font-weight-bold">NO</span> for just streaming.
                          </p>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            @click="start_stream = select_class = select_classes = is_conference = false"
                          >Yes</v-btn>
                          <v-btn
                            text
                            @click="start_stream = select_class = select_classes = is_conference = false"
                          >No</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
export default {
  data: () => ({
    start_stream: false,
    tags: [
      { name: "web-apps", value: false },
      { name: "design-patterns", value: false },
      { name: "batch6", value: false },
      { name: "html", value: false },
      { name: "batch8", value: false },
      { name: "batch7", value: false }
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
    ]
  }),
  is_conference: false
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
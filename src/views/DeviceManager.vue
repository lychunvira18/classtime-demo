<template>
  <div class="ma-10">
    <v-row class="my-12">
      <h1 class="display-1">Device Manager</h1>
      <v-spacer></v-spacer>
      <v-btn text>Add New Device</v-btn>
    </v-row>

    <v-dialog v-model="editDevice" width="500px">
      <v-card>
        <v-card-title>
          <span class="title font-weight-regular">Edit device</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Enter a new device name"></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="editDevice = false">Cancel</v-btn>
          <v-btn text @click="editDevice = false">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card
      flat
      v-for="device in devices"
      :key="device.deviceId"
      class="my-4"
      style="border-radius: 10px"
    >
      <v-expansion-panels>
        <v-expansion-panel>
          <v-container>
            <v-row class="px-3">
              <v-col cols="10" class="text-left">
                <div class="headline">{{ device.name }}</div>
                <div
                  :class="
                    (device.isOnline ? 'green--text' : 'red--text') +
                      ' font-weight-bold body-1 text-uppercase mt-4'
                  "
                >{{ device.isOnline ? "Online" : "Offline" }}</div>
              </v-col>
              <v-col cols="2" class="d-flex justify-end align-center">
                <div class="ml-4">
                  <v-btn icon @click.stop="editDevice = true" v-if="user.role === 'Admin'">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>

          <v-expansion-panel-header>
            <!-- <div class="link">Show Details</div> -->
            <span class="overline">Show details</span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="subtitle-1">
              <span class="font-weight-bold">
                {{
                device.isConnected ? "Connected to: " : ""
                }}
              </span>
              {{ device.isConnected ? device.connectedDevice : "Not Connected" }}
            </div>
            <!-- <div v-if="device.isStreaming">Currently Streaming: {{device.currentlyStreaming}}</div>
            <div v-if="!device.isStreaming">Not Streaming</div>-->
            <div class="subtitle-1">
              <span class="font-weight-bold">
                {{
                device.isStreaming ? "Currently Streaming: " : ""
                }}
              </span>
              {{ device.isStreaming ? device.currentlyStreaming : "Not Streaming" }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
// import axios from 'axios'
// import io from 'socket.io-client'

export default {
  name: "device-manager",
  data() {
    return {
      editDevice: false,
      devices: [
        {
          id: 1,
          name: "Device 1",
          isOnline: true,
          isConnected: true,
          connectedDevice: "Camera 1",
          isStreaming: true,
          currentlyStreaming: "Design Patterns"
        },
        {
          id: 2,
          name: "Device 2",
          isOnline: true,
          isConnected: true,
          connectedDevice: "Camera 2",
          isStreaming: false,
          currentlyStreaming: null
        },
        {
          id: 3,
          name: "Device 3",
          isOnline: false,
          isConnected: false,
          connectedDevice: null,
          isStreaming: false,
          currentlyStreaming: null
        }
      ]
    };
  },
  props: {
    user: Object
  }
};
</script>

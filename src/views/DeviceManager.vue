<template>
  <div class="ma-10">
    <v-row class="my-12">
      <h1 class="display-1">Device Manager</h1>
      <v-spacer></v-spacer>
      <v-btn text>Add New Device</v-btn>
    </v-row>

    <v-card v-for="device in devices" :key="device.id" class="my-5">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-dialog v-model="editDevice" width="500px">
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

                <v-container>
                  <v-text-field label="Enter New Device Name"></v-text-field>
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="editDevice = false">Cancel</v-btn>
                  <v-btn text @click="editDevice = false">Confirm</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <div class="d-flex justify-lg-space-between pa-4">
              <v-card flat>
                <span class="headline">
                  <v-btn icon @click.stop="editDevice = true" v-if="user.role === 'Admin'">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  {{device.name}}
                </span>
              </v-card>
              <v-card flat>
                <span
                  :class="(device.isOnline ? 'green--text' : 'red--text') + ' font-weight-bold body-1 text-uppercase'"
                >{{device.isOnline ? 'Online' : 'Offline'}}</span>
              </v-card>
            </div>
            <!-- <div class="headline">{{device.name}}</div>

            <div
              :class="(device.isOnline ? 'green--text' : 'red--text') + ' font-weight-bold body-1'"
            >{{device.isOnline ? 'Online' : 'Offline'}}</div>-->
            <!-- <div v-if="!device.isOnline" class="red--text font-weight-bold body-1">Offline</div> -->
          </v-expansion-panel-header>

          <v-divider></v-divider>

          <v-expansion-panel-content class="ma-5">
            <!-- <div v-if="device.isConnected">Connected to: {{device.connectedDevice}}</div>
            <div v-if="!device.isConnected">Not Connected</div>-->
            <div class="subtitle-1">
              <span class="font-weight-bold">{{device.isConnected ? 'Connected to: ' : ''}}</span>
              {{device.isConnected ? device.connectedDevice : 'Not Connected'}}
            </div>
            <!-- <div v-if="device.isStreaming">Currently Streaming: {{device.currentlyStreaming}}</div>
            <div v-if="!device.isStreaming">Not Streaming</div>-->
            <div class="subtitle-1">
              <span class="font-weight-bold">{{device.isStreaming ? 'Currently Streaming: ' : ''}}</span>
              {{device.isStreaming ? device.currentlyStreaming : 'Not Streaming'}}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
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
      ],
      user: {
        name: "Ly Chunvira",
        role: "Lecturer"
      }
    };
  }
};
</script>
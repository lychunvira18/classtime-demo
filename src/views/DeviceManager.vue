<template>
  <div class="ma-10">
    <v-row>
      <h1>Device Manager</h1>
      <v-spacer></v-spacer>
      <v-btn>Add New Device</v-btn>
    </v-row>

    <v-card v-for="device in devices" :key="device.id" class="my-5">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <div class="headline">
              <v-btn icon @click.stop="editDevice = true">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-dialog v-model="editDevice" width="500px">
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>Edit Device</v-card-title>

                  <v-container class="mx-auto">
                    <v-text-field label="Enter New Device Name"></v-text-field>
                  </v-container>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn outlined text @click.stop="editDevice = false">Cancel</v-btn>
                    <v-btn outlined text @click.stop="editDevice = false">Confirm</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              {{device.name}}
            </div>
            <v-spacer></v-spacer>
            <div
              v-if="device.isOnline"
              class="green--text text-right font-weight-bold body-1"
            >Online</div>
            <div
              v-if="!device.isOnline"
              class="red--text text-right font-weight-bold body-1"
            >Offline</div>
          </v-expansion-panel-header>

          <v-divider></v-divider>

          <v-expansion-panel-content class="ma-5">
            <div v-if="device.isConnected">Connected to: {{device.connectedDevice}}</div>
            <div v-if="!device.isConnected">Not Connected</div>
            <div v-if="device.isStreaming">Currently Streaming: {{device.currentlyStreaming}}</div>
            <div v-if="!device.isStreaming">Not Streaming</div>
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
      ]
    };
  }
};
</script>
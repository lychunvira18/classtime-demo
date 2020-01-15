<template>
	<div class="ma-10">
		<v-row class="my-12">
			<h1 class="display-1">Device Manager</h1>
			<v-spacer></v-spacer>
			<v-btn text>Add New Device</v-btn>
		</v-row>

		<v-card v-for="device in devices" :key="device.deviceId" class="my-5">
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<v-dialog v-model="editDevice" width="500px">
							<v-card>
								<v-card-title class="headline grey lighten-2" primary-title
									>Edit Device</v-card-title
								>

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
                  <v-btn icon @click.stop="editDevice = true">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  {{device.deviceName}}
                </span>
              </v-card>
              <v-card flat>
                <span
                  :class="(device.online ? 'green--text' : 'red--text') + ' font-weight-bold body-1 text-uppercase'"
                >{{device.online ? 'Online' : 'Offline'}}</span>
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
							<span class="font-weight-bold">{{
								device.cameraPlugged ? 'Connected to: ' : ''
							}}</span>
							{{ device.cameraPlugged ? '' : 'Not Connected' }}
						</div>
						<!-- <div v-if="device.isStreaming">Currently Streaming: {{device.currentlyStreaming}}</div>
            <div v-if="!device.isStreaming">Not Streaming</div>-->
						<div class="subtitle-1">
							<span class="font-weight-bold">{{
								device.streaming ? 'Currently Streaming: ' : ''
							}}</span>
							{{ device.streaming ? '' : 'Not Streaming' }}
						</div>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-card>
	</div>
</template>

<script>
// import axios from 'axios'
import io from 'socket.io-client'

export default {
	name: 'device-manager',
	data() {
		return {
			socket: io('http://10.10.18.24:3000'),
			editDevice: false,
			devices: []
		}
	},
	methods: {
		getDevices() {
			this.socket.on('info', device_info => {
				this.devices = device_info
				console.log('hi')
			})
		}
	},
	mounted() {
		this.getDevices()
	}
}
</script>

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import StreamRoom from '../views/StreamRoom'
import DeviceManager from '../views/DeviceManager'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/stream',
		name: 'stream',
		component: StreamRoom
	},
	{
		path: '/device-manager',
		name: 'device-manager',
		component: DeviceManager
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router

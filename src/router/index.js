import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/info',
		name: 'Info',
		component: () => import('../views/Info.vue')
	},
	{
		path: '/cooperation',
		name: 'Cooperation',
		component: () => import('../views/Cooperation.vue')
	},
	{
		path: '/connect',
		name: 'Connect',
		component: () => import('../views/Connect.vue')
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes
})

export default router

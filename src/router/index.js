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
		path: '/comein',
		name: 'Comein',
		component: () => import('../views/Comein.vue')
	},
	{
		path: '/product',
		name: 'Product',
		component: () => import('../views/Product.vue')
	},
	{
		path: '/service',
		name: 'Service',
		component: () => import('../views/Service.vue')
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
		path: '/search',
		name: 'Search',
		component: () => import('../views/Search.vue')
	},
	{
		path: '/project_detail',
		name: 'ProjectDetail',
		component: () => import('../views/ProjectDetail.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
	}
})

export default router

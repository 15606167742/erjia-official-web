<template>
	<div class="top-menu">
		<el-image class="logo" :src="require('@/assets/img/header/logo.png')" fit="contain"></el-image>
		<div class="tabs">
			<div class="tab" :class="{active: $route.path==tab.path}" :key="tab.path" v-for="tab in tabs"
				@click="gotoPath(tab.path)">{{tab.text}}</div>
		</div>
		<i class="el-icon-menu my-menu" @click="showMenu=true"></i>
		<el-drawer :visible="showMenu" direction="rtl" :with-header="false" :show-close="false" :size="200"
			:modal-append-to-body="false" :before-close="handleClose">
			<el-menu :default-active="$route.path" background-color="#FFF" text-color="#333"
				active-text-color="var(--color-t-active)" @select="gotoPath">
				<el-menu-item :index="tab.path" :key="tab.path" v-for="tab in tabs">
					<i class="el-icon-document"></i>
					<span slot="title">{{tab.text}}</span>
				</el-menu-item>
			</el-menu>
		</el-drawer>
	</div>
</template>

<script>
	export default {
		name: 'TopMenu',
		data() {
			return {
				tabs: [{
						path: '/home',
						text: '首页'
					},
					{
						path: '/comein',
						text: '走进尔家'
					},
					{
						path: '/product',
						text: '产品介绍'
					},
					{
						path: '/service',
						text: '运营服务'
					},
					{
						path: '/info',
						text: '信息中心'
					},
					{
						path: '/cooperation',
						text: '商务合作'
					},
					{
						path: '/connect',
						text: '联系我们'
					},
				],
				showMenu: false,
			};
		},
		mounted() {},
		methods: {
			gotoPath(path) {
				if (this.$route.path != path) {
					this.$router.push({
						path
					})
				}
			},
			handleClose(done) {
				done();
				this.showMenu = false;
			}
		}
	};
</script>

<style scoped lang="scss">
	.top-menu {
		position: sticky;
		top: 0;
		z-index: 777;
		height: 118px;
		padding: 0 80px;
		background-color: var(--color-bg-default);
		display: flex;
		justify-content: space-between;
		align-items: center;

		.logo {
			height: 50px;
		}

		.tabs {
			font-size: 2rem;
			color: #333;
			letter-spacing: 0.2rem;
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;

			.tab {
				margin: 0 15px;
				cursor: pointer;

				&.active {
					font-size: 2.5rem;
					color: var(--color-t-active);
				}

				&:hover {
					color: var(--color-t-active);
					transition-duration: 0.3s;
				}
			}
		}

		.my-menu {
			font-size: 3rem;
			color: var(--color-t-active);
			cursor: pointer;
		}
	}

	@media screen and (max-width: 1080px) {
		.top-menu {
			padding: 0 40px;

			.tabs {
				display: none;
			}

			.my-menu {
				display: block;
			}
		}
	}

	@media screen and (min-width: 1080px) {
		.top-menu {
			padding: 0 80px;

			.tabs {
				display: flex;
			}

			.my-menu {
				display: none;
			}
		}
	}
</style>

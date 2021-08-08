<template>
	<div class="top-menu" :class="{ scroll: scrollFlag }">
		<div class="logo"></div>
		<!-- <el-image class="logo" :src="scrollFlag?require('@/assets/img/header/logo_scroll.png'):require('@/assets/img/header/logo.png')" fit="contain"></el-image> -->
		<div class="tabs">
			<div class="tab" :class="{ active: $route.path == tab.path }" :key="tab.path" v-for="tab in tabs" @click="gotoPath(tab.path)">
				{{ tab.text }}
				<div class="anchors" v-if="tab.anchorList">
					<div class="anchor" :key="anchor.activeTab" @click.stop="gotoPath(tab.path, anchor.activeTab)" v-for="anchor in tab.anchorList">{{ anchor.text }}</div>
				</div>
			</div>
		</div>
		<i class="el-icon-menu my-menu" @click="showMenu = true"></i>
		<el-drawer :visible="showMenu" direction="rtl" :with-header="false" :show-close="false" :size="200" :modal-append-to-body="false" :before-close="handleClose">
			<el-menu :default-active="$route.path" background-color="#FFF" text-color="#333" active-text-color="var(--color-t-active)">
				<template v-for="tab in tabs">
					<el-submenu :index="tab.path" :key="tab.path" v-if="tab.anchorList">
						<template slot="title">
							<i class="el-icon-folder"></i>
							<span>{{ tab.text }}</span>
						</template>
						<el-menu-item :index="anchor.activeTab + ''" :key="anchor.activeTab" @click="gotoPath(tab.path, anchor.activeTab)" v-for="anchor in tab.anchorList">
							<i class="el-icon-document"></i>
							<span slot="title">{{ anchor.text }}</span>
						</el-menu-item>
					</el-submenu>
					<el-menu-item :index="tab.path" :key="tab.path" @click="gotoPath(tab.path)" v-else>
						<i class="el-icon-document"></i>
						<span slot="title">{{ tab.text }}</span>
					</el-menu-item>
				</template>
			</el-menu>
		</el-drawer>
	</div>
</template>

<script>
export default {
	name: 'TopMenu',
	data() {
		return {
			scrollFlag: false,
			tabs: [
				{
					path: '/home',
					text: '首页'
				},
				{
					path: '/comein',
					text: '走进尔家',
					anchorList: [
						{
							activeTab: 1,
							text: '公司介绍'
						},
						{
							activeTab: 2,
							text: '公司视频'
						},
						{
							activeTab: 3,
							text: '管理团队'
						},
						{
							activeTab: 4,
							text: '商业模式'
						},
						{
							activeTab: 5,
							text: '发展历程'
						}
					]
				},
				{
					path: '/product',
					text: '产品介绍',
					anchorList: [
						{
							activeTab: 1,
							text: '产品亮点'
						},
						{
							activeTab: 2,
							text: '产品系列'
						},
						{
							activeTab: 3,
							text: '新售项目'
						}
					]
				},
				{
					path: '/service',
					text: '运营服务',
					anchorList: [
						{
							activeTab: 1,
							text: '星级酒店服务标准'
						},
						{
							activeTab: 2,
							text: '全时私属管家守候'
						},
						{
							activeTab: 3,
							text: '公区多维管理'
						},
						{
							activeTab: 4,
							text: '社群联盟运营'
						}
					]
				},
				{
					path: '/info',
					text: '信息中心',
					anchorList: [
						{
							activeTab: 1,
							text: '新闻聚焦'
						},
						{
							activeTab: 2,
							text: '社群活动'
						},
						{
							activeTab: 3,
							text: '促销活动'
						}
					]
				},
				{
					path: '/cooperation',
					text: '商务合作',
					anchorList: [
						{
							activeTab: 1,
							text: '我要投稿'
						},
						{
							activeTab: 2,
							text: '合作形式'
						}
					]
				},
				{
					path: '/connect',
					text: '联系我们',
					anchorList: [
						{
							activeTab: 1,
							text: '加入尔家'
						},
						{
							activeTab: 2,
							text: '联系我们'
						}
					]
				}
			],
			showMenu: false
		};
	},
	mounted() {
		this.handleScroll();
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop > 0) {
				this.scrollFlag = true;
			} else {
				this.scrollFlag = false;
			}
		},
		gotoPath(path, activeTab) {
			if (this.$route.path != path || this.$route.query.activeTab != activeTab) {
				this.$router.push({
					path,
					query: {
						activeTab
					}
				});
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
	position: fixed;
	top: 0;
	z-index: 777;
	box-sizing: border-box;
	width: 100%;
	height: 118px;
	padding: 0 80px;
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&.scroll,
	&:hover {
		background-color: var(--color-bg-default);
		.logo {
			background-image: url(../assets/img/header/logo_scroll.png);
		}

		.tabs {
			color: #333;
		}
	}

	.logo {
		width: 200px;
		height: 50px;
		background-image: url(../assets/img/header/logo.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.tabs {
		font-size: 2rem;
		line-height: 118px;
		color: var(--color-t-white);
		letter-spacing: 0.2rem;
		display: flex;
		align-items: flex-end;
		flex-wrap: wrap;

		.tab {
			margin: 0 10px;
			cursor: pointer;

			&.active {
				font-size: 2.5rem;
				color: var(--color-t-active);
			}

			&:hover {
				color: var(--color-t-active);
				transition-duration: 0.3s;
				.anchors {
					visibility: visible;
					height: 80px;
					transition: height 0.5s;
				}
			}

			.anchors {
				position: absolute;
				left: 0;
				top: 118px;
				z-index: 777;
				width: 100vw;
				height: 20px;
				font-size: 1.6rem;
				line-height: normal;
				color: #333;
				letter-spacing: 0.1rem;
				background-color: var(--color-bg-default);
				border-top: 1px solid #eeeeee;
				display: flex;
				justify-content: center;
				align-items: center;
				visibility: hidden;

				.anchor {
					margin: 0 10px;

					&:hover {
						color: var(--color-t-active);
						transition-duration: 0.3s;
					}
				}
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

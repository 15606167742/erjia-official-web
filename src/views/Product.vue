<template>
	<div class="product">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="bg"></div>
			<div class="box1">
				<div class="title">
					<div class="title-row1">
						Beyond the
						<br />
						apartment
					</div>
					<div class="title-row2">不只是公寓</div>
				</div>
				<el-image class="box1-img" :src="imgResource + '/product/highlight1.png'" fit="contain"></el-image>
			</div>
			<div class="box2">
				<el-image class="box2-img" :src="imgResource + '/product/highlight2.png'" fit="contain"></el-image>
				<div class="text">
					尔家全系公寓产品以Box设计理念、立体集成化原则，严格执行人体工程学原理，为居住者定制最舒适的家居尺度、设计最合理的收纳空间，使公寓产品回归居住本质，营造引领时代的生活空间和生活方式！
				</div>
			</div>
			<div class="box2 sp">
				<el-image class="box2-img" :src="imgResource + '/product/highlight3.png'" fit="contain"></el-image>
				<div class="text">
					尔家全系公寓产品以Box设计理念、立体集成化原则，严格执行人体工程学原理，为居住者定制最舒适的家居尺度、设计最合理的收纳空间，使公寓产品回归居住本质，营造引领时代的生活空间和生活方式！
				</div>
			</div>
			<div class="box1 sp">
				<div class="title">
					<div class="title-row1">Check in with bags</div>
					<div class="title-row2">全装全配 拎包入住</div>
				</div>
				<el-image class="box1-img" :src="imgResource + '/product/highlight4.png'" fit="contain"></el-image>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="row1">
				<span class="row1_l">尔家</span>
				<span class="row1_r">雅寓</span>
				<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">即使在镶金石银盛行的时代，品味也没有失去它的光辉</div>
			<div class="row3">
				<div class="box" :key="house.id" v-for="house in houseList1" @click="gotoDetail(house.id)">
					<el-image class="my-img" :src="house.img" fit="cover"></el-image>
					<div class="text">
						<div class="name">{{ house.name }}</div>
						<div class="location">
							<el-image class="location-icon" :src="require('@/assets/img/product/location.png')" fit="contain"></el-image>
							<div class="location-text">{{ house.location }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">尔家</span>
				<span class="row1_r">酒店</span>
				<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">即使在镶金石银盛行的时代，品味也没有失去它的光辉</div>
			<div class="row3">
				<div class="box" :key="house.id" v-for="house in houseList2" @click="gotoDetail(house.id)">
					<el-image class="my-img" :src="house.img" fit="cover"></el-image>
					<div class="text">
						<div class="name">{{ house.name }}</div>
						<div class="location">
							<el-image class="location-icon" :src="require('@/assets/img/product/location.png')" fit="contain"></el-image>
							<div class="location-text">{{ house.location }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<div class="box" :key="item.id" v-for="item in itemList" @click="gotoDetail(item.id)">
				<el-image class="my-img" :src="item.img" fit="cover"></el-image>
				<div class="content">
					<div class="en">{{ item.en }}</div>
					<div class="title">{{ item.title }}</div>
					<div class="text">{{ item.text }}</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

import { projectList } from '@/network/project.js';

export default {
	name: 'Product',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			info: {
				// banner: require('@/assets/img/product/banner1.png'),
				banner: WEBCONFIG.resource_url_img + '/product/banner1.png',
				title: '产品介绍',
				title_en: 'Product introduction',
				tabList: [
					{
						id: 1,
						active: true,
						banner: '/product/banner1.png',
						img: require('@/assets/img/product/tab1.png'),
						name: '产品亮点',
						name_en: 'Product highlights'
					},
					{
						id: 2,
						active: false,
						banner: '/product/banner1.png',
						img: require('@/assets/img/product/tab2.png'),
						name: '产品系列',
						name_en: 'Product line'
					},
					{
						id: 3,
						active: false,
						banner: '/product/banner1.png',
						img: require('@/assets/img/product/tab3.png'),
						name: '新售项目',
						name_en: 'New items'
					}
				]
			},
			activeTab: 1,
			houseList1: [
				{
					id: 1,
					// img: require('@/assets/img/product/house1.png'),
					img: WEBCONFIG.resource_url_img + '/product/house1.png',
					name: '无锡绿地观澜湾项目',
					location: '无锡·梁溪区'
				},
				{
					id: 2,
					// img: require('@/assets/img/product/house2.png'),
					img: WEBCONFIG.resource_url_img + '/product/house2.png',
					name: '成都绿地GIC项目',
					location: '成都·梁溪区'
				},
				{
					id: 3,
					// img: require('@/assets/img/product/house3.png'),
					img: WEBCONFIG.resource_url_img + '/product/house3.png',
					name: '无锡绿地天空树项目',
					location: '成都·梁溪区'
				}
			],
			houseList2: [
				{
					id: 1,
					// img: require('@/assets/img/product/house1.png'),
					img: WEBCONFIG.resource_url_img + '/product/house1.png',
					name: '无锡绿地观澜湾项目',
					location: '无锡·梁溪区'
				},
				{
					id: 2,
					// img: require('@/assets/img/product/house2.png'),
					img: WEBCONFIG.resource_url_img + '/product/house2.png',
					name: '成都绿地GIC项目',
					location: '成都·梁溪区'
				},
				{
					id: 3,
					// img: require('@/assets/img/product/house3.png'),
					img: WEBCONFIG.resource_url_img + '/product/house3.png',
					name: '无锡绿地天空树项目',
					location: '成都·梁溪区'
				}
			],
			itemList: [
				{
					id: 1,
					// img: require('@/assets/img/product/item1.png'),
					img: WEBCONFIG.resource_url_img + '/product/item1.png',
					en: 'TOD',
					title: '尔家雅寓无锡绿地天空树项目',
					text: '48m²全装托管地铁小户,超值投资,跑赢通货膨胀'
				}
			]
		};
	},
	mounted() {
		this.jump();
		this.getProjectList1();
		this.getProjectList2();
		this.getProjectList3();
	},
	watch: {
		$route: {
			handler() {
				this.jump();
			},
			deep: true
		}
	},
	methods: {
		jump() {
			if (this.$route.query.activeTab) {
				this.handleChange(parseInt(this.$route.query.activeTab));
			} else {
				this.handleChange(1);
			}
		},
		handleChange(id) {
			this.activeTab = id;
			this.activeNews = null;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
				} else {
					tab.active = false;
				}
			});
		},
		getProjectList1() {
			projectList({ pageNum: 1, pageSize: 3, series: 1 }).then(data => {
				this.houseList1.splice(0, this.houseList1.length);
				this.houseList1 = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						name: item.name,
						location: item.city + '·' + item.qu
					};
				});
			});
		},
		getProjectList2() {
			projectList({ pageNum: 1, pageSize: 3, series: 2 }).then(data => {
				this.houseList2.splice(0, this.houseList2.length);
				this.houseList2 = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						name: item.name,
						location: item.city + '·' + item.qu
					};
				});
			});
		},
		getProjectList3() {
			projectList({ pageNum: 1, pageSize: 3, showType: 4 }).then(data => {
				this.itemList.splice(0, this.itemList.length);
				this.itemList = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						en: 'TOD',
						title: item.name,
						text: item.indexBrief
					};
				});
			});
		},
		gotoDetail(id) {
			this.$router.push({
				path: '/project_detail',
				query: {
					id
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.product {
	background-color: var(--color-bg-default);
	overflow-x: hidden;

	.content1 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.box1 {
			.title {
				color: #666666;
				.title-row1 {
					font-size: 3.8rem;
					line-height: 5rem;
				}
				.title-row2 {
					font-size: 3rem;
				}
			}
			.box1-img {
				display: block;
			}
		}
		.box2 {
			.text {
				font-size: 1.8rem;
				line-height: 2.5rem;
				color: #666666;
				margin-top: 40px;
			}
			.box2-img {
				display: block;
			}
		}
	}

	.content2 {
		.row1 {
			position: relative;
			margin-top: 60px;
			font-size: 3rem;
			letter-spacing: 0.2rem;
			font-weight: bold;
			text-align: center;
			.row1_l {
				color: #666666;
			}
			.row1_r {
				color: var(--color-t-active);
			}
			.row1_split {
				width: 30%;
				max-width: 520px;
				min-width: 300px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		.row2 {
			margin-top: 20px;
			font-size: 1.6rem;
			letter-spacing: 0.1rem;
			text-align: center;
			color: #999999;
		}
		.row3 {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			.box {
				cursor: pointer;
				.my-img {
					display: block;
					border-radius: 8px;
				}
				.text {
					margin-top: 40px;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
					.name {
						font-size: 2.4rem;
						color: #333333;
					}
					.location {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.location-icon {
							width: 24px;
							height: 24px;
						}
						.location-text {
							margin-left: 10px;
							font-size: 1.8rem;
							color: #333333;
						}
					}
				}
			}
		}
	}

	.content3 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.box {
			box-shadow: 0 0 10px 0 #999999;
			cursor: pointer;
			.my-img {
				display: block;
			}
			.content {
				padding: 30px;
				height: 250px;
				.en {
					font-size: 1.8rem;
					font-weight: bold;
					color: var(--color-t-active);
				}
				.title {
					margin-top: 5px;
					font-size: 2.8rem;
					line-height: 3.5rem;
					color: #cccccc;
				}
				.text {
					margin-top: 20px;
					font-size: 1.8rem;
					line-height: 2.5rem;
					color: #666666;
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.product {
		.content1 {
			margin-bottom: 60px;
			.bg {
				display: none;
			}
			.box1 {
				flex-basis: 100%;
				.title {
					text-align: center;
					.title-row1 {
						margin-top: 30px;
					}
					.title-row2 {
						margin-top: 30px;
					}
				}
				.box1-img {
					margin-top: 30px;
				}
			}
			.box2 {
				flex-basis: 100%;
				.box2-img {
					margin-top: 30px;
				}
				.text {
					padding: 20px;
				}
			}
		}

		.content2 {
			margin: 20px 20px 60px;
			.row3 {
				margin-top: 30px;
				margin-bottom: 60px;
				.box {
					margin-top: 30px;
					flex-basis: 100%;
					.my-img {
						height: 200px;
					}
					.text {
						.name {
							margin-top: 20px;
							flex-basis: 100%;
						}
						.location {
							margin-top: 20px;
							flex-basis: 100%;
						}
					}
				}
			}
		}

		.content3 {
			margin: 20px 20px 60px;
			.box {
				margin-bottom: 30px;
				flex-basis: 100%;
				.my-img {
					height: 200px;
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.product {
		.content1 {
			position: relative;
			z-index: 0;
			margin: 120px auto 60px;
			width: 70%;
			min-width: 1000px;
			.bg {
				position: absolute;
				z-index: -1;
				top: -60px;
				width: 100vw;
				height: 800px;
				background-color: #fafafa;
			}
			.box1 {
				margin-bottom: 100px;
				flex-basis: 35%;
				.title {
					padding-right: 100px;
					.title-row1 {
						margin-top: 70px;
					}
					.title-row2 {
						margin-top: 70px;
						text-align: right;
					}
				}
				.box1-img {
					margin-top: 150px;
				}
				&.sp {
					flex-basis: 40%;
					.title {
						padding-right: 0;
						.title-row2 {
							text-align: center;
						}
					}
					.box1-img {
						margin-left: 50px;
					}
				}
			}
			.box2 {
				margin-bottom: 100px;
				flex-basis: 50%;
				.text {
					padding: 0 20px;
				}
				&.sp {
					flex-basis: 40%;
					.text {
						padding: 0;
					}
				}
			}
		}

		.content2 {
			margin: 20px auto 60px;
			width: 70%;
			min-width: 1000px;
			.row3 {
				margin-top: 80px;
				margin-bottom: 140px;
				.box {
					flex-basis: 30%;
					.my-img {
						height: 300px;
					}
					.text {
						.name {
							margin-bottom: 10px;
						}
						.location {
							margin-bottom: 10px;
						}
					}
				}
			}
		}

		.content3 {
			margin: 20px auto 60px;
			width: 70%;
			min-width: 1000px;
			.box {
				flex-basis: 25%;
				.my-img {
					height: 250px;
				}
			}
		}
	}
}
</style>

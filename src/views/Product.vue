<template>
	<div class="product">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="institute">
				<div class="row1">
					<span class="row1_l">研究院</span>
					<span class="row1_r">介绍</span>
					<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
				</div>
				<div class="row2">Introduction to the Institute</div>
				<div class="introduction">
					{{institute.introduction}}
				</div>
				<div class="line" :key="index" v-for="(tip, index) in institute.tips">
					<div class="graph">
						<div class="g g1"></div>
						<div class="g g2"></div>
						<div class="g g3"></div>
						<div class="num">{{tip.num}}</div>
					</div>
					<div class="text">
						{{tip.text}}
					</div>
				</div>
			</div>
			<div class="advantage">
				<div class="row1">
					<span class="row1_l">四大产品</span>
					<span class="row1_r">优势</span>
					<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
				</div>
				<div class="row2">Four product advantages</div>
				<div class="box" :key="index" v-for="(advantage, index) in advantages">
					<div class="content">
						<div class="line1">
							<div class="num">
								{{advantage.num}}
							</div>
							<div class="title">
								{{advantage.title}}
							</div>
						</div>
						<div class="line2">
							{{advantage.content}}
						</div>
					</div>
					<el-image class="my-img" :src="advantage.img" fit="contain"></el-image>
				</div>
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
			<div class="row2">绝佳的游玩地理位置，是您来常州的不二之选</div>
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
					}
				]
			},
			activeTab: 1,
			institute: {
				introduction: '作为国内高端服务是公寓领军品牌\n上海尔家率先成立国内首家公寓主题产品设计研究院，力邀清华，同济等国内一线学府的杰出设计人才加盟\n坚持制定设计方向专注打造业内领先的创新公寓产品。',
				tips: [
					{
						num: '04',
						text: '2020年全装全配+全屋智能+绿色环保+百变空间'
					},
					{
						num: '03',
						text: '2019年全装全配+全屋智能+绿色环保'
					},
					{
						num: '02',
						text: '2017年全装全配+智能家居'
					},
					{
						num: '01',
						text: '2016年全装全配'
					},
				]
			},
			advantages: [
				{
					num: '01',
					title: '全装全配，拎包入住',
					content: '集中定制化装修\n家具家电配备齐全\n提升居住品质，省去装修烦恼，\n降低装修成本，省力省时更省心。',
					img: require('@/assets/img/product/advantage1.png'),
				},
				{
					num: '02',
					title: '百变空间，极致收纳',
					content: '尔家产品以Box设计理念、立体集成化原则，\n严格执行人体工程学原理，\n为居住者定制最舒适的家居尺度、设计最合理的收纳空间，\n通过不同家居功能模块变化组合，\n快速实现一套居所多种场景的灵动切换。',
					img: require('@/assets/img/product/advantage2.png'),
				},
				{
					num: '03',
					title: '智能家居，科技生活',
					content: '小米智能家居解决方案深度介入\n个性化定制场景模式\n摆脱传统智能家居实体终端控制的束缚\n实现语音操控、人体感应，\n真智能、全自动的智能家居体验',
					img: require('@/assets/img/product/advantage3.png'),
				},
				{
					num: '04',
					title: '健康环保，全面呵护',
					content: '全屋装修主材严格执行绿色环保标准确保健康环保、安全无害的家居环境深度研发健康人居解决方案引领健康住宅未来发展方向。',
					img: require('@/assets/img/product/advantage4.png'),
				},
			],
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
			]
		};
	},
	mounted() {
		this.jump();
		this.getProjectList1();
		this.getProjectList2();
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
			projectList({ pageNum: 1, pageSize: 999, series: 1 }).then(data => {
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
			projectList({ pageNum: 1, pageSize: 999, series: 2 }).then(data => {
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
		.row1{
			.row1_l{
				color: #A9A9A9 !important;
			}
		}
		.row2{
			color: #A9A9A9 !important;
		}
		.institute{
			overflow: hidden;
			background-color: #F2F2F2;
			.introduction{
				font-size: 1.6rem;
				line-height: 3rem;
				color: #333333;
				text-align: center;
				white-space: pre-line;
			}
			.line{
				display: flex;
				align-items: center;
				.graph{
					width: 5.196rem;
					height: 5.999rem;
					position: relative;
					transform: translateX(50%);
					display: flex;
					justify-content: center;
					align-items: center;
					.g{
						width: 5.196rem;
						height: 3rem;
						position: absolute;
						z-index: 1;
						background-color: var(--color-t-active);
					}
					.g1{
						transform: rotateZ(60deg);
					}
					.g2{
						transform: rotateZ(120deg);
					}
					.num{
						position: relative;
						z-index: 2;
						color: var(--color-t-white);
						font-size: 3rem;
						font-weight: bold;
						line-height: 3rem;
						
					}
				}
				.text{
					flex-grow: 1;
					line-height: 5.999rem;
					padding: 0 3rem;
					background-color: #E5E5E5;
					font-size: 2.4rem;
					letter-spacing: 0.1rem;
					color: #858585;
					font-weight: bold;
					display: flex;
					justify-content: center;
					align-items: center;
				}
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

	.row1 {
		position: relative;
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
		margin-top: 15px;
		font-size: 1.6rem;
		text-align: center;
		color: #333333;
	}
}

@media screen and (max-width: 1080px) {
	.product {
		.content1 {
			.institute{
				padding-bottom: 30px;
				.introduction{
					margin: 30px 10px;
				}
				.line{
					margin: 50px 10px;
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
	}
	.row1 {
		margin-top: 50px;
	}
}

@media screen and (min-width: 1080px) {
	.product {
		.content1 {
			.institute{
				padding-bottom: 60px;
				.introduction{
					margin: 60px auto;
					width: 50%;
					min-width: 800px;
				}
				.line{
					margin: 50px auto;
					width: 50%;
					min-width: 800px;
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
					margin: 0 1.5% 50px;
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
	}
	.row1 {
		margin-top: 80px;
	}
}
</style>

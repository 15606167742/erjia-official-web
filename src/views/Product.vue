<template>
	<div class="product">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="institute">
				<div class="row1">
					<span class="row1_l">研究院</span>
					<span class="row1_r">介绍</span>
					<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain">
					</el-image>
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
					<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain">
					</el-image>
				</div>
				<div class="row2">Four product advantages</div>
				<div class="box" :class="{'reverse':index==1, 'bg-grey':index==2, 'col':index==3}" :key="index"
					v-for="(advantage, index) in advantages">
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
				<span class="row1_r">酒店</span>
				<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Uhome Hotel</div>
			<div class="sales">
				<div class="sale" :key="house.id" v-for="house in houseList1">
					<el-image class="my-img" :src="house.img" fit="cover"></el-image>
					<div class="content">
						<div class="row">
							<div class="box">
								<div class="title">{{ house.title }}</div>
								<div class="adj">{{ house.adj }}</div>
							</div>
							<div class="more" @click="gotoDetail(house.id)">了解更多</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">尔家</span>
				<span class="row1_r">雅寓</span>
				<el-image class="row1_split" :src="require('@/assets/img/product/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Uhome Apartment</div>
			<div class="types">
				<div class="type" :class="{selected: t.selected}" :key="index" v-for="(t, index) in types"
					@click="changeType(t)">
					{{t.name}}
				</div>
			</div>
			<div class="type-text">
				{{types.filter(item=>item.selected)[0].text}}
			</div>
			<div class="sales">
				<div class="sale" :key="house.id" v-for="house in houseList2">
					<el-image class="my-img" :src="house.img" fit="cover"></el-image>
					<div class="content">
						<div class="row">
							<div class="box">
								<div class="title">{{ house.title }}</div>
								<div class="adj">{{ house.adj }}</div>
							</div>
							<div class="more" @click="gotoDetail(house.id)">了解更多</div>
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

	import {
		projectList,
		projectTypeList
	} from '@/network/project.js';

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
					tabList: [{
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
					tips: [{
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
				advantages: [{
						num: '01',
						title: '全装全配，拎包入住',
						content: '集中定制化装修\n家具家电配备齐全\n提升居住品质，省去装修烦恼，\n降低装修成本，省力省时更省心。',
						// img: require('@/assets/img/product/advantage1.png'),
						img: WEBCONFIG.resource_url_img + '/product/advantage1.png',
					},
					{
						num: '02',
						title: '百变空间，极致收纳',
						content: '尔家产品以Box设计理念、立体集成化原则，\n严格执行人体工程学原理，\n为居住者定制最舒适的家居尺度、设计最合理的收纳空间，\n通过不同家居功能模块变化组合，\n快速实现一套居所多种场景的灵动切换。',
						// img: require('@/assets/img/product/advantage2.png'),
						img: WEBCONFIG.resource_url_img + '/product/advantage2.png',
					},
					{
						num: '03',
						title: '智能家居，科技生活',
						content: '小米智能家居解决方案深度介入\n个性化定制场景模式\n摆脱传统智能家居实体终端控制的束缚\n实现语音操控、人体感应，\n真智能、全自动的智能家居体验',
						// img: require('@/assets/img/product/advantage3.png'),
						img: WEBCONFIG.resource_url_img + '/product/advantage3.png',
					},
					{
						num: '04',
						title: '健康环保，全面呵护',
						content: '全屋装修主材严格执行绿色环保标准确保健康环保、安全无害的家居环境深度研发健康人居解决方案引领健康住宅未来发展方向。',
						// img: require('@/assets/img/product/advantage4.png'),
						img: WEBCONFIG.resource_url_img + '/product/advantage4.png',
					},
				],
				activeType: '风',
				types: [{
						name: '风系列',
						value: '风',
						text: '风系是尔家旗下为白领阶层在一线城市非核心区域及二、三线城市打造的中端服务式公寓。融合了社交、艺术、文化、运动等内容用开放性思维为企业员工及城市白领提供便捷、融合、无忧的居住体验以及带有社交属性的租住空间。',
						selected: true
					},
					{
						name: '菁系列',
						value: '箐',
						text: '箐系是尔家旗下中高端产品线，在一线城市及新一线城市融合了Home与HoteI的专业品质，将莫兰迪色运用到多元的复合型业态打造绿色环保的生活场景，为有志阶层带来舒适休闲的绿色生活',
						selected: false
					},
					{
						name: '阳系列',
						value: '阳系',
						text: '阳系是尔家旗下高端产品线，主打定制化设计，旨在一线城市的核心区域，为享受品质生活的高端人群，抛开杂乱糟糕的心情，尽情呼吸享受生活，从而提供健康、舒适的居家生活环境;全心全意为尊贵的住客提供超凡的奢华体验，营造专属的精致生活。',
						selected: false
					}
				],
				houseList1: [{
					id: 1,
					// img: require('@/assets/img/product/house1.png'),
					img: WEBCONFIG.resource_url_img + '/product/house1.png',
					title: '无锡绿地观澜湾项目',
					adj: 'LOFT 户型 紧跟潮流'
				}, ],
				houseList2: [{
					id: 1,
					// img: require('@/assets/img/product/house1.png'),
					img: WEBCONFIG.resource_url_img + '/product/house1.png',
					title: '无锡绿地观澜湾项目',
					adj: 'LOFT 户型 紧跟潮流'
				}, ]
			};
		},
		mounted() {
			this.jump();
			this.getProjectList1();
			this.getTypes();
			// this.getProjectList2();
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
			getTypes() {
				projectTypeList().then(data => {
					this.types.splice(0, this.types.length);
					this.types = data.data.map((item, index) => {
						return {
							name: item.key,
							value: item.val,
							selected: index == 0
						}
					})
					this.activeType = this.types[0] && this.types[0].value;
					this.getProjectList2();
				})
			},
			getProjectList1() {
				projectList({
					pageNum: 1,
					pageSize: 999,
					series: 2
				}).then(data => {
					this.houseList1.splice(0, this.houseList1.length);
					this.houseList1 = data.data.map(item => {
						return {
							id: item.id,
							img: item.coverUrl,
							title: item.name,
							adj: item.indexTag,
						};
					});
				});
			},
			getProjectList2() {
				projectList({
					pageNum: 1,
					pageSize: 999,
					series: 1,
					projectType: this.activeType
				}).then(data => {
					this.houseList2.splice(0, this.houseList2.length);
					this.houseList2 = data.data.map(item => {
						return {
							id: item.id,
							img: item.coverUrl,
							title: item.name,
							adj: item.indexTag,
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
			},
			changeType(type) {
				if (this.activeType != type.value) {
					this.activeType = type.value;
					this.types.forEach(t => {
						if (type.value == t.value) {
							t.selected = true;
						} else {
							t.selected = false;
						}
					})
					this.getProjectList2();
				}
			}
		}
	};
</script>

<style scoped lang="scss">
	.product {
		background-color: var(--color-bg-default);
		overflow-x: hidden;

		.content1 {
			.row1 {
				.row1_l {
					color: #A9A9A9 !important;
				}
			}

			.row2 {
				color: #A9A9A9 !important;
			}

			.institute {
				overflow: hidden;
				background-color: #F2F2F2;

				.introduction {
					font-size: 1.6rem;
					line-height: 3rem;
					color: #333333;
					text-align: center;
					white-space: pre-line;
				}

				.line {
					display: flex;
					align-items: center;

					.graph {
						width: 5.196rem;
						height: 5.999rem;
						position: relative;
						transform: translateX(50%);
						display: flex;
						justify-content: center;
						align-items: center;

						.g {
							width: 5.196rem;
							height: 3rem;
							position: absolute;
							z-index: 1;
							background-color: var(--color-t-active);
						}

						.g1 {
							transform: rotateZ(60deg);
						}

						.g2 {
							transform: rotateZ(120deg);
						}

						.num {
							position: relative;
							z-index: 2;
							color: var(--color-t-white);
							font-size: 3rem;
							font-weight: bold;
							line-height: 3rem;

						}
					}

					.text {
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

			.advantage {
				.box {
					display: flex;
					justify-content: center;
					align-items: center;

					.content {
						.line1 {
							display: flex;
							align-items: center;

							.num {
								font-size: 7.2rem;
								color: #F0E0D1;
								font-weight: bold;
							}

							.title {
								margin-left: 2rem;
								font-size: 3.6rem;
								letter-spacing: 0.2rem;
								color: var(--color-t-active);
								font-weight: bold;
							}
						}

						.line2 {
							margin-left: 12rem;
							font-size: 1.8rem;
							color: #333333;
							line-height: 5rem;
							white-space: pre-line;
						}
					}
				}

				.reverse {
					flex-direction: row-reverse;
				}

				.bg-grey {
					background-color: #F7F7F7;
				}

				.col {
					flex-direction: column;

					.content {
						text-align: center;

						.line1 {
							justify-content: center;
						}

						.line2 {
							margin-left: 0;
						}
					}
				}
			}
		}

		.content2 {
			.types {
				display: flex;
				align-items: center;

				.type {
					box-sizing: border-box;
					padding: 15px 60px;
					font-size: 3rem;
					font-weight: bold;
					color: var(--color-t-active);
					background-color: var(--color-bg-default);
					border: 2px solid var(--color-bg-main);
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}

				.selected {
					color: var(--color-t-white);
					background-color: var(--color-bg-main);
				}
			}

			.type-text {
				font-size: 1.8rem;
				line-height: 3rem;
				color: #999999;
			}

			.sales {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				.sale {
					position: relative;
					top: 0;
					box-shadow: 0 0 10px 0 #999999;

					// &:hover {
					// 	top: -20px;
					// 	background-color: var(--color-bg-main);
					// 	transition-duration: 1s;
					// 	.content {
					// 		.en {
					// 			color: var(--color-t-white);
					// 		}
					// 		.title {
					// 			color: var(--color-t-white);
					// 		}
					// 		.text {
					// 			color: var(--color-t-white);
					// 		}
					// 		.text-en {
					// 			color: var(--color-t-white);
					// 		}
					// 	}
					// }
					.my-img {
						display: block;
					}

					.content {
						padding: 30px 10px;

						.row {
							display: flex;
							align-items: center;

							.box {
								.title {
									font-size: 2.4rem;
									line-height: 3.5rem;
									font-weight: bold;
									color: #333333;
								}

								.adj {
									margin-top: 5px;
									font-size: 2rem;
									line-height: 3rem;
									color: #333333;
								}
							}

							.more {
								flex-shrink: 0;
								padding: 11px 22px;
								font-size: 1.6rem;
								color: var(--color-t-white);
								background-color: var(--color-bg-main);
								border-radius: 22px;
								box-sizing: border-box;
								cursor: pointer;

								&:hover {
									color: var(--color-t-active);
									background-color: var(--color-bg-default);
									border: 1px solid var(--color-bg-main);
								}
							}
						}

						.price {
							display: inline-block;
							margin-top: 15px;
							margin-left: 10px;
							padding: 12px 27px;
							font-size: 1.6rem;
							color: var(--color-t-active);
							border: 2px solid var(--color-bg-main);
							border-radius: 24px;
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
				.institute {
					padding-bottom: 30px;

					.introduction {
						margin: 30px 10px;
					}

					.line {
						margin: 50px 10px;
					}
				}

				.advantage {
					.box {
						padding: 30px 10px;
						flex-direction: column;

						.content {
							text-align: center;

							.line2 {
								margin-top: 20px;
								margin-left: 0;
							}
						}

						.my-img {
							margin-top: 20px;
						}
					}
				}
			}

			.content2 {
				margin: 20px 20px 60px;

				.types {
					flex-wrap: wrap;
					margin-top: 30px;

					.type {
						margin-top: 15px;
						flex-basis: 100%;
					}
				}
				
				.type-text {
					margin-top: 30px;
				}

				.sales {
					margin-top: 30px;

					.sale {
						margin-bottom: 30px;
						flex-basis: 100%;

						.my-img {
							height: 200px;
						}

						.content {
							.row {
								flex-wrap: wrap;

								.box {
									flex-basis: 100%;
								}

								.more {
									margin-top: 20px;
									margin-left: auto;
								}
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
				.institute {
					padding-bottom: 60px;

					.introduction {
						margin: 60px auto;
						width: 50%;
						min-width: 800px;
					}

					.line {
						margin: 50px auto;
						width: 50%;
						min-width: 800px;
					}
				}

				.advantage {
					.box {
						margin-top: 60px;
						padding: 60px 0 120px;

						.content {
							.line2 {
								margin-top: 30px;
							}
						}

						.my-img {
							margin-left: 120px;
						}
					}

					.reverse {
						.my-img {
							margin-left: 0;
							margin-right: 120px;
						}
					}

					.col {
						.content {
							width: 50%;
							min-width: 600px;

							.line2 {
								margin-top: 40px;
							}
						}

						.my-img {
							margin-left: 0;
							margin-top: 120px;
						}
					}
				}
			}

			.content2 {
				margin: 20px auto 60px;
				width: 70%;
				min-width: 1000px;

				.types {
					justify-content: center;
					margin-top: 60px;

					.type {
						margin: 0 15px;
					}
				}
				
				.type-text {
					width: 80%;
					min-width: 800px;
					margin: 60px auto 0;
					text-align: center;
				}

				.sales {
					margin-top: 60px;

					.sale {
						flex-basis: 30%;
						margin: 40px 1.5%;

						.my-img {
							height: 300px;
						}

						.content {
							.row {
								justify-content: space-between;

								.more {
									margin-left: 5px;
								}
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

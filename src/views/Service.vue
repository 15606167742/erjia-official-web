<template>
	<div class="service">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="box" :class="{reverse: index%2===0}" :key="hotel.id" v-for="(hotel, index) in hotelList">
				<el-image class="my-img" :src="hotel.img" fit="contain"></el-image>
				<div class="content">
					<div class="title">
						{{hotel.title}}
					</div>
					<div class="introduction">
						{{hotel.introduction}}
					</div>
				</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="col">
				<div class="content2-title">
					携手尔家，共创未来！
				</div>
				<div class="content2-introduction">
					依托国际知名酒店集团成熟的管理模式，结合服务式公寓发展现状，用科学先进的管理理念打造一支代表着服务式公寓顶级运营水平的精英团队。
				</div>
				<template v-for="(keeper, index) in keeperList">
					<div class="box" :key="keeper.id" v-if="index < 2">
						<el-image class="my-img" :src="keeper.img" fit="contain"></el-image>
						<div class="tip">
							<div class="tip-title">
								{{keeper.title}}
							</div>
							<div class="tip-title-en">
								{{keeper.title_en}}
							</div>
							<el-image class="arror" :src="require('@/assets/img/service/arror.png')" fit="contain"></el-image>
						</div>
					</div>
				</template>
			</div>
			<div class="col">
				<template v-for="(keeper, index) in keeperList">
					<div class="box" :key="keeper.id" v-if="index > 1">
						<el-image class="my-img" :src="keeper.img" fit="contain"></el-image>
						<div class="tip">
							<div class="tip-title">
								{{keeper.title}}
							</div>
							<div class="tip-title-en">
								{{keeper.title_en}}
							</div>
							<el-image class="arror" :src="require('@/assets/img/service/arror.png')" fit="contain"></el-image>
						</div>
					</div>
				</template>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
		</div>
		<div class="content4" v-else-if="activeTab === 4">
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Service',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			info: {
				banner: require('@/assets/img/service/banner1.png'),
				// banner: WEBCONFIG.resource_url_img+'/cooperation/banner1.png',
				title: '运营服务',
				title_en: 'Operation services',
				tabList: [
					{
						id: 1,
						active: true,
						banner: '/service/banner1.png',
						img: require('@/assets/img/service/tab1.png'),
						name: '星级酒店服务标准',
						name_en: 'Service standard of star hotels'
					},
					{
						id: 2,
						active: false,
						banner: '/service/banner1.png',
						img: require('@/assets/img/service/tab2.png'),
						name: '全时私属管家守候',
						name_en: 'Full time private housekeeper'
					},
					{
						id: 3,
						active: false,
						banner: '/service/banner1.png',
						img: require('@/assets/img/service/tab3.png'),
						name: '公区多维管理',
						name_en: 'Multi dimensional management'
					},
					{
						id: 4,
						active: false,
						banner: '/service/banner1.png',
						img: require('@/assets/img/service/tab4.png'),
						name: '社群联盟运营',
						name_en: 'Community Alliance operation'
					},
				],
			},
			activeTab: 1,
			hotelList: [
				{
					id: 1,
					img: require('@/assets/img/service/hotel1.png'),
					title: '维保服务',
					introduction: '公区保洁、室内精保、熨烫衣物、室内维修服务、家电清洗服务'
				},
				{
					id: 2,
					img: require('@/assets/img/service/hotel2.png'),
					title: '安防服务',
					introduction: '24小时保安、全梯控覆盖、楼层24小时监控、智能安全门锁'
				},
				{
					id: 3,
					img: require('@/assets/img/service/hotel3.png'),
					title: '交通服务',
					introduction: '出租车预定、车辆租赁、停车设施（免费停车位）'
				},
				{
					id: 4,
					img: require('@/assets/img/service/hotel4.png'),
					title: '餐饮服务',
					introduction: '简餐（早餐）、咖啡、甜点'
				},
				{
					id: 5,
					img: require('@/assets/img/service/hotel5.png'),
					title: '商务服务',
					introduction: '复印/打印、快递中心、商务会议'
				}
			],
			keeperList: [
				{
					id: 1,
					img: require('@/assets/img/service/keeper1.png'),
					title: '私人秘书',
					title_en: 'Private secretary'
				},
				{
					id: 2,
					img: require('@/assets/img/service/keeper2.png'),
					title: '室内特色场景布置',
					title_en: 'Indoor characteristic\n scene layout'
				},
				{
					id: 3,
					img: require('@/assets/img/service/keeper3.png'),
					title: '代办个人事宜',
					title_en: 'Personal affairs'
				},
				{
					id: 4,
					img: require('@/assets/img/service/keeper4.png'),
					title: '代充水电',
					title_en: 'Daichong hydropower'
				}
			]
		};
	},
	watch: {
		$route: {
			handler() {
				if(this.$route.query.activeTab){
					this.handleChange(parseInt(this.$route.query.activeTab))
				}
			},
			deep: true,
		}
	},
	methods: {
		handleChange(id) {
			this.activeTab = id;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
				} else {
					tab.active = false;
				}
			});
		},
	}
};
</script>

<style scoped lang="scss">
.service {
	background-color: var(--color-bg-default);
	.content1 {
		.box{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			.content{
				color: #444444;
				.title{
					font-size: 3rem;
					letter-spacing: 0.2rem;
				}
				.introduction{
					font-size: 1.8rem;
					letter-spacing: 0.1rem;
					line-height: 2.5rem;
				}
			}
		}
	}
	.content2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.col{
			.content2-title{
				font-size: 3.6rem;
				letter-spacing: 0.2rem;
				font-weight: bold;
				color: var(--color-t-active);
			}
			.content2-introduction{
				font-size: 1.8rem;
				letter-spacing: 0.1rem;
				line-height: 2.5rem;
				color: #999999;
			}
			.box{
				position: relative;
				.my-img{
					display: block;
				}
				.tip{
					position: absolute;
					left: 0;
					bottom: 0;
					font-size: 2.4rem;
					white-space: pre;
					background-color: var(--color-bg-default);
					.tip-title{
						letter-spacing: 0.1rem;
						color: #333333;
					}
					.tip-title-en{
						line-height: 3rem;
						color: #999999;
					}
					.arror{
						width: 42px;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.service {
		.content1 {
			margin: 30px 20px;
			.box{
				margin-bottom: 30px;
			}
			.my-img{
				flex-basis: 100%;
			}
			.content{
				flex-basis: 100%;
				margin-top: 10px;
				.introduction{
					margin-top: 10px;
				}
			}
		}
		.content2{
			margin: 30px 0;
			.col{
				flex-basis: 100%;
				.content2-title{
					text-align: center;
				}
				.content2-introduction{
					margin: 20px 10px;
				}
				.box{
					margin-bottom: 20px;
					.tip{
						padding: 10px;
						.tip-title{
							margin-top: 10px;
						}
						.tip-title-en{
							margin-top: 10px;
						}
						.arror{
							margin-top: 10px;
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.service {
		.content1 {
			margin: 20px auto 60px;
			width: 60%;
			min-width: 900px;
			.box{
				margin-bottom: 10px;
				&.reverse{
					flex-direction: row-reverse;
				}
				.my-img{
					flex-basis: 45%;
				}
				.content{
					box-sizing: border-box;
					padding: 30px 60px 30px 30px;
					flex-basis: 45%;
					.introduction{
						margin-top: 25px;
					}
				}
			}
		}
		.content2{
			margin: 20px auto 60px;
			width: 60%;
			min-width: 900px;
			.col{
				flex-basis: 45%;
				.content2-title{
					margin-top: 100px;
				}
				.content2-introduction{
					margin: 40px 60px 80px 0;
				}
				.box{
					margin-bottom: 30px;
					.tip{
						padding: 30px;
						.tip-title{
							margin-top: 20px;
						}
						.tip-title-en{
							margin-top: 20px;
						}
						.arror{
							margin-top: 20px;
							margin-left: 10px;
						}
					}
				}
			}
		}
	}
}
</style>

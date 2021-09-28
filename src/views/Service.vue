<template>
	<div class="service">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="title black">
				<div class="title-line"></div>
				<div class="title-text">
					维保服务
				</div>
				<div class="title-line"></div>
			</div>
			<div class="maintenances">
				<div class="maintenance" :key="index" v-for="(maintenance, index) in maintenanceList">
					<el-image class="my-img" :src="maintenance.img" fit="contain"></el-image>
					<div class="name">
						{{maintenance.name}}
					</div>
				</div>
			</div>
			<!-- <div class="security" :style="{'background-image':'url('+require('@/assets/img/service/security_bg.png')+')'}"> -->
			<div class="security" :style="{'background-image':'url('+imgResource + '/service/security_bg.png)'}">
				<div class="title white">
					<div class="title-line"></div>
					<div class="title-text">
						安防服务
					</div>
					<div class="title-line"></div>
				</div>
				<div class="boxs">
					<div class="box" :class="{lt:index==0,rt:index==1,lb:index==2,rb:index==3}" :key="index" v-for="(security, index) in securityList">
						<el-image class="my-img" :src="security.img" fit="contain"></el-image>
						<div class="name">
							{{security.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="title blank">
				<div class="title-line"></div>
				<div class="title-text">
					交通服务
				</div>
				<div class="title-line"></div>
			</div>
			<div class="traffic">
				<div class="box left">
					<el-image class="my-img" :src="trafficList[0].img" fit="contain"></el-image>
					<div class="name">
						{{trafficList[0].name}}
					</div>
				</div>
				<div class="right">
					<div class="box up">
						<el-image class="my-img" :src="trafficList[1].img" fit="contain"></el-image>
						<div class="name">
							{{trafficList[1].name}}
						</div>
					</div>
					<div class="box down">
						<el-image class="my-img" :src="trafficList[2].img" fit="contain"></el-image>
						<div class="name">
							{{trafficList[2].name}}
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="restaurant" :style="{'background-image':'url('+require('@/assets/img/service/restaurant_bg.png')+')'}"> -->
			<div class="restaurant" :style="{'background-image':'url('+imgResource + '/service/restaurant_bg.png)'}">
				<div class="title blank">
					<div class="title-line"></div>
					<div class="title-text">
						餐饮服务
					</div>
					<div class="title-line"></div>
				</div>
				<div class="boxs">
					<template v-for="(restaurant, index) in restaurantList">
						<div class="box" :key="'1'+index">
							<el-image class="my-img" :src="restaurant.img" fit="contain"></el-image>
							<div class="name">
								<div class="name_zh">
									{{restaurant.zh}}
								</div>
								<div class="name_en">
									{{restaurant.en}}
								</div>
							</div>
						</div>
						<div class="plus" :key="'2'+index" v-if="index < 2">
							+
						</div>
					</template>
				</div>
			</div>
			<div class="title blank">
				<div class="title-line"></div>
				<div class="title-text">
					商务服务
				</div>
				<div class="title-line"></div>
			</div>
			<div class="business">
				<template v-for="(business, index) in businessList">
					<div class="order text" :key="'1'+index">
						{{business.text}}
					</div>
					<el-image class="order my-img" :key="'2'+index" :src="business.img" fit="contain"></el-image>
				</template>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="col">
				<div class="content2-title">携手尔家，共创未来！</div>
				<div class="content2-introduction">依托国际知名酒店集团成熟的管理模式，结合服务式公寓发展现状，用科学先进的管理理念打造一支代表着服务式公寓顶级运营水平的精英团队。</div>
				<template v-for="(keeper, index) in keeperList">
					<div class="box" :key="keeper.id" v-if="index < 2">
						<el-image class="my-img" :src="keeper.img" fit="contain"></el-image>
						<div class="tip">
							<div class="tip-title">{{ keeper.title }}</div>
							<div class="tip-title-en">{{ keeper.title_en }}</div>
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
							<div class="tip-title">{{ keeper.title }}</div>
							<div class="tip-title-en">{{ keeper.title_en }}</div>
							<el-image class="arror" :src="require('@/assets/img/service/arror.png')" fit="contain"></el-image>
						</div>
					</div>
				</template>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<div class="row1">
				<div class="row1-1">
					<div class="title">
						<div class="title-row1">
							<span class="num">01</span>
							<span class="text">餐饮模块</span>
						</div>
						<div class="title-row2">
							你们去征服世界
							<br />
							我只想征服一个人的胃和心
						</div>
					</div>
					<el-image class="row1-1-img" :src="imgResource + '/service/management1_2.png'" fit="contain"></el-image>
				</div>
				<el-image class="row1-2" :src="imgResource + '/service/management1_1.png'" fit="contain"></el-image>
			</div>
			<div class="row2">
				<div class="bg"></div>
				<div class="row2-1">
					<div class="title">
						<div class="title-row1">
							<span class="num">02</span>
							<span class="text">运动模块</span>
						</div>
						<div class="title-row2">不开心的时候，流泪不如流汗</div>
					</div>
					<el-image class="row2-1-img" :src="imgResource + '/service/management2_2.png'" fit="contain"></el-image>
				</div>
				<el-image class="row2-2" :src="imgResource + '/service/management2_1.png'" fit="contain"></el-image>
			</div>
			<div class="row3">
				<div class="row3-1">
					<div class="title">
						<div class="title-row1">
							<span class="num">03</span>
							<span class="text">休闲模块</span>
						</div>
						<div class="title-row2">在素年锦时的光阴里 细品岁月静好</div>
					</div>
				</div>
				<el-image class="row3-2" :src="imgResource + '/service/management3.png'" fit="contain"></el-image>
			</div>
			<div class="row2">
				<div class="row2-1">
					<div class="title">
						<div class="title-row1">
							<span class="num">04</span>
							<span class="text">商务模块</span>
						</div>
						<div class="title-row2">
							严谨的生活方式
							<br />
							让你我都不至于在突发情况怯场
						</div>
					</div>
					<el-image class="row2-1-img" :src="imgResource + '/service/management4_2.png'" fit="contain"></el-image>
				</div>
				<el-image class="row2-2" :src="imgResource + '/service/management4_1.png'" fit="contain"></el-image>
			</div>
			<div class="row3">
				<div class="row3-1">
					<div class="title">
						<div class="title-row1">
							<span class="num">05</span>
							<span class="text">物业模块</span>
						</div>
						<div class="title-row2">
							情系住户，维持千家万事通。
							<br />
							心牵业主，保证百姓全如意。
						</div>
					</div>
				</div>
				<el-image class="row3-2 bg" :src="imgResource + '/service/management5.png'" fit="contain"></el-image>
			</div>
		</div>
		<div class="content4" v-else-if="activeTab === 4">
			<div class="row1">
				<span class="row1_l">社群</span>
				<el-image class="row1_split" :src="require('@/assets/img/service/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Community</div>
			<div class="operations">
				<div class="operation" :key="operation.id" v-for="operation in operationList">
					<div class="box">
						<el-image class="my-img" :src="operation.img" fit="contain"></el-image>
						<div class="row">
							<div class="title">{{ operation.title }}</div>
							<div class="date">{{ operation.date }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">活动</span>
				<span class="row1_r">列表</span>
				<el-image class="row1_split" :src="require('@/assets/img/service/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Activity list</div>
			<div class="tree">
				<div class="box" :key="activity.id" v-for="activity in activityList">
					<el-image class="my-img" :src="activity.img" fit="cover" @click="openUrl(activity.redirectUrl)"></el-image>
					<div class="text">
						<div class="title">{{ activity.title }}</div>
						<div class="content">{{ activity.content }}</div>
						<div class="date">
							<el-image class="date-icon" :src="require('@/assets/img/service/date.png')" fit="contain"></el-image>
							<span>{{ activity.date }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content5" v-else-if="activeTab === 5">
			<div class="selfService">
				<div class="title">
					{{selfService.title}}
				</div>
				<div class="text">
					{{selfService.text}}
				</div>
			</div>
			<div class="system">
				<div class="box" :key="index" v-for="(system, index) in systemList">
					<el-image class="my-img" :src="system.img" fit="contain"></el-image>
					<div class="title">
						{{system.title}}
					</div>
				</div>
			</div>
			<!-- <el-image class="platform" :src="require('@/assets/img/service/platform.png')" fit="contain"></el-image> -->
			<el-image class="platform" :src="imgResource + '/service/platform.png'" fit="contain"></el-image>
			<div class="rent">
				<div class="rent-box">
					<template v-for="(rent, index) in rentList">
						<div class="box" :key="'1'+index">
							<el-image class="my-img" :src="rent.img" fit="contain"></el-image>
							<div class="title">
								{{rent.title}}
							</div>
						</div>
						<div class="arror" :key="'2'+index" v-if="index<5">
							<el-image class="arror-img" :src="require('@/assets/img/service/rent_arror.png')" fit="contain"></el-image>
						</div>
					</template>
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

import { sheQunHuoDong } from '@/network/service.js';

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
				// banner: require('@/assets/img/service/banner1.png'),
				banner: WEBCONFIG.resource_url_img + '/service/banner1.png',
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
					{
						id: 5,
						active: false,
						banner: '/service/banner1.png',
						img: require('@/assets/img/service/tab5.png'),
						name: '信息化管理',
						name_en: 'Information management'
					}
				]
			},
			activeTab: 1,
			maintenanceList: [
				{
					img: require('@/assets/img/service/maintenance1.png'),
					name: '公区保洁'
				},
				{
					img: require('@/assets/img/service/maintenance2.png'),
					name: '室内精保'
				},
				{
					img: require('@/assets/img/service/maintenance3.png'),
					name: '熨烫衣物'
				},
				{
					img: require('@/assets/img/service/maintenance4.png'),
					name: '室内维修服务'
				},
				{
					img: require('@/assets/img/service/maintenance5.png'),
					name: '家电清洗服务'
				},
			],
			securityList: [
				{
					img: require('@/assets/img/service/security1.png'),
					name: '24小时保安'
				},
				{
					img: require('@/assets/img/service/security2.png'),
					name: '全梯控覆盖'
				},
				{
					img: require('@/assets/img/service/security3.png'),
					name: '楼层24小时监控'
				},
				{
					img: require('@/assets/img/service/security4.png'),
					name: '智能安全门锁'
				}
			],
			trafficList: [
				{
					// img: require('@/assets/img/service/traffic1.png'),
					img: WEBCONFIG.resource_url_img + '/service/traffic1.png',
					name: '出租车预定'
				},
				{
					// img: require('@/assets/img/service/traffic2.png'),
					img: WEBCONFIG.resource_url_img + '/service/traffic2.png',
					name: '车辆租赁'
				},
				{
					// img: require('@/assets/img/service/traffic3.png'),
					img: WEBCONFIG.resource_url_img + '/service/traffic3.png',
					name: '停车设施(免费停车位)'
				}
			],
			restaurantList: [
				{
					img: require('@/assets/img/service/restaurant1.png'),
					zh: '早餐',
					en: 'breakfast'
				},
				{
					img: require('@/assets/img/service/restaurant2.png'),
					zh: '咖啡',
					en: 'coffee'
				},
				{
					img: require('@/assets/img/service/restaurant3.png'),
					zh: '甜点',
					en: 'dessert'
				},
			],
			businessList: [
				{
					// img: require('@/assets/img/service/business1.png'),
					img: WEBCONFIG.resource_url_img + '/service/business1.png',
					text: '复印/打印',
				},
				{
					// img: require('@/assets/img/service/business2.png'),
					img: WEBCONFIG.resource_url_img + '/service/business2.png',
					text: '商务会议',
				},
				{
					// img: require('@/assets/img/service/business3.png'),
					img: WEBCONFIG.resource_url_img + '/service/business3.png',
					text: '快递中心',
				},
			],
			keeperList: [
				{
					id: 1,
					// img: require('@/assets/img/service/keeper1.png'),
					img: WEBCONFIG.resource_url_img + '/service/keeper1.png',
					title: '私人秘书',
					title_en: 'Private secretary'
				},
				{
					id: 2,
					// img: require('@/assets/img/service/keeper2.png'),
					img: WEBCONFIG.resource_url_img + '/service/keeper2.png',
					title: '室内特色场景布置',
					title_en: 'Indoor characteristic\n scene layout'
				},
				{
					id: 3,
					// img: require('@/assets/img/service/keeper3.png'),
					img: WEBCONFIG.resource_url_img + '/service/keeper3.png',
					title: '代办个人事宜',
					title_en: 'Personal affairs'
				},
				{
					id: 4,
					// img: require('@/assets/img/service/keeper4.png'),
					img: WEBCONFIG.resource_url_img + '/service/keeper4.png',
					title: '代充水电',
					title_en: 'Daichong hydropower'
				}
			],
			operationList: [
				{
					id: 1,
					// img: require('@/assets/img/service/operation1.png'),
					img: WEBCONFIG.resource_url_img + '/service/operation1.png',
					title: '更好的服务提供给您--让居住更美好',
					date: '2021-02-02'
				},
				{
					id: 2,
					// img: require('@/assets/img/service/operation2.png'),
					img: WEBCONFIG.resource_url_img + '/service/operation2.png',
					title: '王者绝非偶然，实例成就辉煌',
					date: '2021-02-02'
				}
			],
			activityList: [
				{
					id: 1,
					date: '2021-06-17',
					// img: require('@/assets/img/service/activity1.png'),
					img: WEBCONFIG.resource_url_img + '/service/activity1.png',
					title: '燃爆盛夏 嗨翻全场｜尔家第三届百人龙虾节激情落幕！',
					content: '燃爆盛夏 嗨翻全场、一场关于盛夏与龙虾的相遇、不仅因为美食本身还有对未来的十足期待'
				},
				{
					id: 2,
					date: '2021-05-16',
					// img: require('@/assets/img/service/activity2.png'),
					img: WEBCONFIG.resource_url_img + '/service/activity2.png',
					title: '尔家龙虾节｜一年一度的龙虾节终于来了，快上车带你实现“撸虾自由”！',
					content: '会嘬才是吃龙虾的奥秘所在。这次尔家龙虾节多种口味齐上阵！麻辣小龙虾、风味蒜泥小龙虾、十三香小龙虾等多种口味掀起锡城嘬虾新风暴！'
				},
				{
					id: 3,
					date: '2021-05-01',
					// img: require('@/assets/img/service/activity3.png'),
					img: WEBCONFIG.resource_url_img + '/service/activity3.png',
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				}
			],
			selfService: {
				title: '自主研发运营管理系统',
				text: '整合海量真实运营数据，精准定位自主研发“尔家公寓管理系统”，系统架构灵活调整，随时应对频繁调整的业务范围，用户界面友好易操作，多平台协调统一。Saas服务，让运营更精细更智能更安全。'
			},
			systemList: [
				{
					img: require('@/assets/img/service/system1.png'),
					title: '管理系统',
				},
				{
					img: require('@/assets/img/service/system2.png'),
					title: '小程序系统',
				},
				{
					img: require('@/assets/img/service/system3.png'),
					title: '尔家会员系统',
				},
				{
					img: require('@/assets/img/service/system4.png'),
					title: '线上签约系统',
				}
			],
			rentList: [
				{
					img: require('@/assets/img/service/rent1.png'),
					title: '租户登录租房平台'
				},
				{
					img: require('@/assets/img/service/rent2.png'),
					title: '确认租赁生成合同'
				},
				{
					img: require('@/assets/img/service/rent3.png'),
					title: '租户在线实名认证'
				},
				{
					img: require('@/assets/img/service/rent4.png'),
					title: '租户签署租房合同'
				},
				{
					img: require('@/assets/img/service/rent5.png'),
					title: '发送签约通知出租房'
				},
				{
					img: require('@/assets/img/service/rent6.png'),
					title: '出租房静默签署'
				},
			]
		};
	},
	mounted() {
		this.jump();
		this.getActivityList();
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
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
				} else {
					tab.active = false;
				}
			});
		},
		getActivityList() {
			sheQunHuoDong({ pageNum: 1, pageSize: 3 }).then(data => {
				this.activityList.splice(0, this.activityList.length);
				this.activityList = data.data.map(item => {
					return {
						id: item.id,
						date: item.createTime.slice(0, 10),
						img: item.coverUrl,
						title: item.title,
						content: item.content.slice(9, -11),
						redirectUrl: item.redirectUrl
					};
				});
			});
		},
		openUrl(url) {
			window.open(url);
		}
	}
};
</script>

<style scoped lang="scss">
.service {
	background-color: var(--color-bg-default);
	overflow-x: hidden;

	.content1 {
		.title{
			display: flex;
			justify-content: space-around;
			align-items: center;
			.title-line{
				width: 12%;
				height: 3px;
			}
			.title-text{
				font-size: 6rem;
				font-weight: bold;
				letter-spacing: 0.5rem;
			}
		}
		.black{
			.title-line{
				background-color: #555555;
			}
			.title-text{
				color: #555555;
			}
		}
		.white{
			.title-line{
				background-color: #FFFFFF;
			}
			.title-text{
				color: #FFFFFF;
			}
		}
		.blank{
			.title-line{
				background-color: var(--color-t-active);
			}
			.title-text{
				color: var(--color-t-active);
			}
		}
		.maintenances{
			display: flex;
			justify-content: center;
			align-items: center;
			.maintenance{
				.my-img{
					display: block;
				}
				.name{
					font-size: 2.4rem;
					color: var(--color-t-active);
					text-align: center;
				}
			}
		}
		.security{
			overflow: hidden;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			.boxs{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				.box{
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					.my-img{
						width: 75px;
						height: 80px;
					}
					.name{
						font-size: 3rem;
						font-weight: bold;
						color: var(--color-t-white);
					}
				}
			}
		}
		.traffic{
			display: flex;
			justify-content: center;
			align-items: stretch;
			flex-wrap: wrap;
			.box{
				border-radius: 5px;
				overflow: hidden;
				.my-img{
					display: block;
				}
				.name{
					font-size: 2.4rem;
					font-weight: bold;
					color: var(--color-t-white);
					background-color: #333333;
				}
			}
			.right{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				
			}
		}
		.restaurant{
			overflow: hidden;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			.boxs{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				.box{
					position: relative;
					.my-img{
						display: block;
					}
					.name{
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						color: var(--color-t-white);
						font-weight: bold;
						text-align: center;
						.name_zh{
							font-size: 3rem;
							margin-bottom: 12px;
						}
						.name_en{
							font-size: 1.6rem;
							text-transform: uppercase;
						}
					}
				}
				.plus{
					font-size: 3rem;
					font-weight: bold;
					color: var(--color-t-active);
				}
			}
		}
		.business{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: stretch;
			.text{
				font-size: 3rem;
				font-weight: bold;
				color: #555555;
				background-color: #FBFBFB;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.content2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		.col {
			.content2-title {
				font-size: 3.6rem;
				letter-spacing: 0.2rem;
				font-weight: bold;
				color: var(--color-t-active);
			}

			.content2-introduction {
				font-size: 1.8rem;
				letter-spacing: 0.1rem;
				line-height: 2.5rem;
				color: #999999;
			}

			.box {
				position: relative;

				.my-img {
					display: block;
				}

				.tip {
					position: absolute;
					left: 0;
					bottom: 0;
					font-size: 2.4rem;
					white-space: pre;
					background-color: var(--color-bg-default);

					.tip-title {
						letter-spacing: 0.1rem;
						color: #333333;
					}

					.tip-title-en {
						line-height: 3rem;
						color: #999999;
					}

					.arror {
						width: 42px;
					}
				}
			}
		}
	}

	.content3 {
		.title {
			padding: 30px;
			.title-row1 {
				color: #cccccc;
				.num {
					font-size: 12rem;
				}
				.text {
					margin-left: 20px;
					font-size: 3rem;
					letter-spacing: 0.1rem;
				}
			}
			.title-row2 {
				margin-left: 10px;
				font-size: 1.8rem;
				line-height: 3rem;
				letter-spacing: 0.1rem;
				color: #666666;
			}
		}
		.row1 {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row-reverse;
			justify-content: center;
			.row1-1 {
				.row1-1-img {
					display: block;
				}
			}
		}
		.row2 {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row-reverse;
			justify-content: center;
			.row2-1 {
				.row2-1-img {
					display: block;
				}
			}
		}
		.row3 {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
	}

	.content4 {
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
		.operations {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.operation {
				.box {
					position: relative;
					.my-img {
						display: block;
					}
					.row {
						position: absolute;
						color: #333333;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						align-items: center;
						.title {
							font-size: 2.4rem;
						}
						.date {
							font-size: 1.8rem;
						}
					}
				}
			}
		}
		.tree {
			.box {
				position: relative;
				border-bottom: 2px solid #eeeeee;
				
				.my-img {
					cursor: pointer;
				}

				.text {
					width: 100%;
					display: flex;
					flex-direction: column;

					.title {
						font-size: 2.4rem;
						line-height: 3rem;
						letter-spacing: 0.1rem;
						color: #666666;
					}

					.content {
						flex-grow: 1;
						font-size: 1.8rem;
						line-height: 2.5rem;
						letter-spacing: 0.1rem;
						color: #999999;
					}

					.date {
						font-size: 1.2rem;
						color: #666666;
						display: flex;
						align-items: center;

						.date-icon {
							width: 12px;
							height: 12px;
							margin-right: 8px;
						}
					}
				}
			}
		}
	}
	.content5 {
		.selfService{
			.title{
				font-size: 6rem;
				font-weight: bold;
				text-align: center;
				letter-spacing: 0.3rem;
				color: var(--color-t-active);
			}
			.text{
				font-size: 3rem;
				text-align: center;
				letter-spacing: 0.1rem;
				line-height: 4.5rem;
				color: #999999;
			}
		}
		.system{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			.box{
				display: flex;
				flex-direction: column;
				align-items: center;
				.my-img{
					display: block;
				}
				.title{
					font-size: 3rem;
					letter-spacing: 0.1rem;
					color: var(--color-t-active);
				}
			}
		}
		.platform{
			display: block;
		}
		.rent{
			background-color: #FCF6F0;
			.rent-box{
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				.box{
					display: flex;
					flex-direction: column;
					align-items: center;
					.title{
						font-size: 2.4rem;
						font-weight: bold;
						color: #6B5741;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.service {
		.content1 {
			.title{
				margin: 50px auto 60px;
				.title-text{
					font-size: 4rem;
					letter-spacing: 0.1rem;
				}
			}
			.maintenances{
				margin: 30px 10px;
				flex-wrap: wrap;
				.maintenance{
					margin: 20px 3%;
					width: 43%;
					.name{
						margin-top: 20px;
					}
				}
			}
			.security{
				.boxs{
					margin: 50px 10px;
					.box{
						flex-basis: 100%;
						.name{
							margin: 20px auto 40px;
						}
					}
				}
			}
			.traffic{
				margin: 50px 10px;
				.box{
					flex-basis: 100%;
					margin-bottom: 20px;
					.name{
						padding: 15px 25px;
					}
				}
			}
			.restaurant{
				.boxs{
					margin: 50px 10px;
					.box{
						flex-basis: 100%;
					}
					.plus{
						margin: 20px 0;
						flex-basis: 100%;
						text-align: center;
					}
				}
			}
			.business{
				margin: 50px 10px;
				.order{
					flex-basis: 100%;
				}
				.text{
					padding: 100px 0;
				}
			}
		}

		.content2 {
			margin: 30px 0;

			.col {
				flex-basis: 100%;

				.content2-title {
					text-align: center;
				}

				.content2-introduction {
					margin: 20px 10px;
				}

				.box {
					margin-bottom: 20px;

					.tip {
						padding: 10px;

						.tip-title {
							margin-top: 10px;
						}

						.tip-title-en {
							margin-top: 10px;
						}

						.arror {
							margin-top: 10px;
							margin-left: 10px;
						}
					}
				}
			}
		}

		.content3 {
			margin: 30px 0;
			text-align: center;
			.row1 {
				margin-bottom: 50px;
				.row1-1 {
					margin-top: 30px;
					flex-basis: 100%;
				}
				.row1-2 {
					margin-top: 30px;
					flex-basis: 100%;
				}
			}
			.row2 {
				margin-bottom: 50px;
				.bg {
					display: none;
				}
				.row2-1 {
					margin-top: 30px;
					flex-basis: 100%;
				}
				.row2-2 {
					margin-top: 30px;
					flex-basis: 100%;
				}
			}
			.row3 {
				margin-bottom: 50px;
				.row3-1 {
					margin-top: 30px;
					flex-basis: 100%;
				}
				.row3-2 {
					margin-top: 30px;
					flex-basis: 100%;
				}
			}
		}

		.content4 {
			.operations {
				margin-top: 30px;
				.operation {
					flex-basis: 100%;
					margin-bottom: 30px;
					.box {
						.my-img {
							margin: 0 20px 100px 0;
							box-shadow: 20px 80px 0 0 #eeeeee;
						}
						.row {
							position: absolute;
							left: 60px;
							right: 20px;
							bottom: -80px;
							height: 80px;
							.title {
								flex-basis: 100%;
							}
							.date {
								flex-basis: 100%;
								text-align: right;
							}
						}
					}
				}
			}
			.tree {
				margin: 30px 10px;

				.box {
					margin-bottom: 30px;
					padding-bottom: 15px;

					.my-img {
						display: block;
						box-shadow: -10px -10px 0 0 #eeeeee;
					}

					.text {
						margin-top: 20px;

						.content {
							margin-top: 20px;
						}

						.date {
							margin-top: 20px;
						}
					}
				}
			}
		}
		.content5 {
			.selfService{
				margin: 60px 10px 40px;
				.title{
					margin-bottom: 30px;
				}
				.text{
					margin-bottom: 60px;
				}
			}
			.system{
				margin: 0 10px 40px;
				.box{
					flex-basis: 100%;
					margin-bottom: 30px;
					.title{
						margin-top: 20px;
					}
				}
			}
			.platform{
				margin-bottom: 40px;
			}
			.rent{
				padding: 60px 0 30px;
				.rent-box{
					margin: 0 10px;
					.box{
						flex-basis: 100%;
						margin-bottom: 30px;
						.my-img{
							width: 150px;
						}
						.title{
							margin-top: 20px;
						}
					}
					.arror{
						flex-basis: 100%;
						margin-bottom: 30px;
						text-align: center;
						.arror-img{
							width: 36px;
							transform: rotateZ(90deg);
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
			.title{
				margin: 100px auto 130px;
				width: 50%;
				min-width: 600px;
			}
			.maintenances{
				margin: 100px auto 130px;
				width: 70%;
				min-width: 900px;
				.maintenance{
					width: 15%;
					margin: 2%;
					.name{
						margin-top: 30px;
					}
				}
			}
			.security{
				.boxs{
					margin: 140px auto;
					width: 40%;
					min-width: 500px;
					.box{
						box-sizing: border-box;
						flex-basis: 50%;
						.my-img{
							width: 75px;
							height: 80px;
							margin-top: 30px;
						}
						.name{
							margin-top: 30px;
							margin-bottom: 50px;
						}
					}
					.lt{
						background-image: linear-gradient(to top, #FFFFFF, #FFFFFF00), linear-gradient(to left, #FFFFFF, #FFFFFF00);
						background-repeat: no-repeat;
						background-size: 1px 100%, 100% 1px;
						background-position: right, bottom;
					}
					.rt{
						background-image: linear-gradient(to top, #FFFFFF, #FFFFFF00), linear-gradient(to right, #FFFFFF, #FFFFFF00);
						background-repeat: no-repeat;
						background-size: 1px 100%, 100% 1px;
						background-position: left, bottom;
					}
					.lb{
						background-image: linear-gradient(to bottom, #FFFFFF, #FFFFFF00), linear-gradient(to left, #FFFFFF, #FFFFFF00);
						background-repeat: no-repeat;
						background-size: 1px 100%, 100% 1px;
						background-position: right, top;
					}
					.rb{
						background-image: linear-gradient(to bottom, #FFFFFF, #FFFFFF00), linear-gradient(to right, #FFFFFF, #FFFFFF00);
						background-repeat: no-repeat;
						background-size: 1px 100%, 100% 1px;
						background-position: left, top;
					}
				}
			}
			.traffic{
				margin: 100px auto;
				width: 60%;
				min-width: 800px;
				.box{
					.name{
						padding: 20px 35px;
					}
				}
				.left{
					flex-basis: 45%;
					margin-right: 5%;
				}
				.right{
					flex-basis: 40%;
				}
			}
			.restaurant{
				.boxs{
					margin: 100px auto;
					width: 70%;
					min-width: 900px;
					.box{
						flex-basis: 25%;
						max-width: 300px;
					}
				}
			}
			.business{
				margin: 50px auto;
				width: 70%;
				min-width: 900px;
				.order{
					flex-basis: 30%;
					&:nth-child(4){
						order: 6;
					}
					&:nth-child(5){
						order: 5;
					}
					&:nth-child(6){
						order: 4;
					}
				}
			}
		}

		.content2 {
			margin: 20px auto 60px;
			width: 60%;
			min-width: 900px;

			.col {
				flex-basis: 45%;

				.content2-title {
					margin-top: 100px;
				}

				.content2-introduction {
					margin: 40px 60px 80px 0;
				}

				.box {
					margin-bottom: 30px;

					.tip {
						padding: 30px;

						.tip-title {
							margin-top: 20px;
						}

						.tip-title-en {
							margin-top: 20px;
						}

						.arror {
							margin-top: 20px;
							margin-left: 10px;
						}
					}
				}
			}
		}

		.content3 {
			margin: 20px auto 60px;
			width: 70%;
			min-width: 1000px;
			.row1 {
				.row1-1 {
					margin-left: 5%;
					flex-basis: 35%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
				.row1-2 {
					flex-basis: 60%;
				}
			}
			.row2 {
				position: relative;
				z-index: 0;
				margin-top: 150px;
				.bg {
					position: absolute;
					top: 70px;
					z-index: -1;
					width: 100vw;
					height: 500px;
					background-color: #fafafa;
				}
				.row2-1 {
					margin-left: 5%;
					flex-basis: 40%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.title {
						margin-top: 30px;
					}
				}
				.row2-2 {
					flex-basis: 40%;
				}
			}
			.row3 {
				margin-top: 150px;
				.row3-1 {
					flex-basis: 35%;
				}
				.row3-2 {
					margin-left: 5%;
					flex-basis: 45%;
					&.bg {
						box-shadow: 30px -30px 0 0 #eeeeee;
					}
				}
			}
		}

		.content4 {
			.row1 {
				margin-top: 100px;
			}
			.operations {
				margin: 100px auto 0;
				width: 80%;
				min-width: 1000px;
				.operation {
					flex-basis: 45%;
					.box {
						.my-img {
							margin: 0 30px 80px 0;
							box-shadow: 30px 80px 0 0 #eeeeee;
						}
						.row {
							position: absolute;
							left: 60px;
							right: 30px;
							bottom: -80px;
							height: 80px;
							.date {
								margin-left: 20px;
							}
						}
					}
				}
			}
			.tree {
				margin: 100px auto;
				width: 70%;
				min-width: 1000px;

				.box {
					margin-bottom: 60px;
					padding-bottom: 40px;
					display: flex;

					.my-img {
						flex-shrink: 0;
						margin-right: 60px;
						width: 360px;
						height: 240px;
						box-shadow: -20px -20px 0 0 #eeeeee;
					}

					.text {
						.content {
							margin-top: 30px;
						}

						.date {
							margin-top: 20px;
						}
					}
				}
			}
		}
		.content5 {
			.selfService{
				margin: 160px auto 120px;
				width: 60%;
				min-width: 900px;
				.title{
					margin-bottom: 60px;
				}
				.text{
					margin-bottom: 120px;
				}
			}
			.system{
				margin: 0 auto 120px;
				width: 60%;
				min-width: 900px;
				.box{
					flex-basis: 23%;
					.my-img{
						width: 150px;
					}
					.title{
						margin-top: 40px;
					}
				}
			}
			.platform{
				margin: 0 auto 160px;
				width: 60%;
				min-width: 900px;
			}
			.rent{
				padding: 150px 0 50px;
				.rent-box{
					margin: 0 auto;
					width: 70%;
					min-width: 1000px;
					.box{
						flex-basis: 22%;
						margin-bottom: 100px;
						.my-img{
							width: 150px;
						}
						.title{
							margin-top: 30px;
						}
					}
					.arror{
						align-self: flex-start;
						margin-top: 60px;
						flex-basis: 4%;
						text-align: center;
						.arror-img{
							width: 36px;
						}
					}
				}
			}
		}
	}
}
</style>

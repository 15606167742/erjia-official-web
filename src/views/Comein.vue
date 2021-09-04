<template>
	<div class="comein">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="introduction">
				<div class="introduction-video">
					<el-image class="video-img" :src="introduction.img" fit="cover"></el-image>
					<el-image class="video-play" :src="require('@/assets/img/comein/play1.png')" fit="contain"
						@click="playVideo(introduction.video)"></el-image>
				</div>
				<div class="introduction-content">
					<div class="title">{{ introduction.title }}</div>
					<div class="title-en">{{ introduction.title_en }}</div>
					<div class="text1">{{ introduction.text1 }}</div>
					<div class="text2">{{ introduction.text2 }}</div>
				</div>
			</div>
			<div class="info">
				<el-image class="info-img" :src="companyInfo.img" fit="cover"></el-image>
				<div class="info-content" v-html="companyInfo.content"></div>
			</div>
			<div class="row1">
				<span class="row1_l">EPCO</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="epco-text">
				{{epco.text}}
			</div>
			<el-image class="epco-img epco-img1" :src="epco.img1" fit="contain"></el-image>
			<el-image class="epco-img epco-img2" :src="epco.img2" fit="contain"></el-image>
			<!-- <div class="bfso" :style="{'background-image':'url('+imgResource + '/comein/bfso_bg.png)'}"> -->
			<div class="bfso" :style="{'background-image':'url('+require('@/assets/img/comein/bfso_bg.png')+')'}">
				<div class="row1">
					<span class="row1_l">BFSO</span>
					<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain">
					</el-image>
				</div>
				<div class="bfso-text">
					{{bfso.text}}
				</div>
				<div class="bfso-content">
					<div class="box" :key="index" v-for="(box, index) in bfso.boxs">
						<div class="box-title">
							{{box.title}}
						</div>
						<div class="box-texts">
							<div class="box-text" :key="num" v-for="(text, num) in box.texts">
								<div class="num">
									{{num+1}}
								</div>
								<div class="text">
									{{text}}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">发展</span>
				<span class="row1_r">历程</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Development history</div>
			<div class="dh">
				<div class="line">
					<div class="circle line-circle"></div>
				</div>
				<div class="dh-box" :class="{reverse: index%2==0}" :key="index" v-for="(dh, index) in dhs">
					<div class="dh-time">
						{{dh.time}}
					</div>
					<div class="dh-dot" :class="{circle:index==0}"></div>
					<div class="dh-things">
						<div class="dh-thing" :key="i" v-for="(thing, i) in dh.things">
							<div class="thing-title">
								{{thing.title}}
							</div>
							<div class="thing-text">
								{{thing.text}}
							</div>
						</div>
					</div>
				</div>
			</div>
			<el-dialog custom-class="my-dialog" :visible="videoVisible" @close="closeVideo"><video ref="myVideo"
					class="my-video" :src="myVideo" controls="controls"></video></el-dialog>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="row1">
				<span class="row1_l">综合</span>
				<span class="row1_r">管理</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Integrated management</div>
			<div class="managements">
				<div class="management" :key="integration.id" v-for="integration in integrationList">
					<el-image class="img" :src="integration.img" fit="contain"></el-image>
					<div class="name">{{ integration.name }}</div>
					<div class="job">{{ integration.job }}</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">营销</span>
				<span class="row1_r">中心</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">marketing management</div>
			<div class="managements">
				<div class="management" :key="market.id" v-for="market in marketList">
					<el-image class="img" :src="market.img" fit="contain"></el-image>
					<div class="name">{{ market.name }}</div>
					<div class="job">{{ market.job }}</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">商务</span>
				<span class="row1_r">中心</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Business management</div>
			<div class="managements">
				<div class="management" :key="business.id" v-for="business in businessList">
					<el-image class="img" :src="business.img" fit="contain"></el-image>
					<div class="name">{{ business.name }}</div>
					<div class="job">{{ business.job }}</div>
				</div>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<div class="row1">
				<span class="row1_l">EPCO</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="text">将EPC(工程总承包)和om（委托运营）完成组合，满足运营导向下的全生命周期管理的需要，最大限度提升政府就去改造和城市更新项目投资效率的需要。</div>
			<div class="model">
				<el-image class="model1" :src="require('@/assets/img/comein/model1.png')" fit="contain"></el-image>
			</div>
			<div class="row1">
				<span class="row1_l">BFSO</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="text">以全球业界标杆美国铁狮门的运营模式为框架，结合国内行业特点，深耕商业地产运营领域，研发出独特具尔家特色的BFSO活化运营模式，实现商业资本变现和持续增值。</div>
			<div class="model">
				<el-image class="model2" :src="require('@/assets/img/comein/model2.png')" fit="contain"></el-image>
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
		indexVideo,
		// projectVideoList,
		// activityVideoList
	} from '@/network/comein.js';

	export default {
		name: 'Comein',
		components: {
			Header,
			TopBanner,
			Footer
		},
		data() {
			return {
				imgResource: WEBCONFIG.resource_url_img,
				info: {
					// banner: require('@/assets/img/comein/banner1.png'),
					banner: WEBCONFIG.resource_url_img + '/comein/banner1.png',
					title: '走进尔家',
					title_en: 'Walk into uhome',
					tabList: [{
							id: 1,
							active: true,
							banner: '/comein/banner1.png',
							img: require('@/assets/img/comein/tab1.png'),
							name: '尔家介绍',
							name_en: 'Uhome profile'
						},
						{
							id: 2,
							active: false,
							banner: '/comein/banner1.png',
							img: require('@/assets/img/comein/tab2.png'),
							name: '管理团队',
							name_en: 'Management team'
						},
						{
							id: 3,
							active: false,
							banner: '/comein/banner1.png',
							img: require('@/assets/img/comein/tab3.png'),
							name: '项目介绍',
							name_en: 'Project introduction'
						}
					]
				},
				activeTab: 1,
				videoVisible: false,
				myVideo: '',
				introduction: {
					img: WEBCONFIG.resource_url_img + '/comein/ad.png',
					video: 'https://ltzn.oss-cn-zhangjiakou.aliyuncs.com/cms//03adaf36-00ac-4b8c-b8a1-1566263d0543.mp4',
					title: '企业介绍',
					title_en: 'Enterprise introduction',
					text1: '作为国内中高端服务式公寓领军品牌，上海尔家率先成立国内首家公寓主题产品设计研究院，力邀清华、同济等国内一线学府的杰出设计人才加盟，坚持定制化设计方向，专注打造业内领先的创新公寓产品。',
					text2: '尔家产品以Box设计理念、立体集成化原则，\n严格执行人体工程学原理，\n为居住者定制最舒适的家居尺度，\n设计最合理的收纳空间，'
				},
				companyInfo: {
					img: require('@/assets/img/comein/info.png'),
					// img: WEBCONFIG.resource_url_img + '/comein/info.png',
					content: '<p>上海尔家商业管理有限公司（以下简称尔家商业）成立于2017年，隶属德实资本，是一家集商业资产盘活、运营为一体的专业化资产管理公司，主要业务范围有尔家公寓、尔家酒店、尔家民宿、尔家商场的管理运营，其中致力于打造服务式公寓标杆的尔家公寓为企业战略发展的核心业务。</p><p>依托德实资本20多亿元管理资本的雄厚实力，尔家商业成功运作多个上市地产公司旗下商业地产项目，布局上海、苏州、无锡、常州、镇江、成都等多个城市，在运营及已签约项目累计100余万方。</p><p>尔家商业致力于成为业内领先的商业地产运营专家，秉着为社会打造诚信的行业标杆，为股东创造稳健的资本收益，为客户筑造美好的生活空间，为员工营造优质且有温情发展平台的使命，竭力成为一个让社会认可、股东信任、客户满意、员工信赖的优秀企业。</p>'
				},
				epco: {
					text: '将EPC(工程总承包)和om（委托运营）完成组合，满足运营导向下的全生命周期管理的需要，最大限度提升政府就去改造和城市更新项目投资效率的需要。',
					img1: require('@/assets/img/comein/epco1.png'),
					img2: require('@/assets/img/comein/epco2.png'),
				},
				bfso: {
					text: '以全球业界标杆美国铁狮门的运营模式为框架，结合国内行业特点，深耕商业地产运营领域，研发出独特具尔家特色的BFSO活化运营模式，实现商业资本变现和持续增值。',
					boxs: [{
							title: '收购',
							texts: ['市场调研', '论证评估', '讨论决策', '商务谈判']
						},
						{
							title: '整合',
							texts: ['社群定位', '客群细化', '产品设计', '批量工程']
						},
						{
							title: '运营',
							texts: ['托管运营', '长短结合', '星级服务', '数据分析']
						},
						{
							title: '营销',
							texts: ['市场调研', '论证评估', '讨论决策', '商务谈判']
						}
					]
				},
				dhs: [{
						time: '2009年8月',
						things: [{
							title: '德实资本成立'
						}]
					},
					{
						time: '2016年7月',
						things: [{
								title: '尔家酒店',
								text: '依托常州恐龙园，首创亲子主题酒店产品，入住率常年保持在80%以上。'
							},
							{
								title: '尔家公寓常州世茂项目',
								text: '全装修SOHO产品，出租率98%以上，租金高出周边价格30%左右。'
							},
						]
					},
					{
						time: '2017年8月',
						things: [{
							title: '上海尔家商业管理有限公司正式成立',
							text: '2017年12月，尔家公寓无锡金科项目\n华东区单体量最大的公寓项目，出租率98%以上，租金高出周边价格20%左右。'
						}]
					},
					{
						time: '2018年11月',
						things: [{
							title: '尔家公寓镇江宝龙项目',
							text: 'SOHO/LOFT/双钥匙多元化产品类型，颠覆镇江公寓市场价格，出租率99%以上。'
						}]
					},
					{
						time: '2019年3月',
						things: [{
							title: '尔家雅寓无锡绿地观澜湾项目',
							text: '雅寓产品系开篇之作，品质全面升级，长短租运营相结合，无锡公寓市场抗鼎之作。2019年07月'
						}]
					},
					{
						time: '2019年3月',
						things: [{
							title: '尔家雅寓成都绿地GIC项目',
							text: '从长三角走向中西部核心城市的战略部署，项目总货值30亿，引领成都公寓市场潮流。\n2019年08月与国际知名服务式公寓品牌雅诗阁达成战略合作。'
						}]
					},
					{
						time: '2020年7月',
						things: [{
							title: '尔家雅寓无锡绿地天空树项目',
							text: '上海尔家和绿地香港强强联合，以业内首创的全新商业模式，开辟公寓产品发展新方向！\n2020年08月，作为无锡市梁溪区重大招商项目签约\n2020年08月，与万科成都公司达成战略合作\n2020年09月，尔家雅寓成都万科云城项目'
						}]
					},
				],
				// videoProjectList: [{
				// 		id: 1,
				// 		// img: require('@/assets/img/comein/videoProject1.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject1.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	},
				// 	{
				// 		id: 2,
				// 		// img: require('@/assets/img/comein/videoProject2.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject2.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	},
				// 	{
				// 		id: 3,
				// 		// img: require('@/assets/img/comein/videoProject3.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject3.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	},
				// 	{
				// 		id: 4,
				// 		// img: require('@/assets/img/comein/videoProject4.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject4.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	},
				// 	{
				// 		id: 5,
				// 		// img: require('@/assets/img/comein/videoProject5.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject5.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	},
				// 	{
				// 		id: 6,
				// 		// img: require('@/assets/img/comein/videoProject6.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoProject6.png',
				// 		title: '无锡绿地观澜湾项目'
				// 	}
				// ],
				// videoActivityList: [{
				// 		id: 1,
				// 		// img: require('@/assets/img/comein/videoActivity1.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity1.png',
				// 		title: '燃爆盛夏 嗨翻全场｜尔家第三届百人龙虾节激情落幕！'
				// 	},
				// 	{
				// 		id: 2,
				// 		// img: require('@/assets/img/comein/videoActivity2.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity2.png',
				// 		title: '尔家龙虾节｜一年一度的龙虾节终于来了！'
				// 	},
				// 	{
				// 		id: 3,
				// 		// img: require('@/assets/img/comein/videoActivity3.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity3.png',
				// 		title: '父亲节｜晒照片赢888元现金红包！'
				// 	},
				// 	{
				// 		id: 4,
				// 		// img: require('@/assets/img/comein/videoActivity4.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity4.png',
				// 		title: '520交友派对｜解锁“新一代年轻人的交友”新方式！'
				// 	},
				// 	{
				// 		id: 5,
				// 		// img: require('@/assets/img/comein/videoActivity5.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity5.png',
				// 		title: '奇妙 · 扎染 手底生出来的花朵！'
				// 	},
				// 	{
				// 		id: 6,
				// 		// img: require('@/assets/img/comein/videoActivity6.png'),
				// 		img: WEBCONFIG.resource_url_img + '/comein/videoActivity6.png',
				// 		title: '爱心公益U时代，有你有我更精彩。'
				// 	}
				// ],
				integrationList: [{
						id: 1,
						img: require('@/assets/img/comein/integration1.png'),
						name: '张二干',
						job: '集团执行董事'
					},
					{
						id: 2,
						img: require('@/assets/img/comein/integration2.png'),
						name: '曹文银',
						job: '财务管理部总监'
					},
					{
						id: 3,
						img: require('@/assets/img/comein/integration3.png'),
						name: '杨磊',
						job: '首席产品官'
					},
					{
						id: 4,
						img: require('@/assets/img/comein/integration4.png'),
						name: '王秋菊',
						job: '项目营销总监'
					}
				],
				marketList: [{
						id: 1,
						img: require('@/assets/img/comein/market1.png'),
						name: '谈潭',
						job: '成都城市公司总经理'
					},
					{
						id: 2,
						img: require('@/assets/img/comein/market2.png'),
						name: '吕姚朔',
						job: '人事行政部经理'
					},
					{
						id: 3,
						img: require('@/assets/img/comein/market3.png'),
						name: '刘晓',
						job: '产品工程总监'
					}
				],
				businessList: [{
						id: 1,
						img: require('@/assets/img/comein/business1.png'),
						name: '刘璐铭',
						job: '商管中心总经理'
					},
					{
						id: 2,
						img: require('@/assets/img/comein/business2.png'),
						name: '张原浩',
						job: '商管开发部经理'
					}
				]
			};
		},
		mounted() {
			this.jump();
			this.getIndexVideo();
			this.getProjectVideoList();
			this.getActivityVideoList();
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
			gotoDetail(id) {
				this.$router.push({
					path: '/project_detail',
					query: {
						id
					}
				});
			},
			getIndexVideo() {
				indexVideo().then(data => {
					this.introduction.img = data.data.coverUrl;
					this.introduction.video = data.data.videoUrl;
				});
			},
			// getProjectVideoList() {
			// 	projectVideoList().then(data => {
			// 		this.videoProjectList.splice(0, this.videoProjectList.length);
			// 		this.videoProjectList = data.data.map(item => {
			// 			return {
			// 				id: item.id,
			// 				img: item.coverUrl,
			// 				video: item.videoUrl,
			// 				title: item.name
			// 			};
			// 		});
			// 	});
			// },
			// getActivityVideoList() {
			// 	activityVideoList().then(data => {
			// 		this.videoActivityList.splice(0, this.videoActivityList.length);
			// 		this.videoActivityList = data.data.map(item => {
			// 			return {
			// 				id: item.id,
			// 				img: item.coverUrl,
			// 				video: item.videoUrl,
			// 				title: item.name
			// 			};
			// 		});
			// 	});
			// },
			playVideo(video) {
				if (!video) {
					this.myVideo = '';
					this.videoVisible = true;
				} else if (this.myVideo == video) {
					this.videoVisible = true;
					this.$refs.myVideo.play();
				} else {
					this.myVideo = video;
					this.videoVisible = true;
					this.$nextTick(() => {
						this.$refs.myVideo.addEventListener('loadeddata', () => {
							this.$refs.myVideo.play();
						});
					});
				}
			},
			closeVideo() {
				this.$refs.myVideo.pause();
				this.videoVisible = false;
			}
		}
	};
</script>

<style scoped lang="scss">
	.comein {
		background-color: var(--color-bg-default);

		.content1 {
			.introduction {
				display: flex;

				.introduction-video {
					position: relative;

					.video-img {
						display: block;
					}

					.video-play {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 15%;
						min-width: 40px;
						cursor: pointer;
					}
				}

				.introduction-content {
					.title {
						margin-top: 20px;
						font-size: 3.4rem;
						letter-spacing: 0.1rem;
						color: #333333;
					}

					.title-en {
						margin-top: 15px;
						font-size: 2.4rem;
						letter-spacing: 0.1rem;
						color: #acacac;
					}

					.text1 {
						margin-top: 35px;
						font-size: 1.6rem;
						color: #333333;
						line-height: 3rem;
					}

					.text2 {
						margin-top: 35px;
						font-size: 1.8rem;
						font-weight: bold;
						color: #333333;
						line-height: 4rem;
						white-space: pre-line;
					}
				}
			}

			.info {
				display: flex;

				.info-content {
					font-size: 1.6rem;
					color: #333333;
					line-height: 3rem;
					text-indent: 2em;
					background-color: #F4F1E7;

					::v-deep p {
						margin-top: 30px;
					}
				}
			}

			.epco-text {
				font-size: 2rem;
				color: #333333;
				line-height: 3.5rem;
				text-align: center;
			}

			.epco-img {
				display: block;
			}

			.bfso {
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;

				.bfso-text {
					font-size: 2rem;
					color: #333333;
					line-height: 3.5rem;
					text-align: center;
				}

				.bfso-content {
					display: flex;

					.box {
						display: flex;

						.box-title {
							flex-basis: 30%;
							font-size: 3rem;
							font-weight: bold;
							letter-spacing: 0.1rem;
							color: var(--color-t-white);
							background-color: var(--color-bg-main);
							display: flex;
							justify-content: center;
							align-items: center;
						}

						.box-texts {
							padding: 30px 40px;
							flex-basis: 70%;
							background-color: #F4F1E7;

							.box-text {
								display: flex;
								align-items: center;

								&:not(:last-child) {
									margin-bottom: 15px;
								}

								.num {
									width: 2.4rem;
									height: 2.4rem;
									border-radius: 50%;
									font-size: 2rem;
									line-height: 2.4rem;
									text-align: center;
									color: var(--color-t-white);
									background-color: var(--color-bg-main);
								}

								.text {
									margin-left: 25px;
									font-size: 2rem;
									color: #333333;
								}
							}
						}
					}
				}
			}

			.dh {
				position: relative;

				.circle {
					width: 10px !important;
					height: 10px !important;
					border-radius: 50%;
					border: 2px solid var(--color-bg-main);
					background-color: var(--color-bg-default) !important;
				}

				.line {
					position: absolute;
					left: 50%;
					transform: translate(-50%, 25px);
					width: 2px;
					height: 100%;
					background-color: var(--color-bg-main);

					.line-circle {
						position: absolute;
						bottom: -15px;
						left: 50%;
						transform: translateX(-50%);
					}
				}

				.dh-box {
					display: flex;
					align-items: center;

					.dh-time {
						flex-basis: 50%;
						box-sizing: border-box;
						font-size: 1.8rem;
						color: var(--color-t-active);
						font-weight: bold;
					}

					.dh-dot {
						width: 12px;
						height: 12px;
						border-radius: 50%;
						background-color: var(--color-bg-main);
					}

					.dh-things {
						flex-basis: 50%;
						box-sizing: border-box;

						.dh-thing {
							.thing-title {
								font-size: 1.8rem;
								color: #333333;
								font-weight: bold;
								line-height: 3.5rem;
							}

							.thing-text {
								font-size: 1.4rem;
								color: #333333;
								line-height: 3rem;
								white-space: pre-line;
							}
						}
					}
				}

				.reverse {
					flex-direction: row-reverse;
				}
			}

			::v-deep .my-dialog {
				.my-video {
					width: 100%;
				}
			}
		}

		.content2 {
			.managements {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;

				.management {
					padding: 15px;
					box-shadow: 0 0 10px 0 #999999;
					border-radius: 10px;
					text-align: center;

					.img {
						display: block;
					}

					.name {
						margin-top: 25px;
						font-size: 2.4rem;
						letter-spacing: 0.1rem;
						color: var(--color-t-active);
					}

					.job {
						margin: 15px 0;
						font-size: 1.6rem;
						color: #333333;
					}
				}
			}
		}

		.content3 {
			.text {
				margin: 0 auto;
				font-size: 2rem;
				line-height: 3.5rem;
				text-align: center;
			}

			.model {
				text-align: center;
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
		.comein {
			.content1 {
				.introduction {
					margin-top: 60px;
					flex-wrap: wrap;

					.introduction-video {
						flex-basis: 100%;

						.video-img {
							height: 250px;
						}
					}

					.introduction-content {
						flex-basis: 100%;
						margin: 20px 10px;
					}
				}

				.info {
					margin-top: 60px;
					flex-wrap: wrap;

					.info-img {
						flex-basis: 100%;
					}

					.info-content {
						padding: 20px;
						flex-basis: 100%;
					}
				}

				.epco-text {
					margin: 60px 20px;
				}

				.epco-img1 {
					margin: 60px 20px;
				}

				.epco-img2 {
					margin: 60px 10px;
				}

				.bfso {
					margin-top: 60px;
					overflow: hidden;

					.row1 {
						margin-top: 50px;
					}

					.bfso-text {
						margin: 60px 20px;
					}

					.bfso-content {
						flex-wrap: wrap;
						margin: 50px 10px;

						.box {
							flex-basis: 100%;
							margin-bottom: 30px;
						}
					}
				}

				.dh {
					margin: 60px 0;

					.dh-box {
						margin: 0 10px;

						&:not(:last-child) {
							margin-bottom: 40px;
						}

						.dh-dot {
							margin: 0 30px;
						}
					}
				}

				::v-deep .my-dialog {
					width: 90%;
				}
			}

			.content2 {
				margin: 0 20px;

				.managements {
					margin-top: 30px;

					.management {
						margin-bottom: 30px;
						flex-basis: 100%;
					}
				}
			}

			.content3 {
				margin: 0 20px 60px;

				.text {
					margin-top: 40px;
					width: 100%;
				}

				.model {
					margin-top: 40px;

					.model1 {
						width: 100%;
					}

					.model2 {
						width: 100%;
					}
				}
			}

			.row1 {
				margin-top: 50px;
			}
		}
	}

	@media screen and (min-width: 1080px) {
		.comein {
			.content1 {
				.introduction {
					margin: 120px auto 0;
					width: 70%;
					min-width: 1000px;
					justify-content: space-between;

					.introduction-video {
						flex-basis: 45%;

						.video-img {
							height: 100%;
						}
					}

					.introduction-content {
						flex-basis: 45%;
					}
				}

				.info {
					margin-top: 180px;

					.info-img {
						display: block;
						flex-basis: 50%;
					}

					.info-content {
						padding: 100px;
						box-sizing: border-box;
						flex-basis: 50%;
					}
				}

				.epco-text {
					margin: 80px auto 0;
					width: 60%;
					min-width: 800px;
				}

				.epco-img1 {
					margin: 120px auto 0;
					width: 50%;
					min-width: 600px;
				}

				.epco-img2 {
					margin: 120px auto 0;
					width: 60%;
					min-width: 800px;
				}

				.bfso {
					margin-top: 120px;
					overflow: hidden;

					.row1 {
						margin-top: 50px;
					}

					.bfso-text {
						margin: 80px auto 0;
						width: 60%;
						min-width: 800px;
					}

					.bfso-content {
						flex-wrap: wrap;
						justify-content: space-between;
						margin: 100px auto 0;
						width: 70%;
						min-width: 900px;

						.box {
							flex-basis: 45%;
							margin-bottom: 50px;
						}
					}
				}

				.dh {
					margin: 80px 0;

					.dh-box {
						margin: 0 auto;
						width: 60%;
						min-width: 800px;

						&:not(:last-child) {
							margin-bottom: 80px;
						}

						.dh-dot {
							margin: 0 80px;
						}
					}
				}
			}

			.content2 {
				margin: 20px auto 100px;
				width: 70%;
				min-width: 1000px;

				.managements {
					margin-top: 60px;

					.management {
						margin: 0 2%;
						flex-basis: 18%;
					}
				}
			}

			.content3 {
				margin: 20px auto 100px;
				width: 70%;
				min-width: 1000px;

				.text {
					margin-top: 100px;
					width: 80%;
				}

				.model {
					margin-top: 100px;

					.model1 {
						width: 60%;
					}

					.model2 {
						width: 100%;
					}
				}
			}

			.row1 {
				margin-top: 150px;
			}
		}
	}
</style>

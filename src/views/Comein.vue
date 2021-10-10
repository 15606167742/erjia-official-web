<template>
	<div class="comein">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="introduction">
				<div class="introduction-video">
					<el-image class="video-img" :src="introduction.img" fit="cover"></el-image>
					<el-image class="video-play" :src="require('@/assets/img/comein/play1.png')" fit="contain" @click="playVideo(introduction.video)"></el-image>
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
			<div class="epco-text">{{ epco.text }}</div>
			<el-image class="epco-img epco-img1" :src="epco.img1" fit="contain"></el-image>
			<el-image class="epco-img epco-img2" :src="epco.img2" fit="contain"></el-image>
			<div class="bfso" :style="{ 'background-image': 'url(' + imgResource + '/comein/bfso_bg.png)' }">
				<!-- <div class="bfso" :style="{'background-image':'url('+require('@/assets/img/comein/bfso_bg.png')+')'}"> -->
				<div class="row1">
					<span class="row1_l">BFSO</span>
					<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
				</div>
				<div class="bfso-text">{{ bfso.text }}</div>
				<div class="bfso-content">
					<div class="box" :key="index" v-for="(box, index) in bfso.boxs">
						<div class="box-title">{{ box.title }}</div>
						<div class="box-texts">
							<div class="box-text" :key="num" v-for="(text, num) in box.texts">
								<div class="num">{{ num + 1 }}</div>
								<div class="text">{{ text }}</div>
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
				<div class="line"><div class="circle line-circle"></div></div>
				<div class="dh-box" :class="{ reverse: index % 2 == 0 }" :key="index" v-for="(dh, index) in dhs">
					<div class="dh-time">{{ dh.time }}</div>
					<div class="dh-dot" :class="{ circle: index == 0 }"></div>
					<div class="dh-things">
						<div class="dh-thing" :key="i" v-for="(thing, i) in dh.things">
							<div class="thing-title">{{ thing.title }}</div>
							<div class="thing-text">{{ thing.text }}</div>
						</div>
					</div>
				</div>
			</div>
			<el-dialog custom-class="my-dialog" :visible="videoVisible" @close="closeVideo"><video ref="myVideo" class="my-video" :src="myVideo" controls="controls"></video></el-dialog>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="leader">
				<el-image class="leader-img" :src="leader.img" fit="contain"></el-image>
				<div class="text">
					<div class="name">{{ leader.name }}</div>
					<div class="job">{{ leader.job }}</div>
					<div class="info">
						<div class="line" :key="index" v-for="(info, index) in leader.infoList">
							<div class="circle"></div>
							<div class="info-text">{{ info }}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="member">
				<div class="box" :key="index" v-for="(member, index) in memberList">
					<el-image class="my-img" :src="member.img" fit="contain"></el-image>
					<div class="name">{{ member.name }}</div>
					<div class="job">{{ member.job }}</div>
				</div>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<div class="row1">
				<span class="row1_l">在售</span>
				<span class="row1_r">项目</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Items on sale</div>
			<div class="sales">
				<div class="sale" :key="sale.id" v-for="sale in saleList">
					<el-image class="my-img" :src="sale.img" fit="cover"></el-image>
					<div class="content">
						<div class="row">
							<div class="box">
								<div class="title">{{ sale.title }}</div>
								<div class="adj">{{ sale.adj }}</div>
							</div>
							<div class="more" @click="gotoDetail(sale.id)">了解更多</div>
						</div>
						<div class="price">{{ sale.price }}</div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">在运营</span>
				<span class="row1_r">项目</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Projects in operation</div>
			<div class="sales">
				<div class="sale" :key="running.id" v-for="running in runningList">
					<el-image class="my-img" :src="running.img" fit="cover"></el-image>
					<div class="content">
						<div class="row">
							<div class="box">
								<div class="title">{{ running.title }}</div>
								<div class="adj">{{ running.adj }}</div>
							</div>
							<div class="more" @click="gotoDetail(running.id)">了解更多</div>
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

import { projectList, indexVideo, developmentList, leaderTopOne, leaderList } from '@/network/comein.js';

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
				tabList: [
					{
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
				text1:
					'作为国内中高端服务式公寓领军品牌，上海尔家率先成立国内首家公寓主题产品设计研究院，力邀清华、同济等国内一线学府的杰出设计人才加盟，坚持定制化设计方向，专注打造业内领先的创新公寓产品。',
				text2: '尔家产品以Box设计理念、立体集成化原则，\n严格执行人体工程学原理，\n为居住者定制最舒适的家居尺度，\n设计最合理的收纳空间，'
			},
			companyInfo: {
				// img: require('@/assets/img/comein/info.png'),
				img: WEBCONFIG.resource_url_img + '/comein/info.png',
				content:
					'<p>上海尔家商业管理有限公司（以下简称尔家商业）成立于2017年，隶属德实资本，是一家集商业资产盘活、运营为一体的专业化资产管理公司，主要业务范围有尔家公寓、尔家酒店、尔家民宿、尔家商场的管理运营，其中致力于打造服务式公寓标杆的尔家公寓为企业战略发展的核心业务。</p><p>依托德实资本20多亿元管理资本的雄厚实力，尔家商业成功运作多个上市地产公司旗下商业地产项目，布局上海、苏州、无锡、常州、镇江、成都等多个城市，在运营及已签约项目累计100余万方。</p><p>尔家商业致力于成为业内领先的商业地产运营专家，秉着为社会打造诚信的行业标杆，为股东创造稳健的资本收益，为客户筑造美好的生活空间，为员工营造优质且有温情发展平台的使命，竭力成为一个让社会认可、股东信任、客户满意、员工信赖的优秀企业。</p>'
			},
			epco: {
				text: '将EPC(工程总承包)和om（委托运营）完成组合，满足运营导向下的全生命周期管理的需要，最大限度提升政府就去改造和城市更新项目投资效率的需要。',
				// img1: require('@/assets/img/comein/epco1.png'),
				// img2: require('@/assets/img/comein/epco2.png'),
				img1: WEBCONFIG.resource_url_img + '/comein/epco1.png',
				img2: WEBCONFIG.resource_url_img + '/comein/epco2.png'
			},
			bfso: {
				text: '以全球业界标杆美国铁狮门的运营模式为框架，结合国内行业特点，深耕商业地产运营领域，研发出独特具尔家特色的BFSO活化运营模式，实现商业资本变现和持续增值。',
				boxs: [
					{
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
			dhs: [
				{
					time: '2009年8月',
					things: [
						{
							title: '德实资本成立'
						}
					]
				},
				{
					time: '2016年7月',
					things: [
						{
							title: '尔家酒店',
							text: '依托常州恐龙园，首创亲子主题酒店产品，入住率常年保持在80%以上。'
						},
						{
							title: '尔家公寓常州世茂项目',
							text: '全装修SOHO产品，出租率98%以上，租金高出周边价格30%左右。'
						}
					]
				},
				{
					time: '2017年8月',
					things: [
						{
							title: '上海尔家商业管理有限公司正式成立',
							text: '2017年12月，尔家公寓无锡金科项目\n华东区单体量最大的公寓项目，出租率98%以上，租金高出周边价格20%左右。'
						}
					]
				},
				{
					time: '2018年11月',
					things: [
						{
							title: '尔家公寓镇江宝龙项目',
							text: 'SOHO/LOFT/双钥匙多元化产品类型，颠覆镇江公寓市场价格，出租率99%以上。'
						}
					]
				},
				{
					time: '2019年3月',
					things: [
						{
							title: '尔家雅寓无锡绿地观澜湾项目',
							text: '雅寓产品系开篇之作，品质全面升级，长短租运营相结合，无锡公寓市场抗鼎之作。2019年07月'
						}
					]
				},
				{
					time: '2019年3月',
					things: [
						{
							title: '尔家雅寓成都绿地GIC项目',
							text: '从长三角走向中西部核心城市的战略部署，项目总货值30亿，引领成都公寓市场潮流。\n2019年08月与国际知名服务式公寓品牌雅诗阁达成战略合作。'
						}
					]
				},
				{
					time: '2020年7月',
					things: [
						{
							title: '尔家雅寓无锡绿地天空树项目',
							text:
								'上海尔家和绿地香港强强联合，以业内首创的全新商业模式，开辟公寓产品发展新方向！\n2020年08月，作为无锡市梁溪区重大招商项目签约\n2020年08月，与万科成都公司达成战略合作\n2020年09月，尔家雅寓成都万科云城项目'
						}
					]
				}
			],
			leader: {
				img: require('@/assets/img/comein/leader.png'),
				name: '张二干',
				job: '集团执行董事',
				infoList: [
					'国家会计学院金融硕士',
					'上海交大金融博士',
					'研究课题：利用REITS思维化解商业地产存量库存 曾任职大型上市公司财务总监、房地产集团财务总监，超过15年的房地产开发和投融资管理，在房地产领域累计投资规模超过50亿元。'
				]
			},
			memberList: [
				{
					img: require('@/assets/img/comein/member1.png'),
					name: '左家虎',
					job: '总裁办副主任'
				},
				{
					img: require('@/assets/img/comein/member2.png'),
					name: '曹文银',
					job: '财务管理部高级总监'
				},
				{
					img: require('@/assets/img/comein/member3.png'),
					name: '吕姚朔',
					job: '人事行政部经理'
				},
				{
					img: require('@/assets/img/comein/member4.png'),
					name: '李小明',
					job: '总部营销部总监'
				},
				{
					img: require('@/assets/img/comein/member5.png'),
					name: '谈潭',
					job: '成都城市公司总经理\n无锡绿地项目总'
				},
				{
					img: require('@/assets/img/comein/member6.png'),
					name: '刘璐铭',
					job: '商管中心总经理'
				},
				{
					img: require('@/assets/img/comein/member7.png'),
					name: '王恩林',
					job: '产品中心总经理'
				},
				{
					img: require('@/assets/img/comein/member8.png'),
					name: '徐朋',
					job: '产品中心副总经理'
				},
				{
					img: require('@/assets/img/comein/member9.png'),
					name: '刘晓',
					job: '产品中心总经理助理'
				},
				{
					img: require('@/assets/img/comein/member10.png'),
					name: '张原浩',
					job: '数据部经理'
				},
				{
					img: require('@/assets/img/comein/member11.png'),
					name: '王秋菊',
					job: '开发部经理'
				},
				{
					img: require('@/assets/img/comein/member12.png'),
					name: '易洁',
					job: '品牌部副经理'
				}
			],
			saleList: [
				{
					id: 1,
					// img: require('@/assets/img/comein/sale1.png'),
					img: WEBCONFIG.resource_url_img + '/comein/sale1.png',
					title: '无锡天空树尔家雅寓',
					adj: 'LOFT 户型 紧跟潮流',
					price: '￥18000/㎡'
				}
			],
			runningList: [
				{
					id: 1,
					// img: require('@/assets/img/comein/sale1.png'),
					img: WEBCONFIG.resource_url_img + '/comein/sale1.png',
					title: '无锡天空树尔家雅寓',
					adj: 'LOFT 户型 紧跟潮流'
				}
			]
		};
	},
	mounted() {
		this.jump();
		this.getIndexVideo();
		this.getDevelopmentList();
		this.getLeaderTopOne();
		this.getLeaderList();
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
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
				} else {
					tab.active = false;
				}
			});
		},
		getIndexVideo() {
			indexVideo().then(data => {
				this.introduction.img = data.data.coverUrl;
				this.introduction.video = data.data.videoUrl;
			});
		},
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
		},
		getDevelopmentList() {
			developmentList().then(data => {
				this.dhs.splice(0, this.dhs.length);
				this.dhs = data.data.map(item => {
					return {
						time: item.dateTitle,
						things: [
							{
								title: item.title,
								text: item.des.replace(/<[^<]+>|&nbsp;/g, '')
							}
						]
					};
				}).reverse();
			})
		},
		getLeaderTopOne() {
			leaderTopOne().then(data => {
				this.leader.img = data.data.img;
				this.leader.name = data.data.name;
				this.leader.job = data.data.post;
				this.leader.infoList = data.data.des.replace(/<[^<]+>/g, '').split('；');
			})
		},
		getLeaderList() {
			leaderList().then(data => {
				this.memberList.splice(0, this.memberList.length);
				this.memberList = data.data.map(item => {
					return {
						img: item.img,
						name: item.name,
						job: item.post
					};
				});
			})
		},
		getProjectList1() {
			projectList({ pageNum: 1, pageSize: 3, projectOperationStatus: 0 }).then(data => {
				this.saleList.splice(0, this.saleList.length);
				this.saleList = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						title: item.name,
						adj: item.indexTag,
						price: item.rentStart + ' ' + item.rentStartUnit
					};
				});
			});
		},
		getProjectList2() {
			projectList({ pageNum: 1, pageSize: 3, projectOperationStatus: 1 }).then(data => {
				this.runningList.splice(0, this.runningList.length);
				this.runningList = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						title: item.name,
						adj: item.indexTag
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
				background-color: #f4f1e7;

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
						background-color: #f4f1e7;

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
					flex-shrink: 0;
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
		.leader {
			display: flex;
			align-items: stretch;
			.text {
				background-color: #dfdfdf;
				.name {
					font-size: 3rem;
					color: var(--color-t-active);
				}
				.job {
					font-size: 1.8rem;
					color: #333333;
				}
				.info {
					.line {
						display: flex;
						.circle {
							flex-shrink: 0;
							margin: 1rem 0.5rem;
							width: 0.8rem;
							height: 0.8rem;
							border-radius: 50%;
							background-color: #333333;
						}
						.info-text {
							font-size: 1.8rem;
							color: #333333;
							line-height: 3rem;
						}
					}
				}
			}
		}
		.member {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box {
				text-align: center;
				.my-img {
					display: block;
				}
				.name {
					font-size: 2.4rem;
					color: var(--color-t-active);
				}
				.job {
					font-size: 2rem;
					color: #777777;
					white-space: pre-line;
					line-height: 3rem;
				}
			}
		}
	}

	.content3 {
		.sales {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
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
		}

		.content3 {
			margin: 0 20px 60px;

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
			margin: 80px auto 100px;
			width: 80%;
			min-width: 1000px;
			.leader {
				.leader-img {
					flex-basis: 25%;
					flex-shrink: 0;
				}
				.text {
					flex-basis: 75%;
					padding: 30px 40px;
					.job {
						margin-top: 30px;
					}
					.info {
						margin-top: 20px;
					}
				}
			}
			.member {
				margin-top: 120px;
				.box {
					flex-basis: 22%;
					margin-bottom: 100px;
					.my-img {
						height: 400px;
					}
					.name {
						margin-top: 20px;
					}
					.job {
						margin-top: 15px;
					}
				}
			}
		}

		.content3 {
			margin: 20px auto 100px;
			width: 70%;
			min-width: 1000px;

			.sales {
				margin-top: 60px;
				.sale {
					flex-basis: 30%;
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

		.row1 {
			margin-top: 150px;
		}
	}
}
</style>

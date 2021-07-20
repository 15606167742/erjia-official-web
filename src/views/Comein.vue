<template>
	<div class="comein">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="profile">
				<div class="profile-content">
					<div class="title">公司介绍</div>
					<div class="title-en">Conmpany Introduction</div>
					<div class="stick"></div>
					<div class="text">
						上海尔家商业管理有限公司（以下简称尔家商业）成立于2017年，隶属德实资本，是一家集商业资产盘活、运营为一体的专业化资产管理公司，主要业务范围有尔家公寓、尔家酒店、尔家民宿、尔家商场的管理运营，其中致力于打造服务式公寓标杆的尔家公寓为企业战略发展的核心业务。
					</div>
					<div class="text">
						依托德实资本20多亿元管理资本的雄厚实力，尔家商业成功运作多个上市地产公司旗下商业地产项目，布局上海、苏州、无锡、常州、镇江、成都等多个城市，在运营及已签约项目累计100余万方。
					</div>
					<div class="text">
						尔家商业致力于成为业内领先的商业地产运营专家，秉着为社会打造诚信的行业标杆，为股东创造稳健的资本收益，为客户筑造美好的生活空间，为员工营造优质且有温情发展平台的使命，竭力成为一个让社会认可、股东信任、客户满意、员工信赖的优秀企业。
					</div>
				</div>
				<el-image class="profile-img" :src="imgResource + '/comein/profile.png'" fit="contain"></el-image>
			</div>
			<div class="row1">
				<span class="row1_l">项目</span>
				<span class="row1_r">介绍</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Project introduction</div>
			<div class="projects">
				<div class="project" :class="{ reverse: index % 2 == 0 }" :key="project.id" v-for="(project, index) in projectList">
					<el-image class="project-img" :src="project.img" fit="contain"></el-image>
					<div class="project-content">
						<div class="title">{{ project.title }}</div>
						<div class="text">{{ project.text }}</div>
						<div class="arror"><el-image class="arror-img" :src="require('@/assets/img/comein/arror.png')" fit="contain"></el-image></div>
					</div>
				</div>
			</div>
			<div class="row1">
				<span class="row1_l">运营</span>
				<span class="row1_r">模式</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Operation mode</div>
			<div class="modes">
				<div class="mode" :key="mode.id" v-for="mode in modeList">
					<div class="circle"></div>
					<div class="text">{{ mode.text }}</div>
				</div>
			</div>
			<el-image class="mode-img" :src="require('@/assets/img/comein/mode.png')" fit="contain"></el-image>
			<div class="row1">
				<span class="row1_l">在售</span>
				<span class="row1_r">项目</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Items on sale</div>
			<div class="sales">
				<div class="sale" :key="sale.id" v-for="sale in saleList">
					<el-image class="my-img" :src="sale.img" fit="contain"></el-image>
					<div class="content">
						<div class="en">{{ sale.en }}</div>
						<div class="title">{{ sale.title }}</div>
						<div class="text">{{ sale.adj }}</div>
						<div class="text-en">{{ sale.adj_en }}</div>
						<div class="text">{{ sale.text }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="ad">
				<el-image class="ad-img" :src="require('@/assets/img/comein/ad.png')" fit="contain"></el-image>
				<el-image class="ad-play" :src="require('@/assets/img/comein/play1.png')" fit="contain"></el-image>
			</div>
			<div class="content">
				<div class="row1">
					<span class="row1_l">项目</span>
					<span class="row1_r">视频</span>
					<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
				</div>
				<div class="row2">Project video</div>
				<div class="videos">
					<div class="video" :key="vp.id" v-for="vp in videoProjectList">
						<div class="box">
							<el-image class="img" :src="vp.img" fit="contain"></el-image>
							<el-image class="play" :src="require('@/assets/img/comein/play2.png')" fit="contain"></el-image>
						</div>
						<div class="title">
							{{vp.title}}
						</div>
					</div>
				</div>
				<div class="row1">
					<span class="row1_l">社群活动</span>
					<span class="row1_r">视频</span>
					<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
				</div>
				<div class="row2">Community activism video</div>
				<div class="videos">
					<div class="video" :key="va.id" v-for="va in videoActivityList">
						<div class="box">
							<el-image class="img" :src="va.img" fit="contain"></el-image>
							<el-image class="play" :src="require('@/assets/img/comein/play2.png')" fit="contain"></el-image>
						</div>
						<div class="title">
							{{va.title}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<div class="row1">
				<span class="row1_l">综合</span>
				<span class="row1_r">管理</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Integrated management</div>
			<div class="managements">
				<div class="management" :key="integration.id" v-for="integration in integrationList">
					<el-image class="img" :src="integration.img" fit="contain"></el-image>
					<div class="name">
						{{integration.name}}
					</div>
					<div class="job">
						{{integration.job}}
					</div>
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
					<div class="name">
						{{market.name}}
					</div>
					<div class="job">
						{{market.job}}
					</div>
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
					<div class="name">
						{{business.name}}
					</div>
					<div class="job">
						{{business.job}}
					</div>
				</div>
			</div>
		</div>
		<div class="content4" v-else-if="activeTab === 4">
			<div class="row1">
				<span class="row1_l">EPCO</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="text">
				将EPC(工程总承包)和om（委托运营）完成组合，满足运营导向下的全生命周期管理的需要，最大限度提升政府就去改造和城市更新项目投资效率的需要。
			</div>
			<div class="model">
				<el-image class="model1" :src="require('@/assets/img/comein/model1.png')" fit="contain"></el-image>
			</div>
			<div class="row1">
				<span class="row1_l">BFSO</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="text">
				以全球业界标杆美国铁狮门的运营模式为框架，结合国内行业特点，深耕商业地产运营领域，研发出独特具尔家特色的BFSO活化运营模式，实现商业资本变现和持续增值。
			</div>
			<div class="model">
				<el-image class="model2" :src="require('@/assets/img/comein/model2.png')" fit="contain"></el-image>
			</div>
		</div>
		<div class="content5" v-else-if="activeTab === 5">
			<div class="content">
				<div class="dot up"></div>
				<div class="dot down"></div>
				<div class="box">
					<div class="tip">
						2009年<br />08月
					</div>
					<div class="title">
						德实资本成立
					</div>
				</div>
				<div class="box">
					<div class="tip">
						2016年<br />07月
					</div>
					<div class="title">
						尔家酒店
					</div>
					<div class="text">
						依托常州恐龙园，首创亲子主题酒店产品，入住率常年保持在80%以上。
					</div>
					<div class="title">
						尔家公寓常州世茂项目
					</div>
					<div class="text">
						全装修SOHO产品，出租率98%以上，租金高出周边价格30%左右。
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
						name: '公司介绍',
						name_en: 'Company profile'
					},
					{
						id: 2,
						active: false,
						banner: '/comein/banner1.png',
						img: require('@/assets/img/comein/tab2.png'),
						name: '公司视频',
						name_en: 'Company video'
					},
					{
						id: 3,
						active: false,
						banner: '/comein/banner1.png',
						img: require('@/assets/img/comein/tab3.png'),
						name: '管理团队',
						name_en: 'Management team'
					},
					{
						id: 4,
						active: false,
						banner: '/comein/banner1.png',
						img: require('@/assets/img/comein/tab4.png'),
						name: '商业模式',
						name_en: 'business model'
					},
					{
						id: 5,
						active: false,
						banner: '/comein/banner1.png',
						img: require('@/assets/img/comein/tab5.png'),
						name: '发展历程',
						name_en: 'Development history'
					}
				]
			},
			activeTab: 1,
			projectList: [
				{
					id: 1,
					img: require('@/assets/img/comein/project1.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/project1.png',
					title: '尔家雅寓\n无锡绿地天空树项目',
					text: '48㎡全装托管地铁小户，超值投资\n跑赢通货膨胀'
				},
				{
					id: 2,
					img: require('@/assets/img/comein/project2.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/project2.png',
					title: '镇江宝龙项目',
					text: '小户型没有复式的惯例，\n尔佳镇江暴龙复式设计是例外。'
				},
				{
					id: 3,
					img: require('@/assets/img/comein/project3.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/project1.png',
					title: '无锡金科米兰店',
					text: '尔家馨寓金科米兰位于新吴区\n行创四路，区位配套完善，\n毗邻中央公园，环境优美，交通便利。'
				},
				{
					id: 4,
					img: require('@/assets/img/comein/project4.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/project1.png',
					title: '尔家雅寓绿地观澜湾店',
					text: '尔家雅寓地处无锡核心地段，\n东拥市中心，西临古运河，\n坐拥无锡CBD。'
				}
			],
			modeList: [
				{
					id: 1,
					text:
						'尔家商业率先成立国内首家公寓主题产品研究院，力邀清华、同济等国内一线学府优秀设计人才加盟，专注打造业内领先的创新公寓产品，目前已形成“尔家雅寓”和“尔家馨寓”两大产品系列。'
				},
				{
					id: 2,
					text:
						'尔家全系公寓产品以Box设计理念、立体集成化原则，严格执行人体工程学原理，为居住者定制最舒适的家居尺度、设计最合理的收纳空间，使公寓产品回归居住本质，营造引领时代的生活空间和生活方式！'
				},
				{
					id: 3,
					text:
						'尔家全系公寓产品为客户量身定制多维度灵活托管运营方案，客户可按需选择自用或托管服务模式，长短租结合，合理降低空置率，稳定提升托管收益，尽享运	营溢	价与自身增值带来的红利。'
				},
				{
					id: 4,
					text:
						'以国际知名服务式公寓品牌雅诗阁为蓝本，尔家全系公寓产品严格执行星级酒店服务标准，24小时私属管家守候，公区多维服务，社群联盟运营，给长租精英群体和短租商旅人士带来家一般的温馨和温暖。'
				},
				{
					id: 5,
					text:
						'凭借自身强大的“产品+运营”能力，尔家商业不断为各类商业项目赋能。一方面与各大开发商成功合作多个商业地产项目，在加速项目去化的同时提高产品溢价率，提升资产价值；另一方面，与政府大力合作旧区改造和城市更新项目，也正成为公司业务的新亮点，变“老破旧”为“白富美”，在实现资产盘活的同时，提升了区域的整体形象展示，实现多方共赢。 尔家商业的运营模式已经成为业内众多公司的效仿标杆，尔家商		业正以坚定稳健的步伐引领着行业潮流！'
				}
			],
			saleList: [
				{
					id: 1,
					img: require('@/assets/img/comein/sale1.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/sale1.png',
					en: 'LOFT',
					title: '镇江宝龙项目',
					adj: '温馨舒适',
					adj_en: 'Sweet & comfortable',
					text: '小户型没有复式是惯例，尔家镇江宝龙复式设计是例外。'
				},
				{
					id: 2,
					img: require('@/assets/img/comein/sale1.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/sale1.png',
					en: 'LOFT',
					title: '镇江宝龙项目',
					adj: '温馨舒适',
					adj_en: 'Sweet & comfortable',
					text: '小户型没有复式是惯例，尔家镇江宝龙复式设计是例外。'
				},
				{
					id: 3,
					img: require('@/assets/img/comein/sale1.png'),
					// img: WEBCONFIG.resource_url_img+'/comein/sale1.png',
					en: 'LOFT',
					title: '镇江宝龙项目',
					adj: '温馨舒适',
					adj_en: 'Sweet & comfortable',
					text: '小户型没有复式是惯例，尔家镇江宝龙复式设计是例外。'
				}
			],
			videoProjectList: [
				{
					id: 1,
					img: require('@/assets/img/comein/videoProject1.png'),
					title: '无锡绿地观澜湾项目'
				},
				{
					id: 2,
					img: require('@/assets/img/comein/videoProject2.png'),
					title: '无锡绿地观澜湾项目'
				},
				{
					id: 3,
					img: require('@/assets/img/comein/videoProject3.png'),
					title: '无锡绿地观澜湾项目'
				},
				{
					id: 4,
					img: require('@/assets/img/comein/videoProject4.png'),
					title: '无锡绿地观澜湾项目'
				},
				{
					id: 5,
					img: require('@/assets/img/comein/videoProject5.png'),
					title: '无锡绿地观澜湾项目'
				},
				{
					id: 6,
					img: require('@/assets/img/comein/videoProject6.png'),
					title: '无锡绿地观澜湾项目'
				}
			],
			videoActivityList: [
				{
					id: 1,
					img: require('@/assets/img/comein/videoActivity1.png'),
					title: '燃爆盛夏 嗨翻全场｜尔家第三届百人龙虾节激情落幕！'
				},
				{
					id: 2,
					img: require('@/assets/img/comein/videoActivity2.png'),
					title: '尔家龙虾节｜一年一度的龙虾节终于来了！'
				},
				{
					id: 3,
					img: require('@/assets/img/comein/videoActivity3.png'),
					title: '父亲节｜晒照片赢888元现金红包！'
				},
				{
					id: 4,
					img: require('@/assets/img/comein/videoActivity4.png'),
					title: '520交友派对｜解锁“新一代年轻人的交友”新方式！'
				},
				{
					id: 5,
					img: require('@/assets/img/comein/videoActivity5.png'),
					title: '奇妙 · 扎染 手底生出来的花朵！'
				},
				{
					id: 6,
					img: require('@/assets/img/comein/videoActivity6.png'),
					title: '爱心公益U时代，有你有我更精彩。'
				}
			],
			integrationList: [
				{
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
			marketList: [
				{
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
			businessList: [
				{
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
			],
		};
	},
	mounted() {
		this.jump();
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
		}
	}
};
</script>

<style scoped lang="scss">
.comein {
	background-color: var(--color-bg-default);

	.content1 {
		.profile {
			display: flex;
			flex-direction: row-reverse;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			.profile-img {
			}

			.profile-content {
				.title {
					font-size: 4.8rem;
					font-weight: bold;
					letter-spacing: 0.2rem;
					color: var(--color-t-active);
				}

				.title-en {
					margin-top: 20px;
					font-size: 2.4rem;
					letter-spacing: 0.1rem;
					color: #999999;
				}

				.stick {
					margin: 40px auto 80px 20px;
					width: 3px;
					height: 40px;
					background-color: var(--color-bg-main);
				}

				.text {
					font-size: 1.6rem;
					line-height: 3rem;
					text-indent: 2rem;
					color: #333333;
				}
			}
		}

		.projects {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;

			.project {
				display: flex;

				.project-content {
					white-space: pre;
					display: flex;
					flex-direction: column;

					.title {
						font-size: 2.4rem;
						font-weight: bold;
						color: #333333;
					}

					.text {
						font-size: 1.6rem;
						color: #999999;
					}

					.arror {
						.arror-img {
							width: 38px;
							height: 38px;
						}
					}
				}
			}
		}

		.modes {
			.mode {
				display: flex;
				&:last-child {
					.text {
						border-bottom: none;
					}
				}
				.circle {
					flex-shrink: 0;
					margin: 20px 0;
					margin-right: 15px;
					width: 12px;
					height: 12px;
					border-radius: 100%;
					background-color: var(--color-bg-main);
				}
				.text {
					flex-grow: 1;
					padding: 10px 0;
					border-bottom: 1px solid #eeeeee;
					font-size: 1.6rem;
					line-height: 3rem;
					color: #666666;
				}
			}
		}
		.mode-img {
			display: block;
		}
		.sales {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.sale {
				box-shadow: 0 0 10px 0 #999999;
				.my-img {
					display: block;
				}
				.content {
					padding: 30px;
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
						color: #333333;
					}
					.text-en {
						margin-top: 5px;
						font-size: 1.4rem;
						color: #333333;
					}
				}
			}
		}
	}

	.content2 {
		.ad{
			position: relative;
			.ad-img{
				display: block;
			}
			.ad-play{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 5%;
				min-width: 40px;
				cursor: pointer;
			}
		}
		
		.videos{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.video{
				.box{
					position: relative;
					.img{
						display: block;
					}
					.play{
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 15%;
						min-width: 30px;
						cursor: pointer;
					}
				}
				.title{
					margin-top: 25px;
					padding: 0 10px;
					font-size: 1.6rem;
					line-height: 2.5rem;
					color: #333333;
				}
			}
		}
	}

	.content3 {
		.managements{
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			.management{
				padding: 15px;
				box-shadow: 0 0 10px 0 #999999;
				border-radius: 10px;
				text-align: center;
				.img{
					display: block;
				}
				.name{
					margin-top: 25px;
					font-size: 2.4rem;
					letter-spacing: 0.1rem;
					color: var(--color-t-active);
				}
				.job{
					margin: 15px 0;
					font-size: 1.6rem;
					color: #333333;
				}
			}
		}
	}

	.content4 {
		.text{
			margin: 0 auto;
			font-size: 2rem;
			line-height: 3.5rem;
			text-align: center;
		}
		.model{
			text-align: center;
		}
	}
	
	.content5 {
		.content{
			position: relative;
			border-left: 1px solid #EEEEEE;
			.dot{
				position: absolute;
				left: 0;
				width: 12px;
				height: 12px;
				border-radius: 50%;
				background-color: #EEEEEE;
			}
			.box{
				position: relative;
				.tip{
					position: absolute;
				}
				.title{
					font-size: 2.4rem;
					font-weight: bold;
					letter-spacing: 0.1rem;
					color: var(--color-t-active);
				}
				.text{
					margin: 10px 0 20px;
					font-size: 1.8rem;
					color: #666666;
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
			.profile {
				padding: 30px 0;

				.profile-img {
					margin-top: 20px;
					flex-basis: 100%;
				}

				.profile-content {
					padding: 10px;
					flex-basis: 100%;

					.title {
						text-align: center;
					}

					.title-en {
						text-align: center;
					}
				}
			}

			.projects {
				margin-top: 30px;

				.project {
					margin-bottom: 30px;
					flex-wrap: wrap;

					.project-img {
						flex-basis: 100%;
					}

					.project-content {
						flex-basis: 100%;
						text-align: center;

						.title {
							margin-top: 30px;
						}

						.text {
							margin-top: 15px;
						}

						.arror {
							margin-top: 15px;
						}
					}
				}
			}
			.modes {
				margin-top: 30px;
				padding: 0 10px;
			}
			.mode-img {
				margin-top: 30px;
			}
			.sales {
				margin: 30px 20px;
				.sale {
					margin-bottom: 30px;
					flex-basis: 100%;
				}
			}
		}

		.content2 {
			.videos{
				margin-top: 30px;
				.video{
					flex-basis: 100%;
					margin-bottom: 20px;
				}
			}
		}

		.content3 {
			margin: 0 20px;
			.managements{
				margin-top: 30px;
				.management{
					margin-bottom: 30px;
					flex-basis: 100%;
				}
			}
		}

		.content4 {
			margin: 0 20px 60px;
			.text{
				margin-top: 40px;
				width: 100%;
			}
			.model{
				margin-top: 40px;
				.model1{
					width: 100%;
				}
				.model2{
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
			margin: 20px auto 100px;
			width: 70%;
			min-width: 1000px;

			.profile {
				.profile-img {
					margin: 0 2.5%;
					flex-basis: 45%;
				}

				.profile-content {
					margin: 0 2.5%;
					flex-basis: 45%;
				}
			}

			.projects {
				margin-top: 60px;

				.project {
					margin-bottom: 40px;
					margin-left: 15px;
					margin-right: 0;
					flex: 45%;

					&.reverse {
						flex-direction: row-reverse;
						margin-left: 0;
						margin-right: 15px;

						.project-img {
							margin-left: 20px;
							margin-right: 0;
						}

						.project-content {
							text-align: right;
						}
					}

					.project-img {
						flex-basis: 40%;
						flex-shrink: 0;
						margin-left: 0;
						margin-right: 20px;
					}

					.project-content {
						.title {
							margin-top: 30px;
						}

						.text {
							margin-top: 15px;
						}

						.arror {
							margin-top: auto;
						}
					}
				}
			}
			.modes {
				margin-top: 60px;
			}
			.mode-img {
				margin-top: 60px;
			}
			.sales {
				margin-top: 60px;
				.sale {
					flex-basis: 28%;
				}
			}
		}

		.content2 {
			.ad{
				margin-top: 100px;
			}
			.content{
				margin: 0 auto 100px;
				width: 70%;
				min-width: 1000px;
				.videos{
					margin-top: 80px;
					.video{
						flex-basis: 30%;
						margin-bottom: 60px;
					}
				}
			}
		}

		.content3 {
			margin: 20px auto 100px;
			width: 70%;
			min-width: 1000px;
			.managements{
				margin-top: 60px;
				.management{
					margin: 0 2%;
					flex-basis: 18%;
				}
			}
		}

		.content4 {
			margin: 20px auto 100px;
			width: 70%;
			min-width: 1000px;
			.text{
				margin-top: 100px;
				width: 80%;
			}
			.model{
				margin-top: 100px;
				.model1{
					width: 60%;
				}
				.model2{
					width: 100%;
				}
			}
		}
		
		.content5{
			margin: 20px auto 100px;
			width: 60%;
			min-width: 900px;
			.content{
				margin-left: 100px;
				padding: 100px 150px;
				.dot{
					&.up{
						top: 0;
						transform: translate(-50%, -50%);
					}
					&.down{
						bottom: 0;
						transform: translate(-50%, 50%);
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

<template>
	<div class="info">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1 && !activeNews">
			<div class="box" :key="index" v-for="(news, index) in newsList" @click="getNewsDetail(news.id)">
				<el-image class="my-img" :src="news.img" fit="cover"></el-image>
				<div class="text">
					<div class="title">{{ news.title }}</div>
					<div class="content">{{ news.content }}</div>
				</div>
			</div>
		</div>
		<div class="content1-detail" v-if="activeTab === 1 && activeNews">
			<div class="title">{{ activeNews.title }}</div>
			<div class="row">
				<div class="datetime">发布时间：{{ activeNews.datetime }}</div>
				<div class="count">浏览次数：{{ activeNews.count }}</div>
			</div>
			<div class="line"></div>
			<div class="content" v-html="activeNews.content">
				<p>
					近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔家商业）进行考察交流。目的为双方就进一步盘活商办资产进行深度交流合作，同时探索商办资产开发商与尔家赋能的新模式。尔家商业总裁张二干、尔家商业成都城市公司总经理谈潭等人陪同接待。
				</p>
				<el-image class="my-img" :src="imgResource + '/info/detail1.png'" fit="contain"></el-image>
				<el-image class="my-img" :src="imgResource + '/info/detail2.png'" fit="contain"></el-image>
				<p>
					在此次考察交流当中，尔家商业总裁张二干指出：“尔家商业之所以能成为行业效仿的标杆，离不开独特的商业运营模式
					”。在实现资产盘活的同时为产品赋能，不仅为商办类资产开发商解决租赁人口居住问题还能为其赋能吸引更多人潮，从而实现合作共赢！
				</p>
				<p>最后，通过此次考察交流，进一步加强尔家商业与绿地集团西南事业部的紧密联系。后期双方将为盘活商办类资产与尔家赋能新模式的合作上奠定基础。</p>
			</div>
			<div class="line"></div>
			<div class="page">
				<div class="turn" @click="getNewsDetailPrev">
					<el-image class="icon" :src="require('@/assets/img/info/up.png')" fit="contain"></el-image>
					<div class="turn-text">
						<div class="text-en">Previous</div>
						<div class="text">上一页</div>
					</div>
				</div>
				<div class="turn" @click="getNewsDetailNext">
					<div class="turn-text">
						<div class="text-en">Next</div>
						<div class="text">下一页</div>
					</div>
					<el-image class="icon" :src="require('@/assets/img/info/down.png')" fit="contain"></el-image>
				</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="tree">
				<div class="box" :key="activity.id" v-for="activity in activityList" @click="openUrl(activity.redirectUrl)">
					<el-image class="my-img" :src="activity.img" fit="cover"></el-image>
					<div class="text">
						<div class="title">{{ activity.title }}</div>
						<div class="content">{{ activity.content }}</div>
						<div class="date">
							<el-image class="date-icon" :src="require('@/assets/img/info/date.png')" fit="contain"></el-image>
							<span>{{ activity.date }}</span>
						</div>
					</div>
					<div class="light"></div>
					<div class="tip">
						<div class="tip-up">{{ activity.date.slice(5, 10) }}</div>
						<div class="tip-down">{{ activity.date.slice(0, 4) }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content3" v-else-if="activeTab === 3">
			<template v-if="saleList.length > 0">
				<div class="sale" :key="sale.id" v-for="sale in saleList">
					<div class="box">
						<el-image class="my-img" :src="sale.img" fit="contain"></el-image>
						<div class="row1">
							<div class="title">{{ sale.title }}</div>
							<div class="date">{{ sale.date }}</div>
						</div>
					</div>
					<div class="row2">
						<div class="introduction">{{ sale.introduction }}</div>
						<div class="price">¥{{ sale.price }}/m²</div>
					</div>
				</div>
			</template>
			<el-image class="empty" :src="require('@/assets/img/info/empty.png')" fit="contain" v-else></el-image>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

import { xinWenJuJiao, xinWenJuJiaoDetail, xinWenJuJiaoDetailPrev, xinWenJuJiaoDetailNext, sheQunHuoDong } from '@/network/info.js';

export default {
	name: 'Info',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			info: {
				// banner: require('@/assets/img/info/banner1.png'),
				banner: WEBCONFIG.resource_url_img + '/info/banner1.png',
				title: '信息中心',
				title_en: 'Product highlights',
				tabList: [
					{
						id: 1,
						active: true,
						banner: '/info/banner1.png',
						img: require('@/assets/img/info/tab1.png'),
						name: '新闻聚焦',
						name_en: 'News focus'
					},
					{
						id: 2,
						active: false,
						banner: '/info/banner1.png',
						img: require('@/assets/img/info/tab2.png'),
						name: '社群活动',
						name_en: 'Community Activism'
					},
					{
						id: 3,
						active: false,
						banner: '/info/banner1.png',
						img: require('@/assets/img/info/tab3.png'),
						name: '促销活动',
						name_en: 'Sales promotion'
					}
				]
			},
			activeTab: 1,
			newsList: [
				{
					id: 1,
					// img: require('@/assets/img/info/news1.png'),
					img: WEBCONFIG.resource_url_img + '/info/news1.png',
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				},
				{
					id: 2,
					// img: require('@/assets/img/info/news3.png'),
					img: WEBCONFIG.resource_url_img + '/info/news3.png',
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 3,
					// img: require('@/assets/img/info/news2.png'),
					img: WEBCONFIG.resource_url_img + '/info/news2.png',
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 4,
					// img: require('@/assets/img/info/news2.png'),
					img: WEBCONFIG.resource_url_img + '/info/news2.png',
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 5,
					// img: require('@/assets/img/info/news1.png'),
					img: WEBCONFIG.resource_url_img + '/info/news1.png',
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				},
				{
					id: 6,
					// img: require('@/assets/img/info/news3.png'),
					img: WEBCONFIG.resource_url_img + '/info/news3.png',
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 7,
					// img: require('@/assets/img/info/news3.png'),
					img: WEBCONFIG.resource_url_img + '/info/news3.png',
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 8,
					// img: require('@/assets/img/info/news2.png'),
					img: WEBCONFIG.resource_url_img + '/info/news2.png',
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 9,
					// img: require('@/assets/img/info/news1.png'),
					img: WEBCONFIG.resource_url_img + '/info/news1.png',
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				}
			],
			activeNews: null,
			activityList: [
				{
					id: 1,
					date: '2021.06.17',
					// img: require('@/assets/img/info/activity1.png'),
					img: WEBCONFIG.resource_url_img + '/info/activity1.png',
					title: '燃爆盛夏 嗨翻全场｜尔家第三届百人龙虾节激情落幕！',
					content: '燃爆盛夏 嗨翻全场、一场关于盛夏与龙虾的相遇、不仅因为美食本身还有对未来的十足期待'
				},
				{
					id: 2,
					date: '2021.05.16',
					// img: require('@/assets/img/info/activity2.png'),
					img: WEBCONFIG.resource_url_img + '/info/activity2.png',
					title: '尔家龙虾节｜一年一度的龙虾节终于来了，快上车带你实现“撸虾自由”！',
					content: '会嘬才是吃龙虾的奥秘所在。这次尔家龙虾节多种口味齐上阵！麻辣小龙虾、风味蒜泥小龙虾、十三香小龙虾等多种口味掀起锡城嘬虾新风暴！'
				},
				{
					id: 3,
					date: '2021.05.01',
					// img: require('@/assets/img/info/activity3.png'),
					img: WEBCONFIG.resource_url_img + '/info/activity3.png',
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				},
				{
					id: 4,
					date: '2021.04.12',
					// img: require('@/assets/img/info/activity3.png'),
					img: WEBCONFIG.resource_url_img + '/info/activity3.png',
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				},
				{
					id: 5,
					date: '2021.03.21',
					// img: require('@/assets/img/info/activity3.png'),
					img: WEBCONFIG.resource_url_img + '/info/activity3.png',
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				}
			],
			saleList: [
				{
					id: 1,
					// img: require('@/assets/img/info/sale1.png'),
					img: WEBCONFIG.resource_url_img + '/info/sale1.png',
					title: 'LOFT丨镇江宝龙项目',
					date: '2021/06/09',
					introduction: 'LOFT 户型 紧跟潮流',
					price: 18000
				},
				{
					id: 2,
					// img: require('@/assets/img/info/sale2.png'),
					img: WEBCONFIG.resource_url_img + '/info/sale2.png',
					title: '尔家雅寓绿地观澜湾店',
					date: '2021/06/09',
					introduction: '静谧领地·为你而来',
					price: 18000
				},
				{
					id: 3,
					// img: require('@/assets/img/info/sale3.png'),
					img: WEBCONFIG.resource_url_img + '/info/sale3.png',
					title: '品质优选丨无锡金科米兰店',
					date: '2021/06/09',
					introduction: '享生活·品格调·醉时光',
					price: 18000
				},
				{
					id: 4,
					// img: require('@/assets/img/info/sale4.png'),
					img: WEBCONFIG.resource_url_img + '/info/sale4.png',
					title: '尔家雅寓绿地观澜湾店',
					date: '2021/06/09',
					introduction: '静谧领地·为你而来',
					price: 18000
				}
			]
		};
	},
	mounted() {
		this.jump();
		this.saleList.splice(0, this.saleList.length);
		this.getActivityList();
		this.getNewsList();
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
					// this.info.banner = require('@/assets/img'+tab.banner);
					this.info.banner = WEBCONFIG.resource_url_img + tab.banner;
				} else {
					tab.active = false;
				}
			});
		},
		getNewsList() {
			xinWenJuJiao({ pageNum: 1, pageSize: 9 }).then(data => {
				this.newsList.splice(0, this.newsList.length);
				this.newsList = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						title: item.title,
						content: item.content.substr(0, 80) + '...'
					};
				});
			});
		},
		getNewsDetail(id) {
			xinWenJuJiaoDetail({ id }).then(data => {
				// this.info.banner = WEBCONFIG.resource_url_img + '/info/banner2.png';
				this.activeNews = {
					id: data.data.id,
					datetime: data.data.updateTime,
					count: data.data.viewTotal,
					title: data.data.title,
					content: data.data.content
				};
			});
		},
		getNewsDetailPrev() {
			xinWenJuJiaoDetailPrev({ id: this.activeNews.id }).then(data => {
				if (data.data) {
					this.getNewsDetail(data.data);
				} else {
					this.$message('暂无上一页数据');
				}
			});
		},
		getNewsDetailNext() {
			xinWenJuJiaoDetailNext({ id: this.activeNews.id }).then(data => {
				if (data.data) {
					this.getNewsDetail(data.data);
				} else {
					this.$message('暂无下一页数据');
				}
			});
		},
		getActivityList() {
			sheQunHuoDong({ pageNum: 1, pageSize: 99 }).then(data => {
				this.activityList.splice(0, this.activityList.length);
				this.activityList = data.data.map(item => {
					return {
						id: item.id,
						date: item.createTime
							.slice(0, 10)
							.split('-')
							.join('.'),
						img: item.coverUrl,
						title: item.title,
						content: item.content.length < 80 ? item.content : item.content.substr(0, 80) + '...',
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
.info {
	background-color: var(--color-bg-default);

	.content1 {
		display: flex;
		flex-wrap: wrap;
		align-content: space-around;

		.box {
			margin-bottom: 20px;
			border: 2px solid #eeeeee;
			cursor: pointer;

			.my-img {
				display: block;
			}

			.text {
				color: #333333;

				.title {
					font-size: 1.8rem;
					line-height: 3rem;
				}

				.content {
					margin-top: 10px;
					font-size: 1.4rem;
					line-height: 2.5rem;
				}
			}
		}
	}

	.content1-detail {
		.title {
			font-size: 3rem;
			letter-spacing: 0.1rem;
			color: #666666;
			text-align: center;
		}
		.row {
			margin-top: 40px;
			font-size: 1.6rem;
			color: #666666;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
		}
		.line {
			border-bottom: 1px solid #eeeeee;
		}
		.content {
			font-size: 1.8rem;
			line-height: 3rem;
			color: #666666;
			.my-img {
				display: block;
			}
		}
		.page {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.turn {
				display: flex;
				align-items: flex-start;
				cursor: pointer;
				.icon {
					flex-basis: 14px;
				}
				.turn-text {
					margin: 0 20px;
					color: #999999;
					.text-en {
						font-size: 2.4rem;
					}
					.text {
						margin-top: 10px;
						font-size: 1.6rem;
					}
				}
			}
		}
	}

	.content2 {
		.tree {
			border-left: 2px solid #999999;

			.box {
				position: relative;
				border-bottom: 1px dashed #eeeeee;
				cursor: pointer;

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

				.light {
					position: absolute;
					background-color: var(--color-bg-main);
				}

				.tip {
					position: absolute;
					text-align: center;
					color: #333333;

					.tip-up {
						font-size: 4.6rem;
					}

					.tip-down {
						font-size: 1.8rem;
					}
				}
			}
		}
	}

	.content3 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.sale {
			.box {
				position: relative;
				.my-img {
					display: block;
				}
				.row1 {
					position: absolute;
					color: #a4967b;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
					.title {
						font-size: 3rem;
					}
					.date {
						font-size: 2.4rem;
					}
				}
			}
			.row2 {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				.introduction {
					font-size: 2rem;
					color: #333333;
				}
				.price {
					font-size: 3rem;
					font-weight: bold;
					color: var(--color-t-active);
				}
			}
		}
		.empty {
			box-shadow: 0 0 10px 0 #cccccc;
		}
	}
}

@media screen and (max-width: 1080px) {
	.info {
		.content1 {
			margin: 0 20px;

			.box {
				width: 100%;
				
				.my-img {
					height: 150px;
				}

				.text {
					padding: 20px;
				}
			}
		}

		.content1-detail {
			margin: 30px 20px;
			.row {
				margin-top: 40px;
				.datetime {
					flex-basis: 100%;
				}
				.count {
					margin-top: 10px;
					flex-basis: 100%;
				}
			}
			.content {
				.my-img {
					margin: 20px 0;
				}
			}
			.line {
				margin-top: 20px;
			}
			.page {
				margin-top: 20px;
			}
		}

		.content2 {
			margin: 20px 0;

			.tree {
				margin-left: 100px;
				padding: 10px 20px;

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

					.light {
						top: 0;
						left: -24px;
						width: 6px;
						height: 28px;
					}

					.tip {
						top: -10px;
						left: -100px;
						width: 80px;

						.tip-up {
							font-size: 2.4rem;
						}

						.tip-down {
							font-size: 1.4rem;
						}
					}
				}
			}
		}

		.content3 {
			margin-bottom: 60px;
			.sale {
				flex-basis: 100%;
				margin-bottom: 30px;
				.box {
					.my-img {
						margin: 0 20px 140px 0;
						box-shadow: 20px 120px 0 0 #dddddd;
					}
					.row1 {
						position: absolute;
						left: 60px;
						right: 20px;
						bottom: -120px;
						height: 120px;
						.title {
							flex-basis: 100%;
						}
						.date {
							flex-basis: 100%;
							text-align: right;
						}
					}
				}
				.row2 {
					margin-right: 20px;
					text-align: right;
					.introduction {
						flex-basis: 100%;
					}
					.price {
						flex-basis: 100%;
						margin-top: 10px;
					}
				}
			}
			.empty {
				flex-basis: 100%;
				margin: 0 20px 30px;
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.info {
		.content1 {
			margin: 20px auto 60px;
			width: 60%;
			min-width: 1000px;
			max-height: 2000px;

			.box {
				width: 30%;
				margin: 0 1% 20px;
				
				.my-img {
					height: 250px;
				}

				.text {
					padding: 30px;
					height: 250px;
					
					.title {
						height: 9rem;
					}
				}
			}
		}

		.content1-detail {
			margin: 20px auto 60px;
			width: 60%;
			min-width: 900px;
			.title {
				font-size: 3rem;
				letter-spacing: 0.1rem;
				color: #666666;
				text-align: center;
			}
			.row {
				.datetime {
					margin: 0 40px;
				}
				.count {
					margin: 0 40px;
				}
			}
			.line {
				margin-top: 60px;
			}
			.content {
				margin-top: 60px;
				padding: 20px;
				.my-img {
					margin: 40px 0;
				}
			}
			.page {
				margin-top: 60px;
			}
		}

		.content2 {
			margin: 20px auto 60px;
			width: 90%;
			min-width: 1000px;

			.tree {
				margin-left: 200px;
				padding: 40px 80px;

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

					.light {
						top: 0;
						left: -84px;
						width: 6px;
						height: 28px;
					}

					.tip {
						top: -20px;
						left: -280px;
						width: 200px;

						.tip-up {
							font-size: 4.6rem;
						}

						.tip-down {
							font-size: 1.8rem;
						}
					}
				}
			}
		}

		.content3 {
			margin: 20px auto 60px;
			width: 80%;
			min-width: 1000px;
			.sale {
				flex-basis: 45%;
				margin-bottom: 70px;
				.box {
					.my-img {
						margin: 0 30px 120px 0;
						box-shadow: 30px 100px 0 0 #dddddd;
					}
					.row1 {
						position: absolute;
						left: 60px;
						right: 30px;
						bottom: -100px;
						height: 100px;
						.date {
							margin-left: 20px;
						}
					}
				}
				.row2 {
					margin-left: 30px;
				}
			}
			.empty {
				flex-basis: 25%;
				margin-right: auto;
				margin-bottom: 70px;
			}
		}
	}
}
</style>

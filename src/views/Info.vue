<template>
	<div class="cooperation">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="box" :key="news.id" v-for="news in newsList">
				<el-image class="my-img" :src="news.img" fit="cover"></el-image>
				<div class="text">
					<div class="title">{{ news.title }}</div>
					<div class="content">{{ news.content }}</div>
				</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="tree">
				<div class="box" :key="activity.id" v-for="activity in activityList">
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
		<div class="content3" v-else-if="activeTab === 3"></div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Info',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			info: {
				banner: require('@/assets/img/info/banner1.png'),
				// banner: WEBCONFIG.resource_url_img+'/cooperation/banner.png',
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
					img: require('@/assets/img/info/news1.png'),
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				},
				{
					id: 2,
					img: require('@/assets/img/info/news3.png'),
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 3,
					img: require('@/assets/img/info/news2.png'),
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 4,
					img: require('@/assets/img/info/news2.png'),
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 5,
					img: require('@/assets/img/info/news1.png'),
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				},
				{
					id: 6,
					img: require('@/assets/img/info/news3.png'),
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 7,
					img: require('@/assets/img/info/news3.png'),
					title: '劳动节·公益行｜环保行动 ，致敬每一位劳动者！',
					content: '今天 2021年5月1日 是所有劳动人民的节日 ——劳动节 公益行·守护地球 在131个五一国际劳动节前夕 上海尔家商业管理有限公司 组织员工在...'
				},
				{
					id: 8,
					img: require('@/assets/img/info/news2.png'),
					title: '【民企资讯·头条】“尔家杯”锡商民企掼蛋联谊活动圆满成功',
					content: '为倡导健康向上的文体娱乐活动精神，加强企业家之间的沟通交流。6月5日，由无锡市民营企业（企业家）协会、锡商理事会主办的首届“尔家杯”掼蛋大赛在天空树雅寓拉开序幕...'
				},
				{
					id: 9,
					img: require('@/assets/img/info/news1.png'),
					title: '考察交流｜绿地集团西南事业部与尔家商业就盘活商办类资产做深入交流',
					content:
						'近日，绿地集团西南事业部总经理孙志文、绿地集团西南营销管理中心总经理戴咏春等人莅临上海尔家商业管理有限公司天空树雅寓营销中心、绿地观澜湾尔家雅寓（以下简称：尔...'
				}
			],
			activityList: [
				{
					id: 1,
					date: '2021.06.17',
					img: require('@/assets/img/info/activity1.png'),
					title: '燃爆盛夏 嗨翻全场｜尔家第三届百人龙虾节激情落幕！',
					content: '燃爆盛夏 嗨翻全场、一场关于盛夏与龙虾的相遇、不仅因为美食本身还有对未来的十足期待'
				},
				{
					id: 2,
					date: '2021.05.16',
					img: require('@/assets/img/info/activity2.png'),
					title: '尔家龙虾节｜一年一度的龙虾节终于来了，快上车带你实现“撸虾自由”！',
					content: '会嘬才是吃龙虾的奥秘所在。这次尔家龙虾节多种口味齐上阵！麻辣小龙虾、风味蒜泥小龙虾、十三香小龙虾等多种口味掀起锡城嘬虾新风暴！'
				},
				{
					id: 3,
					date: '2021.05.01',
					img: require('@/assets/img/info/activity3.png'),
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				},
				{
					id: 4,
					date: '2021.04.12',
					img: require('@/assets/img/info/activity3.png'),
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				},
				{
					id: 5,
					date: '2021.03.21',
					img: require('@/assets/img/info/activity3.png'),
					title: '房券礼遇｜在尔家雅寓的一天，你是怎么度过的？',
					content: '随着夏天的到来、那抹绿让人看的神清气爽、一阵凉爽的风轻轻拂来叶子“沙拉沙拉“地奏起独特的乐曲、在这清爽的季节里一起来亲身探索在尔家雅寓成都万科云城店的一天吧！'
				}
			]
		};
	},
	methods: {
		handleChange(id) {
			this.activeTab = id;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
					// this.info.banner = require('@/assets/img'+tab.banner);
				} else {
					tab.active = false;
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.cooperation {
	background-color: var(--color-bg-default);
	.content1 {
		display: flex;
		flex-direction: column;
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
	.content2 {
		.tree {
			border-left: 2px solid #999999;
			.box {
				position: relative;
				border-bottom: 1px dashed #eeeeee;
				display: flex;
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
					top: 0;
					left: -84px;
					width: 6px;
					height: 28px;
					background-color: var(--color-bg-main);
				}
				.tip{
					position: absolute;
					top: -20px;
					left: -280px;
					width: 200px;
					text-align: center;
					color: #333333;
					.tip-up{
						font-size: 4.6rem;
					}
					.tip-down{
						font-size: 1.8rem;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.cooperation {
		.content1 {
			margin: 0 20px;
			.box {
				width: 100%;
				.text {
					padding: 20px;
				}
			}
		}
		.content2 {
		}
	}
}

@media screen and (min-width: 1080px) {
	.cooperation {
		.content1 {
			margin: 20px auto 60px;
			width: 60%;
			min-width: 1000px;
			max-height: 2000px;
			.box {
				width: 30%;
				.text {
					padding: 30px;
					height: 250px;
				}
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
	}
}
</style>

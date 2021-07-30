<template>
	<div class="home">
		<Header></Header>
		<el-carousel class="my-banner">
			<el-carousel-item :key="index" v-for="(banner, index) in banners"><el-image class="banner" :src="banner" fit="cover"></el-image></el-carousel-item>
		</el-carousel>
		<div class="search">
			<div class="search-cell">
				<div class="label">城市</div>
				<el-select class="my-select" v-model="search.city" placeholder="请选择">
					<el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="search-cell">
				<div class="label">系列</div>
				<el-select class="my-select" v-model="search.series" placeholder="请选择">
					<el-option v-for="item in seriesList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="search-cell">
				<div class="label">关键字</div>
				<el-input class="my-input" v-model="search.keyword" placeholder="请输入"></el-input>
			</div>
			<div class="search-cell"><div class="btn" @click="handleSearch">点击搜索</div></div>
		</div>
		<el-image class="ad" :src="imgResource + '/home/advertisement1.png'" fit="contain"></el-image>
		<div class="hot-house">
			<div class="title1">热门房源推荐</div>
			<div class="title2">温馨舒适，一如尔家，用心体验</div>
			<div class="houses">
				<div class="house" :key="hotHouse.id" v-for="hotHouse in hotHouseList" @click="gotoDetail(hotHouse.id)">
					<el-image class="house-img" :src="hotHouse.img" fit="cover"></el-image>
					<div class="info">
						<div class="house-tip">{{ hotHouse.tip }}</div>
						<div class="house-name">{{ hotHouse.name }}</div>
						<div class="house-summary">{{ hotHouse.summary }}</div>
						<div class="house-summary-en">{{ hotHouse.summary_en }}</div>
						<div class="house-introduction">{{ hotHouse.introduction }}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tips">
			<div class="tip" :key="tip.id" v-for="tip in tipList">
				<el-image class="tip-img" :src="tip.img" fit="cover"></el-image>
				<div class="tip-text">{{ tip.text }}</div>
				<div class="tip-text-en">{{ tip.text_en }}</div>
			</div>
		</div>
		<div class="accessory">
			<div class="row">
				<div class="left">
					<div class="title1">公寓配套</div>
					<div class="title2">
						以始终如一的卓越品质，
						<br />
						助力客户实现价值最大化
					</div>
				</div>
				<el-image class="right" :src="require('@/assets/img/home/building.png')" fit="contain"></el-image>
			</div>
			<div class="accessory-imgs"><el-image class="accessory-img" :src="accessoryImg" fit="cover" :key="index" v-for="(accessoryImg, index) in accessoryImgList"></el-image></div>
		</div>
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
				<div class="more" @click="gotoPath('/comein', 1)">MORE ABOUT US</div>
			</div>
			<el-image class="profile-img" :src="imgResource + '/home/profile.png'" fit="contain"></el-image>
		</div>
		<div class="activity">
			<div class="title">尔家最新动态</div>
			<div class="projects">
				<div class="project" :key="project.id" v-for="project in projectList">
					<div class="project-img-box">
						<el-image class="project-img" :src="project.img" fit="cover"></el-image>
						<div class="project-date">
							<div class="date-up">{{ project.date.slice(8) }}</div>
							<div class="date-down">{{ project.date.slice(0, 7) }}</div>
						</div>
					</div>
					<div class="project-title">{{ project.title }}</div>
					<div class="project-content">{{ project.content }}</div>
					<div class="project-more">查看更多</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Home',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			// banners: [require('@/assets/img/home/banner1.png')],
			banners: [WEBCONFIG.resource_url_img + '/home/banner1.png'],
			search: {
				city: '',
				series: '',
				keyword: ''
			},
			cityList: [
				{
					value: '1',
					label: '常州'
				},
				{
					value: '2',
					label: '成都'
				},
				{
					value: '3',
					label: '无锡'
				},
				{
					value: '4',
					label: '镇江'
				}
			],
			seriesList: [
				{
					value: 'Z001',
					label: '尔家雅寓'
				},
				{
					value: 'Z002',
					label: '尔家馨寓'
				}
			],
			hotHouseList: [
				{
					id: 1,
					// img: require('@/assets/img/home/hothouse1.png'),
					img: WEBCONFIG.resource_url_img + '/home/hothouse1.png',
					tip: 'loft',
					name: '镇江宝龙项目',
					summary: '温馨舒适',
					summary_en: 'Sweet & comfortable',
					introduction: '小户型没有复式是惯例，尔家镇江宝龙复式设计是例外。'
				},
				{
					id: 2,
					// img: require('@/assets/img/home/hothouse2.png'),
					img: WEBCONFIG.resource_url_img + '/home/hothouse2.png',
					tip: '品质优选',
					name: '无锡金科米兰',
					summary: '一如尔家',
					summary_en: 'As your home',
					introduction: '尔家馨寓金科米兰位于新吴区行创四路区位配套完善，毗邻中央公园环境优美，交通便利'
				},
				{
					id: 3,
					// img: require('@/assets/img/home/hothouse3.png'),
					img: WEBCONFIG.resource_url_img + '/home/hothouse3.png',
					tip: '夏季换新房',
					name: '绿地观澜湾店',
					summary: '用心体验',
					summary_en: 'Live life with heart',
					introduction: '尔家雅寓地处无心核心地段东拥市中心，西临古运河坐拥无锡CBD'
				}
			],
			tipList: [
				{
					id: 1,
					img: require('@/assets/img/home/tip1.png'),
					text: '有温暖',
					text_en: 'Warm'
				},
				{
					id: 2,
					img: require('@/assets/img/home/tip2.png'),
					text: '有深度',
					text_en: 'Depth'
				},
				{
					id: 3,
					img: require('@/assets/img/home/tip3.png'),
					text: '有关爱',
					text_en: 'Concern'
				},
				{
					id: 4,
					img: require('@/assets/img/home/tip4.png'),
					text: '有展望',
					text_en: 'Forward'
				}
			],
			accessoryImgList: [
				// require('@/assets/img/home/accessory1.png'),
				// require('@/assets/img/home/accessory2.png'),
				// require('@/assets/img/home/accessory3.png'),
				WEBCONFIG.resource_url_img + '/home/accessory1.png',
				WEBCONFIG.resource_url_img + '/home/accessory2.png',
				WEBCONFIG.resource_url_img + '/home/accessory3.png'
			],
			projectList: [
				{
					id: 1,
					// img: require('@/assets/img/home/project1.png'),
					img: WEBCONFIG.resource_url_img + '/home/project1.png',
					date: '2020.07.15',
					title: '尔家龙虾节｜一年一度的龙虾节终于来了，快上车带你实现“撸虾自由”！',
					content: '会嘬才是吃龙虾的奥秘所在。这次尔家龙虾节多种口味齐上阵！麻辣小龙虾、风味蒜泥小龙虾、十三香小龙虾等多种口味掀起锡城嘬虾新风暴！'
				},
				{
					id: 2,
					// img: require('@/assets/img/home/project2.png'),
					img: WEBCONFIG.resource_url_img + '/home/project2.png',
					date: '2020.08.15',
					title: '父亲节｜晒照片赢888元现金红包！',
					content: '在你印象中，父亲是一个怎样的形象？小时候父亲的肩膀就是，我们看世界的瞭望台。可长大了我们才发现'
				},
				{
					id: 3,
					// img: require('@/assets/img/home/project3.png'),
					img: WEBCONFIG.resource_url_img + '/home/project3.png',
					date: '2020.08.16',
					title: '原来你是这样的儿童！',
					content: '你是否还记得童年的那一天？天气很蓝，阳光温馨你牵着小伙伴的手肆意的奔跑着那快乐无忧的笑声'
				}
			]
		};
	},
	methods: {
		gotoDetail(projectId) {
			this.$router.push({
				path: '/project_detail',
				query: {
					projectId
				}
			});
		},
		gotoPath(path, activeTab) {
			if (this.$route.path != path || this.$route.query.activeTab != activeTab) {
				this.$router.push({
					path,
					query: {
						activeTab
					}
				});
			}
		},
		handleSearch() {
			this.$router.push({
				path: '/search',
				query: {
					search: this.search
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.home {
	background-color: var(--color-bg-default);

	.my-banner {
		&::v-deep .el-carousel__container {
			height: 100%;
		}

		.banner {
			width: 100%;
			height: 100%;

			&:hover {
				transform: scale(1.2);
				transition-duration: 1s;
			}
		}
	}

	.search {
		background-color: var(--color-bg-main);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-end;

		.search-cell {
			.label {
				margin-bottom: 10px;
				font-size: 1.8rem;
				letter-spacing: 0.1rem;
				color: var(--color-t-white);
			}

			.my-select {
				display: block;

				&::v-deep .el-input {
					background-color: transparent;

					.el-input__inner {
						background-color: transparent;
						border: none;
						border-radius: 0px;
						border-bottom: 1px solid var(--color-bg-default);
						color: var(--color-t-white);

						&::-webkit-input-placeholder {
							color: #eee;
						}

						&::-moz-placeholder {
							color: #eee;
						}

						&::-ms-input-placeholder {
							color: #eee;
						}
					}

					.el-input__suffix {
						display: none;
					}
				}
			}

			.my-input {
				display: block;

				&::v-deep .el-input__inner {
					background-color: transparent;
					border: none;
					border-radius: 0px;
					border-bottom: 1px solid var(--color-bg-default);
					color: var(--color-t-white);

					&::-webkit-input-placeholder {
						color: #eee;
					}

					&::-moz-placeholder {
						color: #eee;
					}

					&::-ms-input-placeholder {
						color: #eee;
					}
				}
			}

			.btn {
				font-size: 1.8rem;
				letter-spacing: 0.1rem;
				text-align: center;
				border-radius: 2rem;
				border: 1px solid var(--color-bg-default);
				color: var(--color-t-white);
				padding: 0.8rem 0;
				cursor: pointer;

				&:active {
					transform: translate(0.1rem, 0.1rem);
				}
			}
		}
	}

	.ad {
		display: block;
	}

	.hot-house {
		.title1 {
			margin-top: 100px;
			font-size: 5rem;
			letter-spacing: 0.2rem;
			text-align: center;
			font-weight: bold;
			color: var(--color-t-active);
		}

		.title2 {
			margin-top: 25px;
			font-size: 3rem;
			letter-spacing: 0.1rem;
			text-align: center;
			font-weight: bold;
			color: #999999;
		}

		.houses {
			position: relative;
			z-index: 1;
			margin-top: 60px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			.house {
				position: relative;
				top: 0;
				margin: 0 10px;
				background-color: var(--color-bg-default);
				box-shadow: 0 0 8px 0 #999999;
				cursor: pointer;
				
				&:hover {
					top: -20px;
					background-color: var(--color-bg-main);
					transition-duration: 1s;
					
					.info {
						.house-tip {
							color: var(--color-t-white);
						}
						
						.house-name {
							color: var(--color-t-white);
						}
						
						.house-summary {
							color: var(--color-t-white);
						}
						
						.house-summary-en {
							color: var(--color-t-white);
						}
						
						.house-introduction {
							color: var(--color-t-white);
						}
					}
				}

				.house-img {
					display: block;
				}

				.info {
					padding: 20px 30px;

					.house-tip {
						font-size: 1.8rem;
						letter-spacing: 0.1rem;
						font-weight: bold;
						color: var(--color-t-active);
					}

					.house-name {
						margin-top: 8px;
						font-size: 2.8rem;
						letter-spacing: 0.1rem;
						color: #dddddd;
					}

					.house-summary {
						margin-top: 38px;
						font-size: 1.8rem;
						letter-spacing: 0.1rem;
						color: #555555;
					}

					.house-summary-en {
						margin-top: 8px;
						font-size: 1.4rem;
						letter-spacing: 0.1rem;
						color: #555555;
					}

					.house-introduction {
						margin-top: 25px;
						font-size: 1.8rem;
						line-height: 2.5rem;
						letter-spacing: 0.1rem;
						color: #555555;
					}
				}
			}
		}
	}

	.tips {
		position: relative;
		background-color: var(--color-bg-main);
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.tip {
			.tip-img {
				margin: auto;
				width: 100px;
				height: 100px;
				display: block;
			}

			.tip-text {
				margin-top: 45px;
				font-size: 3rem;
				text-align: center;
				color: var(--color-t-white);
			}

			.tip-text-en {
				margin-top: 18px;
				font-size: 2.4rem;
				text-align: center;
				color: var(--color-t-white);
			}
		}
	}

	.accessory {
		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			.left {
				.title1 {
					font-size: 4.8rem;
					font-weight: bold;
					letter-spacing: 0.2rem;
					color: var(--color-t-active);
				}

				.title2 {
					margin-top: 50px;
					font-size: 3rem;
					line-height: 4rem;
					letter-spacing: 0.1rem;
					color: #999999;
				}
			}
		}

		.accessory-imgs {
			margin-top: 15px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	.profile {
		background-color: #eeeeee;
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		.profile-img {
			position: relative;
			top: 0px;
			
			&:hover {
				top: -30px;
				transition-duration: 0.5s;
			}
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

			.more {
				display: inline-block;
				margin-top: 60px;
				padding: 40px 70px;
				font-size: 1.8rem;
				color: #333333;
				border: 10px solid #333333;
				cursor: pointer;
				
				&:hover {
					border-color: #FFFFFF;
					background-color: #333333;
					color: var(--color-t-white);
				}
			}
		}
	}

	.activity {
		.title {
			margin-top: 120px;
			font-size: 4.8rem;
			font-weight: bold;
			text-align: center;
			letter-spacing: 0.2rem;
			color: var(--color-t-active);
		}

		.projects {
			margin-top: 70px;
			margin-bottom: 130px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;

			.project {
				padding: 15px;
				background-color: #fafafa;

				.project-img-box {
					position: relative;

					.project-img {
						display: block;
					}

					.project-date {
						position: absolute;
						z-index: 1;
						right: 20px;
						bottom: -25px;
						padding: 5px;
						background-color: var(--color-bg-main);
						color: var(--color-t-white);
						text-align: center;

						.date-up {
							font-size: 3rem;
							line-height: 4rem;
							font-weight: bold;
							letter-spacing: 0.2rem;
						}

						.date-down {
							font-size: 1.4rem;
							line-height: 2rem;
							letter-spacing: 0.1rem;
						}
					}
				}

				.project-title {
					margin-top: 60px;
					font-size: 1.8rem;
					line-height: 2.5rem;
					letter-spacing: 0.1rem;
					color: var(--color-t-active);
				}

				.project-content {
					margin-top: 25px;
					font-size: 1.4rem;
					line-height: 2rem;
					color: #333333;
				}

				.project-more {
					display: inline-block;
					margin-top: 20px;
					font-size: 1.8rem;
					letter-spacing: 0.1rem;
					color: #333333;
					cursor: pointer;
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.home {
		.my-banner {
			height: 300px;
		}

		.search {
			padding: 20px 10px 10px 10px;

			.search-cell {
				flex-basis: 40%;
				margin-bottom: 20px;
			}
		}

		.hot-house {
			.houses {
				.house {
					flex-basis: 100%;
					margin-bottom: 20px;
				}
			}
		}

		.tips {
			padding: 100px 0 40px 0;

			.tip {
				flex-basis: 40%;
				margin-bottom: 50px;
			}
		}

		.accessory {
			.row {
				margin-top: 20px;

				.left {
					flex-basis: 100%;
					text-align: center;
				}

				.right {
					margin-top: 15px;
					flex-basis: 100%;
				}
			}

			.accessory-imgs {
				.accessory-img {
					margin-top: 10px;
					flex-basis: 100%;
				}
			}
		}

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

		.activity {
			.projects {
				.project {
					margin-top: 20px;
					flex-basis: 100%;
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.home {
		.my-banner {
			height: 700px;
		}

		.search {
			padding: 50px 100px;

			.search-cell {
				flex-basis: 20%;
			}
		}

		.hot-house {
			.houses {
				.house {
					flex-basis: 20%;
				}
			}
		}

		.tips {
			top: -60px;
			padding: 120px 350px 100px 350px;

			.tip {
				flex-basis: 20%;
			}
		}

		.accessory {
			.row {
				padding: 0 200px;

				.left {
					flex-basis: 50%;
				}

				.right {
					flex-basis: 50%;
					text-align: right;
					height: 285px;

					&::v-deep .el-image__inner {
						width: auto;
					}
				}
			}

			.accessory-imgs {
				.accessory-img {
					flex-basis: 25%;
					margin: 0 15px;
				}
			}
		}

		.profile {
			padding: 100px 200px;

			.profile-img {
				margin: 0 2.5%;
				flex-basis: 45%;
			}

			.profile-content {
				margin: 0 2.5%;
				flex-basis: 45%;
			}
		}

		.activity {
			.projects {
				.project {
					flex-basis: 20%;
					margin: 0 10px;
				}
			}
		}
	}
}
</style>

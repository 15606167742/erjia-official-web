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
				<el-image class="profile-img" :src="imgResource + '/home/profile.png'" fit="contain"></el-image>
			</div>
			<div class="row1">
				<span class="row1_l">项目</span>
				<span class="row1_r">介绍</span>
				<el-image class="row1_split" :src="require('@/assets/img/comein/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Project introduction</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2"></div>
		<div class="content3" v-else-if="activeTab === 3"></div>
		<div class="content4" v-else-if="activeTab === 4"></div>
		<div class="content5" v-else-if="activeTab === 5"></div>
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
				banner: require('@/assets/img/comein/banner1.png'),
				// banner: WEBCONFIG.resource_url_img+'/cooperation/banner1.png',
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
			activeTab: 1
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

	.content2 {
	}

	.content3 {
	}

	.content4 {
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
		}

		.content2 {
		}

		.content3 {
		}

		.content4 {
		}
	}
}

@media screen and (min-width: 1080px) {
	.comein {
		.content1 {
			margin: 20px auto 60px;
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
			.row1 {
				margin-top: 150px;
			}
		}

		.content2 {
		}

		.content3 {
		}

		.content4 {
		}
	}
}
</style>

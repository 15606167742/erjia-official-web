<template>
	<div class="home">
		<top-menu></top-menu>
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
			<div class="search-cell"><div class="btn">点击搜索</div></div>
		</div>
		<el-image class="ad" :src="require('@/assets/img/home/advertisement1.png')" fit="contain"></el-image>
		<div class="hot-house">
			<div class="title1">热门房源推荐</div>
			<div class="title2">温馨舒适，一如尔家，用心体验</div>
			<div class="houses">
				<div class="house" :key="hotHouse.id" v-for="hotHouse in hotHouseList">
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
				<div class="tip-text">{{tip.text}}</div>
				<div class="tip-text-en">{{tip.text_en}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import TopMenu from '@/components/TopMenu.vue';

export default {
	name: 'Home',
	components: {
		TopMenu
	},
	data() {
		return {
			banners: [require('@/assets/img/home/banner1.png')],
			search: {
				city: '',
				series: '',
				keyword: ''
			},
			cityList: [
				{
					value: '212000',
					label: '镇江'
				},
				{
					value: '214000',
					label: '无锡'
				}
			],
			seriesList: [
				{
					value: 'Z001',
					label: '中式古典'
				},
				{
					value: 'Z002',
					label: '中式现代'
				},
				{
					value: 'O001',
					label: '欧式古典'
				},
				{
					value: 'O002',
					label: '欧式现代'
				}
			],
			hotHouseList: [
				{
					id: 1,
					img: require('@/assets/img/home/hothouse1.png'),
					tip: 'loft',
					name: '镇江宝龙项目',
					summary: '温馨舒适',
					summary_en: 'Sweet & comfortable',
					introduction: '小户型没有复式是惯例，尔家镇江宝龙复式设计是例外。'
				},
				{
					id: 2,
					img: require('@/assets/img/home/hothouse2.png'),
					tip: '品质优选',
					name: '无锡金科米兰',
					summary: '一如尔家',
					summary_en: 'As your home',
					introduction: '尔家馨寓金科米兰位于新吴区行创四路区位配套完善，毗邻中央公园环境优美，交通便利'
				},
				{
					id: 3,
					img: require('@/assets/img/home/hothouse3.png'),
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
					text_en: 'Forward '
				},
			]
		};
	}
};
</script>

<style scoped lang="scss">
.home {
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
			margin-top: 60px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			.house {
				margin: 0 10px;
				background-color: var(--color-bg-default);
				box-shadow: 0 0 8px 0 #999999;
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
	.tips{
		position: relative;
		z-index: -1;
		background-color: var(--color-bg-main);
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.tip{
			.tip-img{
				margin: auto;
				width: 100px;
				height: 100px;
				display: block;
			}
			.tip-text{
				margin-top: 45px;
				font-size: 3rem;
				text-align: center;
				color: var(--color-t-white);
			}
			.tip-text-en{
				margin-top: 18px;
				font-size: 2.4rem;
				text-align: center;
				color: var(--color-t-white);
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.home {
		.my-banner {
			height: 300px;

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
			padding: 20px 10px 10px 10px;

			.search-cell {
				flex-basis: 40%;
				margin-bottom: 20px;
			}
		}
		.hot-house{
			.houses{
				.house{
					flex-basis: 100%;
					margin-bottom: 20px;
				}
			}
		}
		.tips{
			padding: 100px 0 40px 0;
			.tip{
				flex-basis: 40%;
				margin-bottom: 50px;
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.home {
		.my-banner {
			height: 700px;

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
			padding: 50px 100px;

			.search-cell {
				flex-basis: 20%;
			}
		}
		.hot-house{
			.houses{
				.house{
					flex-basis: 20%;
				}
			}
		}
		.tips{
			top: -60px;
			padding: 120px 350px 100px 350px;
			.tip{
				flex-basis: 20%;
			}
		}
	}
}
</style>

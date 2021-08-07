<template>
	<div class="search">
		<Header></Header>
		<div class="top-banner">
			<el-image class="banner" :src="imgResource + '/search/banner.png'" fit="cover"></el-image>
			<div class="line">
				<div class="line-search">
					<div class="row1">
						<div class="row1-l">房源筛选</div>
						<div class="row1-c">
							<div class="text1">您已选择：</div>
							<div class="text2" @click="removeCity()" v-if="search.city">
								{{search.city}}
								<span class="close">×</span>
							</div>
							<div class="text2" @click="removeSeries()" v-if="search.series">
								{{search.series == '1' ? '尔家雅寓' : '尔家酒店'}}
								<span class="close">×</span>
							</div>
							<!-- <div class="text2" :key="city.id" v-for="city in select.cityList" @click="removeCity(city)">
								{{city.label}}
								<span class="close">×</span>
							</div> -->
							<!-- <div class="text2" :key="series.id" v-for="series in select.seriesList" @click="removeSeries(series)">
								{{series.label}}
								<span class="close">×</span>
							</div> -->
						</div>
						<div class="row1-r">共 {{ total }} 个结果</div>
					</div>
					<div class="row2">
						<div class="row2-l">城市</div>
						<div class="row2-r">
							<div class="text1" :key="city.value" v-for="city in cityList" @click="selectCity(city)">{{city.label}}</div>
						</div>
					</div>
					<div class="row2">
						<div class="row2-l">分类</div>
						<div class="row2-r">
							<div class="text1" :key="series.value" v-for="series in seriesList" @click="selectSeries(series)">{{series.label}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content" v-if="projectList.length > 0">
			<div class="project" :key="project.id" v-for="project in projectList" @click="gotoDetail(project.id)">
				<el-image class="img" :src="project.img" fit="cover"></el-image>
				<div class="tip">
					<div class="tip-name">{{project.name}}</div>
					<div class="tip-address">
						<el-image class="location" :src="require('@/assets/img/search/location.png')" fit="contain"></el-image>
						{{project.address}}
					</div>
				</div>
			</div>
		</div>
		<el-empty v-else></el-empty>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { projectList } from '@/network/search.js';

export default {
	name: 'Search',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			search: {
				city: '',
				series: '',
				keyword: ''
			},
			select: {
				cityList: [
					{
						value: '3',
						label: '无锡'
					}
				],
				seriesList: [
					{
						value: 'Z001',
						label: '尔家雅寓'
					}
				]
			},
			total: 117,
			cityList: [
				{
					value: '常州',
					label: '常州'
				},
				{
					value: '成都',
					label: '成都'
				},
				{
					value: '无锡',
					label: '无锡'
				},
				{
					value: '镇江',
					label: '镇江'
				}
			],
			seriesList: [
				{
					value: '1',
					label: '尔家雅寓'
				},
				{
					value: '2',
					label: '尔家酒店'
				}
			],
			projectList: [
				{
					id: 1,
					// img: require('@/assets/img/search/project1.png'),
					img: WEBCONFIG.resource_url_img+'/search/project1.png',
					name: '无锡绿地观澜湾项目',
					address: '无锡·梁溪区'
				},
				{
					id: 2,
					// img: require('@/assets/img/search/project2.png'),
					img: WEBCONFIG.resource_url_img+'/search/project2.png',
					name: '成都绿地GIC项目',
					address: '成都·梁溪区'
				},
				{
					id: 3,
					// img: require('@/assets/img/search/project3.png'),
					img: WEBCONFIG.resource_url_img+'/search/project3.png',
					name: '无锡绿地天空树项目',
					address: '无锡·梁溪区'
				},
				{
					id: 4,
					// img: require('@/assets/img/search/project4.png'),
					img: WEBCONFIG.resource_url_img+'/search/project4.png',
					name: '无锡金科米兰项目',
					address: '无锡·梁溪区'
				},
				{
					id: 5,
					// img: require('@/assets/img/search/project5.png'),
					img: WEBCONFIG.resource_url_img+'/search/project5.png',
					name: '镇江宝龙项目',
					address: '镇江·梁溪区'
				},
				{
					id: 6,
					// img: require('@/assets/img/search/project6.png'),
					img: WEBCONFIG.resource_url_img+'/search/project6.png',
					name: '常州世茂项目',
					address: '常州·梁溪区'
				},
				{
					id: 7,
					// img: require('@/assets/img/search/project4.png'),
					img: WEBCONFIG.resource_url_img+'/search/project4.png',
					name: '无锡金科米兰项目',
					address: '无锡·梁溪区'
				},
				{
					id: 8,
					// img: require('@/assets/img/search/project5.png'),
					img: WEBCONFIG.resource_url_img+'/search/project5.png',
					name: '镇江宝龙项目',
					address: '镇江·梁溪区'
				},
				{
					id: 9,
					// img: require('@/assets/img/search/project6.png'),
					img: WEBCONFIG.resource_url_img+'/search/project6.png',
					name: '常州世茂项目',
					address: '常州·梁溪区'
				},
			],
		};
	},
	mounted() {
		this.search = JSON.parse(this.$route.query.search);
		this.getProjectList();
	},
	methods: {
		getProjectList() {
			projectList({pageNum: 1, pageSize: 99, city: this.search.city, series: this.search.series, keyWord: this.search.keyword}).then(data=>{
				this. total = data.count;
				this.projectList.splice(0, this.projectList.length);
				this.projectList = data.data.map(item => {
					return {
						id: item.id,
						img: item.coverUrl,
						name: item.name,
						address: item.city + '·' + item.qu
					};
				});
			})
		},
		selectCity(city) {
			this.search.city = city.value;
			this.getProjectList();
		},
		selectSeries(series) {
			this.search.series = series.value;
			this.getProjectList();
		},
		removeCity() {
			this.search.city = '';
			this.getProjectList();
		},
		removeSeries() {
			this.search.series = '';
			this.getProjectList();
		},
		gotoDetail(id) {
			this.$router.push({
				path: '/project_detail',
				query: {
					id
				}
			});
		},
		// selectCity(city) {
		// 	let flag = true;
		// 	this.select.cityList.forEach(item => {
		// 		if (item.value == city.value) {
		// 			flag = false;
		// 		}
		// 	})
		// 	if (flag) {
		// 		this.select.cityList.push(city);
		// 	}
		// },
		// selectSeries(series) {
		// 	let flag = true;
		// 	this.select.seriesList.forEach(item => {
		// 		if (item.value == series.value) {
		// 			flag = false;
		// 		}
		// 	})
		// 	if (flag) {
		// 		this.select.seriesList.push(series);
		// 	}
		// },
		// removeCity(city) {
		// 	let i;
		// 	this.select.cityList.forEach((item, index) => {
		// 		if (item.value == city.value) {
		// 			i = index;
		// 			return;
		// 		}
		// 	})
		// 	this.select.cityList.splice(i, 1)
		// },
		// removeSeries(series) {
		// 	let i;
		// 	this.select.seriesList.forEach((item, index) => {
		// 		if (item.value == series.value) {
		// 			i = index;
		// 			return;
		// 		}
		// 	})
		// 	this.select.seriesList.splice(i, 1)
		// }
	}
};
</script>

<style scoped lang="scss">
.search {
	background-color: var(--color-bg-default);
	.top-banner {
		.banner {
			display: block;
		}
	}
	.line {
		overflow: hidden;
		background-color: var(--color-bg-main);
		.line-search {
			color: var(--color-t-white);
			.row1 {
				padding: 30px 0 20px;
				border-bottom: 1px solid #ffffff;
				display: flex;
				.row1-l {
					flex-shrink: 0;
					font-size: 3.6rem;
					font-weight: bold;
					letter-spacing: 0.1rem;
				}
				.row1-c {
					flex-grow: 1;
					font-size: 1.8rem;
					display: flex;
					flex-wrap: wrap;
					.text1 {
						margin-right: 20px;
						margin-bottom: 10px;
						padding: 10px 20px;
					}
					.text2 {
						position: relative;
						margin-right: 20px;
						margin-bottom: 10px;
						padding: 10px 20px;
						color: var(--color-t-active);
						background-color: var(--color-bg-default);
						cursor: pointer;
						.close {
							position: absolute;
							top: 2px;
							right: 3px;
							font-size: 1.2rem;
						}
					}
				}
				.row1-r {
					flex-shrink: 0;
					padding: 10px 20px;
					font-size: 1.8rem;
				}
			}
			.row2 {
				padding: 30px 0 20px;
				border-bottom: 1px dashed #ffffff;
				display: flex;
				.row2-l {
					flex-shrink: 0;
					margin: 0 10px;
					font-size: 2rem;
					font-weight: bold;
					letter-spacing: 0.5rem;
				}
				.row2-r {
					flex-grow: 1;
					margin: 0 40px;
					display: flex;
					flex-wrap: wrap;
					.text1 {
						margin-right: 30px;
						margin-bottom: 10px;
						font-size: 2rem;
						letter-spacing: 0.1rem;
						cursor: pointer;
					}
				}
			}
		}
	}
	.content {
		display: flex;
		flex-wrap: wrap;
		.project {
			position: relative;
			margin-bottom: 20px;
			border-radius: 8px;
			overflow: hidden;
			cursor: pointer;
			.img {
				display: block;
			}
			.tip {
				position: absolute;
				bottom: 0;
				left: 0;
				padding: 30px;
				box-sizing: border-box;
				width: 100%;
				color: var(--color-t-white);
				background-color: #33333366;
				display: flex;
				flex-wrap: wrap;
				.tip-name {
					flex-grow: 1;
					margin-bottom: 10px;
					font-size: 2.4rem;
				}
				.tip-address {
					flex-grow: 1;
					margin-bottom: 10px;
					font-size: 1.8rem;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.location {
						width: 24px;
						height: 24px;
						margin-right: 10px;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.search {
		.top-banner {
			.banner {
				height: 300px;
			}
		}
		.line {
			.line-search {
				margin: 30px 10px;
				.row1 {
					flex-wrap: wrap;
					.row1-l {
						flex-basis: 100%;
						margin-bottom: 10px;
					}
					.row1-c {
						flex-basis: 100%;
					}
					.row1-r {
						flex-basis: 100%;
						box-sizing: border-box;
						text-align: right;
					}
				}
			}
		}
		.content {
			margin: 30px 10px;
			.project {
				flex-basis: 100%;
				.tip {
					justify-content: space-between;
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.search {
		.top-banner {
			.banner {
				height: 550px;
			}
		}
		.line {
			.line-search {
				margin: 30px auto;
				width: 80%;
				min-width: 1000px;
				.row1 {
					justify-content: space-between;
					.row1-c {
						margin: 0 40px;
					}
				}
			}
		}
		.content {
			margin: 60px auto;
			width: 80%;
			min-width: 1000px;
			.project {
				flex-basis: 32%;
				margin: 0 0.5% 30px;
				.tip {
					justify-content: space-between;
				}
			}
		}
	}
}
</style>

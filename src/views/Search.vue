<template>
	<div class="search">
		<Header></Header>
		<div class="top-banner">
			<el-image class="banner" :src="require('@/assets/img/search/banner.png')" fit="cover"></el-image>
			<div class="line">
				<div class="line-search">
					<div class="row1">
						<div class="row1-l">房源筛选</div>
						<div class="row1-c">
							<div class="text1">您已选择：</div>
							<div class="text2">
								尔家雅寓
								<span class="close">×</span>
							</div>
						</div>
						<div class="row1-r">共 {{ total }} 个结果</div>
					</div>
				</div>
			</div>
		</div>
		<div class="content"></div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Search',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			search: {
				city: '',
				series: '',
				keyword: ''
			},
			total: 117,
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
			]
		};
	},
	mounted() {
		console.log(this.$route.query);
	},
	methods: {}
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
				padding: 30px 0;
				border-bottom: 1px solid #ffffff;
				display: flex;
				.row1-l {
					font-size: 3.6rem;
					font-weight: bold;
					letter-spacing: 0.1rem;
				}
				.row1-c {
					margin: 0 40px;
					font-size: 1.8rem;
					display: flex;
					flex-wrap: wrap;
					.text1 {
						padding: 10px 20px;
					}
					.text2 {
						position: relative;
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
					padding: 10px 20px;
					font-size: 1.8rem;
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
						flex-grow: 1;
					}
				}
			}
		}
	}
}
</style>

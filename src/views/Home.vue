<template>
	<div class="home">
		<top-menu></top-menu>
		<el-carousel class="my-banner">
			<el-carousel-item :key="index" v-for="(banner, index) in banners">
				<el-image class="banner" :src="banner" fit="cover"></el-image>
			</el-carousel-item>
		</el-carousel>
		<div class="search">
			<div class="search-cell">
				<div class="label">城市</div>
				<el-select class="my-select" v-model="search.city" placeholder="请选择">
					<el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="search-cell">
				<div class="label">系列</div>
				<el-select class="my-select" v-model="search.series" placeholder="请选择">
					<el-option v-for="item in seriesList" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="search-cell">
				<div class="label">关键字</div>
				<el-input class="my-input" v-model="input" placeholder="请输入"></el-input>
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
					keyword: '',
				},
				cityList: [{
						value: '212000',
						label: '镇江',
					},
					{
						value: '214000',
						label: '无锡',
					},
				],
				seriesList: [{
						value: 'Z001',
						label: '中式古典',
					},
					{
						value: 'Z002',
						label: '中式现代',
					},
					{
						value: 'O001',
						label: '欧式古典',
					},
					{
						value: 'O002',
						label: '欧式现代',
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

							&::-webkit-input-placeholder {
								color: #EEE;
							}

							&::-moz-placeholder {
								color: #EEE;
							}

							&::-ms-input-placeholder {
								color: #EEE;
							}
						}

						.el-input__suffix {
							display: none;
						}
					}
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
		}
	}
</style>

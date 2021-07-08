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
			cityList: [
				{
					value: '124000',
					label: '无锡',
				}
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
		.search-cell{
			.label{
				font-size: 1.8rem;
				color: var(--color-t-white);
			}
			.my-select{
				display: block;
				&::v-deep .el-input{
					background-color: transparent;
					.el-input__inner{
						background-color: transparent;
						border: none;
						border-radius: 0px;
						border-bottom: 1px solid var(--color-bg-default);
					}
					.el-input__suffix{
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
			padding: 10px 40px;
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
			padding: 40px 150px;
		}
	}
}
</style>

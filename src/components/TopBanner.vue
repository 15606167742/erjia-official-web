<template>
	<div class="top-banner">
		<el-image class="banner" :src="info.banner" fit="cover"></el-image>
		<div class="line"></div>
		<div class="title">{{ info.title }}</div>
		<div class="title-en">{{ info.title_en }}</div>
		<div class="tabs">
			<div class="tab" :class="[{ active: tab.active }, 'tab' + info.tabList.length]" :key="tab.id" v-for="tab in info.tabList" @click="changeTab(tab.id)">
				<el-image class="tab-img" :src="tab.img" fit="contain"></el-image>
				<div>
					<div class="tab-name">{{ tab.name }}</div>
					<div class="tab-name-en">{{ tab.name_en }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TopBanner',
	props: {
		info: {
			type: Object,
			default: function() {
				return {
					title: '',
					title_en: '',
					tabList: []
				};
			}
		}
	},
	data() {
		return {};
	},
	mounted() {},
	methods: {
		changeTab(id) {
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					this.$emit('change', id);
				}
			});
		}
	}
};
</script>

<style scoped lang="scss">
.top-banner {
	.banner {
		display: block;
	}
	.line {
		background-color: var(--color-bg-main);
	}
	.title {
		margin-top: 60px;
		font-size: 4.8rem;
		letter-spacing: 0.2rem;
		text-align: center;
		color: var(--color-t-active);
	}
	.title-en {
		margin-top: 20px;
		font-size: 3rem;
		letter-spacing: 0.1rem;
		text-align: center;
		color: var(--color-t-active);
	}
	.tabs {
		margin: 60px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		.tab {
			box-sizing: border-box;
			box-shadow: 0 0 10px 0 #999999;
			text-align: center;
			cursor: pointer;
			.tab-img {
				width: 80px;
				height: 80px;
			}
			.tab-name {
				margin-top: 10px;
				font-size: 2.4rem;
				letter-spacing: 0.1rem;
				color: #666666;
			}
			.tab-name-en {
				margin-top: 10px;
				font-size: 1.4rem;
				color: #666666;
			}
		}
		.tab1 {
			flex-basis: 100%;
		}
		.tab2 {
			flex-basis: 30%;
			margin: 0 5%;
		}
		.tab3 {
			flex-basis: 25%;
			margin: 0 3%;
		}
		.tab4 {
			flex-basis: 22%;
			margin: 0 1%;
		}
		.tab5 {
			flex-basis: 18%;
			margin: 0 1%;
		}
		.active {
			border: 2px solid var(--color-bg-main);
		}
	}
}

@media screen and (max-width: 1080px) {
	.top-banner {
		.banner {
			height: 300px;
		}
		.line {
			height: 50px;
		}
		.tabs {
			padding: 0 20px;
			.tab {
				padding: 20px 0;
				flex-basis: 100%;
				margin-bottom: 20px;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.top-banner {
		.banner {
			height: 550px;
		}
		.line {
			height: 100px;
		}
		.tabs {
			padding: 0 100px;
			.tab {
				padding: 30px 0 20px 0;
			}
		}
	}
}
</style>

<template>
	<div class="footer">
		<div class="up">
			<div class="col1">
				<div class="row1">{{ company.name }}</div>
				<div class="row2">
					<span class="key">座机:</span>
					<span class="value">{{ company.phone }}</span>
				</div>
				<div class="row2">
					<span class="key">邮箱:</span>
					<span class="value">{{ company.mail }}</span>
				</div>
				<div class="row2">
					<span class="key">地址:</span>
					<span class="value">{{ company.address }}</span>
				</div>
				<div class="row3">
					<div class="box" :key="share.id" v-for="share in shareList">
						<el-image class="share" :src="share.img" fit="contain"></el-image>
						<div class="pop">
							<el-image class="pop-img" :src="share.pop" fit="contain"></el-image>
							<div class="pop-tip">{{ share.tip }}</div>
							<div class="triangle"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="col2" :key="menu.path" v-for="menu in menuList">
				<div class="row1" @click="gotoPath(menu.path)">{{ menu.text }}</div>
				<div class="row2" :key="index" v-for="(anchor, index) in menu.anchorList" @click="gotoPath(menu.path, anchor.activeTab)">{{ anchor.text }}</div>
			</div>
		</div>
		<div class="down">
			<div class="col1">{{ company.copyright }}</div>
			<div class="col2">
				<span class="key">备案号:</span>
				<span class="value">{{ company.recordno }}</span>
			</div>
			<el-image class="col3" :src="require('@/assets/img/footer/logo.png')" fit="contain"></el-image>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			company: {
				name: '上海尔家商业管理有限公司',
				phone: '400-102-1222',
				mail: 'uhome_shg@erjiashangye.com',
				address: '上海市青浦区双联路158号2层R区211室',
				recordno: '沪ICP备18039490号',
				copyright: 'Copyright © 2020 上海尔家商业管理有限公司 All Rights Reserved'
			},
			shareList: [
				{
					id: 1,
					img: require('@/assets/img/footer/share1.png'),
					pop: require('@/assets/img/footer/pop1.png'),
					tip: '微博扫码，了解尔家'
				},
				{
					id: 2,
					img: require('@/assets/img/footer/share2.png'),
					pop: require('@/assets/img/footer/pop2.png'),
					tip: '公众号扫码，了解尔家信息'
				},
				{
					id: 3,
					img: require('@/assets/img/footer/share3.png'),
					pop: require('@/assets/img/footer/pop3.png'),
					tip: '小红书扫码，了解尔家生活'
				},
				{
					id: 4,
					img: require('@/assets/img/footer/share4.png'),
					pop: require('@/assets/img/footer/pop4.png'),
					tip: '抖音扫码，参与尔家互动'
				}
			],
			menuList: [
				{
					path: '/comein',
					text: '走进尔家',
					anchorList: [
						{
							activeTab: 1,
							text: '公司介绍'
						},
						{
							activeTab: 2,
							text: '公司视频'
						},
						{
							activeTab: 3,
							text: '管理团队'
						},
						{
							activeTab: 4,
							text: '商业模式'
						},
						{
							activeTab: 5,
							text: '发展历程'
						}
					]
				},
				{
					path: '/product',
					text: '产品介绍',
					anchorList: [
						{
							activeTab: 1,
							text: '产品亮点'
						},
						{
							activeTab: 2,
							text: '产品系列'
						},
						{
							activeTab: 3,
							text: '新售项目'
						}
					]
				},
				{
					path: '/service',
					text: '运营服务',
					anchorList: [
						{
							activeTab: 1,
							text: '星级酒店服务标准'
						},
						{
							activeTab: 2,
							text: '全时私属管家守候'
						},
						{
							activeTab: 3,
							text: '公区多维管理'
						},
						{
							activeTab: 4,
							text: '社群联盟运营'
						}
					]
				},
				{
					path: '/info',
					text: '信息中心',
					anchorList: [
						{
							activeTab: 1,
							text: '新闻聚焦'
						},
						{
							activeTab: 2,
							text: '社群活动'
						},
						{
							activeTab: 3,
							text: '促销活动'
						}
					]
				},
				{
					path: '/cooperation',
					text: '商务合作',
					anchorList: [
						{
							activeTab: 1,
							text: '我要投稿'
						},
						{
							activeTab: 2,
							text: '合作形式'
						}
					]
				},
				{
					path: '/connect',
					text: '联系我们',
					anchorList: [
						{
							activeTab: 1,
							text: '加入尔家'
						},
						{
							activeTab: 2,
							text: '联系我们'
						}
					]
				}
			]
		};
	},
	mounted() {},
	methods: {
		gotoPath(path, activeTab) {
			if (this.$route.path != path || this.$route.query.activeTab != activeTab) {
				this.$router.push({
					path,
					query: {
						activeTab
					}
				});
			}
		}
	}
};
</script>

<style scoped lang="scss">
.footer {
	padding: 70px 0 30px 0;
	background-color: #222222;
	color: var(--color-t-white);

	.up {
		border-bottom: 1px solid #ffffff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: flex-start;

		.col1 {
			.row1 {
				margin: 10px 0 20px 0;
				font-size: 1.6rem;
				letter-spacing: 0.1rem;
			}

			.row2 {
				font-size: 1.4rem;
				line-height: 3rem;

				.key {
					letter-spacing: 0.5rem;
				}
			}

			.row3 {
				margin-top: 20px;
				display: flex;
				.box {
					position: relative;
					margin-right: 10px;
					width: 48px;
					height: 48px;
					cursor: pointer;
					&:hover {
						.pop {
							display: block;
						}
					}
					.share {
						display: block;
					}
					.pop {
						display: none;
						position: absolute;
						bottom: 70px;
						width: 150px;
						padding: 10px;
						border-radius: 5px;
						background-color: var(--color-bg-default);
						.pop-img {
							display: block;
						}
						.pop-tip {
							margin-top: 8px;
							font-size: 1.2rem;
							text-align: center;
							color: #444444;
						}
						.triangle {
							position: absolute;
							left: 13px;
							bottom: -20px;
							width: 0;
							height: 0;
							border: 10px solid transparent;
							border-top-color: var(--color-bg-default);
						}
					}
				}
			}
		}

		.col2 {
			.row1 {
				margin-bottom: 25px;
				font-size: 1.6rem;
				letter-spacing: 0.1rem;
				cursor: pointer;
			}

			.row2 {
				margin-bottom: 15px;
				font-size: 1.4rem;
				cursor: pointer;
			}
		}
	}

	.down {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		font-size: 1.6rem;

		.col2 {
			.key {
				letter-spacing: 0.2rem;
			}
		}

		.col3 {
			height: 36px;
		}
	}
}

@media screen and (max-width: 1080px) {
	.footer {
		.up {
			margin: 0 20px;

			.col1 {
				margin-bottom: 20px;
				flex-basis: 100%;
			}

			.col2 {
				margin-bottom: 20px;
				flex-basis: 40%;
			}
		}

		.down {
			margin: 20px;
			font-size: 1.6rem;

			.col1 {
				margin-bottom: 15px;
				text-align: center;
				flex-basis: 100%;
			}

			.col2 {
				margin-bottom: 15px;
				text-align: center;
				flex-basis: 100%;
			}

			.col3 {
				text-align: center;
				flex-basis: 100%;
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.footer {
		.up {
			margin: 0 100px;
			padding-bottom: 20px;
		}

		.down {
			margin: 20px 150px 0 150px;
			font-size: 1.6rem;

			.col2 {
				margin-left: 20px;
				margin-right: auto;
			}
		}
	}
}
</style>

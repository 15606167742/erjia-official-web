<template>
	<div class="footer">
		<div class="up">
			<div class="col1">
				<div class="row1">{{company.name}}</div>
				<div class="row2">
					<span class="key">座机:</span>
					<span class="value">{{company.phone}}</span>
				</div>
				<div class="row2">
					<span class="key">邮箱:</span>
					<span class="value">{{company.mail}}</span>
				</div>
				<div class="row2">
					<span class="key">地址:</span>
					<span class="value">{{company.address}}</span>
				</div>
				<div class="row3">
					<el-image class="share" :src="share" fit="contain" :key="index" v-for="(share, index) in shareList"></el-image>
				</div>
			</div>
			<div class="col2" :key="menu.path" v-for="menu in menuList">
				<div class="row1">{{menu.text}}</div>
				<div class="row2" :key="index" v-for="(anchor, index) in menu.anchorList">{{anchor.text}}</div>
			</div>
		</div>
		<div class="down">
			<div class="col1">{{company.copyright}}</div>
			<div class="col2">
				<span class="key">备案号:</span>
				<span class="value">{{company.recordno}}</span>
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
					copyright: 'Copyright © 2020 上海尔家商业管理有限公司 All Rights Reserved',
				},
				shareList: [
					require('@/assets/img/footer/share1.png'),
					require('@/assets/img/footer/share2.png'),
					require('@/assets/img/footer/share3.png'),
					require('@/assets/img/footer/share4.png'),
				],
				menuList: [{
						path: '/comein',
						text: '走进尔家',
						anchorList: [{
								text: '公司介绍'
							},
							{
								text: '公司视频'
							},
							{
								text: '管理团队'
							},
							{
								text: '商业模式'
							},
							{
								text: '发展历程'
							},
						]
					},
					{
						path: '/product',
						text: '产品介绍',
						anchorList: [{
								text: '产品亮点'
							},
							{
								text: '产品系列'
							},
							{
								text: '新售项目'
							},
						]
					},
					{
						path: '/service',
						text: '运营服务',
						anchorList: [{
								text: '星级酒店服务标准'
							},
							{
								text: '全时私属管家守候'
							},
							{
								text: '公区多维管理'
							},
							{
								text: '社区联盟运营'
							},
						]
					},
					{
						path: '/info',
						text: '信息中心',
						anchorList: [{
								text: '尔家最新活动'
							},
							{
								text: '新闻聚焦'
							},
							{
								text: '促销活动'
							},
						],
					},
					{
						path: '/cooperation',
						text: '商务合作',
						anchorList: [{
								text: '我要投稿'
							},
							{
								text: '合作形式'
							},
						]
					},
					{
						path: '/connect',
						text: '联系我们',
						anchorList: [{
								text: '加入尔家'
							},
							{
								text: '联系我们'
							},
						],
					},
				]
			};
		},
		mounted() {},
		methods: {}
	};
</script>

<style scoped lang="scss">
	.footer {
		padding: 70px 0 30px 0;
		background-color: #222222;
		color: var(--color-t-white);
		.up{
			border-bottom: 1px solid #FFFFFF;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: flex-start;
			.col1{
				.row1{
					margin: 10px 0 20px 0;
					font-size: 1.6rem;
					letter-spacing: 0.1rem;
				}
				.row2{
					font-size: 1.4rem;
					line-height: 3rem;
					.key{
						letter-spacing: 0.5rem;
					}
				}
				.row3{
					margin-top: 20px;
					.share{
						margin-right: 10px;
						width: 48px;
						height: 48px;
						cursor: pointer;
					}
				}
			}
			.col2{
				.row1{
					margin-bottom: 25px;
					font-size: 1.6rem;
					letter-spacing: 0.1rem;
					cursor: pointer;
				}
				.row2{
					margin-bottom: 15px;
					font-size: 1.4rem;
					cursor: pointer;
				}
			}
		}
		.down{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			font-size: 1.6rem;
			.col2{
				.key{
					letter-spacing: 0.2rem;
				}
			}
			.col3{
				height: 36px;
			}
		}
	}

	@media screen and (max-width: 1080px) {
		.footer {
			.up{
				margin: 0 20px;
				.col1{
					margin-bottom: 20px;
					flex-basis: 100%;
				}
				.col2{
					margin-bottom: 20px;
					flex-basis: 40%;
				}
			}
			.down{
				margin: 20px;
				font-size: 1.6rem;
				.col1{
					margin-bottom: 15px;
					text-align: center;
					flex-basis: 100%;
				}
				.col2{
					margin-bottom: 15px;
					text-align: center;
					flex-basis: 100%;
				}
				.col3{
					text-align: center;
					flex-basis: 100%;
				}
			}
		}
	}

	@media screen and (min-width: 1080px) {
		.footer {
			.up{
				margin: 0 100px;
				padding-bottom: 20px;
			}
			.down{
				margin: 20px 150px 0 150px;
				font-size: 1.6rem;
				.col2{
					margin-left: 20px;
					margin-right: auto;
				}
			}
		}
	}
</style>

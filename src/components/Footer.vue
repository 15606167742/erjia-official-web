<template>
	<div class="footer">
		<div class="up"></div>
		<div class="down"></div>
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

	}

	@media screen and (max-width: 1080px) {}

	@media screen and (min-width: 1080px) {}
</style>

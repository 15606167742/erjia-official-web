<template>
	<div class="project-detail">
		<Header></Header>
		<div class="top-banner">
			<el-image class="banner" :src="info.banner" fit="cover"></el-image>
			<div class="line"></div>
			<div class="title">{{ info.title }}</div>
			<div class="title-en">{{ info.title_en }}</div>
		</div>
		<div class="content">
			<div class="row1">
				<div class="row1-l">
					<el-image class="img" :src="detail.img" fit="cover"></el-image>
					<el-image class="tip" :src="detail.tip" fit="cover"></el-image>
				</div>
				<div class="row1-r">
					<div class="box1">
						<div class="name text">{{ detail.name }}</div>
						<div class="line">
							<div class="line-l text">面积</div>
							<div class="line-r text">{{ detail.area }}</div>
						</div>
						<div class="line">
							<div class="line-l text">户型</div>
							<div class="line-r text">{{ detail.type }}</div>
						</div>
						<div class="line">
							<div class="line-l text">租金</div>
							<div class="line-r text">{{ detail.price }}</div>
						</div>
					</div>
					<div class="box2">
						<el-image class="logo" :src="require('@/assets/img/project_detail/logo.png')" fit="contain"></el-image>
						<div class="name">{{ detail.name }}</div>
						<div class="address">
							<el-image class="address-icon" :src="require('@/assets/img/project_detail/location.png')" fit="contain"></el-image>
							<div class="address-text">{{ detail.address }}</div>
						</div>
						<div class="description">{{ detail.description }}</div>
					</div>
				</div>
			</div>
			<div class="row2">
				<el-image class="icon" :src="require('@/assets/img/project_detail/icon_decrease.png')" fit="contain"></el-image>
				<div class="title">房源详情</div>
				<div class="line">
					<div class="line-l">公寓设施</div>
					<div class="line-r">{{ detail.facilityList.join(' ') }}</div>
				</div>
				<div class="line">
					<div class="line-l">公寓服务</div>
					<div class="line-r">{{ detail.serviceList.join(' ') }}</div>
				</div>
			</div>
			<div class="row2">
				<el-image class="icon" :src="require('@/assets/img/project_detail/icon_decrease.png')" fit="contain"></el-image>
				<div class="title">家居配套</div>
				<div class="line">
					<div class="line-box" :key="value.name" v-for="value in detail.furniture">
						<el-image class="box-img" :src="value.img" fit="contain"></el-image>
						<div class="box-text">{{ value.name }}</div>
					</div>
				</div>
			</div>
			<div class="row2">
				<el-image class="icon" :src="require('@/assets/img/project_detail/icon_decrease.png')" fit="contain"></el-image>
				<div class="title">家电配套</div>
				<div class="line">
					<div class="line-box" :key="value.name" v-for="value in detail.electricity">
						<el-image class="box-img" :src="value.img" fit="contain"></el-image>
						<div class="box-text">{{ value.name }}</div>
					</div>
				</div>
			</div>
			<div class="row2">
				<el-image class="icon" :src="require('@/assets/img/project_detail/icon_decrease.png')" fit="contain"></el-image>
				<div class="title">地图交通</div>
			</div>
			<div class="map" id="dituContent"></div>
			<div class="row3">
				<div class="title">项目房型</div>
				<div class="items">
					<div class="item" :key="item.id" v-for="item in itemList">
						<el-image class="item-img" :src="item.img" fit="contain"></el-image>
						<div class="item-line">
							<div class="name">{{ item.name }}</div>
							<div class="price">{{ item.price }}</div>
						</div>
						<div class="description">{{ item.description }}</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'ProjectDetail',
	components: {
		Header,
		Footer
	},
	data() {
		return {
			info: {
				banner: require('@/assets/img/project_detail/banner.png'),
				title: '项目详情',
				title_en: 'Business cooperation'
			},
			detail: {
				img: require('@/assets/img/project_detail/pic1.png'),
				tip: require('@/assets/img/project_detail/tip1.png'),
				name: '常州世茂项目',
				area: '60m²',
				type: '1室1厅1厨1卫',
				price: '7340元/月起',
				address: '常州市新北区太湖东路世贸广场5栋',
				description:
					'尔家公寓位于常州市东北部金融商务中心区和恐龙园商圈，占据东京120路中心区位，北靠年人流量超500万的中华恐龙城，又向南依傍“城市绿肺”紫荆公园，三点共为一线，构筑了一条集旅游、生态、金融与一体的旅游线路。往西10分钟的车程可到达万达广场，往东5分钟到达青洋路高架，青洋路高架衔接了沪宁高速，青龙道口，大大缩短了城际及城区间的距离。',
				facilityList: ['健身房', '书吧', '影音区', '台球室', '休闲会客区', '会议室'],
				serviceList: ['24小时保安', '管家式服务', '人脸识别', 'wifi', '驻场维修', '公区保洁', '驻客活动'],
				furniture: {
					bed: {
						show: true,
						img: require('@/assets/img/project_detail/bed.png'),
						name: '床'
					},
					cupboard: {
						show: true,
						img: require('@/assets/img/project_detail/cupboard.png'),
						name: '床头柜'
					},
					sofa: {
						show: true,
						img: require('@/assets/img/project_detail/sofa.png'),
						name: '沙发'
					},
					teaTable: {
						show: true,
						img: require('@/assets/img/project_detail/teaTable.png'),
						name: '茶几'
					},
					wardrobe: {
						show: true,
						img: require('@/assets/img/project_detail/wardrobe.png'),
						name: '衣柜'
					},
					cabinetShoe: {
						show: true,
						img: require('@/assets/img/project_detail/cabinetShoe.png'),
						name: '鞋柜'
					},
					bedding: {
						show: true,
						img: require('@/assets/img/project_detail/bedding.png'),
						name: '高级寝具'
					},
					dining: {
						show: true,
						img: require('@/assets/img/project_detail/dining.png'),
						name: '餐桌椅'
					},
					cabinetTV: {
						show: true,
						img: require('@/assets/img/project_detail/cabinetTV.png'),
						name: '电视柜'
					}
				},
				electricity: {
					conditioner: {
						show: true,
						img: require('@/assets/img/project_detail/conditioner.png'),
						name: '空调'
					},
					fridge: {
						show: true,
						img: require('@/assets/img/project_detail/fridge.png'),
						name: '冰箱'
					},
					washing: {
						show: true,
						img: require('@/assets/img/project_detail/washing.png'),
						name: '洗衣机'
					},
					television: {
						show: true,
						img: require('@/assets/img/project_detail/television.png'),
						name: '电视'
					},
					heater: {
						show: true,
						img: require('@/assets/img/project_detail/heater.png'),
						name: '热水器'
					},
					hood: {
						show: true,
						img: require('@/assets/img/project_detail/hood.png'),
						name: '油烟机'
					},
					stool: {
						show: true,
						img: require('@/assets/img/project_detail/stool.png'),
						name: '智能马桶'
					}
				}
			},
			map: {},
			itemList: [
				{
					id: 1,
					img: require('@/assets/img/project_detail/item1.png'),
					name: '豪华一居室',
					price: '12000元/月起',
					description: '1室1厅1厨1卫 58㎡起'
				},
				{
					id: 2,
					img: require('@/assets/img/project_detail/item2.png'),
					name: '豪华一居室',
					price: '12000元/月起',
					description: '1室1厅1厨1卫 58㎡起'
				},
				{
					id: 3,
					img: require('@/assets/img/project_detail/item3.png'),
					name: '豪华一居室',
					price: '12000元/月起',
					description: '1室1厅1厨1卫 58㎡起'
				},
				{
					id: 4,
					img: require('@/assets/img/project_detail/item4.png'),
					name: '豪华一居室',
					price: '12000元/月起',
					description: '1室1厅1厨1卫 58㎡起'
				}
			]
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.initMap();
		});
	},
	methods: {
		// 生成地图
		initMap() {
			this.createMap(); //创建地图
			this.setMapEvent(); //设置地图事件
			this.addMapControl(); //向地图添加控件
		},
		createMap() {
			let map = new BMap.Map('dituContent'); //在百度地图容器中创建一个地图
			let point = new BMap.Point(120.313769, 31.599214); //定义一个中心点坐标
			map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
			this.map = map; //将map变量存储在全局
		},
		setMapEvent() {
			this.map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
			this.map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
			this.map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
			this.map.enableKeyboard(); //启用键盘上下左右键移动地图
		},
		addMapControl() {}
	}
};
</script>

<style scoped lang="scss">
.project-detail {
	background-color: var(--color-bg-default);
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
	}
	.content {
		.row1 {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.row1-l {
				position: relative;
				.img {
					display: block;
				}
				.tip {
					position: absolute;
					top: 0;
					left: 40px;
				}
			}
			.row1-r {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.box1 {
					background-color: #eeddbb;
					.text {
						padding: 10px 20px;
						font-size: 1.8rem;
						color: #333333;
					}
					.name {
						font-size: 2.4rem;
					}
					.line {
						border-top: 2px solid #ffffff;
						display: flex;
						.line-l {
							flex-basis: 30%;
							border-right: 2px solid #ffffff;
						}
						.line-r {
							flex-basis: 70%;
						}
					}
				}
				.box2 {
					margin-top: 5px;
					padding: 30px;
					background-color: #eeddbb;
					.logo {
						width: 120px;
					}
					.name {
						margin-top: 20px;
						font-size: 2.4rem;
						font-weight: bold;
						color: var(--color-t-active);
					}
					.address {
						margin-top: 15px;
						display: flex;
						align-items: center;
						.address-icon {
							width: 20px;
							height: 20px;
						}
						.address-text {
							margin-left: 8px;
							font-size: 1.6rem;
							color: var(--color-t-active);
						}
					}
					.description {
						margin-top: 30px;
						font-size: 1.6rem;
						line-height: 2.5rem;
						color: #333333;
					}
				}
			}
		}
		.row2 {
			position: relative;
			margin-top: 20px;
			padding: 20px 30px;
			background-color: #ffffee;
			.icon {
				position: absolute;
				top: 0;
				right: 0;
				width: 60px;
				height: 60px;
			}
			.title {
				margin-bottom: 20px;
				font-size: 30px;
				color: #333333;
			}
			.line {
				padding: 20px;
				border-top: 2px solid #999999;
				font-size: 1.8rem;
				color: #333333;
				display: flex;
				flex-wrap: wrap;
				.line-l {
					flex-basis: 15%;
				}
				.line-r {
					flex-basis: 85%;
				}
				.line-box {
					margin-bottom: 10px;
					margin-right: 50px;
					width: 80px;
					height: 80px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					.box-img {
						width: 50px;
						height: 50px;
					}
					.box-text {
						font-size: 1.8rem;
						text-align: center;
						color: #333333;
					}
				}
			}
		}
		.map::v-deep .anchorBL {
			display: none;
		}

		.row3 {
			margin-top: 60px;
			.title {
				font-size: 3.6rem;
				color: #333333;
			}
			.items {
				margin-top: 30px;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				.item {
					.item-img {
						display: block;
					}
					.item-line {
						display: flex;
						justify-content: space-between;
						align-items: center;
						.name {
							font-size: 1.8rem;
							color: #333333;
						}
						.price {
							font-size: 1.4rem;
							color: #dd0000;
						}
					}
					.description {
						font-size: 1.4rem;
						color: #333333;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.project-detail {
		.top-banner {
			.banner {
				height: 300px;
			}
			.line {
				height: 50px;
			}
		}
		.content {
			margin: 20px auto 60px;
			.row1 {
				.row1-l {
					flex-basis: 100%;
					.tip {
						width: 10%;
					}
				}
				.row1-r {
					margin-top: 20px;
					flex-basis: 100%;
				}
			}
			.map {
				height: 250px;
			}
			.row3 {
				.title {
					text-align: center;
				}
				.items {
					.item {
						margin-top: 20px;
						flex-basis: 100%;
						.item-line {
							margin-top: 20px;
							padding: 0 10px;
						}
						.description {
							margin-top: 15px;
							padding: 0 10px;
						}
					}
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.project-detail {
		.top-banner {
			.banner {
				height: 550px;
			}
			.line {
				height: 100px;
			}
		}
		.content {
			margin: 20px auto 60px;
			width: 80%;
			min-width: 1000px;
			.row1 {
				.row1-l {
					flex-basis: 65%;
					.tip {
						width: 10%;
					}
				}
				.row1-r {
					flex-basis: 30%;
				}
			}
			.map {
				height: 380px;
			}
			.row3 {
				.items {
					.item {
						flex-basis: 23%;
						.item-line {
							margin-top: 20px;
						}
						.description {
							margin-top: 15px;
						}
					}
				}
			}
		}
	}
}
</style>

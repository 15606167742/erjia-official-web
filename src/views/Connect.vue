<template>
	<div class="connect">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="row1">
				<div class="job">应聘岗位</div>
				<div class="date">发布时间</div>
				<div class="address">工作地点</div>
				<div class="icon"></div>
			</div>
			<div :key="job.id" v-for="job in jobList">
				<div class="row2" :class="{ active: activeJob === job.id }" @click="handleJobChange(job.id)">
					<div class="job">{{ job.name }}</div>
					<div class="date">{{ job.date }}</div>
					<div class="address">{{ job.address }}</div>
					<div class="icon">
						<el-image class="img" :src="activeJob === job.id ? require('@/assets/img/connect/arrow2.png') : require('@/assets/img/connect/arrow1.png')" fit="contain"></el-image>
					</div>
				</div>
				<div class="text" :class="{ hidden: activeJob !== job.id }">
					<div class="text_title">岗位要求</div>
					<div class="text_content" v-html="job.gwRequire"></div>
					<div class="text_title">职位要求</div>
					<div class="text_content" v-html="job.zwRequire"></div>
				</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="form">
				<div class="form-item" :class="{ 'form-item-row': form.key == 'des' }" :key="index" v-for="(form, index) in formList">
					<div class="label">
						<span>{{ form.label }}</span>
						<span class="red">*</span>
					</div>
					<el-input class="my-input" v-model="form.value" :prefix-icon="form.icon"></el-input>
				</div>
			</div>
			<div class="row"><div class="btn" @click="submit">提交</div></div>
			<div class="map" id="dituContent"></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

import { jobList, submitContact } from '@/network/connect.js';

export default {
	name: 'Connect',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			info: {
				// banner: require('@/assets/img/connect/banner1.png'),
				banner: WEBCONFIG.resource_url_img + '/connect/banner1.png',
				title: '联系我们',
				title_en: 'Contact us',
				tabList: [
					{
						id: 1,
						active: true,
						banner: '/connect/banner1.png',
						img: require('@/assets/img/connect/tab1.png'),
						name: '加入我们',
						name_en: 'Join us'
					},
					{
						id: 2,
						active: false,
						banner: '/connect/banner2.png',
						img: require('@/assets/img/connect/tab2.png'),
						name: '联系我们',
						name_en: 'Contact us'
					}
				]
			},
			activeTab: 1,
			jobList: [
				{
					id: 1,
					name: '创意设计师',
					date: '2021-04-20',
					address: '上海',
					gwRequire:
						'<p><span>1. 主要负责公司业务拓展工作，完成公司业务指标。</span></p><p><span>2. 主要负责公司业务拓展工作，完成公司业务指标。</span></p><p><span>3. 主要负责公司业务拓展工作，完成公司业务指标。</span></p>',
					zwRequire:
						'<p>1. 主要负责公司业务拓展工作，完成公司业务指标。</p><p>2. 主要负责公司业务拓展工作，完成公司业务指标。</p><p>3. 主要负责公司业务拓展工作，完成公司业务指标。</p>'
				}
			],
			activeJob: 1,
			formList: [
				{
					label: '姓名',
					icon: 'el-icon-s-custom',
					key: 'name',
					value: ''
				},
				{
					label: '手机号',
					icon: 'el-icon-mobile-phone',
					key: 'mobile',
					value: ''
				},
				{
					label: '邮箱',
					icon: 'el-icon-message',
					key: 'email',
					value: ''
				},
				{
					label: '地址',
					icon: 'el-icon-location',
					key: 'address',
					value: ''
				},
				{
					label: '内容',
					icon: 'el-icon-document',
					key: 'des',
					value: ''
				}
			],
			map: {},
			markerArr: [
				{
					title: '上海尔家商业管理有限公司',
					content:
						'时间：周一至周五（9:00-18:00）<br/>电话：400-102-1222<br/>邮箱：uhome_shg@erjiashangye.com<br/>网站：http://www.erjiashangye.com<br/>地址：上海市青浦区双联路158号2层R区211室',
					point: '121.280981|31.19914',
					isOpen: 0,
					icon: {
						w: 23,
						h: 25,
						l: 46,
						t: 21,
						x: 9,
						lb: 12
					}
				}
			]
		};
	},
	mounted() {
		this.jump();
		this.getJobList();
	},
	watch: {
		$route: {
			handler() {
				this.jump();
			},
			deep: true
		}
	},
	methods: {
		jump() {
			if (this.$route.query.activeTab) {
				this.handleChange(parseInt(this.$route.query.activeTab));
			} else {
				this.handleChange(1);
			}
		},
		handleChange(id) {
			this.activeTab = id;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
					// this.info.banner = require('@/assets/img'+tab.banner);
					this.info.banner = WEBCONFIG.resource_url_img + tab.banner;
				} else {
					tab.active = false;
				}
			});
			// 调用地图生成
			if (id == 2) {
				this.$nextTick(() => {
					this.initMap();
				});
			}
		},
		handleJobChange(id) {
			if (this.activeJob === id) {
				this.activeJob = null;
			} else {
				this.activeJob = id;
			}
		},
		getJobList() {
			jobList().then(data => {
				this.jobList.splice(0, this.jobList.length);
				this.jobList = data.data.map(item => {
					return {
						id: item.id,
						name: item.name,
						date: item.createTime.slice(0, 10),
						address: item.workCity,
						gwRequire: item.gwRequire,
						zwRequire: item.zwRequire
					};
				});
			});
		},
		submit() {
			let flag = this.formList.some(item => !item.value);
			if (flag) {
				this.$alert('必填项不能为空');
			} else {
				let form = {};
				this.formList.forEach(item => {
					form[item.key] = item.value;
				});
				submitContact(form).then(() => {
					this.$alert('提交成功');
					this.formList.forEach(item => {
						item.value = '';
					});
				});
			}
		},
		// 生成地图
		initMap() {
			this.createMap(); //创建地图
			this.setMapEvent(); //设置地图事件
			this.addMapControl(); //向地图添加控件
			this.addMarker(); //向地图中添加marker
		},
		createMap() {
			let map = new BMap.Map('dituContent'); //在百度地图容器中创建一个地图
			let point = new BMap.Point(121.281583, 31.198692); //定义一个中心点坐标
			map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
			this.map = map; //将map变量存储在全局
		},
		setMapEvent() {
			this.map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
			this.map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
			this.map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
			this.map.enableKeyboard(); //启用键盘上下左右键移动地图
		},
		addMapControl() {},
		addMarker() {
			for (let i = 0; i < this.markerArr.length; i++) {
				let json = this.markerArr[i];
				let p0 = json.point.split('|')[0];
				let p1 = json.point.split('|')[1];
				let point = new BMap.Point(p0, p1);
				let iconImg = this.createIcon(json.icon);
				let marker = new BMap.Marker(point, {
					icon: iconImg
				});
				// let iw = this.createInfoWindow(i);
				this.createInfoWindow(i);
				let label = new BMap.Label(json.title, {
					offset: new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
				});
				marker.setLabel(label);
				this.map.addOverlay(marker);
				label.setStyle({
					borderColor: '#808080',
					color: '#333',
					cursor: 'pointer'
				});

				let $this = this;
				(function() {
					// let index = i;
					let _iw = $this.createInfoWindow(i);
					let _marker = marker;
					_marker.addEventListener('click', function() {
						$this.openInfoWindow(_iw);
					});
					_iw.addEventListener('open', function() {
						_marker.getLabel().hide();
					});
					_iw.addEventListener('close', function() {
						_marker.getLabel().show();
					});
					label.addEventListener('click', function() {
						_marker.openInfoWindow(_iw);
					});
					if (json.isOpen) {
						label.hide();
						_marker.openInfoWindow(_iw);
					}
				})();
			}
		},
		createInfoWindow(i) {
			let json = this.markerArr[i];
			let iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + '</div>');
			return iw;
		},
		createIcon(json) {
			let icon = new BMap.Icon('http://app.baidu.com/map/images/us_mk_icon.png', new BMap.Size(json.w, json.h), {
				imageOffset: new BMap.Size(-json.l, -json.t),
				infoWindowOffset: new BMap.Size(json.lb + 5, 1),
				offset: new BMap.Size(json.x, json.h)
			});
			return icon;
		}
	}
};
</script>

<style scoped lang="scss">
.connect {
	background-color: var(--color-bg-default);

	.content1 {
		background-color: #fafafa;

		.row1 {
			font-size: 1.8rem;
			color: #333333;
			border-bottom: 1px solid #cccccc;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			.icon {
				width: 24px;
				height: 24px;
				text-align: right;
			}
		}

		.row2 {
			margin-top: 20px;
			font-size: 1.8rem;
			color: #333333;
			background-color: var(--color-bg-default);
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			cursor: pointer;

			.icon {
				width: 24px;
				height: 24px;
				text-align: right;

				.img {
					width: 24px;
					height: 24px;
				}
			}

			&.active {
				color: var(--color-t-white);
				background-color: var(--color-bg-main);

				.job {
					font-size: 2.4rem;
				}
			}
		}

		.text {
			color: #333333;
			background-color: var(--color-bg-default);
			.text_title {
				font-size: 1.6rem;
				line-height: 3rem;
				font-weight: bold;
			}
			.text_content {
				font-size: 1.4rem;
				line-height: 2.5rem;
			}

			&.hidden {
				display: none;
			}
		}
	}

	.content2 {
		.form {
			background-color: #fafafa;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;

			.form-item {
				margin-bottom: 25px;
				flex-basis: 40%;

				.label {
					font-size: 1.6rem;
					letter-spacing: 0.2rem;

					.red {
						margin-left: 5px;
						color: red;
					}
				}

				.my-input {
					margin-top: 15px;

					&::v-deep .el-input__prefix {
						color: var(--color-t-active);
					}
				}
			}
		}

		.row {
			background-color: #fafafa;
			text-align: center;
			.btn {
				font-size: 2.4rem;
				letter-spacing: 0.2rem;
				text-align: center;
				color: var(--color-t-white);
				background-color: var(--color-bg-main);
				cursor: pointer;
				&:active {
					transform: translate(0.1rem, 0.1rem);
				}
			}
		}

		.map {
			margin-top: 20px;

			&::v-deep .anchorBL {
				display: none;
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.connect {
		.content1 {
			margin: 0 auto;
			padding: 10px;

			.row1 {
				padding: 10px;

				.job {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.date {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.address {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.icon {
					margin-bottom: 5px;
					flex-basis: 50%;
				}
			}

			.row2 {
				padding: 10px;

				.job {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.date {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.address {
					margin-bottom: 5px;
					flex-basis: 50%;
				}

				.icon {
					margin-bottom: 5px;
					flex-basis: 50%;
				}
			}

			.text {
				padding: 10px;
			}
		}

		.content2 {
			margin: 10px;

			.form {
				padding: 20px;

				.form-item {
					flex-basis: 100%;
				}
			}

			.row {
				.btn {
					margin: 30px auto;
					padding: 15px 0;
					border-radius: 5px;
				}
			}

			.map {
				height: 300px;
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.connect {
		.content1 {
			margin: 20px auto;
			padding: 20px;
			width: 60%;
			min-width: 900px;

			.row1 {
				padding: 10px 30px;

				.job {
					margin-right: auto;
				}

				.date {
					flex-basis: 20%;
					text-align: center;
				}

				.address {
					flex-basis: 20%;
					text-align: center;
				}

				.icon {
					flex-basis: 10%;
					text-align: right;
				}
			}

			.row2 {
				padding: 10px 30px;

				.job {
					margin-right: auto;
				}

				.date {
					flex-basis: 20%;
					text-align: center;
				}

				.address {
					flex-basis: 20%;
					text-align: center;
				}

				.icon {
					flex-basis: 10%;
				}
			}

			.text {
				padding: 20px 30px;
			}
		}

		.content2 {
			margin: 20px auto;
			width: 60%;
			min-width: 900px;

			.form {
				padding: 60px 100px;

				.form-item {
					flex-basis: 40%;

					&.form-item-row {
						flex-basis: 100%;
					}
				}
			}

			.row {
				.btn {
					display: inline-block;
					margin: 60px auto;
					padding: 20px 120px;
					border-radius: 8px;
				}
			}

			.map {
				height: 600px;
			}
		}
	}
}
</style>

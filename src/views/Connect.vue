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
				<div class="text" :class="{ hidden: activeJob !== job.id }" v-html="job.text"></div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="form">
				<div class="form-item" :class="{'form-item-row': form.key=='content'}" :key="index" v-for="(form, index) in formList">
					<div class="label">
						<span>{{form.label}}</span>
						<span class="red">*</span>
					</div>
					<el-input class="my-input" v-model="form.value" :prefix-icon="form.icon"></el-input>
				</div>
			</div>
			<div class="map" id="dituContent"></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

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
				banner: WEBCONFIG.resource_url_img+'/connect/banner1.png',
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
					text: `<p><strong><span style="font-size:18px;color:#333333;">岗位要求：</span></strong>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;color:#333333;">1. 主要负责公司业务拓展工作，完成公司业务指标。</span><br />
						<span style="font-size:16px;color:#333333;">2. 负责执行线下活动，保证活动质量。</span><br />
						<span style="font-size:16px;color:#333333;">3. 负责定期梳理市场情况，研究营销策略，提出优化建议。</span><br />
						<span style="font-size:16px;color:#333333;">4. 开发公司提供的优质客户资源。</span><br />
						<span style="font-size:16px;color:#333333;">5. 协助其他部门，对客户进行定期维护，与客户保持长期合作关系。</span></span>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;"><span style="font-size:18px;color:#333333;"><strong>职位要求</strong></span><span style="font-size:18px;color:#333333;"><strong>：</strong></span></span></span>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;"><span style="font-size:18px;"><span style="font-size:16px;color:#333333;">1. 大专或以上学历，相关美术专业毕业，有良好的手绘能力</span><br />
						<span style="font-size:16px;color:#333333;">2. 身体健康、精力充沛，能承受较强的工作压力；</span><br />
						<span style="font-size:16px;color:#333333;">3. 对家具设计有独到的见解和分析，善于沟通，表达能力强，有执行力</span><br />
						<span style="font-size:16px;color:#333333;">4. 2年以上家具行业设计工作经验，了解各种家具风格，具备敏锐的市场洞察力及流行趋势的捕捉能力</span></span></span><br />
						</span>
						</p>`
				},
				{
					id: 2,
					name: '创意设计师',
					date: '2021-04-20',
					address: '上海',
					text: `<p><strong><span style="font-size:18px;color:#333333;">岗位要求：</span></strong>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;color:#333333;">1. 主要负责公司业务拓展工作，完成公司业务指标。</span><br />
						<span style="font-size:16px;color:#333333;">2. 负责执行线下活动，保证活动质量。</span><br />
						<span style="font-size:16px;color:#333333;">3. 负责定期梳理市场情况，研究营销策略，提出优化建议。</span><br />
						<span style="font-size:16px;color:#333333;">4. 开发公司提供的优质客户资源。</span><br />
						<span style="font-size:16px;color:#333333;">5. 协助其他部门，对客户进行定期维护，与客户保持长期合作关系。</span></span>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;"><span style="font-size:18px;color:#333333;"><strong>职位要求</strong></span><span style="font-size:18px;color:#333333;"><strong>：</strong></span></span></span>
						</p>
						<p>
							<span style="font-size:18px;"><span style="font-size:16px;"><span style="font-size:18px;"><span style="font-size:16px;color:#333333;">1. 大专或以上学历，相关美术专业毕业，有良好的手绘能力</span><br />
						<span style="font-size:16px;color:#333333;">2. 身体健康、精力充沛，能承受较强的工作压力；</span><br />
						<span style="font-size:16px;color:#333333;">3. 对家具设计有独到的见解和分析，善于沟通，表达能力强，有执行力</span><br />
						<span style="font-size:16px;color:#333333;">4. 2年以上家具行业设计工作经验，了解各种家具风格，具备敏锐的市场洞察力及流行趋势的捕捉能力</span></span></span><br />
						</span>
						</p>`
				}
			],
			activeJob: 1,
			formList: [
				{
					label: '姓名',
					icon: 'el-icon-s-custom',
					key: 'name',
					value: '',
				},
				{
					label: '手机号',
					icon: 'el-icon-mobile-phone',
					key: 'mobile',
					value: '',
				},
				{
					label: '邮箱',
					icon: 'el-icon-message',
					key: 'mail',
					value: '',
				},
				{
					label: '地址',
					icon: 'el-icon-location',
					key: 'address',
					value: '',
				},
				{
					label: '内容',
					icon: 'el-icon-document',
					key: 'content',
					value: '',
				},
			],
			map: {},
			markerArr: [{
				title: "上海尔家商业管理有限公司",
				content: "时间：周一至周五（9:00-18:00）<br/>电话：400-102-1222<br/>邮箱：uhome_shg@erjiashangye.com<br/>网站：http://www.erjiashangye.com<br/>地址：上海市青浦区双联路158号2层R区211室",
				point: "121.280981|31.19914",
				isOpen: 0,
				icon: {
					w: 23,
					h: 25,
					l: 46,
					t: 21,
					x: 9,
					lb: 12
				}
			}],
		};
	},
	methods: {
		handleChange(id) {
			this.activeTab = id;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
					// this.info.banner = require('@/assets/img'+tab.banner);
					this.info.banner = WEBCONFIG.resource_url_img+tab.banner;
				} else {
					tab.active = false;
				}
			});
			// 调用地图生成
			if (id == 2) {
				this.$nextTick(()=>{
					this.initMap();
				})
			}
		},
		handleJobChange(id) {
			if (this.activeJob === id) {
				this.activeJob = null;
			} else {
				this.activeJob = id;
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
			let map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
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
				let p0 = json.point.split("|")[0];
				let p1 = json.point.split("|")[1];
				let point = new BMap.Point(p0, p1);
				let iconImg = this.createIcon(json.icon);
				let marker = new BMap.Marker(point, {
					icon: iconImg
				});
				// let iw = this.createInfoWindow(i);
				this.createInfoWindow(i);
				let label = new BMap.Label(json.title, {
					"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
				});
				marker.setLabel(label);
				this.map.addOverlay(marker);
				label.setStyle({
					borderColor: "#808080",
					color: "#333",
					cursor: "pointer"
				});
				
				let $this = this;
				(function() {
					// let index = i;
					let _iw = $this.createInfoWindow(i);
					let _marker = marker;
					_marker.addEventListener("click", function() {
						$this.openInfoWindow(_iw);
					});
					_iw.addEventListener("open", function() {
						_marker.getLabel().hide();
					})
					_iw.addEventListener("close", function() {
						_marker.getLabel().show();
					})
					label.addEventListener("click", function() {
						_marker.openInfoWindow(_iw);
					})
					if (json.isOpen) {
						label.hide();
						_marker.openInfoWindow(_iw);
					}
				})()
			}
		},
		createInfoWindow(i) {
			let json = this.markerArr[i];
			let iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title +
				"</b><div class='iw_poi_content'>" + json.content + "</div>");
			return iw;
		},
		createIcon(json) {
			let icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {
				imageOffset: new BMap.Size(-json.l, -json.t),
				infoWindowOffset: new BMap.Size(json.lb + 5, 1),
				offset: new BMap.Size(json.x, json.h)
			})
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
			background-color: var(--color-bg-default);
			&.hidden {
				display: none;
			}
		}
	}
	.content2{
		.form{
			background-color: #FAFAFA;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			.form-item{
				margin-bottom: 25px;
				flex-basis: 40%;
				.label{
					font-size: 1.6rem;
					letter-spacing: 0.2rem;
					.red{
						margin-left: 5px;
						color: red;
					}
				}
				.my-input{
					margin-top: 15px;
					&::v-deep .el-input__prefix {
						color: var(--color-t-active);
					}
				}
			}
		}
		.map{
			margin-top: 20px;
			&::v-deep .anchorBL{
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
			.text{
				padding: 10px;
			}
		}
		.content2 {
			margin: 10px;
			.form{
				padding: 20px;
				.form-item{
					flex-basis: 100%;
				}
			}
			.map{
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
			.text{
				padding: 20px 30px;
			}
		}
		.content2 {
			margin: 20px auto;
			width: 60%;
			min-width: 900px;
			.form{
				padding: 60px 100px;
				.form-item{
					flex-basis: 40%;
					&.form-item-row{
						flex-basis: 100%;
					}
				}
			}
			.map{
				height: 600px;
			}
		}
	}
}
</style>

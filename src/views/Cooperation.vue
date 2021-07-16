<template>
	<div class="cooperation">
		<Header></Header>
		<top-banner :info="info" @change="handleChange"></top-banner>
		<div class="content1" v-if="activeTab === 1">
			<div class="row1">
				欢迎您与我们分享您正在经历或您周边发生的有趣事、生气事、郁闷事。 
			</div>
			<div class="row2">
				您可以在此留言，或通过官方微信尔家和@尔家官方微博私信我们，提交新闻线索。将有机会获得尔家寄送的精美礼品<br />
				当然，您也可以拨打电话或者发送邮箱投递给我们哦！
			</div>
			<div class="row2">
				电话: 400-102-1222<br />
				邮箱: uhome shg@erjiashangye.com
			</div>
			<div class="form">
				<div class="form-item" :class="{'form-item-row': form.key=='content'}" :key="index" v-for="(form, index) in formList">
					<div class="label">
						<span>{{form.label}}</span>
						<span class="red">*</span>
					</div>
					<el-input class="my-input" v-model="form.value" :prefix-icon="form.icon"></el-input>
				</div>
			</div>
			<div class="row3">
				<div class="btn">提交</div>
			</div>
		</div>
		<div class="content2" v-else-if="activeTab === 2">
			<div class="row1">
				<span class="row1_l">企业</span>
				<span class="row1_r">合作</span>
				<el-image class="row1_split" :src="require('@/assets/img/cooperation/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Enterprise cooperation</div>
			<div class="enterprises">
				<div class="enterprise" :key="index" v-for="(enterprise, index) in enterpriseList">
					<div class="img">
						<el-image class="my-img" :src="enterprise.img" fit="contain"></el-image>
					</div>
					<div class="line">{{enterprise.name}}</div>
					<div class="line" v-if="enterprise.phone">电话：{{enterprise.phone}}</div>
					<div class="line" v-if="enterprise.mail">邮箱：{{enterprise.mail}}</div>
					<div class="line" v-if="enterprise.address">地址：{{enterprise.address}}</div>
				</div>
			</div>
			<el-image class="map" :src="imgResource+'/cooperation/map.png'" fit="cover"></el-image>
			<div class="row1">
				<span class="row1_l">媒体</span>
				<span class="row1_r">合作</span>
				<el-image class="row1_split" :src="require('@/assets/img/cooperation/line.png')" fit="contain"></el-image>
			</div>
			<div class="row2">Media invitation</div>
			<div class="medias">
				<div class="media" :key="media.id" v-for="media in mediaList">
					<el-image class="my-img" :src="media.img" fit="contain"></el-image>
					<div class="title">
						{{media.title}}
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import TopBanner from '@/components/TopBanner.vue';
import Footer from '@/components/Footer.vue';

export default {
	name: 'Cooperation',
	components: {
		Header,
		TopBanner,
		Footer
	},
	data() {
		return {
			imgResource: WEBCONFIG.resource_url_img,
			info: {
				// banner: require('@/assets/img/cooperation/banner1.png'),
				banner: WEBCONFIG.resource_url_img+'/cooperation/banner1.png',
				title: '商务合作',
				title_en: 'Business cooperation',
				tabList: [
					{
						id: 1,
						active: true,
						banner: '/cooperation/banner1.png',
						img: require('@/assets/img/cooperation/tab1.png'),
						name: '我要投稿',
						name_en: '媒体曝光 加大影响'
					},
					{
						id: 2,
						active: false,
						banner: '/cooperation/banner2.png',
						img: require('@/assets/img/cooperation/tab2.png'),
						name: '合作形式',
						name_en: '提供多种形式合作方案'
					}
				]
			},
			activeTab: 1,
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
					label: '内容',
					icon: 'el-icon-document',
					key: 'content',
					value: '',
				},
			],
			enterpriseList: [
				{
					img: require('@/assets/img/cooperation/enterprise1.png'),
					name: '广告合作',
					phone: '13575526679',
					mail: 'wendy.gu@meadin.com',
				},
				{
					img: require('@/assets/img/cooperation/enterprise2.png'),
					name: '市场合作',
					phone: '17816156913',
					mail: 'market@meadin.com',
				},
				{
					img: require('@/assets/img/cooperation/enterprise3.png'),
					name: '资讯合作',
					mail: 'news@meadin.com',
				},
				{
					img: require('@/assets/img/cooperation/enterprise4.png'),
					name: '报告合作',
					phone: '15867174518',
					mail: 'res@meadin.com',
				},
				{
					img: require('@/assets/img/cooperation/enterprise5.png'),
					name: '联系主编',
					mail: 'huanying@meadin.com',
					address: '杭州市文一西路522号西滨科创园9幢9楼',
				},
			],
			mediaList: [
				{
					id: 1,
					img: require('@/assets/img/cooperation/media1.png'),
					title: '尔家微博'
				},
				{
					id: 2,
					img: require('@/assets/img/cooperation/media2.png'),
					title: '尔家公众号'
				},
				{
					id: 3,
					img: require('@/assets/img/cooperation/media3.png'),
					title: '尔家小红书'
				},
				{
					id: 4,
					img: require('@/assets/img/cooperation/media4.png'),
					title: '尔家抖音'
				}
			]
		};
	},
	watch: {
		$route: {
			handler() {
				if(this.$route.query.activeTab){
					this.handleChange(parseInt(this.$route.query.activeTab))
				}
			},
			deep: true,
		}
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
		},
	}
};
</script>

<style scoped lang="scss">
.cooperation {
	background-color: var(--color-bg-default);
	.content1 {
		.row1{
			padding-bottom: 30px;
			font-size: 1.8rem;
			line-height: 3rem;
			color: #666666;
			border-bottom: 1px solid #EEEEEE;
		}
		.row2{
			margin-top: 30px;
			font-size: 1.8rem;
			line-height: 3rem;
			color: #666666;
		}
		.form{
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
		.row3{
			text-align: center;
			.btn{
				font-size: 2.4rem;
				letter-spacing: 0.2rem;
				text-align: center;
				color: var(--color-t-white);
				background-color: var(--color-bg-main);
				cursor: pointer;
				&:active{
					transform: translate(0.1rem, 0.1rem);
				}
			}
		}
	}
	.content2 {
		.row1 {
			position: relative;
			font-size: 3rem;
			letter-spacing: 0.2rem;
			font-weight: bold;
			text-align: center;
			.row1_l{
				color: #666666;
			}
			.row1_r{
				color: var(--color-t-active);
			}
			.row1_split{
				width: 30%;
				max-width: 520px;
				min-width: 300px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%);
			}
		}
		.row2{
			margin-top: 15px;
			font-size: 1.6rem;
			text-align: center;
			color: #333333;
		}
		.enterprises{
			display: flex;
			flex-wrap: wrap;
			.enterprise{
				box-sizing: border-box;
				padding: 20px;
				.img{
					margin-bottom: 20px;
					.my-img{
						width: 56px;
						height: 56px;
					}
				}
				.line{
					margin-top: 10px;
					font-size: 1.8rem;
					line-height: 2.5rem;
					color: #666666;
					word-break: break-all;
				}
			}
		}
		.map{
			display: block;
			margin: 70px 0;
		}
		.medias{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			align-items: center;
			.media{
				text-align: center;
				.title{
					font-size: 1.6rem;
					margin-top: 15px;
					color: #666666;
				}
			}
		}
	}
}

@media screen and (max-width: 1080px) {
	.cooperation {
		.content1 {
			margin: 0 20px;
			.form{
				margin-top: 30px;
				.form-item{
					flex-basis: 100%;
				}
			}
			.row3{
				.btn{
					margin: 50px auto;
					padding: 15px 0;
					border-radius: 5px;
				}
			}
		}
		.content2{
			.enterprises{
				margin: 0 20px;
				margin-top: 50px;
				.enterprise{
					flex-basis: 100%;
					margin-bottom: 20px;
					text-align: center;
				}
			}
			.medias{
				margin: 40px 20px;
				.media{
					flex-basis: 40%;
					margin-bottom: 20px;
				}
			}
		}
	}
}

@media screen and (min-width: 1080px) {
	.cooperation {
		.content1 {
			margin: 20px auto;
			width: 60%;
			min-width: 900px;
			.form{
				margin-top: 60px;
				.form-item{
					flex-basis: 40%;
					&.form-item-row{
						flex-basis: 100%;
					}
				}
			}
			.row3{
				.btn{
					display: inline-block;
					margin: 100px auto;
					padding: 20px 120px;
					border-radius: 8px;
				}
			}
		}
		.content2{
			margin: 20px auto;
			.enterprises{
				margin: 0 auto;
				margin-top: 60px;
				width: 60%;
				min-width: 900px;
				.enterprise{
					flex-basis: 33%;
					margin-bottom: 40px;
					&:nth-child(1){
						border-right: 1px solid #EEEEEE;
					}
					&:nth-child(2){
						border-right: 1px solid #EEEEEE;
					}
					&:nth-child(4){
						border-right: 1px solid #EEEEEE;
					}
				}
			}
			.medias{
				margin: 80px auto;
				width: 60%;
				min-width: 900px;
				.media{
					flex-basis: 20%;
				}
			}
		}
	}
}
</style>

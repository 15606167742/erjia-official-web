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
			info: {
				banner: require('@/assets/img/cooperation/banner1.png'),
				// banner: WEBCONFIG.resource_url_img+'/cooperation/banner.png',
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
		};
	},
	methods: {
		handleChange(id) {
			this.activeTab = id;
			this.info.tabList.forEach(tab => {
				if (tab.id === id) {
					tab.active = true;
					this.info.banner = require('@/assets/img'+tab.banner);
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
	}
}
</style>

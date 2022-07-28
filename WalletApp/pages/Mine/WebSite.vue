<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar leftIcon="" :placeholder="true" :border="false" :autoBack="false" :titleStyle="titleStyle">
			<view slot="right">
				<image @tap="value1=!value1" style="width: 50rpx;height: 50rpx;" src="../../static/Mine/globe.png"
					mode="aspectFit"></image>
			</view>
		</u-navbar>
		<!-- 列表 -->
		<view class="u-page">
			<view class="cell-group" v-for="(item,index) in $t('WebSite.list')" :key="index">
				<view class="title">{{item.title}}</view>
				<view class="text">{{item.text}}</view>
				<image :src="item.img" style="width: 641rpx;height: 674rpx;">
				</image>
			</view>
		</view>
		<view class="but-box">
			<view class="but">
				<!-- <image src="/static/common/phone3.png" style="width: 54rpx;height: 54rpx;">
				</image> -->
				<u-icon name="android-fill" color="#FFFFFF" size="32"></u-icon>
				<text>Android APK</text>
			</view>
			<view class="but">
				<!-- <image src="/static/common/phone3.png" style="width: 54rpx;height: 54rpx;">
				</image> -->
				<u-icon name="apple-fill" color="#FFFFFF" size="32"></u-icon>
				<text>IOS APK</text>
			</view>
		</view>
		<chunLei-popups v-model="value1" :popData="$t('locales.list')" @tapPopup="tapPopup" :x="348" :y="y"
			placement="top-end">
		</chunLei-popups>

	</view>
</template>

<script>
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	export default {
		components: {
			chunLeiPopups
		},
		data() {
			return {
				value1: false,
				y: 0,
				// 自定义导航标题样式
				titleStyle: {
					"font-size": "34rpx",
					"font-family": "Source Han Sans CN-Heavy, Source Han Sans CN",
					"font-weight": "800",
					color: "#092A3D"
				},
			}
		},
		onLoad() {
			
			// #ifdef H5
			this.y = 40
			// #endif
			// #ifdef APP-PLUS
			let platform = uni.getSystemInfoSync().platform
			if (platform == 'ios') {
				this.y = 80
			} else if (platform == 'android') {
				this.y = 70
			}

			// #endif

		},
		methods: {
			tapPopup(e) {
				if (e.locale == 'en' || e.locale == 'zh') {
					// 切换语言
					this.$i18n.locale = e.locale;
				} else {
					uni.showToast({
						title: '正在开发中...',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// height: 100vh;
		background-color: #fff;
	}

	.container {
		height: 100%;

		.u-nav-slot {
			width: 44rpx;
			height: 44rpx;
			text-align: center;
			line-height: 44rpx;
			opacity: 1;
			background: rgba(60, 165, 151, 0);
			border-radius: 8rpx;
			border: 1px solid #07002A;
			font-size: 24rpx;
			font-family: SourceHanSansCN-Heavy-, SourceHanSansCN-Heavy;
			font-weight: normal;
			color: #07002A;
		}

		.u-page {
			box-sizing: border-box;
			padding: 0rpx 49rpx 55rpx;

			.cell-group {
				margin-top: 80rpx;
				text-align: center;

				.title {
					font-size: 40rpx;
					font-family: PingFang-SC-Heavy-, PingFang-SC-Heavy;
					font-weight: normal;
					color: #07002A;
				}

				.text {
					padding: 30rpx 0 41rpx;
					font-size: 24rpx;
					font-family: PingFang-SC-Medium-Medium, PingFang-SC-Medium;
					font-weight: 500;
					color: #999999;
				}
			}

		}

		.but-box {
			display: flex;
			justify-content: space-between;
			padding: 24rpx 30rpx;

			.but {
				width: 324rpx;
				height: 96rpx;
				background: $uni-color-primary;
				border-radius: 10px;
				opacity: 1;
				border: 1px solid #838383;
				display: flex;
				justify-content: center;
				align-items: center;

				text {
					margin-left: 18rpx;
					font-size: 32rpx;
					font-family: PingFang-SC-Bold-, PingFang-SC-Bold;
					font-weight: normal;
					color: #FFFFFF;
				}
			}
		}

	}
</style>

<template>
	<view class="content">
		<!-- 自定导航 -->
		<u-navbar  leftIcon="" :placeholder="true" :border="false" :autoBack="false" :titleStyle="titleStyle">
			<view slot="right">
				<image @tap="value1=!value1" style="width: 50rpx;height: 50rpx;" src="../../static/Mine/globe.png"
					mode="aspectFit"></image>
			</view>
		</u-navbar>
		<image src="/static/CreateWallet/wallet.png" class="login-pic"></image>
		<view class="wallet-set">{{$t('WalletSet.title1')}}</view>
		<view class="security">{{$t('WalletSet.title2')}}</view>

		<!-- 錢包 -->
		<view class="wallet">
			<view @click="handleHaveWallet" class="wallet-type">
				<text class="wallet-or">{{$t('WalletSet.title3')}}</text>
				<text class="wallet-do">{{$t('CreatePassword.title11')}}</text>
			</view>
			<view @click="handleToNohaveWallet" class="wallet-type">
				<text class="wallet-or">{{$t('WalletSet.title4')}}</text>
				<text class="wallet-do">{{$t('WalletSet.title7')}}</text>
			</view>
			<view class="wallet-type">
				<view class="wallet-or" style="display: flex;">
					<u-icon name="wifi-off" color="rgba(0, 0, 0, 1)" size="35"></u-icon>
					<text>{{$t('WalletSet.title6')}}</text>
				</view>
				<text class="wallet-do">{{$t('WalletSet.title8')}}</text>
			</view>
		</view>
		<!-- 錢包 -->

		<view class="agree">
			{{$t('WalletSet.title9')}}<text @click="userDeal" class="agree-con">{{$t('WalletSet.title10')}}</text>
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
				titleStyle: {
					"font-size": "34rpx",
					"font-family": "Source Han Sans CN-Heavy, Source Han Sans CN",
					"font-weight": "800",
					color: "#092A3D"
				},
			}
		},
		onLoad() {
			uni.setStorageSync('locaIndex',1)
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
				console.log(e);
				if (e.locale == 'en' || e.locale == 'zh') {
					// 切换语言
					this.$i18n.locale = e.locale;
				} else {
					uni.showToast({
						title: '正在开发中...',
						icon: 'none'
					})
				}
			},
			// 已有钱包
			handleHaveWallet() {
				uni.navigateTo({
					url: '/pages/CreateWallet/HaveWallet'
				})
			},
			// 没有钱包
			handleToNohaveWallet() {
				uni.$u.route({
					url: '/pages/CreateWallet/NoHaveWallet',
				})
			},
			userDeal() {
				uni.navigateTo({
					url: '/pages/Mine/User'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #F5F6F7;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 60rpx;

		.login-pic {
			width: 312rpx;
			height: 51rpx;
			margin-top: 100rpx;
			margin-bottom: 147rpx;
		}

		.wallet-set {
			color: #131415;
			font-size: 40rpx;
			margin-bottom: 14rpx;
		}

		.security {
			color: #B1B3B4;
			font-size: 24rpx;
		}

		.wallet {
			margin-top: 513rpx;

			.wallet-type {
				width: 554rpx;
				background-color: #fff;
				box-shadow: 0 0 10rpx 1rpx rgba(0, 0, 0, 0.08);
				border-radius: 20rpx;
				padding: 39rpx 60rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				color: #131415;
				font-size: 30rpx;
				margin-bottom: 30rpx;

				.wallet-or {
					font-family: PingFang-SC-Bold-Medium;
					font-weight: Medium;
				}

				.wallet-do {
					color: #999999;
					font-size: 24rpx;
				}
			}
		}

		.agree {
			color: #999999;
			font-size: 24rpx;
			margin-top: 40rpx;
			margin-bottom: 84rpx;

			.agree-con {
				color: #11C4D1;
			}
		}
	}
</style>

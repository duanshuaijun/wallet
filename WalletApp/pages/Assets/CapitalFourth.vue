<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<u-navbar @rightClick='right' title="" :placeholder="true" :autoBack="true" :border="false"
			:titleStyle="titleStyle">
			<view class="u-nav-slot" slot="left">
				<image slot="icon" src="/static/common/left-nav.png" style="width: 50rpx;height: 50rpx;"></image>
			</view>
			<!-- <view class="u-nav-slot" slot="right">
				<image slot="icon" src="/static/common/right-nav.png" style="width: 38rpx;height: 38rpx;"></image>
			</view> -->
		</u-navbar>
		<!-- 自定义导航栏 -->

		<!-- 转账  收款  闪兑 -->
		<view class="transfer-payment">
			<view class="transfer-payment-pic"
				style="background: url(/static/assets/dark-blue.png) no-repeat;background-size: cover;overflow: hidden;height: 238rpx;border-bottom-left-radius: 20rpx;border-bottom-right-radius: 20rpx">
				<view class="transfer-payment-type">BSC-1</view>
				<view class="transfer-payment-money">
					<view class="transfer-payment-amount">
						<view class="transfer-payment-amount-content">
							<text>3.1492</text>
							<image src="/static/CreateWallet/vds.png" mode="aspectFit"
								class="transfer-payment-amount-pic">
							</image>
						</view>
						<view class="about">≈$26.35</view>
					</view>
					<image src="/static/assets/scan.png" mode="" class="transfer-payment-money-pic"></image>
				</view>
			</view>
			<view class="transfer-payment-con">
				<view @click="handleToTransfer" class="transfer-payment-tran">
					<image src="/static/assets/down.png" mode="" class="transfer-payment-con-pic"></image>
					<text>{{$t('Assets.transfer')}}</text>
				</view>
				<view style="height: 30rpx;border-right: solid 1px #cbd1d3;margin: auto 0;"></view>
				<view @click="handleToAccept" class="transfer-payment-pay">
					<image src="/static/assets/money.png" mode="" class="transfer-payment-con-pic-money"></image>
					<text>{{$t('Assets.gathering')}}</text>
				</view>
				<view style="height: 30rpx;border-right: solid 1px #cbd1d3;margin: auto 0;"></view>
				<view @click="handleToIndex" class="transfer-payment-ex">
					<image src="/static/assets/exchange.png" mode="" class="transfer-payment-con-pic-money-ex"></image>
					<text>{{$t('Assets.against')}}</text>
				</view>
			</view>
			<!-- 	<view class="transfer-payment-con">
				<view class="transfer-payment-tran">
					<image src="/static/assets/down.png" mode="" class="transfer-payment-con-pic"></image>
					<text>转账</text>
				</view>
				<view class="transfer-payment-pay">
					<image src="/static/assets/money.png" mode="" class="transfer-payment-con-pic-money"></image>
					<text>收款</text>
				</view>
			</view> -->
		</view>
		<!-- 转账  收款  闪兑 -->

		<!-- 交易详情  -->
		<view class="trading">
			<view class="trading-title">{{$t('Assets.particulars')}}</view>
			<view v-if="current == 0" class="property">
				<view class="wallet-con">
					<view v-for="(item, index) in walletList" :key="index" class="wallet-item">
						<image :src="item.image" mode="aspectFill" class="wallet-item-con"></image>
						<view class="wallet-info">
							<view class="">
								<view class="">
									<text class="trading-number">{{item.number}}</text>
									<image src="/static/assets/detail-copy.png" mode="" class="trading-copy"></image>
								</view>
								<view class="trading-time">{{item.time}}</view>
							</view>
							<view class="trading-money">
								{{item.money}}
								<!-- <image src="/static/CrossChain/l-6.png" mode="" class="trading-money-pic"></image>
								 -->
								<image src="/static/CrossChain/l-6.png" mode="aspectFit" class="trading-money-pic">
								</image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 交易详情 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle: {
					"font-size": "34rpx",
					"font-family": "Source Han Sans CN-Heavy, Source Han Sans CN",
					"font-weight": "800",
					color: "#092A3D"
				},
				list: [{
					name: '資產'
				}, {
					name: 'NFT'
				}],
				current: 0,
				walletList: [{
						image: '/static/assets/yellow.png',
						number: 'xcsvdsvsdvssdq11111111111111111',
						money: '-0.1',
						time: '1分钟前'
					},
					{
						image: '/static/assets/blue.png',
						number: 'xcsvdsvsdvssd',
						money: '-0.1',
						time: '1分钟前'
					},
					{
						image: '/static/assets/yellow.png',
						number: 'xcsvdsvsdvssd',
						money: '-0.1',
						rate: '$12.13',
						time: '1分钟前'
					},
					{
						image: '/static/assets/blue.png',
						number: 'xcsvdsvsdvssd',
						money: '-0.1',
						rate: '$12.13',
						time: '1分钟前'
					}
				]
			}
		},
		onLoad() {},
		methods: {
			right() {
				uni.showToast({
					title: '扫码'
				})
			},
			// 闪兑
			handleToIndex() {
				uni.navigateTo({
					url: '/pages/FlashCash/index',
				})
			},
			// 转账
			handleToTransfer() {
				uni.navigateTo({
					url: '/pages/Assets/Transfer',
				})
			},
			// 收款
			handleToAccept() {
				uni.navigateTo({
					url: '/pages/Assets/Accept'
				})
			},
			// 点击切换tabs
			handeleSwitch(index) {
				// this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		padding: 0 30rpx;

		.transfer-payment {
			width: 100%;
			height: 336rpx;
			color: #FFFFFF;
			box-shadow: 0 0 10rpx 1rpx rgba(38, 44, 46, 0.1);
			border-radius: 20rpx 20rpx 10rpx 10rpx;
			overflow: hidden;
			.transfer-payment-type {
				font-size: 28rpx;
				margin-top: 46rpx;
				margin-left: 35rpx;
				font-weight: bold;
			}

			.transfer-payment-money {
				font-size: 30rpx;
				margin-left: 35rpx;
				margin-top: 41rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.transfer-payment-amount {
					font-size: 40rpx;
					font-weight: bold;

					.transfer-payment-amount-content {
						display: flex;
						align-items: center;
					}

					.transfer-payment-amount-pic {
						width: 50rpx;
						height: 50rpx;
						margin: 5rpx 0 0 5rpx;
					}

					.about {
						font-size: 24rpx;
						font-weight: inherit;
						opacity: 0.47;
					}
				}

				.transfer-payment-amount text {
					margin-left: 10rpx;
				}

				.transfer-payment-money-pic {
					width: 40rpx;
					height: 40rpx;
					margin-right: 42rpx;
				}
			}
		}

		.transfer-payment-con {
			color: #000;
			height: 97rpx;
			display: flex;
			// flex-direction: row;
			justify-content: space-around;
			align-content: center;
			// flex-wrap: wrap;

			.transfer-payment-con-pic {
				width: 40rpx;
				height: 40rpx;
			}

			.transfer-payment-con-pic-money {
				width: 30rpx;
				height: 30rpx;
				padding-top: 5rpx;
			}

			.transfer-payment-con-pic-money-ex {
				width: 38rpx;
				height: 38rpx;
				padding-top: 4rpx;
			}

			.transfer-payment-tran {
				// border-right: 1rpx solid #E8EBED;
				// border: solid 1px red;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.transfer-payment-pay {
				// border: solid 1px blue;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				text {
					margin-left: 10rpx;
				}
			}


			.transfer-payment-ex {
				// border: solid 1px pink;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;

				text {
					margin-left: 10rpx;
				}
			}
		}

		.trading-title {
			color: #1E262F;
			font-size: 30rpx;
			margin-top: 54rpx;
			font-weight: 600;
		}

		.property {
			.wallet-con {
				margin-top: 48rpx;

				.wallet-item {
					display: flex;
					flex-direction: row;

					.wallet-item-con {
						width: 64rpx;
						height: 64rpx;
						margin-top: 27rpx;
					}

					.wallet-info {
						margin-left: 30rpx;
						height: 118rpx;
						width: 100%;
						border-bottom: 1rpx solid #E8E9EB;
						position: relative;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						color: #131415;
						font-size: 34rpx;

						.trading-number {
							display: inline-block;
							max-width: 300rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							color: #131415;
							font-size: 30rpx;
							font-weight: bold;
						}

						.trading-copy {
							width: 26rpx;
							height: 26rpx;
							margin-left: 6rpx;
						}

						.trading-time {
							color: #A8A8A8;
							font-size: 24rpx;
						}

						.trading-money {
							color: #747474;
							font-size: 32rpx;
							font-weight: bold;
							display: flex;
							flex-direction: column;
							align-items: flex-end;
							display: flex;
							flex-direction: row;
							align-items: center;

							.trading-money-pic {
								width: 32rpx;
								height: 32rpx;
								padding: 2rpx 0 0 10rpx;
							}
						}
					}
				}
			}
		}
	}
</style>

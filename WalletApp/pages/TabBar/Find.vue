<template>
	<view class="container">
		<view class="top-nav">
			<view class="left-box">
				<view class="tetx-top-box">
					<view class="text">Key to unlocking</view>
					<view class="text">blockchain applications</view>
				</view>
				<view class="text-bottom-box">
					<view class="text">CryptoWallet provides an essential utility</view>
					<view class="text">for blockchain plus token traders, crypto gamers</view>
				</view>
			</view>
			<view class="right-box">
				<image src="/static/find/t-logo1.png" style="width: 60rpx;height: 60rpx;top: 28rpx;left: 48rpx;">
				</image>
				<image src="/static/find/t-logo2.png" style="width: 48rpx;height: 48rpx; top: 88rpx;left: 10rpx;">
				</image>
				<image src="/static/find/t-logo3.png" style="width: 60rpx;height: 60rpx; top: 128rpx;left: 48rpx;">
				</image>
				<image src="/static/find/t-logo4.png" style="width: 44rpx;height: 44rpx; top: 188rpx;left: 10rpx;">
				</image>
			</view>
			<view class="search">
				<u-input :placeholder="$t('Find.placeholder')" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #909399"
					shape="circle" suffixIcon="scan" suffixIconStyle="color: #131415;font-size: 22px" border=" surround"
					v-model="value" @change="change">
				</u-input>
			</view>
		</view>
		<view class="center-box">
			<u-tabs :list="$t('Find.list1')" lineHeight="4rpx" lineWidth="68rpx" lineColor="#11C4D1"
				activeStyle="{font-size: 28rpx;color: #11C4D1;transform: 'scale(8px)'}" inactiveStyle="color: #999999"
				@click="click"></u-tabs>
			<view class="center-list" v-if="topIndex==0">
				<view class="c-item">
					<image src="/static/find/t-logo4.png" style="width: 88rpx;height: 88rpx;">
					</image>
					<view class="c-text">Usiswap</view>
				</view>
				<view class="c-item">
					<image src="/static/find/t-logo2.png" style="width: 88rpx;height: 88rpx;">
					</image>
					<view class="c-text">Hot Cross</view>
				</view>
				<view class="c-item">
					<image src="/static/find/t-logo3.png" style="width: 88rpx;height: 88rpx;">
					</image>
					<view class="c-text">PancakeSwap</view>
				</view>
			</view>
		</view>
		<view class="button-box">
			<view class="h-tab">
				<u-tabs :list="list2" lineHeight="4rpx" lineWidth="68rpx" lineColor="#11C4D1"
					activeStyle="{font-size: 28rpx;color: #11C4D1;transform: 'scale(8px)'}"
					inactiveStyle="color: #999999" @click="tabsClick"></u-tabs>
			</view>
			<view class="button-list">
				<view class="nav-flex">
					<text>{{$t('Find.title1')}}</text>
					<view class="r-flex">
						<text>{{$t('Find.title2')}}</text>
						<u-icon name="arrow-right" color="#999999" size="28"></u-icon>
					</view>
				</view>
				<view class="list" v-for="(item , index) in textList">
					<view class="item">
						<view class="l-item">
							<image :src="item.image" style="width: 80rpx;height: 80rpx;">
							</image>
						</view>
						<view class="r-item">
							<view class="text-t">{{item.tiele}}</view>
							<view class="text-b">
								{{item.text}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				topIndex: 0,
				topIndex1: 0,
				list2: [{
						name: 'ETH',
					},
					{
						name: 'BNB',
					}
				],
				textList: [{
						image: "/static/find/t-logo2.png",
						tiele: 'Hot Cross',
						text: "Cross-chain and web3 application playground"
					},
					{
						image: "/static/find/t-logo3.png",
						tiele: 'PancakeSwap',
						text: "The most popular decentralized trading platform"
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			change() {

			},
			click(item) {
				console.log('item', item);
				this.topIndex = item.index
			},
			tabsClick(item){
				this.topIndex1 = item
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// height: 100vh;
		// background: #FFFFFF;
	}

	.container {

		.top-nav {
			width: 100%;
			background: #11C4D1;
			height: 100%;
			height: 321rpx;
			padding: 0 40rpx;
			box-sizing: border-box;
			display: flex;
			position: relative;

			.left-box {
				width: 560rpx;

				.tetx-top-box {
					padding: 36rpx 0 20rpx;
					box-sizing: border-box;

					.text {
						font-size: 36rpx;
						font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						font-weight: normal;
						color: #FFFFFF;
					}
				}

				.text-bottom-box {
					.text {
						font-size: 22rpx;
						font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						font-weight: normal;
						color: #FFFFFF;
						opacity: 0.5;
					}
				}
			}

			.right-box {
				position: relative;

				image {
					position: absolute;
				}

			}

			.search {
				left: 32rpx;
				width: 686rpx;
				position: absolute;
				bottom: -44rpx;

				/deep/ .u-input--circle {
					height: 76rpx;
					background: #FFFFFF;
					border: none;
					box-shadow: 6px 6px 10px 1px rgba(41, 45, 46, 0.06);
				}
			}
		}

		.center-box {
			height: 381rpx;
			background: #FFFFFF;
			padding: 100rpx 30rpx 65rpx;
			box-sizing: border-box;

			.center-list {
				margin-top: 20rpx;
				display: flex;

				.c-item {
					width: 169rpx;
					height: 140rpx;
					text-align: center;

					.c-text {
						text-align: center;
						margin-top: 3rpx;
						font-size: 22rpx;
						font-family: PingFang-SC-Medium-Medium, PingFang-SC-Medium;
						font-weight: 500;
						color: #131415;
					}
				}
			}
		}

		.button-box {

			.h-tab {
				padding: 0 30rpx;
				box-sizing: border-box;
				background: #FAFAFA;
				height: 88rpx;
			}

			.button-list {
				background: #FFFFFF;
				padding: 0 30rpx;

				.nav-flex {
					padding: 30rpx 0 40rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;

					text {
						font-size: 30rpx;
						font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						font-weight: normal;
						color: #131415;
					}

					.r-flex {
						display: flex;

						text {
							color: #999999;
							margin-right: 11rpx;
						}
					}
				}

				.list {
					.item {
						display: flex;

						.l-item {
							box-sizing: border-box;
							padding: 27rpx 0;
						}

						.r-item {
							width: 100%;
							border-bottom: 1px solid #E8EBED;
							box-sizing: border-box;
							padding: 27rpx 0;
							margin-left: 36rpx;

							.text-t {
								font-size: 34rpx;
								font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
								font-weight: normal;
								color: #131415;
							}

							.text-b {
								margin-top: 10rpx;
								font-size: 22rpx;
								font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
								font-weight: normal;
								color: #A8A8A8;
							}

						}
					}

				}
			}
		}
	}
</style>

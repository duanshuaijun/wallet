<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<!-- <uni-nav-bar :fixed="true" left-icon="list" right-icon="scan" title="" @clickLeft="left" @clickRight="right" /> -->
		<!-- 自定义导航栏 -->
		<u-navbar  @leftClick='left' @rightClick='right' title="" :placeholder="true" :autoBack="false" :border="false"
			:titleStyle="titleStyle">
			<view class="u-nav-slot" slot="left">
				<image slot="icon" src="/static/common/left-nav.png" style="width: 50rpx;height: 50rpx;"></image>
			</view>
			<view class="u-nav-slot" slot="right">
				<image slot="icon" src="/static/common/right-nav.png" style="width: 38rpx;height: 38rpx;"></image>
			</view>
		</u-navbar>

		<!-- 转账收款 -->
		<view class="transfer-payment">
			<view class="transfer-payment-pic"
				style="background: url(/static/assets/bgi.png);background-size: cover;overflow: hidden;height: 238rpx;margin: 0 auto;border-bottom-left-radius: 20rpx;border-bottom-right-radius: 20rpx">
				<view class="transfer-payment-type">BSC-1</view>
				<view class="transfer-payment-copy">
					Vcf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU
					<image src="/static/assets/copy.png" mode=""></image>
				</view>
				<view class="transfer-payment-money">
					<view class="transfer-payment-amount">$<text>26.34</text></view>
					<image src="/static/assets/scan.png" mode="" class="transfer-payment-money-pic"></image>
				</view>
			</view>
			<view class="transfer-payment-con">
				<view @click="handleToTransfer"  class="transfer-payment-tran">
					<image src="/static/assets/down.png" mode="aspectFill" class="transfer-payment-con-pic"></image>
					<text>{{$t('Assets.transfer')}}</text>
				</view>
				<view @click="handleToAccept" class="transfer-payment-pay">
					<image src="/static/assets/money.png" mode="aspectFill" class="transfer-payment-con-pic-money">
					</image>
					<text>{{$t('Assets.gathering')}}</text>
				</view>
			</view>
		</view>
		<!-- 转账收款 -->

		<!-- 资产  NFT  -->
		<view class="tabs">
			<!-- tabs -->
			<u-tabs :list="list" lineHeight="4rpx" :current="current" lineWidth="68rpx" lineColor="#11C4D1"
				:activeStyle="{ color: '#11C4D1',fontWeight: 'bold',transform: 'scale(8px)'}"
				inactiveStyle="color: #606266" @change="handeleSwitch"></u-tabs>
			<!-- 资产 -->
			<view v-if="current == 0" class="property">
				<view class="wallet-con">
					<view v-for="(item, index) in walletList" :key="index" @click="handleToCapitalFirst(item.title)"
						class="wallet-item">
						<image :src="item.image" mode="aspectFit" class="wallet-item-con"></image>
						<view class="wallet-info">
							<view class="wallet-info-title">{{item.title}}</view>
							<view class="">
								<view class="exchange">3.1492</view>
								<view class="rate">$12.13</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 资产 -->

			<!-- NFT -->
			<view v-if="current == 1" class="">

			</view>
			<!-- NFT -->
		</view>
		<!-- 资产  NFT -->
	</view>

	<!-- 发现新版本 -->
	<!-- <view class="container">
		<button type="default" @click="show = true">发现新版本</button>
		<u-popup :show="show" @close="close" @open="open" round="20rpx" mode="center">
			<view class="center-popup">
				<image src="/static/common/logo.png" style="width: 348rpx;height: 82rpx;">
				</image>
				<view class="main-title">{{$t('update.title1')}}</view>
				<view class="center-box">
					<view class="tetx">1.0.1</view>
					<view class="text">{{$t('update.title2')}}</view>
					<view class="item">
						<view class="item-text">{{$t('update.title3')}}</view>
						<view class="item-text">{{$t('update.title4')}}</view>
						<view class="item-text">{{$t('update.title5')}}</view>
					</view>
				</view>
				<view>
					<view v-if="progShow" style="margin-top: 104rpx;" class="button" @click="updateClick">{{$t('update.butName')}}</view>
					<view class="line-butt" style="margin-top: 83rpx;" v-else="progShow">
						<u-line-progress :percentage="percentage" height="6rpx" activeColor="#11C4D1" :showText="false">
						</u-line-progress>
						<view class="view">50%</view>
					</view>
					<view v-if="buttonShow" style="margin-top: 10rpx;" class="button" @click="installClick">{{$t('update.butName1')}}</view>
				</view>
			</view>
		</u-popup>
	</view> -->
	<!-- 发现新版本 -->
</template>

<script>
	import createMnemonic from '../../common/wallet-sdk/src/wallet-sdk/common/createMnemonic.js'
	export default {
		data() {
			return {
				// 自定义导航标题样式
				titleStyle: {
					"font-size": "34rpx",
					"font-family": "Source Han Sans CN-Heavy, Source Han Sans CN",
					"font-weight": "800",
					color: "#092A3D"
				},
				// modelType: false,
				// show: false,
				// progShow: true,
				// buttonShow: false,
				// percentage: 50
				list: [{
					name: '資產'
				}, {
					name: 'NFT'
				}],
				current: 0,
				walletList: [{
						image: '/static/CreateWallet/bnb.png',
						title: 'BNB',
						exchange: 3.1492,
						rate: '$12.13'
					},
					{
						image: '/static/assets/fil.png',
						title: 'FIL(BSC)',
						exchange: 3.1492,
						rate: '$12.13'
					},
					{
						image: '/static/assets/vds.png',
						title: 'VDS(Vollar/BSC)',
						exchange: 3.1492,
						rate: '$12.13'
					}
				]
			}
		},
		onShow() {
			uni.setTabBarItem({
				index: 0,
				text: this.$t('tabBar.Assets'),
			})
			uni.setTabBarItem({
				index: 1,
				text: this.$t('tabBar.Find'),
			})
			uni.setTabBarItem({
				index: 2,
				text: this.$t('tabBar.CrossChain'),
			})
			uni.setTabBarItem({
				index: 3,
				text: this.$t('tabBar.my'),
			})
		},
		onLoad: function(option) {
			console.log(createMnemonic.createMnemonic(),'returnData111');

			// let key = uni.getStorageSync('isShow') || false;
			// if(key=="true"){
			// 	this.show =true
			// }
		},
		methods: {
			// 自定义导航左侧图标
			left() {
				uni.navigateTo({
					url: '/pages/WalletList/index'
				})
			},
			// 自定义导航右侧图标
			right() {
				uni.showToast({
					title: '扫码'
				})
			},
			// 收款
			handleToAccept() {
				uni.navigateTo({
					url: '/pages/Assets/Accept'
				})
			},
			// 转账
			handleToTransfer() {
				uni.navigateTo({
					url: '/pages/Assets/Transfer'
				})
			},

			// 资产列表
			handleToCapitalFirst(title) {
				if (title == 'BNB') {
					uni.navigateTo({
						url: '/pages/Assets/CapitalFirst'
					})
				} else if (title.includes('FIL')) {
					uni.navigateTo({
						url: '/pages/Assets/CapitalOther'
					})
				} else if (title.includes('VDS')) {
					uni.navigateTo({
						url: '/pages/Assets/CapitalSecond'
					})
				}
			},
			// 点击切换tabs
			handeleSwitch(index) {
				// this.current = index;
			}
			// open() {
			// 	// console.log('open');
			// },
			// close() {
			// 	this.show = false
			// 	// console.log('close');
			// },
			// updateClick() {
			// 	this.progShow = !this.progShow
			// 	setTimeout(() => {
			// 		this.percentage = 100
			// 		if (this.percentage == 100) {
			// 			this.buttonShow = !this.buttonShow
			// 		}
			// 	}, 2000)
			// },
			// installClick() {
			// 	this.show = false
			// }
		}
	}
</script>

<style lang="scss" scoped>
	page {}

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
			// border: solid 1px red;
			overflow: hidden;

			.transfer-payment-type {
				font-size: 28rpx;
				margin-top: 26rpx;
				margin-left: 35rpx;
				font-weight: bold;
			}

			.transfer-payment-copy {
				font-size: 24rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 35rpx;
				margin-top: 9rpx;
				opacity: 0.76;
			}

			.transfer-payment-copy image {
				width: 24rpx;
				height: 24rpx;
				margin-left: 10rpx;
			}

			.transfer-payment-money {
				font-size: 30rpx;
				margin-left: 35rpx;
				margin-top: 27rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.transfer-payment-amount {
					font-size: 30rpx;

					text {
						margin-left: 4rpx;
						font-size: 52rpx;
						font-weight: bold;
					}
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
			// align-content: center;
			// flex-wrap: wrap;
			// border: solid 1px red;

			.transfer-payment-con-pic {
				width: 40rpx;
				height: 40rpx;
			}

			.transfer-payment-con-pic-money {
				width: 30rpx;
				height: 30rpx;
				padding-top: 5rpx;
			}

			.transfer-payment-tran {
				height: 97rpx;
				border-right: 1rpx solid #E8EBED;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				// padding-right: 150rpx;
				// border: solid 1px red;
			}

			.transfer-payment-pay {
				// display: flex;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				// justify-content: center;
				// align-items: center;
				// border: solid 1px blue;

				text {
					margin-left: 10rpx;
				}
			}
		}

		.property {
			.wallet-con {
				margin-top: 30rpx;

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

						.exchange {
							font-weight: 500;
							color: #131415;
						}

						.rate {
							color: #A8A8A8;
							font-size: 26rpx;
							display: flex;
							flex-direction: column;
							align-items: flex-end;
						}
					}
				}
			}
		}
	}

	// page {
	// 	// height: 100vh;
	// 	background-color: #F5F6F7;
	// }

	// .container {
	// 	height: 100%;
	// }

	// .center-popup {
	// 	width: 589rpx;
	// 	// height: 789rpx;
	// 	text-align: center;
	// 	padding: 57rpx 37rpx 55rpx;
	// 	box-sizing: border-box;
	// 	background: #FFFFFF;
	// 	border-radius: 20rpx;
	// 	opacity: 1;

	// 	.main-title {
	// 		padding: 46rpx 0 52rpx;
	// 		box-sizing: border-box;
	// 		font-size: 45rpx;
	// 		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
	// 		font-weight: 500;
	// 		color: #111E3E;
	// 	}

	// 	.center-box {
	// 		// margin-bottom: 104rpx;
	// 		text-align: left;

	// 		.text {
	// 			font-size: 27rpx;
	// 			font-family: PingFang SC-Medium, PingFang SC;
	// 			font-weight: 500;
	// 			color: #111E3E;
	// 		}

	// 		.item {
	// 			.item-text {
	// 				margin-top: 26rpx;
	// 				font-size: 27rpx;
	// 				font-family: PingFang SC-Medium, PingFang SC;
	// 				font-weight: 500;
	// 				color: #111E3E;
	// 			}
	// 		}
	// 	}

	// 	.button {
	// 		width: 211rpx;
	// 		height: 81rpx;
	// 		line-height: 81rpx;
	// 		margin: auto;
	// 		background: $uni-color-primary;
	// 		box-shadow: 0px 3px 6px 1px rgba(37, 128, 255, 0.2);
	// 		border-radius: 21px 21px 21px 21px;
	// 		opacity: 1;
	// 		font-size: 27rpx;
	// 		font-family: PingFang SC-Medium, PingFang SC;
	// 		font-weight: 500;
	// 		color: #FFFFFF;
	// 	}

	// 	.line-butt {
	// 		.view {
	// 			margin-top: 16rpx;
	// 		}
	// 	}
	// }
</style>

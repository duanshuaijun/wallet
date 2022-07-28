<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('CrossChain.navTitle')" :placeholder="true" leftIcon="" :border="false"
			:titleStyle="titleStyle">
		</u-navbar>
		<view class="u-page">
			<view class="top-box">
				<view class="goods1">
					<view class="left">
						<image src="/static/CrossChain/titleBack.png" mode="aspectFit" style="width: 54rpx;height: 54rpx;margin-right: 10rpx;margin-top: 3rpx;">
						</image>
						<view class="text">
							<view style="margin-right: 60rpx;" class="t-tetx">Vollar</view>
						</view>
					</view>
					<view class="right">
						<image src="/static/CrossChain/l-2.png"
							style="width: 54rpx;height: 54rpx;margin: 0 10rpx 0 0rpx;">
						</image>
						<view class="text">
							<view class="t-tetx">Vollar</view>
						</view>
					</view>
					<image src="/static/CrossChain/l-3.png"></image>
				</view>
				<view class="goods2">
					<view>
						<u--input :placeholder="$t('CrossChain.inputl')"
							placeholderStyle="{color: #D3D3D3;margin-left: 50rpx;}" border="bottom" clearable>
						</u--input>
					</view>
					<view>
						<u--input :placeholder="$t('CrossChain.inputr')"
							placeholderStyle="{color: #D3D3D3;margin-left: 50rpx;}" border="bottom" clearable>
						</u--input>
					</view>
				</view>
				<view class="goods3">
					<view><text class="l-text" style="margin-right: 5rpx;">{{$t('CrossChain.title1')}} </text> 1 Vollar ≈ 1Vollar </view>
				<!-- 	<view style="margin-top: 16rpx;">
						<text style="margin-right: 5rpx;">{{$t('CrossChain.title2')}} </text> 1% <image src="/static/CrossChain/l-4.png"
							style="width: 24rpx;height: 24rpx;margin-left: 10rpx;">
						</image>
					</view> -->
				</view>
				<view class="goods4" @click="show = true">
					{{$t('CrossChain.butName')}}
				</view>
				<!-- <view class="goods5" @click="toLink">{{$t('CrossChain.navTitle')}}</view> -->
			</view>
			<view class="tab-box">
				{{$t('CrossChain.title3')}}
			</view>
			<view class="list">
				<view class="item" v-for="(item,index) in list" @click="toLink(item)">
					<image :src="item.icon" style="width: 64rpx;height: 64rpx;margin-right: 20rpx;"></image>
					<view class="right">
						<view class="flex-box">
							<view class="text-box">
								<view>{{item.topText}}</view>
								<image src="/static/CrossChain/l-5.png" style="width: 24rpx;height: 24rpx;"></image>
							</view>
							<view class="text-b">{{item.boutText}}</view>
						</view>
						<view class="right-box">
							{{item.rightText}}
							<image src="/static/CrossChain/l-6.png"
								style="width: 34rpx;height: 29rpx;margin-left: 16rpx;">
							</image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框 -->
		<u-modal :show="modalShow" :title="$t('CrossChain.title8')" :confirmText="$t('CrossChain.butName')" :zoom="false" :showCancelButton="true"
			confirmColor="#11C4D1" @confirm="confirmClick" @cancel="cancelClick">
			<view class="slot-content" style="width: 517rpx;height: 75rpx;">
				<u-input :placeholder="$t('CrossChain.inputPwd')" border="surround" :password="iconShow" v-model="content"
					@change="change">
					<template slot="suffix">
						<image style="width: 32rpx;height: 32rpx;" v-show="iconShow" src="/static/common/show.png"
							@click="switchClick"></image>
						<image style="width: 32rpx;height: 32rpx;" v-show="!iconShow" src="/static/common/hide.png"
							@click="switchClick"></image>
					</template>
				</u-input>
			</view>
		</u-modal>
		<!-- 弹出框 -->
		<u-popup :show="show" @close="close" @open="open" round="32rpx">
			<view class="center-popup">
				<view class="t-popup">
					<text>{{$t('CrossChain.title4')}}</text>
					<!-- <image @click="close" src="/static/CrossChain/x.png" style="width: 36rpx;height: 36rpx;"></image> -->
				</view>
				<view class="title-popup">
					2.6 Vollar
				</view>
				<view class="liet-popup">
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title5')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0x51d59B5C5AfA7D04172874f2290
								</view>
								<view class="text mt">Db1cA332DCB09</view>
							</view>
							<!-- <image src="/static/CrossChain/l-6.png" style="width: 35rpx;height: 29rpx;"></image> -->
						</view>
					</view>
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title6')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0x51d59B5C5AfA7D04172874f2290
								</view>
								<view class="text mt">Db1cA332DCB09</view>
							</view>
							<!-- <image src="/static/CrossChain/l-6.png" style="width: 35rpx;height: 29rpx;"></image> -->
						</view>
					</view>
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title7')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0.0001 Vollar
								</view>
								<view class="b-text b-mt">≈Gas（21000000）*Gas Price（5.35 Gwei）</view>
							</view>
							<image src="/static/CrossChain/r.png" style="width: 35rpx;height: 29rpx;"></image>
						</view>
					</view>
					<view class="button" @click="confirmPayment">{{$t('CrossChain.butName1')}}</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
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
				list: [{
					icon: "/static/CrossChain/1a.png",
					topText: "0x73e…1e248",
					boutText: "1分鐘前",
					rightText: "-0.1 ",
					type:"1"
				}, {
					icon: "/static/CrossChain/2a.png",
					topText: "0x73e…1e248",
					boutText: "1分鐘前",
					rightText: "+0.1 ",
					type:"2"
				}, {
					icon: "/static/CrossChain/1a.png",
					topText: "0x73e…1e248",
					boutText: "1分鐘前",
					rightText: "-0.1 ",
					type:"3"
				}, {
					icon: "/static/CrossChain/2a.png",
					topText: "0x73e…1e248",
					boutText: "1分鐘前",
					rightText: "+0.1 ",
					type:"1"
				}],
				show: false,
				modalShow: false,
				iconShow: true,
				content: ''

			}
		},
		methods: {
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			change(e) {
				console.log('change', e);
			},
			switchClick() {
				this.iconShow = !this.iconShow
			},
			// 确定
			confirmClick() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.modalShow = false;
				}, 1000)
			},
			// 取消
			cancelClick() {
				this.modalShow = false;

			},
			// 确认支付
			confirmPayment() {
				this.show = false
				this.modalShow = true;
			},
			toLink(item) {
				uni.$u.route({
					url: 'pages/Assets/TransactionFailure',
					params: {
						name: item.type
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// height: 100vh;
		background-color: #FFFFFF;
	}

	.container {
		height: 100%;

		.u-page {
			padding: 28rpx 32rpx;
			box-sizing: border-box;

			.top-box {
				width: 686rpx;
				// height: 532rpx;
				background: #FFFFFF;
				box-shadow: 0px 2rpx 10rpx 1rpx rgba(38, 44, 46, 0.1200);
				border-radius: 20rpx;
				padding: 35rpx;
				box-sizing: border-box;

				.goods1 {
					display: flex;
					justify-content: space-around;
					padding-bottom: 39rpx;
					box-sizing: border-box;
					position: relative;
					border-bottom: 1rpx solid #F2F5F7;
					// border: solid 1px red;

					.text {
						// flex: 1;
						height: 54rpx;
						line-height: 54rpx;
						position: relative;
						// border: solid 1px blue;

						// .b-text {
						// 	width: 100%;
						// 	position: absolute;
						// 	bottom: -22rpx;
						// 	left: 5rpx;
						// 	font-size: 12rpx;
						// 	font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						// 	font-weight: normal;
						// 	color: #F9CE41;
						// }

						.t-text {
							font-size: 34rpx;
							font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
							font-weight: normal;
							color: #131415;
						}
					}
				}

				.goods1>view {
					flex: 1;
					display: flex;
					justify-content: center;
					// border:solid 1px red
					
				}

				.goods1>image {
					width: 66rpx;
					height: 66rpx;
					position: absolute;
					bottom: -33rpx;
					left: calc(50% - 33rpx);
				}

				.goods2 {
					display: flex;
					justify-content: space-between;
					padding-top: 80rpx;
					box-sizing: border-box;
				}

				.goods2>view {
					width: 264rpx;
				}

				.goods3 {
					margin: 40rpx 0;

					view {
						font-size: 22rpx;
						font-family: PingFang-SC-Medium-Medium, PingFang-SC-Medium;
						font-weight: 500;
						color: #212121;
					}

					text {
						font-size: 22rpx;
						font-family: PingFang-SC-Medium-Medium, PingFang-SC-Medium;
						font-weight: 500;
						color: #999999;
					}
				}

				.goods4 {
					text-align: center;
					line-height: 86rpx;
					height: 86rpx;
					background: #11C4D1;
					border-radius: 14rpx;
					font-size: 30rpx;
					font-family: PingFang SC-Semibold, PingFang SC;
					font-weight: 600;
					color: #FFFFFF;
				}

				.goods5 {
					margin-top: 50rpx;
					font-size: 26rpx;
					font-family: PingFang-SC-Medium-Regular, PingFang-SC-Medium;
					font-weight: 400;
					color: #131415;
				}
			}

			.tab-box {
				padding: 34rpx 0 25rpx;
				box-sizing: border-box;
				font-size: 26rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #999999;
				border-bottom: 1rpx solid #E8EBED;
			}

			.list {
				.item {
					display: flex;
					align-items: center;

					.right {
						flex: 1;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 25rpx 0;
						box-sizing: border-box;
						border-bottom: 1rpx solid #E8EBED;

						.flex-box {
							.text-box {
								display: flex;
								align-items: center;

								view {
									font-size: 30rpx;
									font-family: PingFang-SC-Bold-, PingFang-SC-Bold;
									font-weight: normal;
									color: #131415;
									margin-right: 16rpx;
								}
							}

							.text-b {
								margin-top: 10rpx;
								font-size: 24rpx;
								font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
								font-weight: normal;
								color: #A8A8A8;
							}
						}

						.right-box {
							font-size: 32rpx;
							font-family: PingFang SC-Medium, PingFang SC;
							font-weight: 500;
							color: #747474;
						}
					}
				}
			}
		}
	}

	.center-popup {
		width: 100%;
		height: 967rpx;
		background: #FFFFFF;
		border-radius: 32px 32px 0px 8px;

		.t-popup {
			heigh: 115rpx;
			line-height: 115rpx;
			text-align: center;
			position: relative;
			font-size: 34rpx;
			font-weight: normal;
			color: #1A1F38;
			border-bottom: 1px solid #E8EBED;

			image {
				position: absolute;
				top: calc(50% - 18rpx);
				right: 35rpx;
			}
		}

		.title-popup {
			text-align: center;
			margin: 72rpx 0;
			font-size: 38rpx;
			font-weight: normal;
			color: #11C4D1;
		}

		.liet-popup {
			padding: 0 35rpx;
			box-sizing: border-box;

			.item {
				margin-bottom: 60rpx;
				display: flex;
				justify-content: space-between;

				.l-text {
					// width: 112rpx;
					font-size: 28rpx;
					font-weight: normal;
					color: #9094AB;
				}

				.right-box {
					flex: 1;
					margin-left: 47rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.text {
						font-size: 30rpx;
						font-weight: normal;
						color: #1A1F38;
					}

					.mt {
						margin-top: 24rpx;
					}

					.b-text {
						margin-top: 12rpx;
						font-size: 20rpx;
						font-weight: 300;
						color: #A8A8A8;
					}
				}
			}
		}

		.button {
			margin-top: 32rpx;
			height: 88rpx;
			text-align: center;
			line-height: 88rpx;
			background: #11C4D1;
			border-radius: 12rpx;
			font-size: 32rpx;
			font-weight: normal;
			color: #FFFFFF;
		}
	}
</style>

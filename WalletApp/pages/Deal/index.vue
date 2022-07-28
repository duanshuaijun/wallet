<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('Deal.navTitle')" bgColor="#F5F6F7" :autoBack="true" :placeholder="true" left-icon-size="font-size: 34rpx"
			:border="false" :titleStyle="titleStyle">
		</u-navbar>
		<view class="u-page">
			<view class="center-box">
				<image v-show="imgIndex==0" class="t-img" src="/static/deal/4.png" style="width: 92rpx;height: 92rpx;">
				</image>
				<image v-show="imgIndex==1" class="t-img" src="/static/deal/5.png" style="width: 92rpx;height: 92rpx;">
				</image>
				<image v-show="imgIndex==2" class="t-img" src="/static/deal/1.png" style="width: 92rpx;height: 92rpx;">
				</image>
				<view class="title1">{{getType()}}</view>
				<view class="title2"> -10 {{type==0?"Vollar":"BNB"}}</view>
				<view class="title3">
					<view class="t-text">{{$t('common.title5')}}</view>
					<view class="b-text">0x51d59B5C5AfA7D04172874f2290Db1cA</view>
				</view>
				<view class="title3">
					<view class="t-text">{{$t('common.title6')}}</view>
					<view class="b-text">0x51d59B5C5AfA7D04172874f2290Db1cA3</view>
				</view>
				<view class="title3">
					<view class="t-text">{{$t('common.title7')}}</view>
					<view class="b-text">0.0001 {{type==0?"Vollar":"BNB"}}</view>
				</view>
				<view class="title3">
					<view class="t-text">{{$t('Deal.title4')}}</view>
				</view>
				<view class="bottom-panel">
					<view class="l-title">
						<view class="text-box">
							<view class="t-text">{{$t('Deal.title5')}}</view>
							<view class="b-text">0x51…DCVRW342TB09</view>
						</view>
						<view class="text-box">
							<view class="t-text">{{$t('Deal.title6')}}</view>
							<view class="b-text">18573000</view>
						</view>
						<view class="text-box">
							<view class="t-text" style="margin-bottom: 20rpx;">{{$t('Deal.title7')}}</view>
							<view class="t-text">6/21/2022, 3:43:46 PM</view>
						</view>
					</view>
					<view class="r-title">
						<view>
							<image src="/static/deal/2.png" style="width: 160rpx;height: 160rpx;">
							</image>
							<view class="text">{{$t('Deal.title8')}}
								<image src="/static/CrossChain/l-5.png"
									style="width: 30rpx;height: 30rpx;margin: 0 0 0 10rpx;">
								</image>
							</view>
						</view>

					</view>
				</view>
			</view>
			<view class="bottom-box">
				<view class="text1">
					{{$t('Deal.title9')}}
				</view>
				<image src="/static/deal/3.png" style="width: 63rpx;height: 63rpx;margin: 15rpx 0 2rpx;">
				</image>
				<view class="text2">BscScan</view>
			</view>

		</view>
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
				type: 0,
				imgIndex: 0

			}
		},
		methods: {
			// 确定
			confirmClick() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.modalShow = false;
				}, 1000)
			},
			// 状态
			getType() {
				if (this.imgIndex == 0) {
					return this.$t('Deal.title1')
				} else if (this.imgIndex == 1) {
					return this.$t('Deal.title2')
				} else if (this.imgIndex == 2) {
					return this.$t('Deal.title3')
				}
			}

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		min-height: 100vh;
		background-color: #F5F6F7;

		.u-page {
			padding: 78rpx 26rpx 26rpx;
			box-sizing: border-box;

			.center-box {
				padding: 72rpx 50rpx 60rpx;
				box-sizing: border-box;
				background: #FFFFFF;
				border-radius: 10rpx;
				position: relative;

				.t-img {
					position: absolute;
					top: -46rpx;
					left: calc(50% - 46rpx);
				}

				.title1 {
					font-size: 26rpx;
					font-weight: normal;
					color: #1A1F38;
					text-align: center;
				}

				.title2 {
					margin: 45rpx 0 74rpx;
					font-size: 34rpx;
					font-weight: normal;
					color: #1A1F38;
					text-align: center;
				}

				.title3 {
					margin-bottom: 40rpx;

					.t-text {
						font-size: 27rpx;
						font-weight: normal;
						color: #9094AB;
					}

					.b-text {
						margin-top: 20rpx;
						font-size: 26rpx;
						font-weight: 500;
						color: #131415;
					}
				}

				.bottom-panel {
					margin-top: 57rpx;
					border-top: 1px solid #DEE0ED;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.l-title {
						.text-box {
							margin-top: 40rpx;

							.t-text {
								font-size: 27rpx;
								font-weight: normal;
								color: #9094AB;
							}

							.b-text {
								margin-top: 20rpx;
								font-size: 28rpx;
								font-weight: normal;
								color: #1A1F38;
							}
						}
					}

					.r-title {
						font-size: 27rpx;
						font-weight: normal;
						color: #9094AB;

						.text {
							display: flex;
							justify-content: center;
							align-items: center;
							margin-top: 24rpx;
						}
					}
				}
			}

			.bottom-box {
				padding: 40rpx 0;
				box-sizing: border-box;
				text-align: center;

				.text1 {
					font-size: 27rpx;
					font-weight: normal;
					color: #9094AB;
				}

				.text2 {
					font-size: 15rpx;
					font-weight: 400;
					color: #1A1F38;
				}
			}

		}
	}
</style>

<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('InviteFriends.navTitle')" left-icon-size="font-size: 34rpx" :placeholder="true"
			:autoBack="true" :border="false" :titleStyle="titleStyle">
		</u-navbar>
		<!-- 列表 -->
		<view class="u-page">
			<view class="cell-group">
				<view class="title">CryptoWallet</view>
				<view class="text">
					<view>{{$t('InviteFriends.title1')}}</view>
					<view>{{$t('InviteFriends.title2')}}</view>
				</view>
				<view class="flex">
					<view class="left-flex">
						<view class="left-text">{{$t('InviteFriends.title3')}}</view>
						<view class="left-text">{{$t('InviteFriends.title4')}}</view>
						<view class="left-text">{{$t('InviteFriends.title5')}}</view>
						<view class="left-text">{{$t('InviteFriends.title6')}}</view>
						<view class="left-box">
							<image src="/static/common/code.png"
								style="width: 186rpx;height: 186rpx;margin-bottom: 10rpx;">
							</image>
							<view class="but-text">{{$t('InviteFriends.title7')}}</view>
							<view class="but-text">CryptoWallet</view>
						</view>
					</view>
					<image  src="/static/common/phone8.png" mode="aspectFill" style="width: 400rpx;height: 800rpx;">
					</image>
				</view>
			</view>
		</view>
		<view class="but-box">
			<view class="but" @click="toLink">
				{{$t('InviteFriends.title8')}}
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
			}
		},
		methods: {
			// 路由跳转
			toLink(item) {
				uni.$u.route({
					url: 'pages/Mine/WebSite',
					params: {
						name: ''
					}
				})
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
		padding-bottom: 70rpx;


		.u-page {
			box-sizing: border-box;
			padding: 0rpx 22rpx;

			.cell-group {
				margin: 66rpx 0 83rpx;
				padding: 57rpx 30rpx 57rpx 57rpx;
				box-sizing: border-box;
				background: #F5F6F7;
				// background: linear-gradient(146deg, #FFFFFF 0%, #FFFFFF 100%);
				box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
				border-radius: 31rpx;
				opacity: 1;
				background-image: url("@/static/common/shareBack.png");
				background-repeat: no-repeat;
				background-size: cover;

				.title {
					font-size: 60rpx;
					font-family: Source Han Sans CN-Heavy, Source Han Sans CN;
					font-weight: 800;
					color: #092A3D;
				}

				.text {
					margin: 22rpx 0 56rpx;
					font-size: 34rpx;
					font-family: PingFang SC-Medium, PingFang SC;
					font-weight: 500;
					color: #092A3D;
				}

				.flex {
					display: flex;
					justify-content: space-between;

					.left-flex {
						margin-top: 299rpx;

						.left-text {
							margin-bottom: 10rpx;
							font-size: 28rpx;
							font-family: PingFang-SC-Bold-Medium, PingFang-SC-Bold;
							font-weight: 500;
							color: #092A3D;
						}

						.but-text {
							text-align: center;
							font-size: 21rpx;
							font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
							font-weight: normal;
							color: #1E262F;
						}
					}

					.left-box {
						margin-top: 40rpx;
					}
				}
			}

		}

		.but-box {
			padding: 0rpx 30rpx;

			.but {
				height: 80rpx;
				opacity: 1;
				border: 1px solid $uni-border-color;
				// width: 100%;
				background: $uni-color-primary;
				border-radius: 10px;
				opacity: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				font-family: PingFang-SC-Heavy-, PingFang-SC-Heavy;
				font-weight: normal;
				color: #FFFFFF;
			}
		}

	}
</style>

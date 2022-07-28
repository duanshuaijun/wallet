<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('Notice.viewTitle')" left-icon-size="font-size: 34rpx" :placeholder="true" :autoBack="true" :border="true"
			:titleStyle="titleStyle">
		</u-navbar>
		<!-- 内容 -->
		<view class="u-page">
			<view class="title">BNB矿池提币手续费调整公告</view>
			<view class="box">
				<image src="/static/common/title-icon.png" style="width: 72rpx;height: 72rpx;margin-right: 20rpx;">
				</image>
				<view class="right-tex">
					<view class="title">CryptoWallet</view>
					<view class="date">3小時前</view>
				</view>
			</view>
			<text class="text">
				BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告BNB矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告ETV矿池提币手续费调整公告
			</text>
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
				}
			}
		},
		methods: {

		},

	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		background-color: #FFFFFF;

		.u-page {
			padding: 34rpx 29rpx;
			box-sizing: border-box;

			.title {
				font-size: 40rpx;
				font-family: PingFang-SC-Bold-, PingFang-SC-Bold;
				font-weight: normal;
				color: #131415;
			}

			.box {
				margin: 34rpx 0 72rpx;
				height: 72rpx;
				display: flex;

				.right-tex {
					height: 72rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						font-weight: normal;
						color: #131415;
						font-size: 30rpx;
					}

					.date {
						font-size: 22rpx;
						font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
						font-weight: normal;
						color: #909396;
					}
				}

			}

			.text {
				font-size: 30rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #131415;
			}
		}

	}
</style>

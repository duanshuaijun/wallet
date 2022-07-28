<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('user.navTitle')" left-icon-size="font-size: 34rpx" :placeholder="true" :autoBack="true" :border="true"
			:titleStyle="titleStyle">
		</u-navbar>
		<!-- 列表 -->
		<view class="u-page">
			<view class="title">
				{{$t('user.title')}}
			</view>

			<view class="text">
				<u-parse :content="$t('user.text')"></u-parse>
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
				}
			}
		},
		onLoad() {

		},
		methods: {

		},

	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100vh;
		background-color: #F5F6F7;

		.u-page {
			padding: 0rpx 45rpx;
			box-sizing: border-box;
		}

		.title {
			padding: 61rpx 0 68rpx;
			text-align: center;
			font-size: 32rpx;
			font-family: SourceHanSansCN-Regular-, SourceHanSansCN-Regular;
			font-weight: normal;
			color: #1A1F38;
		}

		.text {
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #131415;
		}

	}
</style>

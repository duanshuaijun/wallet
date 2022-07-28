<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('aboutUs.title')" :placeholder="true" :autoBack="true" :border="false"
			:titleStyle="titleStyle" left-icon-size="font-size: 34rpx">
		</u-navbar>
		<!-- 列表 -->
		<view class="top-icon">
			<image src="/static/common/top-icon.png" style="width: 163rpx;height: 163rpx;">
			</image>
			<view class="text">{{$t('aboutUs.text')}}</view>
		</view>
		<u-cell-group :border="false" class="cell-group">
			<template v-for="(item,index) in $t('aboutUs.list')">
				<u-cell :isLink="true" :url="item.url" right-icon-style="font-size:25rpx">
					<text slot="title" class="u-cell-text">
						<text>{{item.title}}</text>
					</text>
				</u-cell>
			</template>
		</u-cell-group>
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

		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100vh;
		background-color: #F5F6F7;
	}

	.container {
		height: 100%;

		.top-icon {
			padding: 70rpx 0 89rpx;
			height: 393rpx;
			text-align: center;
			box-sizing: border-box;

			.text {
				margin-top: 31rpx;
				font-size: 28rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #666666;
			}
		}

		.cell-group {
			background-color: #fff;
		}

		.u-cell-text {
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #131415;
			padding: 32rpx;
		}
	}

	::v-deep .cell-group {
		.u-line {
			margin: 0 32rpx !important;
			width: auto !important;
		}
	}
</style>

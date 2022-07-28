<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('Notice.listTitle')" left-icon-size="font-size: 34rpx" :placeholder="true" :autoBack="true" :border="true"
			:titleStyle="titleStyle">
		</u-navbar>
		<!-- 列表 -->
		<view class="u-page">
			<u-list @scrolltolower="scrolltolower" height="100%">
				<u-list-item v-for="(item, index) in indexList" :key="index" >
					<view class="item" @click="toLink(item)">
						<view class="title">{{item.title}}</view>
						<view class="date">{{item.date}}</view>
					</view>
				</u-list-item>
			</u-list>
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
				indexList: [{
						title: "BNB矿池提币手续费调整公告",
						date: "3小時前"
					},
					{
						title: "BNB矿池提币手续费调整公告",
						date: "3小時前"
					},
					{
						title: "BNB矿池提币手续费调整公告",
						date: "3小時前"
					}
				]
			}
		},
		onLoad() {},
		methods: {
			scrolltolower() {
				console.log('555')
			},
			// 路由跳转
			toLink(item) {
				uni.$u.route({
					url: 'pages/Mine/NoticeView',
					params: {
						name: ''
					}
				})
			}

		},

	}
</script>

<style lang="scss" scoped>
	.container {
		// height: 100vh;
		background-color: #FFFFFF;

		.u-page {
			padding: 12rpx 32rpx;
			box-sizing: border-box;
		}

		.item {
			// position: absolute;
			// z-index: 9;
			height: 169rpx;
			padding: 32rpx 0 17rpx 0;
			box-sizing: border-box;
			border-bottom: #F2F2F2 1px solid;

			.title {
				margin-bottom: 36rpx;
				font-size: 30rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #131415;
			}

			.date {
				font-size: 22rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #909396;
			}
		}
	}
</style>

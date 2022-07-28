<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar title="CryptoWallet" :placeholder="true" leftIcon="" :border="false" :titleStyle="titleStyle">
		</u-navbar>
		<!-- 列表 -->
		<u-cell-group :border="false" class="cell-group">
			<u-cell :isLink="true" url="/pages/WalletList/index?index=2&type=true" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my1.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[0].title')}}</text>
				</text>
			</u-cell>
			<u-cell :isLink="true" :border="false" url="/pages/Mine/NoticeList" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my2.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[1].title')}}</text>
				</text>
			</u-cell>
		</u-cell-group>
		<u-cell-group :border="false" class="cell-group">
			<u-cell :isLink="true" url="/pages/Mine/Locales" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my3.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[2].title')}}</text>
				</text>
			</u-cell>
			<u-cell :isLink="true" url="/pages/Mine/InviteFriends" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my4.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[3].title')}}</text>
				</text>
			</u-cell>
			<u-cell :isLink="true" right-icon-style="font-size:25rpx" @click="isUpdate">
				<image slot="icon" src="/static/my/my5.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[4].title')}}</text>
				</text>
			</u-cell>
			<u-cell :isLink="true" url="/pages/Mine/User" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my6.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[5].title')}}</text>
				</text>
			</u-cell>
			<u-cell :isLink="true" :border="false" url="/pages/Mine/AboutUs" right-icon-style="font-size:25rpx">
				<image slot="icon" src="/static/my/my7.png" style="width: 44rpx;height: 44rpx;margin-right: 36rpx;">
				</image>
				<text slot="title" class="u-cell-text">
					<text>{{$t('my.list[6].title')}}</text>
				</text>
			</u-cell>
		</u-cell-group>
		<view class="editor" v-if="isShow">
			{{$t('my.edition')}}
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
				isShow: false
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
		methods: {
			isUpdate() {
				this.isShow = !this.isShow
				if(!this.isShow){
					uni.setStorageSync('isShow', 'true');
					uni.switchTab({
						url: '/pages/TabBar/Assets'
					});
				}else{
					uni.setStorageSync('isShow', 'false');
				}
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background-color: #F5F6F7;
	}

	.container {
		height: 100%;
		// background-color: #F5F6F7;

		.cell-group {
			margin-top: 20rpx;
			background-color: #fff;
		}

		.u-cell-text {
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #131415;
		}
	}

	.editor {
		width: 520rpx;
		height: 72rpx;
		text-align: center;
		line-height: 72rpx;
		margin: 12rpx auto;
		background: #DDDDDD;
		border-radius: 10px 10px 10px 10px;
		opacity: 0.5;
		font-size: 26rpx;
		font-family: PingFang-SC-Medium-Medium, PingFang-SC-Medium;
		font-weight: 500;
		color: #a1a1a1;
	}

	::v-deep .cell-group {
		.u-line {
			margin-left: 112rpx !important;
		}
	}
</style>

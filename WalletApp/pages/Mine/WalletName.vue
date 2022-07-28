<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar title="CryptoWallet" left-icon-size="font-size: 34rpx" :placeholder="true" :autoBack="true"
			:border="true" :titleStyle="titleStyle">
		</u-navbar>
		<!-- 面板 -->
		<u-cell-group :border="false" class="cell-group">
			<u-cell>
				<image slot="icon" src="/static/WalletList/leftNavHl2.png"
					style="width: 64rpx;height: 64rpx;margin-right: 25rpx;"></image>
				<view slot="title" class="u-cell-text">
					<view class="top-tite">{{$t('WalletName.title1')}}</view>
					<view class="top-text">0x5c26597acf……ba249f00bf43</view>
				</view>
			</u-cell>
		</u-cell-group>
		<u-cell-group :border="false" class="cell-group">
			<u-cell :isLink="true" @click="show = true" right-icon-style="font-size:25rpx">
				<text slot="title" class="u-cell-text">
					<text>{{$t('WalletName.title2')}}</text>
				</text>
			</u-cell>
		</u-cell-group>
		<view class="button" @click="popupShow = true">
			{{$t('common.title3')}}
		</view>
		<!-- 弹出框 -->
		<u-modal :show="show" :confirmText="$t('common.butName')" :title="$t('common.title8')" :zoom="false" :showCancelButton="true" confirmColor="#11C4D1"
			@confirm="confirmClick" @cancel="cancelClick">
			<view class="slot-content" style="width: 517rpx;height: 75rpx;">
				<u-input :placeholder="$t('common.inputPwd')" border="surround" :password="iconShow" v-model="content"
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
		<u-popup :show="popupShow" @close="close" @open="open" round="32rpx">
			<view class="popup-buttom">
				<image src="/static/WalletList/but.png" style="width: 223rpx;height: 196rpx;">
				</image>
				<view class="title">{{$t('WalletName.title3')}}</view>
				<view class="text">
					{{$t('WalletName.title4')}}
					<view>{{$t('WalletName.title5')}}</view>
				</view>
				<view class="button-p" @click="submitClick">
					{{$t('common.title3')}}
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
				show: false,
				iconShow: true,
				popupShow: false,
				title: '輸入密碼',
				content: ''
			}
		},
		methods: {
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
					this.show = false;
					uni.navigateTo({
						url: '/pages/Mine/PromptMnemonicWord'
					})
				}, 500)
			},
			// 取消
			cancelClick() {
				this.show = false;

			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			// 删除钱包确定
			submitClick(){
				this.popupShow = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		// height: 100vh;
		background-color: #F3F5F8;
	}

	.container {
		position: relative;
		height: 100%;

		.cell-group {
			margin-top: 20rpx;
			background-color: #FFFFFF;

			.u-cell-text {
				color: #131415;
				padding: 12rpx 0;

				.top-tite {
					font-size: 34rpx;
					font-family: PingFang-SC-Bold-, PingFang-SC-Bold;
					font-weight: normal;
				}

				.top-text {
					font-size: 24rpx;
					font-family: Roboto-Regular-, Roboto-Regular;
					font-weight: normal;
				}

				text {
					font-size: 30rpx;
					font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
					font-weight: normal;
				}
			}
		}

		.button {
			position: fixed;
			bottom: 41rpx;
			left: calc(50% - 343rpx);
			width: 686rpx;
			height: 88rpx;
			text-align: center;
			line-height: 88rpx;
			background: #FFFFFF;
			border-radius: 10rpx;
			opacity: 1;
			font-size: 34rpx;
			font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
			font-weight: normal;
			color: $uni-color-primary;
		}

		.popup-buttom {
			padding: 101rpx 32rpx 41rpx;
			height: 652rpx;
			box-sizing: border-box;
			background: #FFFFFF;
			border-radius: 32px 32px 0px 0px;
			opacity: 1;
			text-align: center;

			.title {
				margin-top: 16rpx;
				font-size: 26rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: $uni-color-primary;
			}

			.text {
				margin: 40rpx 0 65rpx;
				font-size: 26rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #131415;
			}

			.button-p {
				background: $uni-color-primary;
				width: 686rpx;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				border-radius: 10rpx;
				opacity: 1;
				font-size: 34rpx;
				font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
				font-weight: normal;
				color: #FFFFFF;
			}
		}

	}

	::v-deep .u-modal__title {
		padding: 52rpx 0 30rpx 0;
		font-size: 34rpx;
		font-family: SourceHanSansCN-Medium-, SourceHanSansCN-Medium;
		font-weight: normal;
		color: #1A1F38;
	}

	::v-deep .u-border {
		border-color: #999999 !important;
	}
</style>

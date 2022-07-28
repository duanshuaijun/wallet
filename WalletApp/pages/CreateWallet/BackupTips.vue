<template>
	<view class="content">
		<!-- 步驟條 -->
		<view class="article-steps">
			<u-steps :current="current" activeColor="#11C4D1" inactiveColor="#A8A8A8">
				<u-steps-item :title="$t('CreateWallet.steps1')" class="steps">
					<text class="slot-icon slot-icon-one" slot="icon">1</text>
				</u-steps-item>
				<u-steps-item :title="$t('CreateWallet.steps2')">
					<text class="slot-icon slot-icon-two" slot="icon">2</text>
				</u-steps-item>
				<u-steps-item :title="$t('CreateWallet.steps3')">
					<text class="slot-icon slot-icon-three" slot="icon">3</text>
				</u-steps-item>
			</u-steps>
		</view>
		<!-- 步驟條 -->

		<view class="waring">
			<image src="/static/CreateWallet/tips.png" mode="" class="waring-pic"></image>
			<view class="waring-tips"> {{$t('BackupTips.title1')}}</view>
		</view>

		<view class="tips-con">
			<view class="">{{$t('BackupTips.title2')}}</view>
			<view class="">{{$t('BackupTips.title3')}}</view>
			<view class="">{{$t('BackupTips.title4')}}</view>
		</view>

		<view @click="handleToWriteMnemonicsFirst" class="confirm_btn">
			{{$t('BackupTips.title5')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '確認助記詞',
				current: 1, //步驟條當前處於第幾步
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('BackupTips.navTitle')
			});
		},
		methods: {
			// 写下你的助记词
			handleToWriteMnemonicsFirst() {
				uni.navigateTo({
					url: '/pages/CreateWallet/WriteMnemonicsSecond',
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-text__value {
		font-size: 25rpx !important;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.article-steps {
			margin-top: 20rpx;
			margin-bottom: 20rpx;

			.steps {
				width: 250rpx;
			}

			.slot-icon {
				font-size: 20rpx;
			}

			.slot-icon-one {
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #fff;
				background-color: #11C4D1;
				border: 1rpx solid #11C4D1;
				// font-size: 12rpx;
			}

			.slot-icon-two {
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #11C4D1;
				border: 1rpx solid #11C4D1;
				// font-size: 12rpx;
			}

			.slot-icon-three {
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #A8A8A8;
				border: 1rpx solid #A8A8A8;
				// font-size: 12rpx;
			}
		}

		.waring {
			margin-top: 120rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.waring-pic {
				width: 222rpx;
				height: 196rpx;
			}

			.waring-tips {
				color: #131415;
				font-size: 40rpx;
				margin-top: 41rpx;
			}
		}

		.tips-con {
			color: #A8A8A8;
			font-size: 30rpx;
			line-height: 50rpx;
			margin-top: 200rpx;
			margin-bottom: 400rpx;
		}

		// 確認
		.confirm_btn {
			width: 686rpx;
			height: 88rpx;
			background-color: #11C4D1;
			border-radius: 12rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			text-align: center;
			line-height: 88rpx;
			margin-bottom: 58rpx;
			// position: fixed;
			// bottom: 58rpx;
		}
	}
</style>

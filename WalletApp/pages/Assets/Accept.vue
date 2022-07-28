<template>
	<view class="content">
		<view class="wrap">
			<view class="wrap-mark">
				<image src="/static/Login/login.png" mode="" class="logo"></image>
				<text class="wallet">{{$t('Assets.CryptoWallet')}}</text>
			</view>
			<image src="/static/assets/scaing.png" mode="" class="scan"></image>
			<view class="adress">
				{{$t('Assets.gatheringAddress')}}
			</view>
			<view class="num">
				Vx16d0c3d3b53d6639014FD73b7AFA
				DB956eF295EA
				<image src="/static/CrossChain/l-5.png" mode="" class="num-pic"></image>
			</view>
		</view>

		<view class="explane">
			<view class="">
				{{$t('Assets.acceptVollarAddress')}}
			</view>
			<view class="">
				{{$t('Assets.reminder')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('Assets.acceptVollar')
			});
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.content {

		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.wrap {
			width: 518rpx;
			height: 690rpx;
			border-radius: 37rpx;
			box-shadow: 0 1rpx 8rpx 1rpx rgba(0, 0, 0, 0.16);
			margin: 0 auto;
			margin-top: 184rpx;
			padding-top: 60rpx;

			.wrap-mark {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;

				.logo {
					width: 72rpx;
					height: 72rpx;
				}

				.wallet {
					color: #092A3D;
					font-size: 34rpx;
					font-weight: Heavy;
					font-family: Source Han Sans CN-Heavy;
				}
			}

			.scan {
				display: block;
				width: 432rpx;
				height: 432rpx;
				// border: 1rpx dashed #000;
				margin: 26rpx auto;
			}

			.adress {
				color: #A8A8A8;
				font-size: 24rpx;
				margin: 0 auto;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.num {
				width: 412rpx;
				height: 61rpx;
				color: #1A1F38;
				font-size: 24rpx;
				display: block;
				margin: 0 auto;

				.num-pic {
					width: 34rpx;
					height: 34rpx;
					display: inline-block;
					line-height: 34rpx;
				}
			}
		}

		.explane {
			color: #999999;
			font-size: 26rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 76rpx;
		}
	}
</style>

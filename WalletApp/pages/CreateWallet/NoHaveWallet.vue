<template>
	<view class="content">
		<view class="add-wallet">{{$t('NoHaveWallet.title1')}}</view>
		<view class="wallet-con">
			<view v-for="(item, index) in walletList" :key="index" @click="handleToCreatePassword(index)"
				class="wallet-item">
				<image :src="item.image" mode="aspectFit" class="wallet-item-con"></image>
				<view class="wallet-info">
					<view class="">
						<view class="wallet-info-title">{{item.titie}}</view>
						<view class="wallet-info-name">{{item.name}}</view>
					</view>
					<image src="/static/Mine/arrow-right.png" class="arrow-right"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				walletList: [{
						image: '/static/CreateWallet/btc.png',
						titie: 'BTC',
						name: 'Bitcoin'
					},
					{
						image: '/static/CreateWallet/eth.png',
						titie: 'ETH',
						name: 'Ethereum'
					},
					{
						image: '/static/CreateWallet/bnb.png',
						titie: 'BNB',
						name: 'Binance Smart Chain'
					},
					{
						image: '/static/CreateWallet/vds.png',
						titie: 'VDS',
						name: 'V-Dimension'
					},
					{
						image: '/static/CreateWallet/matic.png',
						titie: 'Matic',
						name: 'Polygon'
					},
					{
						image: '/static/CreateWallet/sol.png',
						titie: 'Sol',
						name: 'Solana'
					},
					{
						image: '/static/CreateWallet/trx.png',
						titie: 'TRX',
						name: 'TRON'
					}
				]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('ConfirmMnemonicsFirst.navTitle')
			});
		},
		methods: {
			// 创建密码
			handleToCreatePassword(index) {
				uni.navigateTo({
					url: '/pages/CreateWallet/CreatePassword',
					query: {
						index: index
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 32rpx;

		.add-wallet {
			font-size: 44rpx;
			color: #131415;
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-top: 48rpx;
		}

		.wallet-con {
			margin-top: 48rpx;

			.wallet-item {
				display: flex;
				flex-direction: row;

				.wallet-item-con {
					width: 64rpx;
					height: 64rpx;
					margin-top: 27rpx;
				}

				.wallet-info {
					margin-left: 30rpx;
					height: 118rpx;
					width: 100%;
					border-bottom: 1rpx solid #E8E9EB;
					position: relative;
					display: flex;
					flex-direction: row;
					align-items: center;

					.wallet-info-title {
						color: #131415;
						font-size: 27rpx;
						font-weight: normal;
					}

					.wallet-info-name {
						margin-top: 10rpx;
						color: #9094AB;
						font-size: 23rpx;
					}

					.arrow-right {
						width: 15rpx;
						height: 28rpx;
						margin-top: 45rpx;
						position: absolute;
						right: 0;
						top: 5rpx;
					}
				}

			}
		}
	}
</style>

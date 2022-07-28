<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<uni-nav-bar 
		    :fixed="true"
		    left-icon="list" 
			right-icon="scan" 
			title="" />
		<!-- 自定义导航栏 -->
		
		<!-- 转账收款 -->
		<view class="transfer-payment">
			<view class="transfer-payment-pic" 
			    style="background: url(/static/assets/bgi.png) no-repeat;overflow: hidden;height: 238rpx;">
				<view class="transfer-payment-type">BSC-1</view>
				<view class="transfer-payment-copy">
					Vcf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU
					<image src="/static/assets/copy.png" mode=""></image>
				</view>
				<view class="transfer-payment-money">
					<view class="transfer-payment-amount">$<text>26.34</text></view>
					<image src="/static/assets/scan.png" mode="" class="transfer-payment-money-pic"></image>
				</view>
			</view>
			<view class="transfer-payment-con">
				<view class="transfer-payment-tran">
					<image src="/static/assets/down.png" mode="" class="transfer-payment-con-pic"></image>
					<text>转账</text>
				</view>
				<view class="transfer-payment-pay">
					<image src="/static/assets/money.png" mode="" class="transfer-payment-con-pic"></image>
					<text>收款</text>
				</view>
			</view>
		</view>
		<!-- 转账收款 -->
		
		<!-- 资产  NFT  -->
		<view class="tabs">
			<!-- tabs -->
			<u-tabs 
			    :list="list" 
				:is-scroll="false" 
				:current="current" 
				font-size="34rpx"
				active-color="#11C4D1"
				inactive-color="#11C4D1"
				bar-width="56"
				bar-height="4"
				@change="handeleSwitch"></u-tabs>
			<!-- tabs -->
			
			<!-- 资产 -->
			<view v-if="current == 0" class="property">
				<view class="wallet-con">
					<view v-for="(item, index) in walletList" :key="index" class="wallet-item">
						<image :src="item.image" mode="" class="wallet-item-con"></image>
						<view class="wallet-info">
							<view class="wallet-info-title">{{item.titie}}</view>
							<view class="">
								<view class="exchange">3.1492</view>
								<view class="rate">$12.13</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 资产 -->
			
			<!-- NFT -->
			<view v-if="current == 1" class="">
				
			</view>
			<!-- NFT -->
		</view>
		<!-- 资产  NFT -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '資產'
				}, {
					name: 'NFT'
				}],
				current: 0,
				walletList:[
					{
						image:'/static/CreateWallet/bnb.png',
						titie:'BNB',
						exchange:3.1492,
						rate:'$12.13'
					},
					{
						image:'/static/assets/fil.png',
						titie:'FIL(BSC)',
						exchange:3.1492,
						rate:'$12.13'
					},
					{
						image:'/static/assets/vds.png',
						titie:'VDS(Vollar/BSC)',
						exchange:3.1492,
						rate:'$12.13'
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			// 点击切换tabs
			handeleSwitch(index) {
				// this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		padding: 0 30rpx;
		.transfer-payment{
			width: 100%;
			height: 336rpx;
			color: #FFFFFF;
			box-shadow: 0 0 10rpx 1rpx rgba(38, 44, 46, 0.1);
			border-radius: 0 0 10rpx 10rpx;
			.transfer-payment-type{
				font-size: 28rpx;
				margin-top: 26rpx;
				margin-left: 35rpx;
			}
			.transfer-payment-copy{
				font-size: 24rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-left: 35rpx;
				margin-top: 9rpx;
			}
			.transfer-payment-copy image{
				width: 24rpx;
				height: 24rpx;
				margin-left: 10rpx;
			}
			.transfer-payment-money{
				font-size: 30rpx;
				margin-left: 35rpx;
				margin-top: 27rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				.transfer-payment-amount text{
					font-size: 52rpx;
				}
				.transfer-payment-money-pic{
					width: 40rpx;
					height: 40rpx;
					margin-right: 42rpx;
				}
			}
		}
	    .transfer-payment-con{
			color: #000;
			height: 97rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-content: center;
			flex-wrap: wrap;
			.transfer-payment-con-pic{
				width: 32rpx;
				height: 32rpx;
			}
			.transfer-payment-tran{
				height: 97rpx;
				border-right: 1rpx solid #E8EBED;
				padding-right: 150rpx;
			}
			.transfer-payment-tran,.transfer-payment-pay{
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
	    .property{
			.wallet-con{
				margin-top: 48rpx;
				.wallet-item{
					display: flex;
					flex-direction: row;
					.wallet-item-con{
						width: 64rpx;
						height: 64rpx;
						margin-top: 27rpx;
					}
					.wallet-info{
						margin-left: 30rpx;
						height: 118rpx;
						width: 100%;
						border-bottom: 1rpx solid #E8E9EB;
						position: relative;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						color: #131415;
						font-size: 34rpx;
						.rate{
							color: #A8A8A8;
							font-size: 26rpx;
							display: flex;
							flex-direction: column;
							align-items: flex-end;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<view class="content">
		<!-- 步驟條 -->
		<view class="article-steps">
			<u-steps
			    :current="current"
				activeColor="#11C4D1"
				inactiveColor="#A8A8A8">
				<u-steps-item :title="$t('CreateWallet.steps1')" class="steps">
					<text class="slot-icon slot-icon-one" slot="icon">1</text>
				</u-steps-item>
				<u-steps-item :title="$t('CreateWallet.steps4')">
					<text class="slot-icon slot-icon-two" slot="icon">2</text>
				</u-steps-item>
				<u-steps-item :title="$t('CreateWallet.steps3')">
					<text class="slot-icon slot-icon-three" slot="icon">3</text>
				</u-steps-item>
			</u-steps>
		</view>
		<!-- 步驟條 -->
		<view class="title">{{$t('ConfirmMnemonicsFirst.title1')}}</view>
		<view class="title_explain">
			{{$t('ConfirmMnemonicsFirst.title2')}}
		</view>
		
		<!-- 呈現位置 -->
		<view class="mnemonic_word">
			<view 
			    v-for="(item,index) in emptyList"
			    :key="index"
				class="mnemonic_word_item">
				<text style="width:35rpx;text-align: right;">{{index+1}}.</text>
				<text class="item-info">{{item}}</text>
			</view>
		</view>
		<!-- 呈現位置 -->
		
		<!-- 呈現助記詞 -->
		<view class="present-con">
			<view 
			    v-for="(item,index) in mnemonicWordList" 
				:key="index"
				class="present-item">
				{{item}}
			</view>
		</view>
		<!-- 呈現助記詞 -->
		
		<view @click="handleToConfirmMnemonicsSecond" class="confirm_btn">
			{{$t('ConfirmMnemonicsFirst.title3')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '確認助記詞',
				current: 2,   //步驟條當前處於第幾步
				mnemonicWordList:[ ], //助記詞
				emptyList:[],
				len: 12
			}
		},
		onLoad() {
			this.emptyList = new Array(this.len).fill('')
			this.mnemonicWordList = new Array(this.len).fill('dentist')
			uni.setNavigationBarTitle({
				title: this.$t('ConfirmMnemonicsFirst.navTitle')
			});
		},
		methods: {
			// 确认助记词
			handleToConfirmMnemonicsSecond() {
				uni.navigateTo({
					url: '/pages/CreateWallet/ConfirmMnemonicsSecond'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .u-text__value{
		font-size: 25rpx !important;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 75rpx;
		.article-steps{
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			.steps{
				width: 250rpx;
			}
			.slot-icon{
				font-size: 20rpx;
			}
			.slot-icon-one{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #fff;
				background-color: #11C4D1;
				border: 1rpx solid #11C4D1;
			}
			.slot-icon-two{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #fff;
				background-color: #11C4D1;
				border: 1rpx solid #11C4D1;
			}
			.slot-icon-three{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #11C4D1;
				border: 1rpx solid #11C4D1;
			}
		}
		.title{
			font-family: PingFang-SC-Bold-Medium;
			font-size: 44rpx;
			font-weight: Medium;
			margin: 0 auto;
			margin-top: 64rpx;
		}
		.title_explain{
			color: #999999;
			font-size: 28rpx;
			font-family: PingFang-SC-Medium-Medium;
			margin-top: 30rpx;
		}
		.mnemonic_word{
			width: 453rpx;
			height: 412rpx;
			border-radius: 22rpx;
			border: 1rpx solid #707070;
			margin-top: 69rpx;
			font-family: PingFang SC-Regular;
			color: #131415;
			font-size: 34rpx;
			padding: 30rpx 77rpx 42rpx 70rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			.mnemonic_word_item:first-child .item-info{
				border: 1rpx dashed #11C4D1 ;
			}
			.mnemonic_word_item{
				display: flex;
				align-items: center;
				justify-content: center;
				color: #1E262F;
				font-size: 24rpx;
				.item-info{
					display: inline-block;
					border: 1rpx dashed #CBCBCB;
					width: 180rpx;
					height: 50rpx;
					border-radius: 10rpx;
					text-align: center;
					line-height: 50rpx;
					margin-left: 2rpx;
				}
			}
		}
		.present-con{
			width: 640rpx;
			height: 300rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			color: #131415;
			font-size: 26rpx;
			margin-top: 44rpx;
			margin-bottom: 83rpx;
			.present-item{
				width: 200rpx;
				height: 60rpx;
				border-radius: 6rpx;
				border: 1rpx solid #D5DEE5;
				text-align: center;
				line-height: 60rpx;
			}
		}
		// 確認
		.confirm_btn{
			width: 686rpx;
			height: 88rpx;
			background-color: #11C4D1 ;
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

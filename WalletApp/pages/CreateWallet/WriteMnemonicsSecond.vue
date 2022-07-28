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
				<u-steps-item :title="$t('CreateWallet.steps2')">
					<text class="slot-icon slot-icon-two" slot="icon">2</text>
				</u-steps-item>
				<u-steps-item :title="$t('CreateWallet.steps3')">
					<text class="slot-icon slot-icon-three" slot="icon">3</text>
				</u-steps-item>
			</u-steps>
		</view>
		<!-- 步驟條 -->
		
		<view class="title">{{$t('WriteMnemonicsSecond.title1')}}</view>
		<view class="title_explain">
			{{$t('WriteMnemonicsSecond.title2')}}
		</view>
		<!-- 助記詞 -->
		<view v-if="!show" class="prompt_word">
			<image  @click="handleToWriteMnemonicsSecond"
			    src="/static/Mine/eye.png" 
				mode=""
				class="prompt_eye"></image>
			<view class="prompt_word_explain">
				<view class="">
					{{$t('WriteMnemonicsSecond.title4')}}
				</view>
				<view class="">
					{{$t('WriteMnemonicsSecond.title5')}}
				</view>
			</view>
		</view>
		
		<view v-if="show" class="mnemonic_word">
			<view 
			    v-for="(item,index) in mnemonicWordList"
			    :key="index"
				class="mnemonic_word_item">
				{{index+1}}.{{item}}
			</view>
		</view>
		
		
		<!-- 助記詞 -->
		<view @click="handleToConfirmMnemonicsFirst" class="confirm_btn">
			{{$t('WriteMnemonicsSecond.title3')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				title: '冩下你的助記詞',
				current: 1,   //步驟條當前處於第幾步
				mnemonicWordList:[ //助記詞列表
					'dentist',
					'record',
					'dentist',
					'dentist',
					'arrange',
					'ewar',
					'dentist',
					'dentist',
					'dentist',
					'dentist',
					'dentist',
					'lady'
				]
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('ConfirmMnemonicsFirst.navTitle')
			});
		},
		methods: {
			handleToWriteMnemonicsSecond(){
				this.show=true
			},
			// 确认助记词
			handleToConfirmMnemonicsFirst() {
				uni.navigateTo({
					url: '/pages/CreateWallet/ConfirmMnemonicsFirst'
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
		padding: 0 39rpx;
		.article-steps{
			margin-top: 20rpx;
			margin-bottom: 20rpx;
			.steps{
				width: 250rpx;
			}
			.slot-icon{
				font-size: 20rpx !important;
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
				// font-size: 12rpx;
			}
			.slot-icon-two{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				color: #11C4D1;
				border: 1rpx solid #11C4D1;
				// font-size: 12rpx;
			}
			.slot-icon-three{
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
			width: 558rpx;
			height: 670rpx;
			border-radius: 22rpx;
			border: 1rpx solid #707070;
			margin-top: 69rpx;
			font-family: PingFang SC-Regular;
			color: #131415;
			font-size: 34rpx;
			padding: 40rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			margin-bottom: 300rpx;
			.mnemonic_word_item{
				border: 1rpx solid #11C4D1 ;
				width: 230rpx;
				height: 80rpx;
				border-radius: 10rpx;
				display: flex;
				align-items: center;
				justify-content: center;
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
			position: fixed;
			bottom: 58rpx;
		}
	}
	// 顯示助記詞
	.prompt_word{
		width: 558rpx;
		height: 670rpx;
		border-radius: 22rpx;
		background-color: #EBFCFD ;
		margin-top: 69rpx;
		color: #131415 ;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 40rpx;
		align-items: center;
		margin-bottom: 300rpx;
		.prompt_eye{
			width: 68rpx;
			height: 54rpx;
		}
		.prompt_word_explain{
			margin-top: 54rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>

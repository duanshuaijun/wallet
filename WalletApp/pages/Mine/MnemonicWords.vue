<template>
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="title_explain">
			這是您的助記詞，將他寫在紙上並存放在安全的地方，您將需要在下一步中，重新輸入此助記詞(按順序)
		</view>
		
		<!-- 助記詞 -->
		<view class="mnemonic_word">
			<view 
			    v-for="(item,index) in mnemonicWordList"
			    :key="index"
				class="mnemonic_word_item">
				{{index+1}}.{{item}}
			</view>
		</view>
		<!-- 助記詞 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '冩下你的助記詞',
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
				title: this.$t('Word.navTitle')
			});
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 39rpx;
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
	}
</style>

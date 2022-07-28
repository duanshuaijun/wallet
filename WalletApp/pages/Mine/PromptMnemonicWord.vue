<template>
	<view class="content">
		<view v-if="showPage" class="show">
			<view class="title">{{$t('Word.title6')}}</view>
			<view class="title_explain">
				<view class="">
					{{$t('Word.title1')}}
				</view>
				<view class="">
					{{$t('Word.title2')}}
				</view>
			</view>

			<!-- 顯示助記詞 -->
			<view class="prompt_word">
				<image @click="toLink" src="/static/Mine/eye.png" mode="" class="prompt_eye"></image>
				<view class="prompt_word_explain">
					<view class="">
						{{$t('Word.title3')}}
					</view>
					<view class="">
						{{$t('Word.title4')}}
					</view>
				</view>
			</view>
			<!-- 顯示助記詞 -->
		</view>
		<view class="hid" v-else>
			<view class="title">{{$t('Word.title7')}}</view>
			<view class="title_explain">
				{{$t('Word.title5')}}
			</view>

			<!-- 助記詞 -->
			<view class="mnemonic_word">
				<view v-for="(item,index) in mnemonicWordList" :key="index" class="mnemonic_word_item">
					{{index+1}}.{{item}}
				</view>
			</view>
			<!-- 助記詞 -->
		</view>

		<view class="confirm_btn" @click="confirmClick">
			{{$t('common.butName')}}
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
				showPage: true,
				title: '顯示助記詞',
				title: '冩下你的助記詞',
				mnemonicWordList: [ //助記詞列表
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
			toLink() {
				this.showPage = false
			},
			confirmClick(){
				this.showPage = true
			}
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

		.title {
			font-family: PingFang-SC-Bold-Medium;
			font-size: 44rpx;
			font-weight: Medium;
			margin: 0 auto;
			margin-top: 64rpx;
		}

		.show {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title_explain {
				color: #999999;
				font-size: 26rpx;
				font-family: PingFang-SC-Medium-Medium;
				margin-top: 30rpx;
			}

			// 顯示助記詞
			.prompt_word {
				width: 558rpx;
				height: 670rpx;
				border-radius: 22rpx;
				background-color: #EBFCFD;
				margin-top: 30rpx;
				color: #131415;
				font-size: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 40rpx;

				.prompt_eye {
					width: 68rpx;
					height: 54rpx;
				}

				.prompt_word_explain {
					margin-top: 54rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.hid {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title_explain {
				color: #999999;
				font-size: 28rpx;
				font-family: PingFang-SC-Medium-Medium;
				margin-top: 30rpx;
			}

			.mnemonic_word {
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

				.mnemonic_word_item {
					border: 1rpx solid #11C4D1;
					width: 230rpx;
					height: 80rpx;
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
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
			position: fixed;
			bottom: 58rpx;
		}
	}
</style>

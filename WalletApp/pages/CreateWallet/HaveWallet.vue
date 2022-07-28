<template>
	<view class="content">
		<!-- 創建密碼 -->
		<view class="uni-common-mt">
			<view class="">
				<view class="textarea-title">{{$t('CreatePassword.title11')}}</view>
				<textarea 
					v-model="txt"
					placeholder-style="color:#A8A8A8;font-size:27rpx;" 
					:placeholder="$t('CreatePassword.title12')"
					class="uni-textarea"/>
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">{{$t('CreatePassword.title2')}}</view>
				<input 
				    focus 
					v-model="nameVal"
					:placeholder="$t('CreatePassword.title2')" 
					placeholder-style="color: #B1B3B4;font-size: 27rpx"
					class="uni-input" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">{{$t('CreatePassword.title3')}}</view>
				<input 
					focus 
					v-model="passValone"
					:placeholder="$t('CreatePassword.title4')"
					placeholder-style="color: #B1B3B4;font-size: 27rpx"
					class="uni-input" />
				<input 
					focus 
					v-model="passValtwo"
					:placeholder="$t('CreatePassword.title5')"
					placeholder-style="color: #B1B3B4;font-size: 27rpx"
					class="uni-input" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">{{$t('CreatePassword.title6')}}</view>
				<input 
					focus 
					v-model="tips"
					:placeholder="$t('CreatePassword.title7')"
					placeholder-style="color: #B1B3B4;font-size: 27rpx"
					class="uni-input" />
			</view>
		</view>
		<!-- 創建密碼 -->
		
		<view class="agreement">
			{{$t('CreatePassword.title8')}}<text>{{$t('CreatePassword.title9')}}</text>
		</view>
		
		<view @click="handleToAssets" class="confirm_btn">
			{{$t('CreatePassword.title13')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				txt:'',   //步驟條當前處於第幾步
				nameVal:'AAC-1'   ,//錢包名稱
				passValone:''    ,//錢包密碼
				passValtwo:''   ,//確認密碼
				tips:''   //提示信息
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$t('ConfirmMnemonicsFirst.navTitle')
			});
		},
		methods: {
			// 资产
			handleToAssets() {
				uni.switchTab({
					url: '/pages/TabBar/Assets'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F6F7;
	}
	.content {
		padding-left: 32rpx;
		background-color: #FFFFFF;
		overflow: hidden;
		margin-top: 20rpx;
		.uni-common-mt{
			width: 100%;
			color: #131415;
			font-size: 31rpx;
			.textarea-title{
				margin-top: 25rpx;
				margin-bottom: 20rpx;
			}
			.title{
				margin-top: 33rpx;
			}
			.uni-textarea{
				width: 662rpx;
				height: 140rpx;
				background-color: #F5F6F7;
				border-radius: 8rpx;
				padding: 20rpx 0 0 24rpx;
			}
			.uni-input{
				border-bottom: 1rpx solid #EDEDED;
				padding: 21rpx 0;
			}
		}
		.agreement{
			display: flex;
			flex-direction: row;
			justify-content: center;
			color: #131415;
			font-size: 26rpx;
			margin-top: 430rpx;
			margin-bottom: 34rpx;
			text{
				color: #11C4D1;
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
			margin: 0 auto;
			margin-bottom: 58rpx;
			// position: fixed;
			// bottom: 58rpx;
		}
	}
</style>

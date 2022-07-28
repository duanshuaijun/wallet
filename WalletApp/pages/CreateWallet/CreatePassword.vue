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
		
		<view class="create-password">{{$t('CreatePassword.title1')}}</view>
		
		<!-- 創建密碼 -->
		<view class="uni-common-mt">
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
		
		<view @click="handleToBackuptips" class="confirm_btn">
			{{$t('CreatePassword.title10')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '確認助記詞',
				current: 0,   //步驟條當前處於第幾步
				nameVal:''   ,//錢包名稱
				passValone:''    ,//錢包密碼
				passValtwo:''   ,//確認密碼
				tips:''   //提示信息
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: this.$t('ConfirmMnemonicsFirst.navTitle')
			});
		},
		methods: {
			// 备份提示
			handleToBackuptips() {
				uni.navigateTo({
					url: '/pages/CreateWallet/BackupTips',
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
		
		overflow: hidden;
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.article-steps{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 20rpx;
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
				color: #11C4D1;
				border: 1rpx solid #11C4D1;
				// background-color: #11C4D1;
				// font-size: 12rpx;
			}
			.slot-icon-two{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				line-height: 30rpx;
				text-align: center;
				// color: #11C4D1;				color: #A8A8A8;
				color: #A8A8A8;
				// border: 1rpx solid #11C4D1;
				border: 1rpx solid #A8A8A8;
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
		.create-password{
			color: #131415;
			font-size: 44rpx;
			font-family: PingFang-SC-Bold-Medium;
			font-weight: Medium;
			margin-top: 70rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.uni-common-mt{
			margin-top: 22rpx;
			width: 100%;
			color: #131415;
			font-size: 31rpx;
			.title{
				margin-top: 40rpx;
				margin-left: 44rpx;
			}
			.uni-input{
				border-bottom: 1rpx solid #EDEDED;
				padding: 21rpx 0;
				margin-left: 44rpx;
			}
		}
		.agreement{
			display: flex;
			flex-direction: row;
			justify-content: center;
			color: #131415;
			font-size: 26rpx;
			margin-top: 363rpx;
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

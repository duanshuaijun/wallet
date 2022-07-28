<template>
	<view class="content" @click="aaa">
		<image src="/static/Login/login.png" mode="" class="login-pic"></image>
		<view class="crypto-wallet">CryptoWallet</view>
		<view class="security">讓你的資產更安全</view>
	</view>
</template>

<script>
	export default{
		// onLoad() {
		// 	setTimeout(() => {
		// 		uni.$u.route({
		// 			url: 'pages/TabBar/assets/index',
		// 			params: {
		// 				name: 'lisa'
		// 			}
		// 		})
		// 	}, 500)
		// },
		methods:{
			aaa(){
				uni.$u.route({
					url: '/pages/TabBar/assets/index',
					params: {
						name: 'lisa'
					}
				})
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
		.login-pic{
			width: 292rpx;
			height: 292rpx;
			margin-top: 282rpx;
			margin-bottom: 45rpx;
		}
		.crypto-wallet{
			color: #092A3D;
			font-family: Source Han Sans CN-Heavy;
			font-size: 44rpx;
			font-weight: Heavy;
		}
		.security{
			color: #666666;
			font-size: 28rpx;
			position: absolute;
			bottom: 130rpx;
		}
	}
</style>
<template>
	<view class="content">
		<!-- 收款地址 -->
		<view class="collection">
			<view class="collection-adress">
				<view class="collection-adr">收款地址</view>
				<input 
					type="text" 
					placeholder="輸入或粘貼錢包地址"
					placeholder-class="color: #999999;font-size: 32rpx;">
				<!-- <view class="collection-exp">輸入或粘貼錢包地址</view> -->
			</view>
			<image src="/static/assets/saomiao.png" mode="" class="collection-scan"></image>
		</view>
		<!-- 收款地址 -->
		
		<!-- 金额 -->
		<view class="money">
			<view class="money-transfer">
				<view class="transfer-amount">轉帳金額</view>
				<view class="transfer-num">
					<input
						type="text" 
						placeholder="請輸入數量"
						placeholder-class="color: #999999;font-size: 32rpx;">
					<text>全部</text>
				</view>
			</view>
			<view class="balance">
				<view class="">錢包餘額</view>
				<view class="balance-num">2.5466</view>
			</view>
		</view>
		<!-- 金额 -->
		
		<!-- 礦工費 -->
		<view class="absenteeism">
			<view class="absenteeism-title">礦工費</view>
			<view class="absenteeism-con">
				<view v-for="(item, index) in absenteeismList" :key="index" class="absenteeism-type">
					<view class="absenteeism-type-speed">{{item.speed}}</view>
					<view class="absenteeism-type-money">{{item.money}}
						<image src="/static/assets/small-vds.png" mode="" style="width: 14rpx;height: 13rpx;"></image>
					</view>
					<view class="absenteeism-type-exchange">≈$ {{item.exchnage}}</view>
					<view class="absenteeism-type-time">≈{{item.time}} 秒</view>
				</view>
				<view class="absenteeism-type custom">
					自定义
				</view>
			</view>
			<view class="info">
				<view class="info-title">上鏈數據</view>
				<view class="info-textarea">
					<textarea 
						placeholder-style="color:#999999;
						  font-size: 28rpx;
						  background-color: #F3F7F8;
						  padding: 24rpx;" 
						placeholder="該數據會寫入區塊鏈，並且消耗一定的費用"
						class="textarea"/>
				</view>
			</view>
		</view>
		<!-- 礦工費 -->
		
		<view @click="confirm" class="confirm">
			確認
		</view>
		
		<!-- 确认支付弹出框 -->
		<u-popup :show="show" @close="close" @open="open" round="32rpx">
			<view class="center-popup">
				<view class="t-popup">
					<text>交易详情</text>
					<!-- <text>{{$t('CrossChain.title4')}}</text> -->
					<!-- <image @click="close" src="/static/CrossChain/x.png" style="width: 36rpx;height: 36rpx;"></image> -->
				</view>
				<view class="title-popup">
					2.6 <image src="/static/assets/blue-vds.png" mode="" style="width: 32rpx;height: 26rpx;"></image>
				</view>
				<view class="liet-popup">
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title5')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0x51d59B5C5AfA7D04172874f2290
								</view>
								<view class="text mt">Db1cA332DCB09</view>
							</view>
							<!-- <image src="/static/CrossChain/l-6.png" style="width: 35rpx;height: 29rpx;"></image> -->
						</view>
					</view>
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title6')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0x51d59B5C5AfA7D04172874f2290
								</view>
								<view class="text mt">Db1cA332DCB09</view>
							</view>
							<!-- <image src="/static/CrossChain/l-6.png" style="width: 35rpx;height: 29rpx;"></image> -->
						</view>
					</view>
					<view class="item">
						<text class="l-text">{{$t('CrossChain.title7')}}</text>
						<view class="right-box">
							<view>
								<view class="text">
									0.0001 Vollar
								</view>
								<view class="b-text b-mt">≈Gas（21000000）*Gas Price（5.35 Gwei）</view>
							</view>
							<image src="/static/CrossChain/r.png" style="width: 35rpx;height: 29rpx;"></image>
						</view>
					</view>
					<view class="button" @click="confirmPayment">{{$t('CrossChain.butName1')}}</view>
				</view>
			</view>
		</u-popup>
		<!-- 确认支付弹出框 -->
		
		<!-- 输入密码 -->
		<u-modal :show="modalShow" :title="$t('CrossChain.title8')" :confirmText="$t('CrossChain.butName')" :zoom="false" :showCancelButton="true"
			confirmColor="#11C4D1" @confirm="confirmClick" @cancel="cancelClick">
			<view class="slot-content" style="width: 517rpx;height: 75rpx;">
				<u-input :placeholder="$t('CrossChain.inputPwd')" border="surround" :password="iconShow" v-model="content"
					@change="change">
					<template slot="suffix">
						<image style="width: 32rpx;height: 32rpx;" v-show="iconShow" src="/static/common/show.png"
							@click="switchClick"></image>
						<image style="width: 32rpx;height: 32rpx;" v-show="!iconShow" src="/static/common/hide.png"
							@click="switchClick"></image>
					</template>
				</u-input>
			</view>
		</u-modal>
		<!-- 输入密码 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				absenteeismList:[
					{
						speed:'慢',
						money:0.000105,
						exchnage:0.0304,
						time:3
					},
					{
						speed:'推薦',
						money:0.000105,
						exchnage:0.0304,
						time:3
					},
					{
						speed:'慢',
						money:0.000105,
						exchnage:0.0304,
						time:3
					}
				],
				show: false,
				modalShow: false,
				iconShow: true,
				content: ''
			}
		},
		onLoad() {
		},
		methods: {
			// 确认
			confirm(){
				this.show = true
			},
			// 确认支付
			confirmPayment() {
				this.show = false
				this.modalShow = true;
			},
			open() {
				// console.log('open');
			},
			close() {
				this.show = false
				// console.log('close');
			},
			// 确定
			confirmClick() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.modalShow = false;
				}, 1000)
			},
			// 取消
			cancelClick() {
				this.modalShow = false;
			},
			change(e) {
				console.log('change', e);
			},
			switchClick() {
				this.iconShow = !this.iconShow
			},
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color: #F5F6F7;
		overflow: hidden;
	}
	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.collection{
			background-color: #fff;
			margin-top: 20rpx;
			width: 100%;
			height: 160rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.collection-adress{
				margin-left: 30rpx;
				.collection-adr{
					color: #131415;
					font-size: 28rpx;
				}
				.collection-exp{
					color: #999999;
					font-size: 32rpx;
				}
			}
			.collection-scan{
				width: 48rpx;
				height: 48rpx;
				margin-right: 30rpx;
			}
		}
		.money{
			background-color: #fff;
			width: 100%;
			height: 255rpx;
			margin-top: 20rpx;
			color: #131415;
			.money-transfer{
				height: 149rpx;
				border-bottom: 1rpx solid #E8EBED;
				margin-left: 30rpx;
				overflow: hidden;
				.transfer-amount{
					font-size: 28rpx;
					margin-top: 34rpx;
				}
				.transfer-num{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				.transfer-num text{
					margin-right: 30rpx;
					color: #999999;
					font-size: 30rpx;
				}
			}
			.balance{
				color: #131415;
				font-size: 28rpx;
				height: 105rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-left: 30rpx;
				.balance-num{
					color: #999999;
					font-size: 26rpx;
					margin-right: 30rpx;
				}
			}
		}
		.absenteeism{
			width: 100%;
			height: 650rpx;
			background-color: #fff;
			margin-top: 20rpx;
			overflow: hidden;
			.absenteeism-title{
				color: #666666;
				font-size: 30rpx;
				height: 113rpx;
				border-bottom: 1rpx solid #E8EBED;
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-left: 30rpx;
				
			}
			.absenteeism-con{
				display: flex;
				flex-direction: row;
				padding: 0 30rpx;
				.absenteeism-type{
					width: 157rpx;
					height: 186rpx;
					border: 1rpx solid #E8EBED;
					border-radius: 10rpx;
					font-size: 20rpx;
					color: #999999;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 10rpx;
					margin-top: 25rpx;
					.absenteeism-type-speed{
						font-size: 28rpx;
					}
					.absenteeism-type-money{
						font-size: 19rpx;
						margin-top: 6rpx;
						margin-bottom: 6rpx;
					}
					.absenteeism-type-time{
						height: 43rpx;
						width: 100%;
						line-height: 43rpx;
						border-top: 1rpx solid #E8EBED;
						margin-top: 24rpx;
						text-align: center;
						color: #666666;
					}
				}
				.custom{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
				}
			}
			.info{
				color: #666666;
				font-size: 30rpx;
				.info-title{
					margin-top: 40rpx;
					margin-left: 30rpx;
					margin-bottom: 20rpx;
				}
				.info-textarea{
					.textarea{
						width: 678rpx;
						height: 180rpx;
						overflow-y: auto;
						margin: 0 auto;
						// padding: 24rpx;
					}
				}
			}
		}
		.confirm{
			width: 678rpx;
			height: 88rpx;
			background-color: #11C4D1;
			color: #fff;
			text-align: center;
			line-height: 88rpx;
			font-size: 32rpx;
			margin: 104rpx auto;
		}
		.center-popup {
			width: 100%;
			height: 967rpx;
			background: #FFFFFF;
			border-radius: 32px 32px 0px 8px;
		
			.t-popup {
				heigh: 115rpx;
				line-height: 115rpx;
				text-align: center;
				position: relative;
				font-size: 34rpx;
				font-weight: normal;
				color: #1A1F38;
				border-bottom: 1px solid #E8EBED;
		
				image {
					position: absolute;
					top: calc(50% - 18rpx);
					right: 35rpx;
				}
			}
		
			.title-popup {
				text-align: center;
				margin: 72rpx 0;
				font-size: 38rpx;
				font-weight: normal;
				color: #11C4D1;
			}
		
			.liet-popup {
				padding: 0 35rpx;
				box-sizing: border-box;
		
				.item {
					margin-bottom: 60rpx;
					display: flex;
					justify-content: space-between;
		
					.l-text {
						// width: 112rpx;
						font-size: 28rpx;
						font-weight: normal;
						color: #9094AB;
					}
		
					.right-box {
						flex: 1;
						margin-left: 47rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
		
						.text {
							font-size: 30rpx;
							font-weight: normal;
							color: #1A1F38;
						}
		
						.mt {
							margin-top: 24rpx;
						}
		
						.b-text {
							margin-top: 12rpx;
							font-size: 20rpx;
							font-weight: 300;
							color: #A8A8A8;
						}
					}
				}
			}
		
			.button {
				margin-top: 32rpx;
				height: 88rpx;
				text-align: center;
				line-height: 88rpx;
				background: #11C4D1;
				border-radius: 12rpx;
				font-size: 32rpx;
				font-weight: normal;
				color: #FFFFFF;
			}
		}
	}
</style>

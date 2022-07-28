<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar title="CryptoWallet" left-icon-size="font-size: 34rpx" :rightText="$t('locales.rightText')"
			:placeholder="true" :border="false" :titleStyle="titleStyle" @rightClick="rightClick" :autoBack="true">
		</u-navbar>
		<!-- 列表 -->
		<u-toast ref="uToast"></u-toast>
		<u-cell-group :border="false" class="cell-group">
			<template v-for="(item,index) in $t('locales.list')">
				<u-cell :key="index" rightIcon='checkmark' :name="index" :isLink="cellIndex==index?true:false"
					rightIconStyle="font-size: 34rpx;color: #263D84;" @click="cellClick(item,index)">
					<text slot="title" class="u-cell-text">
						<text>{{item.title}}</text>
					</text>
					</text>
				</u-cell>
			</template>
		</u-cell-group>
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
				cellIndex: '0'
			}
		},
		methods: {
			cellClick(item, name) {
				if (name == 1 || name==0) {
					this.cellIndex = name
					// 切换语言
					this.$i18n.locale = item.locale;
				} else {
					this.$refs.uToast.show({
						type: 'default',
						message: "正在开发中...",
					})
				}

			},
			rightClick() {
				console.log('rightClick');
				uni.navigateBack({
					delta:1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100vh;
		background-color: #F5F6F7;
	}

	.container {
		height: 100%;

		.cell-group {
			margin-top: 20rpx;
			padding: 0 32rpx;
			background-color: #fff;
		}

		.u-cell-text {
			font-size: 30rpx;
			font-family: PingFang SC-Regular, PingFang SC;
			font-weight: 400;
			color: #131415;
		}
	}

	::v-deep .cell-group {
		.u-cell__body {
			padding-left: 0 !important;
		}
	}
</style>

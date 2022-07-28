<template>
	<view>
		<view class="swiper-css zqui-rel" :style="{ height: hpx }">
			<!-- 文字图片切换 -->
			<swiper class="swiper" :style="{ height: hpx }" :indicator-dots="indicatorDots" :autoplay="autoplay"
				:interval="interval" :duration="duration" @change="guideAction" next-margin="0rpx">
				<swiper-item class="flex1" v-for="(item, index) in $t('guide.imageList')" :key="index">
					<view class="title-box">
						<view class="nav-title">CryptoWallet</view>
						<view class="guide-title">{{item.name}}</view>
						<view class="guide-subtitle">{{item.subtitle}}</view>
						<image class="image-size" mode="aspectFit" :src="item.src" />
					</view>
				</swiper-item>
			</swiper>
			<!-- 按钮样式切换 -->
			<template>
				<view class="dots">
					<block v-for="(item,index) in $t('guide.imageList')" :key="index">
						<view class="dot" :class="{'active':  index == cur}"></view>
					</block>
				</view>
			</template>
			<!-- 使用按钮 開始使用 -->
			<template>
				<button class="footer" @click="launchApp">{{$t('guide.butName')}}</button>
			</template>
		</view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				interval: 10000,
				duration: 500,
				iStatusBarHeight: '0px',
				hpx: '100%',
				cur: 0,
				dotsStyles: ''
			};
		},
		onLoad() {
			let that = this;
			plus.navigator.closeSplashscreen();
			uni.getSystemInfo({
				success: function(res) {
					that.hpx = res.windowHeight  + 'px';
				}
			});
		},
		onReady() {
			this.move(0, 1);
		},
		methods: {
			launchApp() {
				//跳过引导页,储存本地值,下次进入直接跳过
				uni.setStorage({
					key: 'launchFlag',
					data: true,
					success() {
						uni.redirectTo({
							url: '/pages/CreateWallet/WalletSet'
						});
						// uni.switchTab({
						// 	url: '/pages/CreateWallet/WalletSet'
						// });
					}
				});
			},
			guideAction(event) {
				let that = this,
					index = event.detail.current;
				that.cur = index;
				if (index == 0) {
					that.move(0, 1);
					that.moveTwo(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(0);
				}
				if (index == 1) {
					that.moveTwo(0, 1);
					that.move(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(uni.upx2px(80) + 'px');
				}
				if (index == 2) {
					that.moveThree(0, 1);
					that.moveTwo(150, 0.1);
					that.move(150, 0.1);
					that.lefMainAction(uni.upx2px(160) + 'px');
				}
			},
			lefMainAction(mum) {
				var testLM = this.$refs.lefMain;
				animation.transition(
					testLM, {
						styles: {
							transform: 'translate(' + mum + ',0px)'
						},
						duration: 400, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			move(tran, opa) {
				var testEl = this.$refs.box1;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box2;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveTwo(tran, opa) {
				var testEl = this.$refs.box3;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box4;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveThree(tran, opa) {
				var testEl = this.$refs.box5;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box6;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
		min-height: 100%;
		height: 100%;
	}

	.nav-title {
		font-size: 44rpx;
		font-weight: 400;
		color: #092A3D;
	}

	.guide {
		flex-direction: column;
		flex: 1;
	}

	.flex1 {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.image-size {
		width: 584rpx;
		height: 584rpx;
	}

	.title-box {
		padding: 127rpx 0 120rpx 0rpx;
		text-align: center;
	}

	.guide-title {
		font-size: 52rpx;
		font-weight: bold;
		color: #092A3D;
		margin: 80rpx 0 66rpx;
	}

	.guide-subtitle {
		margin: 0 auto 101rpx;
		width: 628rpx;
		font-size: 28rpx;
		font-weight: normal;
		color: #666666;
		line-height: 46rpx;
	}

	.footer {
		font-size: 32rpx;
		font-weight: normal;
		color: #FFFFFF;
		width: 686rpx;
		height: 88rpx;
		background: #11C4D1;
		border-radius: 12rpx;
		text-align: center;
		position: fixed;
		bottom: 116rpx;
		left: calc(50% - 343rpx);
	}


	.dots {
		display: flex;
		justify-content: center;
		position: absolute;
		z-index: 999;
		left: 0;
		right: 0;
		bottom: 300rpx;
	}

	.dot {
		margin: 0 7rpx;
		width: 10rpx;
		height: 10rpx;
		background: #CADFDE;
		border-radius: 8rpx;
		transition: all .6s;
	}

	.dot.active {
		width: 25rpx;
		background: #11C4D1 !important;
	}

	/* 相对定位 */
	.zqui-rel {
		position: relative;
	}

	.swiper-css {
		width: 750rpx;
	}

	.swiper-item {
		width: 750rpx;
	}
</style>

<template>
	<view class="container">
		<!-- 自定导航 -->
		<u-navbar :title="$t('WalletList.title')" :placeholder="true" :autoBack="true" leftIconSize="34" :border="false"
			:titleStyle="titleStyle">
			<view class="u-nav-slot" slot="left" v-if="!type">
				<image v-show="!type" slot="icon" src="/static/common/left-nav.png" style="width: 50rpx;height: 50rpx;">
				</image>
			</view>
		</u-navbar>
		<!-- 顶部面板 -->
		<view class="top--panel">
			<u-cell-group :border="false">
				<u-cell>
					<image slot="icon" src="/static/WalletList/wallet.png" style="width: 44rpx;height: 44rpx;"></image>
					<text slot="title" class="u-cell-text">
						<text>{{$t('WalletList.title1')}}</text>
					</text>
					<view slot="value" class="u-slot-value">
						<u-image :showLoading="true" src="/static/WalletList/add.png" width="28rpx" height="28rpx"
							@click="show = true">
						</u-image>
						<u-action-sheet class="action-sheet" @select="selectClick" :actions="$t('WalletList.list')"
							:show="show" @close="closeClick" :cancelText="$t('WalletList.title2')" round="30rpx">
						</u-action-sheet>
					</view>
				</u-cell>
			</u-cell-group>
		</view>
		<!-- 滚动区域 -->
		<view class="scroll-panel" id="scroll-panel">
			<view class="list-box">
				<view class="left">
					<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" :scroll-into-view="leftIntoView"
						:scroll-with-animation="true">
						<view class="item" v-for="(item,index) in leftArray" :key="index"
							:class="{ 'active':index==leftIndex }" :id="'left-'+index" :data-index="index"
							@tap="leftTap">
							<u-image :showLoading="true" :src="index==leftIndex?item.imgHl:item.img" width="60rpx"
								height="60rpx">
							</u-image>
						</view>
					</scroll-view>
				</view>
				<view class="main">
					<swiper class="swiper" :style="{ 'height':scrollHeight }" :current="leftIndex"
						@change="swiperChange" :vertical="true" duration="200" :disable-touch="true">
						<swiper-item v-for="(item,index) in mainArray" :key="index">
							<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
								<view class="item">
									<view class="title" v-if="!item.list.length > 0">
										<view class="text-top">{{item.title}}</view>
										<view class="text-bottom">{{item.text}}</view>
									</view>
									<view class="liet-content" v-if="item.list.length > 0">
										<view class="goods" v-for="(item2,index2) in item.list" :key="index2">
											<view class="item-list" :class="'item-list' + leftIndex "
												@click="toLink(index2)">
												<view class="describe">
													<text>{{item2.text}}</text>
													<u-icon v-show="type" class="arrow-right" name="arrow-right"
														color="#fff" size="28"></u-icon>
												</view>
												<view class="money">
													<u-parse :content="item2.key" :selectable="false"></u-parse>
													<image v-show="!type" src="/static/WalletList/5.png"
														style="width: 20rpx;height: 20rpx;margin-left: 10rpx;"></image>
												</view>
											</view>
										</view>
									</view>
									<view v-else class="add-content">
										{{$t('WalletList.title3')}}
									</view>
								</view>
							</scroll-view>
						</swiper-item>
					</swiper>
				</view>
			</view>
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
				scrollHeight: '400px',
				leftArray: [{
						img: '/static/WalletList/leftNav0.png',
						imgHl: '/static/WalletList/leftNavHl0.png'
					},
					{
						img: '/static/WalletList/leftNav1.png',
						imgHl: '/static/WalletList/leftNavHl1.png'
					},
					{
						img: '/static/WalletList/leftNav2.png',
						imgHl: '/static/WalletList/leftNavHl2.png'
					},
					{
						img: '/static/WalletList/leftNav3.png',
						imgHl: '/static/WalletList/leftNavHl3.png'
					},
				],
				// 右侧数据
				mainArray: [{
						title: 'BTC',
						text: 'Bitcoin',
						list: [{
							text: 'BBQ1',
							key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
						}, ]
					},
					{
						title: 'ETH',
						text: 'Ethereum',
						list: [{
							text: 'BBQ1',
							key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
						}, ]
					},
					{
						title: 'BBQ1',
						text: 'Bitcoin',
						list: [{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							}, {
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							},
							{
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							}, {
								text: 'BBQ1',
								key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
							}
						]
					},
					{
						title: 'BBQ1',
						text: 'Bitcoin',
						list: [{
							text: 'BBQ1',
							key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
						}, {
							text: 'BBQ1',
							key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
						}, {
							text: 'BBQ1',
							key: '0xf8 o54WP1jACgJbaAwQ6b37BnX xaoj EnEU'
						}]
					}
				],
				leftIndex: 0,
				show: false,
				type: false
			}
		},
		onLoad: function(option) {
			this.leftIndex = option.index || 0;
			this.type = option.type || false;
			console.log(option)
		},
		computed: {
			/* 计算左侧滚动位置定位 */
			leftIntoView() {
				return `left-${this.leftIndex > 5 ? (this.leftIndex-5):0}`;
			}
		},
		onReady() {
			/* 在非H5平台，nextTick回调后有概率获取到错误的元素高度，则添加200ms的延迟来减少BUG的产生 */
			setTimeout(() => {
				/* 等待滚动区域初始化完成 */
				this.initScrollView().then(() => {
					/* 获取列表数据，你的代码从此处开始 */
					this.getListData();
				})
			}, 100);
		},
		methods: {
			/* 初始化滚动区域 */
			initScrollView() {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().select('#scroll-panel');
					view.boundingClientRect(res => {
						this.scrollHeight = `${res.height}px`;
						setTimeout(() => {
							resolve();
						}, 100);
					}).exec();
				});
			},
			/* 获取列表数据 */
			getListData() {
				// Promise 为 ES6 新增的API ，有疑问的请自行学习该方法的使用。
				new Promise((resolve, reject) => {
					/* 因无真实数据，当前方法模拟数据。正式项目中将此处替换为 数据请求即可 */
					uni.showLoading();
					setTimeout(() => {
						/* 因无真实数据，当前方法模拟数据。正式项目中将此处替换为 数据请求即可 */
						uni.showLoading();

						// 模拟数据
						let mockData = () => {
							let [left, main] = [
								[],
								[]
							];

							let size = Math.floor(Math.random() * 40);
							size = size < 20 ? 20 : size;
							for (let i = 0; i < size; i++) {
								left.push(`${i+1}类商品`);

								let list = [];
								let r = Math.floor(Math.random() * 10);
								r = r < 5 ? 5 : r;
								for (let j = 0; j < r; j++) {
									list.push(j);
								}
								main.push({
									title: `第${i+1}类商品标题`,
									list
								})
							}

							return {
								left,
								main
							}
						}
						setTimeout(() => {
							let res = mockData();
							let {
								left,
								main
							} = res;
							// 将请求接口返回的数据传递给 Promise 对象的 then 函数。
							resolve({
								left,
								main
							});
						}, 1000);
					}, 1000);
				}).then((res) => {
					console.log('-----------请求接口返回数据示例-------------');
					console.log(res);

					uni.hideLoading();
					// this.leftArray=res.left;
					// this.mainArray=res.main;
				});
			},
			/* 左侧导航点击 */
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.leftIndex = Number(index);
			},
			/* 轮播图切换 */
			swiperChange(e) {
				let index = e.detail.current;
				this.leftIndex = Number(index);
				console.log(this.leftIndex);
			},
			// 关闭弹框
			closeClick() {
				this.show = false
			},
			// 弹出框选择
			selectClick(item) {
				if (item.name == "創建錢包") {
					uni.$u.route({
						url: 'pages/CreateWallet/CreatePassword',
						params: {
							// leftIndex: this.leftIndex
						},
					})
				} else {

					uni.$u.route({
						url: 'pages/CreateWallet/HaveWallet',
						params: {
							// leftIndex: this.leftIndex
						},
					})
				}
				console.log(item)
			},
			toLink() {
				if (this.type) {
					uni.$u.route({
						url: 'pages/Mine/WalletName',
						params: {
							leftIndex: this.leftIndex
						},
					})
				} else {
					if (this.leftIndex == 2) {
						uni.switchTab({
							url: '/pages/TabBar/Assets'
						})
					} else if (this.leftIndex == 3) {
						uni.navigateTo({
							url: '/pages/Assets/CapitalFourth'
						})
					}

				}

			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background-color: #F3F5F8;
	}

	.container {
		height: 100%;

		.top--panel {
			margin-top: 20rpx;
			background-color: #FFFFFF;

			.u-cell-text {
				text {
					font-size: 30rpx;
					font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
					font-weight: normal;
					color: #131415;
				}
			}
		}
	}

	/* 容器 */
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;

		&>view {
			width: 100%;
		}

		.scroll-panel {
			flex-grow: 1;
			height: 0;
			overflow: hidden;
		}

	}


	.list-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
		font-size: 28rpx;

		.left {
			width: 116.5rpx;
			background-color: #F3F5F8;
			line-height: normal;
			box-sizing: border-box;
			font-size: 32rpx;

			.item {
				padding: 28rpx;

				&.active {
					background-color: #fff;
				}
			}
		}

		.main {
			background-color: #ffffff;
			padding-left: 37rpx;
			width: 0;
			flex-grow: 1;
			box-sizing: border-box;

			.title {
				line-height: normal;
				padding: 20rpx 0;

				.text-top {
					font-size: 27rpx;
					font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
					font-weight: normal;
					color: #131415;
				}

				.text-bottom {
					font-size: 22rpx;
					font-family: Source Han Sans CN-Light, Source Han Sans CN;
					font-weight: 300;
					color: #9094AB;
				}
			}

			.item {
				// padding-bottom: 16rpx;
				// border-bottom: #eee solid 1px;
			}

			.liet-content {
				padding: 47rpx 0;
				box-sizing: border-box;
			}

			.goods {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				// align-content: center;
				margin-bottom: 33rpx;

				.describe {
					font-size: 30rpx;
					font-family: PingFang-SC-Medium-, PingFang-SC-Medium;
					font-weight: normal;
					color: #FFFFFF;
					display: flex;
					justify-content: space-between;

					.arrow-right {
						margin-right: 28rpx;
					}
				}

				.money {
					display: flex;
					margin-top: 5rpx;
					font-size: 20rpx;
					font-family: Roboto-Regular-, Roboto-Regular;
					font-weight: normal;
					color: #FFFFFF;
				}
			}

			.add-content {
				width: 556rpx;
				height: 120rpx;
				text-align: center;
				line-height: 120rpx;
				border-radius: 8px;
				opacity: 1;
				border: 1px dashed rgba(0, 0, 0, 0.17);
				font-size: 26rpx;
				font-family: Source Han Sans CN-Regular, Source Han Sans CN;
				font-weight: 400;
				color: #9094AB;
			}

			.item-list {
				position: relative;
				width: 562rpx;
				height: 126rpx;
				border-radius: 20rpx;
				padding: 25rpx 28rpx 28rpx;
				box-sizing: border-box;
			}

			.item-list0 {
				// background: #2F3134;
				background: url('@/static/WalletList/3.png') no-repeat left top;
				background-size: 100% 100%;
			}

			.item-list1 {
				// background: #2F3134;
				background: url('@/static/WalletList/4.png') no-repeat left top;
				background-size: 100% 100%;
			}

			.item-list2 {
				// background: #2F3134;
				background: url('@/static/WalletList/2.png') no-repeat left top;
				background-size: 100% 100%;
			}

			.item-list3 {
				// background: #475A78;
				background: url('@/static/WalletList/6.png') no-repeat left top;
				background-size: 100% 100%;
			}

		}
	}

	// 修改uview的样式
	.action-sheet {
		.u-popup__content {
			background-color: #F5F7FA;
			padding: 32rpx 32rpx 52rpx 32rpx;
		}

		.u-action-sheet {
			padding: 10px;
		}

		.u-action-sheet__item-wrap,
		.u-action-sheet__cancel-text {
			background-color: #ffffff;
			border-radius: 30rpx;
		}

		.u-gap {
			background-color: #F5F7FA !important;
			height: 32rpx !important;
		}
	}
</style>

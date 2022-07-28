<template>
	<view class="content"></view>
</template>

<script>
	export default {
		onLoad() {
			this.checkGuide();
		},
		methods: {
			checkGuide() {
				uni.clearStorage();
				console.log("进入checkGuide判断页");
				// 思路： 检测是否有启动缓存，如果没有，就是第一次启动，第一次启动就去 启动介绍页面
				try {
					var launchFlag = uni.getStorageSync('launchFlag');
					console.log("launchFlag:" + launchFlag);
					if (launchFlag) { //判断本地缓存跳转首页
						uni.switchTab({
							url: '/pages/TabBar/Assets'
						});
					} else { //没有缓存进入启动页引导页
						console.log('去引导页');
						uni.redirectTo({
							url: '/pages/Guide/Guide'
						});
					}
				} catch (e) {
					console.log(e.message);
				}
			}
		}
	};
</script>

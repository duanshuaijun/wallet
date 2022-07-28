<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 此处为style标签内容的最前面 */
	@import "./static/icon/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";
	.cell-hover-class {
		background-color: rgb(235, 237, 238);
	}
</style>
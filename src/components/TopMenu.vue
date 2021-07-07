<template>
	<div class="top-menu">
		<el-image class="logo" :src="require('@/assets/img/home/logo.png')" fit="contain"></el-image>
		<div>你好世界 HelloWord</div>
	</div>
</template>

<script>
export default {
	name: 'TopMenu',
	data() {
		return {};
	}
};
</script>

<style scoped lang="scss">
.top-menu {
	position: sticky;
	height: 118px;
	display: flex;
	align-items: center;
	.logo{
		height: 50px;
	}
}
</style>

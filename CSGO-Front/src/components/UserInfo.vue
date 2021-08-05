<template>
	<div class="userInfo">
		<div class="avatar-box">
			<image class="avatar" src="" mode="" />
		</div>
		<div class="userDetai-box">
			<p class="userName">Nevermore</p>
			<div>
				<image class="icon" src="" mode="" />
				<image class="icon" src="" mode="" />
				<image class="icon" src="" mode="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.userInfo {
		display: flex;
		flex-direction: column;
		font-weight: bold;
		color: #fff;
	}
	.avatar-box {
		width: 100px;
		height: 100px;
	}
	.userDetai-box {
		display: flex;
		flex-direction: column;
	}
</style>

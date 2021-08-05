<template>
	<div class="userInfo-box">
		<div class="userInfo">
			<div class="avatar-box">
				<img class="avatar" src="../assets/icons/avatar.jpeg" alt="" />
			</div>
			<div class="userDetai-box">
				<p class="userName">Nevermore</p>
				<div>
					<img src="" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.userInfo-box {
		display: flex;
		flex-direction: column;
		font-weight: bold;
		color: #fff;
	}
	.userInfo {
		display: flex;
	}
	.avatar-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
	}
	.avatar {
		width: 80px;
		height: 80px;
	}
	.userDetai-box {
		display: flex;
		flex-direction: column;
	}
</style>

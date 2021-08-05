<template>
	<div class="userInfo-box">
		<div class="userInfo">
			<div class="avatar-box">
				<img class="avatar" src="../assets/icons/avatar.jpeg" alt="" />
			</div>
			<div class="userDetai-box">
				<p class="userName">Nevermore</p>
				<div>
					<img class="medal" src="../assets/icons/medal.png" alt="" />
					<img class="medal" src="../assets/icons/medal.png" alt="" />
					<img class="medal" src="../assets/icons/medal.png" alt="" />
				</div>
			</div>
		</div>
		<div class="rank">
			<div class="rank-box">
				<img class="rank-icon" src="../assets/icons/elite.png" alt="" />
			</div>
			<p class="rank-detail">至高无上-全球精英</p>
		</div>
	</div>
	<div class="community">
		<ul class="tab">
			<li>
				<img class="tab-img" src="../assets/icons/user.png" alt="" />
			</li>
			<li>
				<img class="tab-img" src="../assets/icons/user.png" alt="" />
			</li>
			<li>
				<img class="tab-img" src="../assets/icons/user.png" alt="" />
			</li>
			<li>
				<img class="tab-img" src="../assets/icons/user.png" alt="" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {};
</script>

<style scoped>
	.userInfo-box {
		padding-bottom: 20px;
		display: flex;
		flex-direction: column;
		font-weight: bold;
		color: #fff;
	}
	.userInfo {
		display: flex;
	}
	.userName {
		margin: 0;
		line-height: 50px;
		font-size: 20px;
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
	.medal {
		width: 40px;
		height: 40px;
	}
	.rank {
		display: flex;
	}
	.rank-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 100px;
	}
	.rank-icon {
		width: 80px;
	}
	.rank-detail {
		margin: 0;
		line-height: 50px;
		letter-spacing: 5px;
	}
	
	.tab {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.tab li {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.tab-img {
		width: 40px;
		height: 40px;
	}
</style>

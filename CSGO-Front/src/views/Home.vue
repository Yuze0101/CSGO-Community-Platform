<template>
	<div class="nav"></div>
	<div class="main">
		<div class="container">
			<span>CSGO_FRONT</span>
		</div>
	</div>
	<div class="user">
		<p>123</p>
		<p>123</p>
		<p>123</p>
		<p>123</p>
	</div>
</template>

<script setup></script>

<style scoped>
	.nav {
		position: fixed;
		height: 100vh;
		width: 100px;
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px 0 rgba(63, 68, 141, 0.37);
		backdrop-filter: blur(40px);
		-webkit-backdrop-filter: blur(40px);
	}
	.user::before,
	.nav::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
	.main {
		height: 100vh;
		padding: 0 100px;
		background-image: url(http://s2.328888.xyz/2021/08/05/00cc614272dc0.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.user {
		color: #fff;
		position: fixed;
		height: 100vh;
		width: 400px;
		top: 0px;
		right: -300px;
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px 0 rgba(63, 68, 141, 0.37);
		backdrop-filter: blur(40px);
		-webkit-backdrop-filter: blur(40px);
		transition: all 0.5s;
	}
	.view {
		background-color: red;
		position: absolute;
		top: 0;
	}
	.user:hover {
		transform: translateX(-300px);
	}
	.container {
		margin: 0 auto;
		height: 100%;
	}
</style>

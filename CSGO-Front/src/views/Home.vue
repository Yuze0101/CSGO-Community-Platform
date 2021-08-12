<template>
	<div class="nav">
		<Nav></Nav>
	</div>
	<div class="main">
		<div class="container">
			<!-- <MainPage></MainPage> -->
			<router-view v-slot="{ Component }">
				<transition name="slide">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</div>
	<div class="user">
		<UserInfo />
	</div>
</template>

<script setup>
	import UserInfo from "@/components/UserInfo.vue"
	import Nav from "@/components/Nav.vue"
</script>

<style lang="scss" scoped>
	@import "@/scss/global.scss";
	.nav {
		position: fixed;
		height: 100vh;
		width: 6.25rem;
		@include glass-blur;
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
		padding: 0 6.25rem;
		background-image: url(http://s2.328888.xyz/2021/08/05/00cc614272dc0.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
	}
	.user {
		color: #fff;
		position: fixed;
		height: 100vh;
		width: 25rem;
		top: 0rem;
		right: -18.75rem;
		@include glass-blur;
		transition: all 0.5s;
	}
	.user:hover {
		transform: translateX(-18.75rem);
	}
	.container {
		margin: 0 auto;
		height: 100%;
		overflow: hidden;
	}

	.slide-enter-active {
		transition: all 0.3s;
		transition-delay: 0.3s;
	}

	.slide-leave-active {
		transition: all 0.3s;
	}
	.slide-enter-from,
	.slide-leave-to {
		transform: translateX(-1600px);
	}
	.slide-enter-to,
	.slide-leave-from {
		transform: translateX(0);
	}
</style>

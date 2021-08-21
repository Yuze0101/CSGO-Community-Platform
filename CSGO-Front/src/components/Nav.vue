<template>
	<ul class="list">
		<li class="list-item" v-for="item in state.navList" :key="item.id">
			<img class="icon" src="../assets/icons/user.png" @click="routeTo(item.routeTo)" />
		</li>
	</ul>
</template>

<script setup>
	import { reactive } from "vue";
	import { useRouter } from "vue-router";
	const router = useRouter();
	const state = reactive({
		navList: [
			{ id: 0, routeTo: "main", src: "" },
			{ id: 1, routeTo: "play", src: "" },
			{ id: 2, routeTo: "login", src: "" },
			{ id: 3, routeTo: "play", src: "" },
		],
	});
	const routeTo = (routeStr = "") => {
		router.push({
			path: routeStr,
		});
	};
</script>

<style scoped>
	.list,
	.list-item {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list-item {
		width: 6.25rem;
		height: 6.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.list-item:first-child {
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	}
</style>

<template>
	<div class="userInfo-box">
		<div class="userInfo">
			<div class="avatar-box">
				<img class="avatar" src="../assets/icons/avatar.jpeg" alt="" />
			</div>
			<div class="userDetai-box">
				<p class="userName">干拉协会会长</p>
				<div>
					<img class="medal" src="@/assets/icons/medal.png" alt="" />
					<img class="medal" src="@/assets/icons/medal.png" alt="" />
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
			<li
				v-for="item in state.tabs"
				:key="item.id"
				:class="state.current == item.id ? 'active' : ''"
				@click="swiperChange(item.id)"
			>
				<img class="tab-img" src="@/assets/icons/user.png" />
			</li>
		</ul>
		<Swiper
			class="swiper"
			:slides-per-view="1"
			:space-between="50"
			@slideChange="onSlideChange"
			@swiper="onSwiper"
			:pagination="{ clickable: true }"
		>
			<SwiperSlide class="swiper-slide">
				<div class="friend-box" v-for="item in state.friends" :key="item.id">
					<img
						class="friend-avatar"
						:class="item.active ? 'active' : ''"
						src="../assets/icons/bingmoli.jpg"
					/>
					<div style="padding-left: 1.875rem">
						<p class="friend-name">{{ item.name }}</p>
						<p class="playing">{{ item.play }}</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 2</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 3</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 4</SwiperSlide>
		</Swiper>
	</div>
</template>

<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import "swiper/swiper.scss";
	import { reactive } from "vue";
	const state = reactive({
		current: 0,
		// FIXME 图片路径需要改为服务器的路径
		tabs: [
			{ id: 0, name: "demo", src: "@/assets/icons/user.png" },
			{ id: 1, name: "demo", src: "@/assets/icons/user.png" },
			{ id: 2, name: "demo", src: "@/assets/icons/user.png" },
			{ id: 3, name: "demo", src: "@/assets/icons/user.png" },
		],
		// FIXME 图片路径需要改为服务器的路径
		friends: [
			{ id: 0, name: "一只冰茉莉", active: true, play: "正在玩CS:GO社区服", avatar: "" },
			{ id: 1, name: "两只冰茉莉", active: true, play: "正在玩CS:GO休闲模式", avatar: "" },
			{ id: 2, name: "三只冰茉莉", active: false, play: "摸鱼中...", avatar: "" },
			{ id: 3, name: "四只冰茉莉", active: false, play: "犯困中...", avatar: "" },
		],
		mySwiper: {},
	});
	const onSwiper = (swiper) => {
		state.mySwiper = swiper;
	};
	const onSlideChange = (x) => {
		state.current = x.activeIndex;
	};
	const swiperChange = (num) => {
		state.mySwiper.slideTo(num);
	};
</script>
<style lang="scss" scoped>
	@import "../scss/global.scss";
	.userInfo-box {
		padding-bottom: 1.25rem;
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
		line-height: 3.125rem;
		font-size: 1.25rem;
	}
	.avatar-box {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 6.25rem;
		height: 6.25rem;
	}
	.avatar {
		width: 5rem;
		height: 5rem;
	}
	.userDetai-box {
		display: flex;
		flex-direction: column;
	}
	.medal {
		width: 2.5rem;
		height: 2.5rem;
	}
	.rank {
		display: flex;
	}
	.rank-box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3.125rem;
		width: 6.25rem;
	}
	.rank-icon {
		width: 5rem;
	}
	.rank-detail {
		margin: 0;
		line-height: 3.125rem;
		letter-spacing: 0.3125rem;
	}

	.tab {
		height: 3.75rem;
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
		position: relative;
		&.active::after {
			@include tab-bottom-border;
			width: 2.5rem;
		}
		&:hover::after {
			@include tab-change;
		}
		&::after {
			@include tab-bottom-border;
		}
	}
	.tab-img {
		width: 2.5rem;
		height: 2.5rem;
		&:hover {
			cursor: pointer;
		}
	}
	.community {
		height: 100%;
	}
	.swiper {
		height: 100%;
		padding: 1.25rem;
	}
	.friend-box {
		display: flex;
		align-items: center;
	}
	.friend-avatar {
		width: 3.75rem;
		height: 3.75rem;
		border-left: 5px solid #2f729d;
		&.active {
			border-left: 5px solid #47a04f;
		}
	}
	.friend-name {
		font-weight: bold;
	}
	.playing {
		color: #bac4cb;
	}
</style>

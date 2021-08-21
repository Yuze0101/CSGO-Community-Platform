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
			:allowTouchMove="false"
			class="swiper"
			:slides-per-view="1"
			:space-between="50"
			@slideChange="onSlideChange"
			@swiper="onSwiper"
			:pagination="{ clickable: true }"
		>
			<SwiperSlide class="swiper-slide" :class="state.goChat ? 'active' : ''">
				<div class="chat-box" :class="state.goChat ? 'active' : ''">
					<div class="chat-up">
						<div class="chat-info">
							<div><span>【好友用户名】</span><span>状态</span></div>
							<div @click="back()">
								<span>x</span>
							</div>
						</div>
						<div class="chat-buble-box">
							<div class="chat-from">
								<div class="buble">
									<div class="chat-avator">
										<img src="../assets/icons/bingmoli.jpg" alt="好友头像" />
									</div>
									<div>
										<p class="time">17:52</p>
										<p>天内天内容聊天</p>
									</div>
								</div>
							</div>
							<div class="chat-to">
								<div class="buble">
									<div>
										<p class="time">17:52</p>
										<p>聊天内容2</p>
									</div>
									<div class="chat-avator">
										<img src="../assets/icons/avatar.jpeg" alt="用户头像" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="chat-input-box">
						<textarea class="text-area" cols="30" rows="10" v-model="state.chatInput"></textarea>
						<button @click="sendMessage()">发送</button>
					</div>
				</div>
				<div class="friend-box" v-for="item in state.friends" :key="item.id">
					<div class="friend-info">
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
					<img @click="goChat(item.id)" class="chat" src="../assets/icons/CenteredDots.png" />
				</div>
			</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 2</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 3</SwiperSlide>
			<SwiperSlide class="swiper-slide">Slide 4</SwiperSlide>
		</Swiper>
	</div>
</template>

<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue"
	import "swiper/swiper.scss"
	import { reactive } from "vue"
	import $axios from "@/api"
	const wsTest = new WebSocket("ws://icarus-studio.top:5001/koa/ws?id=22")
	wsTest.onopen = (evt) => {
		console.log("Connect open...")
	}
	wsTest.onmessage = function (evt) {
		console.log("Received Message: " + evt.data)
		// ws.close()
	}
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
			{
				id: 0,
				name: "一只冰茉莉",
				active: true,
				play: "正在玩CS:GO社区服",
				avatar: "",
			},
			{
				id: 1,
				name: "两只冰茉莉",
				active: true,
				play: "正在玩CS:GO休闲模式",
				avatar: "",
			},
			{ id: 2, name: "三只冰茉莉", active: false, play: "摸鱼中...", avatar: "" },
			{ id: 3, name: "四只冰茉莉", active: false, play: "犯困中...", avatar: "" },
		],
		chat: [{}],
		mySwiper: {},
		goChat: false,
		currentID: 0,
		chatInput: "",
	})
	const onSwiper = (swiper) => {
		state.mySwiper = swiper
	}
	const onSlideChange = (x) => {
		state.current = x.activeIndex
	}
	const swiperChange = (num) => {
		state.mySwiper.slideTo(num)
	}
	const goChat = async (id) => {
		state.goChat = true
		state.currentID = id
	}
	const back = () => {
		state.goChat = false
		state.currentID = 0
	}
	const sendMessage = async () => {
		console.log(state.chatInput)
		let msg = JSON.stringify({
			uId: 44,
			data: state.chatInput,
		})
		wsTest.send(msg)
		state.chatInput = ""
	}
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
	.swiper-slide {
		// height: calc(100vh - 14.375rem);
		@include scrollbar;
		height: 100%;
		overflow: scroll;
		&.active {
			overflow: hidden;
			@include scrollbar;
		}
		// display: flex;
		// flex-direction: column;
	}
	.friend-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	.friend-info {
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
	.chat {
		width: 2rem;
	}
	.friend-name {
		font-weight: bold;
	}
	.playing {
		color: #bac4cb;
	}
	.chat-box {
		display: flex;
		flex-direction: column;
		height: 0rem;
		overflow: hidden;
		.chat-up {
			height: 90%;
			display: flex;
			flex-direction: column;
			.chat-info {
				height: 3rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.chat-buble-box {
				overflow: scroll;
				@include scrollbar;
				height: 100%;
				width: 100%;
				.chat-avator {
					width: 3rem;
					height: 3rem;
					padding: 0.4rem;
					flex-shrink: 0;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.buble {
					display: flex;
					align-items: flex-start;
					p {
						margin: 0;
						padding: 0;
					}
					.time {
						color: rgba(255, 255, 255, 0.5);
						font-size: 0.075rem;
					}
				}
				.chat-from {
					width: 100%;
					display: flex;
				}
				.chat-to {
					width: 100%;
					// height: 4rem;
					display: flex;
					flex-direction: row-reverse;
					text-align: right;
				}
			}
		}
		.chat-input-box {
			height: 10%;
			display: flex;
			.text-area {
				color: #fff;
				font-size: 1.2rem;
				line-height: 1rem;
				width: 85%;
				border-top-left-radius: 10px;
				border-bottom-left-radius: 10px;
				box-sizing: border-box;
				background-color: rgba(0, 0, 0, 0.2);
				border: none;
				padding: 5px;
				height: 100%;
				resize: none;
				&:focus {
					border: 3px solid rgba(255, 255, 255, 0.52);
					outline: none;
				}
			}
			button {
				width: 15%;
				height: 100%;
				padding: 0;
				background-color: rgba(255, 255, 255, 0.5);
				border-top-right-radius: 10px;
				border-bottom-right-radius: 10px;
				border: none;
				outline: none;
				box-sizing: border-box;
			}
		}
		animation: hideChat 0.5s;
		animation-fill-mode: forwards;
		&.active {
			animation: showChat 0.5s;
			animation-fill-mode: forwards;
		}
	}

	@keyframes showChat {
		0% {
			height: 0rem;
		}
		100% {
			height: calc(100vh - 16.65rem);
		}
	}
	@keyframes hideChat {
		0% {
			height: calc(100vh - 16.65rem);
		}
		100% {
			height: 0rem;
		}
	}
</style>

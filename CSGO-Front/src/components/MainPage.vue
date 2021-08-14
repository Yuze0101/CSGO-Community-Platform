<template>
	<div class="container">
		<div class="left">
			<div class="scroll-box">
				<div class="plate">
					<div class="title">
						<p class="news">新闻</p>
					</div>
					<div class="scroll">
						<div class="card">
							<img src="http://s2.328888.xyz/2021/08/06/114ca7c991bcf.jpg" class="card-img" />

							<div class="card-text">
								<div class="card-time">2020-01-01</div>
								<div class="card-title">A New Horizon</div>
								<div class="card-info">
									这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
								</div>
							</div>
						</div>
						<div class="card">
							<img src="http://s2.328888.xyz/2021/08/06/114ca7c991bcf.jpg" class="card-img" />

							<div class="card-text">
								<div class="card-time">2020-01-01</div>
								<div class="card-title">A New Horizon</div>
								<div class="card-info">
									这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
								</div>
							</div>
						</div>
						<div class="card">
							<img src="http://s2.328888.xyz/2021/08/06/114ca7c991bcf.jpg" class="card-img" />
							<div class="card-text">
								<div class="card-time">2020-01-01</div>
								<div class="card-title">A New Horizon</div>
								<div class="card-info">
									这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容这里是新闻内容
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="shop-box">
				<div class="box">
					<ul class="tab">
						<li
							v-for="item in state.tabs"
							:key="item.id"
							:class="state.current == item.id ? 'active' : ''"
							@click="swiperChange(item.id)"
						>
							<span>{{ item.name }}</span>
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
							<div class="swiper-item">
								<div class="img-box">
									<img src="../assets/icons/stiker.png" />
								</div>
								<div class="info">
									<p class="describe">这里是贴纸描述</p>
									<p class="price">￥100</p>
								</div>
							</div>
							<div class="swiper-item">
								<div class="img-box">
									<img src="../assets/icons/stiker.png" />
								</div>
								<div class="info">
									<p class="describe">这里是贴纸描述</p>
									<p class="price">￥100</p>
								</div>
							</div>
							<div class="swiper-item">
								<div class="img-box">
									<img src="../assets/icons/stiker.png" />
								</div>
								<div class="info">
									<p class="describe">这里是贴纸描述</p>
									<p class="price">￥100</p>
								</div>
							</div>
							<div class="swiper-item">
								<div class="img-box">
									<img src="../assets/icons/stiker.png" />
								</div>
								<div class="info">
									<p class="describe">这里是贴纸描述</p>
									<p class="price">￥100</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide class="swiper-slide">Slide 2</SwiperSlide>
						<SwiperSlide class="swiper-slide">Slide 3</SwiperSlide>
						<SwiperSlide class="swiper-slide">Slide 4</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
		<div class="right"></div>
	</div>
</template>
<script>
	import { Swiper, SwiperSlide } from "swiper/vue"
	import "swiper/swiper.scss"
	export default {
		components: { Swiper, SwiperSlide },
	}
</script>
<script setup>
	import { onMounted, reactive } from "vue"
	import $axios from "@/api"

	onMounted(async () => {
		// const res = await $axios({
		// 	url: "/api",
		// 	method: "get",
		// 	data: {
		// 		msg: "hello world",
		// 	},
		// })
		// console.log(res)
		// const wsTest = new WebSocket("ws://139.9.54.245:50000")
		// wsTest.onopen = (evt) => {
		// 	console.log("Connect open...")
		// 	let msg = JSON.stringify({
		// 		uId: 44,
		// 		data: "hello 007",
		// 	})
		// 	wsTest.send(msg)
		// }
		// wsTest.onmessage = function (evt) {
		// 	console.log("Received Message: " + evt.data)
		// 	// ws.close()
		// }
		// const ws = new WebSocket("ws://127.0.0.1:5001/koa/ws?id=22")
		// ws.onopen = (evt) => {
		// 	console.log("Connect open...")
		// 	let msg = JSON.stringify({
		// 		uId: 44,
		// 		data: "hello leihao",
		// 	})
		// 	ws.send(msg)
		// }
		// ws.onmessage = function (evt) {
		// 	console.log("Received Message: " + evt.data)
		// 	// ws.close()
		// }
	})

	const state = reactive({
		tabs: [
			{ id: 0, name: "贴纸" },
			{ id: 1, name: "商店" },
			{ id: 2, name: "钥匙" },
			{ id: 3, name: "市场" },
		],
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
</script>

<style lang="scss" scoped>
	@import "../scss/global.scss";
	.container {
		color: white;
		display: flex;
	}
	.left {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.scroll-box {
		padding: 1.25rem;
		width: 100%;
		height: 70%;
		box-sizing: border-box;
	}
	.plate {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: 0.625rem;
		height: 100%;
		@include glass-blur;
	}
	.title {
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		margin-bottom: 0.625rem;
	}
	.scroll {
		padding: 0.625rem;
		overflow: scroll;
		@include scrollbar;
	}
	.news {
		font-weight: bold;
		font-size: 1.125rem;
	}
	.card {
		box-shadow: 3px 3px 10px #00000052;
		box-sizing: border-box;
		margin: 0.625rem 0;
		width: 100%;
		height: 25rem;
		position: relative;
	}
	.card-img {
		width: 100%;
		height: 25rem;
	}
	.card-text {
		width: 100%;
		height: 9.375rem;
		padding: 1.25rem;
		box-sizing: border-box;
		@include glass-blur;
		position: absolute;
		bottom: 0;
		.card-time {
			font-size: 0.75rem;
		}
		.card-title {
			letter-spacing: 3px;
			line-height: 3.125rem;
			font-weight: bold;
			font-size: 1.25rem;
		}
		.card-info {
			letter-spacing: 1px;
		}
	}
	.shop-box {
		box-sizing: border-box;
		padding: 1.25rem;
		width: 100%;
		height: 30%;
	}
	.box {
		@include glass-blur;
		box-sizing: border-box;
		height: 100%;
		padding: 0.625rem;
	}
	.right {
		// background-color: rgba(180, 143, 188, 0.418);
		width: 50%;
		height: 100%;
	}

	.tab {
		height: 2.5rem;
		margin: 0;
		padding: 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: left;
	}
	.tab li {
		width: 5rem;
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
	.swiper {
		box-sizing: border-box;
		height: calc(100% - 40px);
	}
	.swiper-slide {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-around;
		.swiper-item {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			.img-box {
				width: 9.375rem;
				height: 9.375rem;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.info p {
				margin: 0;
				line-height: 1.25rem;
			}
			.info {
				flex-grow: 1;
				.describe {
					font-size: 0.75rem;
					letter-spacing: 1px;
				}
				.price {
					font-size: 1rem;
					font-weight: bold;
					color: greenyellow;
				}
			}
		}
	}
</style>

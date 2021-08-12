import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import MainPage from "@/components/MainPage.vue";
const PlayPage = () => import("@/components/PlayPage.vue");

const routes = [
	{
		path: "/home",
		name: "home",
		component: Home,
		children: [
			{
				path: "main",
				name: "mainpage",
				component: MainPage,
				meta: { index: 0 },
			},
			{
				path: "play",
				name: "playpage",
				component: PlayPage,
				meta: { index: 1 },
			},
		],
	},
];

export default createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
